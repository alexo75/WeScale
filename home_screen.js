import React, { useState } from "react";
import { Alert, View, Text, Modal, Pressable } from "react-native";
import styles from "./style_sheet";
import SearchForm from "./search_form";
import { fetchSummonerData, fetchLastGameStatsForSummoner } from "./api";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import GradientText from "./gradient_text";

function HomeScreen({ navigation }) {
  const [summonerName, setSummonerName] = React.useState("");
  const [lastGameStats, setLastGameStats] = React.useState(null);

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
    <LinearGradient
      colors={["#4c669f", "#722", "#d22"]}
      style={styles.gradient}
    >
      <SafeAreaView style={styles.safeViewContainer}>
      <GradientText style={styles.bigTitle}>WeScale</GradientText>
        <View style={styles.centeredView}>
          <View style={styles.container}>
            <GradientText style={styles.title}>Enter Summoner Name</GradientText>
            <SearchForm
              value={summonerName}
              onChangeText={setSummonerName}
              onPress={handleSummonerSearch}
            />
          </View>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
}

export default HomeScreen;
