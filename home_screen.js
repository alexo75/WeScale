import React, { useState } from "react";
import {
  Alert,
  View,
  Text,
  Modal,
  Pressable,
  Button,
  TouchableOpacity,
} from "react-native";
import { Tooltip } from "react-native-elements";
import styles from "./style_sheet";
import SearchForm from "./search_form";
import { fetchSummonerData, fetchLastGameStatsForSummoner } from "./api";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import GradientText from "./gradient_text";
import { Ionicons } from "@expo/vector-icons";

//TODO: fix the gradient background for the search section (fix white box in the search section)
// add a way to select a region for the summoner search

function HomeScreen({ navigation }) {
  const [summonerName, setSummonerName] = React.useState("");
  const [lastGameStats, setLastGameStats] = React.useState(null);
  const [showTooltip, setShowTooltip] = useState(false);

  //TODO: include a pressable option to show all items from the game
  //this can use the information from the items.json file
  // display the items on a separate page or modal
  //tooltip for each item that displays the item description
  const handleItems = async () => {
    console.log("Items pressed - - take us to the item page");
  }


  
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

        <View style={{ position: "absolute", top: 10, right: 10 }}>
          <Tooltip
            popover={
              <Text style={styles.tooltipText}>
                To get started, enter a summoner/riot name into the search bar
                and press search
              </Text>
            }
            containerStyle={styles.tooltipContainer}
          >
            <Ionicons name="ios-information-circle" size={24} color="white" />
          </Tooltip>
        </View>

        <View style={styles.centeredView}>
          <View style={styles.container}>
            <GradientText style={styles.title}>
              Enter Summoner Name
            </GradientText>
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
