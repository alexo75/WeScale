import React from "react";
import { StatusBar } from "expo-status-bar";
import { Text, View, ScrollView } from "react-native";
import axios from "axios";
import { RIOT_API_KEY } from "@env";
// import SummonerCard from "./summoner_card";
import styles from "./style_sheet";

import SearchForm from "./search_form";
import SearchResults from "./search_results";

console.log(RIOT_API_KEY, "RIOT_API_KEY");
console.log(process.env);

const API_BASE_URL = "http://ddragon.leagueoflegends.com/cdn/13.23.1";

export default function App() {
  const [summonerName, setSummonerName] = React.useState("");
  const [lastGameStats, setLastGameStats] = React.useState(null);
  const [championData, setChampionData] = React.useState(null);

  React.useEffect(() => {
    fetchChampionData().then((data) => {
      if (data) {
        setChampionData(data);
      }
    });
  }, []);

  const fetchSummonerData = async (name) => {
    const region = "na1";
    const url = `https://${region}.api.riotgames.com/lol/summoner/v4/summoners/by-name/${encodeURIComponent(
      name
    )}`;
    try {
      const response = await axios.get(url, {
        headers: { "X-Riot-Token": RIOT_API_KEY },
      });
      return response.data;
    } catch (error) {
      console.error("Error fetching summoner data:", error);
      return null;
    }
  };

  const fetchLastGameStatsForSummoner = async (puuid) => {
    const matchListUrl = `https://americas.api.riotgames.com/lol/match/v5/matches/by-puuid/${puuid}/ids`;
    try {
      const matchListResponse = await axios.get(matchListUrl, {
        headers: { "X-Riot-Token": RIOT_API_KEY },
      });
      if (matchListResponse.data.length === 0) return null;

      const lastMatchId = matchListResponse.data[0];
      const matchDetailsUrl = `https://americas.api.riotgames.com/lol/match/v5/matches/${lastMatchId}`;
      const matchDetailsResponse = await axios.get(matchDetailsUrl, {
        headers: { "X-Riot-Token": RIOT_API_KEY },
      });

      return matchDetailsResponse.data;
    } catch (error) {
      console.error("Error fetching last game stats:", error);
      return null;
    }
  };

  const fetchSummonerDataByPuuid = async (puuid) => {
    const region = "na1";
    const url = `https://${region}.api.riotgames.com/lol/summoner/v4/summoners/by-puuid/${encodeURIComponent(
      puuid
    )}`;
    try {
      const response = await axios.get(url, {
        headers: { "X-Riot-Token": RIOT_API_KEY },
      });
      return response.data;
    } catch (error) {
      console.error("Error fetching summoner data:", error);
      return null;
    }
  };

  const fetchChampionData = async () => {
    const url = `${API_BASE_URL}/data/en_US/champion.json`;
    try {
      const response = await axios.get(url);
      return response.data.data;
    } catch (error) {
      console.error("Error fetching champion data:", error);
      return null;
    }
  };

  const getChampionByKey = (championKey) => {
    if (!championData) return "Loading...";
    const champions = Object.values(championData);
    const champion = champions.find((champ) => champ.key == championKey);
    return champion;
  };

  const handleSummonerSearch = async (name) => {
    const summonerData = await fetchSummonerData(name);
    if (summonerData) {
      const gameStats = await fetchLastGameStatsForSummoner(summonerData.puuid);
      if (gameStats) {
        setLastGameStats(gameStats);
      }
    } else {
      console.log("Summoner not found");
      setLastGameStats(null);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>League of Legends Stats</Text>
      <ScrollView>
        <SearchForm
          value={summonerName}
          onChangeText={setSummonerName}
          onPress={handleSummonerSearch}
        />
        <SearchResults
          lastGameStats={lastGameStats}
          getChampionByKey={getChampionByKey}
        />
      </ScrollView>

      <StatusBar style="auto" />
    </View>
  );
}
