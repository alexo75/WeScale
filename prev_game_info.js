import React, { useEffect } from "react";
import { View, ScrollView, Text } from "react-native";
import styles from "./style_sheet";
import SearchResults from "./search_results";
import SearchForm from "./search_form";
import axios from "axios";
import { RIOT_API_KEY } from "@env";
import {
  fetchChampionData,
  fetchSummonerData,
  API_BASE_URL,
  fetchLastGameStatsForSummoner,
} from "./api";

function PrevGameInfo({ route, navigation }) {
  const { summonerName } = route.params;
  const [lastGameStats, setLastGameStats] = React.useState(null);
  const [championData, setChampionData] = React.useState(null);
  const [newSearchName, setNewSearchName] = React.useState("");

  useEffect(() => {
    const loadData = async () => {
      // Fetch and set champion data
      const champions = await fetchChampionData();
      if (champions) {
        setChampionData(champions);

        // After champion data is set, fetch summoner data
        const summonerData = await fetchSummonerData(summonerName);
        if (summonerData) {
          const gameStats = await fetchLastGameStatsForSummoner(
            summonerData.puuid
          );
          if (gameStats) {
            setLastGameStats(gameStats);
          }
        }
      }
    };

    loadData();
  }, [summonerName]);

  // get champion by key
const getChampionByName = (championName) => {
    if (!championData) {
        console.log("Champion data not yet loaded");
        return null;
    }

    // console.log("Champion data:", championData);

    if (!championData[championName]) {
        return null;
    }

    return championData[championName];
};

  // allow us to handle new summoner search in the same way as the initial search
  const handleNewSummonerSearch = async (name) => {
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
    navigation.navigate("GameInfo", { summonerName: name });
  };

  // load data
  useEffect(() => {
    fetchChampionData();

    fetchSummonerData(summonerName).then((summonerData) => {
      if (summonerData) {
        fetchLastGameStatsForSummoner(summonerData.puuid).then((gameStats) => {
          if (gameStats) setLastGameStats(gameStats);
        });
      }
    });
  }, [summonerName]);


  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>Game Information</Text>
        <SearchForm
          value={newSearchName}
          onChangeText={setNewSearchName}
          onPress={handleNewSummonerSearch}
        />
        <SearchResults
          lastGameStats={lastGameStats}
          getChampionByName={getChampionByName}
        />
      </ScrollView>
    </View>
  );
}

export default PrevGameInfo;
