import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput, Button, Image, ScrollView } from "react-native";
import axios from "axios";
import {RIOT_API_KEY} from "@env";

// const RIOT_API_KEY = config.RIOT_API_KEY;
// const RIOT_API_KEY = process.env.RIOT_API_KEY;
console.log(RIOT_API_KEY, "RIOT_API_KEY");
console.log(process.env)

// const 
const API_BASE_URL = "http://ddragon.leagueoflegends.com/cdn/13.23.1"

export default function App() {
  const [summonerName, setSummonerName] = React.useState("");
  const [summonerLevel, setSummonerLevel] = React.useState(null);
  const [lastGameStats, setLastGameStats] = React.useState(null);
  const [summonerNames, setSummonerNames] = React.useState([]);
  const [championData, setChampionData] = React.useState(null);
  const [playerTeamId, setPlayerTeamId] = React.useState(null);

  React.useEffect(() => {
    fetchChampionData().then((data) => {
      if (data) {
        console.log("setting champ data");
        setChampionData(data);
      }
    });
  }, []);

  const getSummonerData = async (name) => {
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

  const getLastGameStats = async (puuid) => {
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

  const getSummonerDataByPuuid = async (puuid) => {
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

  const mapPuuidsToSummonerNames = async (puuids) => {
    const summonerNames = await Promise.all(
      puuids.map(async (puuid) => {
        const summonerData = await getSummonerDataByPuuid(puuid);
        return summonerData ? summonerData.name : null;
      })
    );
    return summonerNames;
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
    console.log(championKey, "inside getChampionByKey");
    if (!championData) return "Loading...";
    const champions = Object.values(championData);
    const champion = champions.find((champ) => champ.key == championKey);
    return champion;
  };

  const handleSummonerSearch = async () => {
    const summonerData = await getSummonerData(summonerName);
    if (summonerData) {
      setSummonerLevel(summonerData.summonerLevel);
      const gameStats = await getLastGameStats(summonerData.puuid);
      console.log(gameStats, "gameStats");
      console.log(gameStats.info.teams, "gameStats.info.teams");
      if (gameStats) {
        setLastGameStats(gameStats);
        const names = await mapPuuidsToSummonerNames(
          gameStats.metadata.participants
        );
        setSummonerNames(names);
        const playerParticipant = gameStats.info.participants.find(
          (p) => p.summonerName.toLowerCase() === summonerName.toLowerCase()
        );
        if (playerParticipant) {
          setPlayerTeamId(playerParticipant.teamId);
        }
      }
    } else {
      console.log("Summoner not found");
      setSummonerLevel(null);
      setLastGameStats(null);
      setSummonerNames([]);
    }
  };

  const renderTeam = (teamId) =>
    lastGameStats.info.participants
      .filter((p) => p.teamId === teamId)
      .map((participant, index) => {
        // console.log(participant, "participant")
        return (
          <View key={index} style={styles.summonerCard}>
            <Image
              style={styles.champimage}
              source={{
                uri: `${API_BASE_URL}/img/champion/${
                  getChampionByKey(participant.championId).image.full
                }`,
              }}
            />
            <Text>Participant: {participant.summonerName}</Text>
            <Text>
              Champion: {getChampionByKey(participant.championId).name}
            </Text>
            <Text>
              KDA: {participant.kills} / {participant.deaths} /{" "}
              {participant.assists}
            </Text>
            <Text>Gold Earned: {participant.goldEarned}</Text>
          </View>
        );
      });

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={setSummonerName}
        value={summonerName}
        placeholder="Enter Summoner Name"
      />
      <Button title="Get Summoner Info" onPress={handleSummonerSearch} />
      {summonerLevel !== null && <Text>Summoner Level: {summonerLevel}</Text>}
      {lastGameStats && (
        <View style={styles.teamsContainer}>
          <View style={styles.team}>
            <Text style={styles.teamTitle}>Your Team</Text>
            {renderTeam(100)}
          </View>
          <View style={styles.team}>
            <Text style={styles.teamTitle}>Enemy Team</Text>
            {renderTeam(200)}
          </View>
        </View>
      )}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: StatusBar.currentHeight,
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  teamsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  },
  team: {
    width: "45%",
  },
  thumbcontainer: {
    padding: 20,
  },

  thumbnail: {
    width: 50,
    height: 50,
    resizeMode: "contain",
  },

  champimage: {
    width: 50,
    height: 50,
    resizeMode: "contain",
  },

  summonerCard:{
    padding: 20,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#000",
    backgroundColor: "#eee",
    marginBottom: 10,
  },


  teamTitle: {
    fontWeight: "bold",
    textAlign: "center",
  },
  input: {
    width: "100%",
    padding: 10,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "gray",
  },
});
