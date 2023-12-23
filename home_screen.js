import React, { useState } from "react";
import { Alert, View, Text, Modal, Pressable } from "react-native";
import styles from "./style_sheet";
import SearchForm from "./search_form";
import { fetchSummonerData, fetchLastGameStatsForSummoner } from "./api";
import { SafeAreaView } from "react-native-safe-area-context";

function HomeScreen({ navigation }) {
  const [summonerName, setSummonerName] = React.useState("");
  const [lastGameStats, setLastGameStats] = React.useState(null);
  const [championData, setChampionData] = React.useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const handleSummonerSearch = async (name) => {
    console.log("Summoner name:", name);
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

  return (
    <SafeAreaView style={styles.safeViewContainer}>

    <View style={styles.centeredView}>
      <View style={styles.container}>
        <Text style={styles.title}>Enter Summoner Name</Text>
        <SearchForm
          value={summonerName}
          onChangeText={setSummonerName}
          onPress={handleSummonerSearch}
        />
      </View>
    </View>
    </SafeAreaView>

  );
}

export default HomeScreen;
