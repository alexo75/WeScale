import React, { useState } from "react";
import { Alert, View, Text, Modal, Pressable } from "react-native";
import styles from "./style_sheet";
import SearchForm from "./search_form";
import { fetchSummonerData, fetchLastGameStatsForSummoner } from "./api";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import GradientText from "./gradient_text";
import { Tooltip } from "react-native-elements";
import { Ionicons } from "@expo/vector-icons";
import RNPickerSelect from "react-native-picker-select";
import { TouchableOpacity } from "react-native";

  

//TODO: fix region picker, I think its still broken...

  // main component for home screen
function HomeScreen({ navigation }) {
  const [summonerName, setSummonerName] = React.useState("");
  const [lastGameStats, setLastGameStats] = React.useState(null);
  const [showTooltip, setShowTooltip] = useState(false);
  const [region, setRegion] = useState("na1");

  // function to handle summoner name search
  const handleSummonerSearch = async (name) => {
    console.log("Summoner name:", name);
    const summonerData = await fetchSummonerData(name, region);
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

  // home screen layout
  return (
    <LinearGradient
      colors={["#4c661f", "#722", "#d22"]}
      style={styles.gradient}
    >
      <SafeAreaView style={styles.safeViewContainer}>
        <GradientText style={styles.bigTitle}>WeScale</GradientText>

        {/* region selection picker */}
        <RNPickerSelect
          onValueChange={(value) => setRegion(value)}
          items={[
            // list of regions
            { label: "North America", value: "na" },
            // more regions...
          ]}
          style={styles.inputIOS}
          placeholder={{ label: "Select a region", value: null }}
        />

        {/*  tooltip for information */}
        <View style={{ position: "absolute", top: 10, right: 10 }}>
          <Tooltip
            popover={<Text style={styles.tooltipText}>Enter summoner/riot name...</Text>}
            containerStyle={styles.tooltipContainer}
          >
            <Ionicons name="ios-information-circle" size={24} color="white" />
          </Tooltip>
        </View>

        {/*  main content area */}
        <View style={styles.centeredView}>
          <View style={styles.container}>
            {/* link to item search screen */}
            <TouchableOpacity
              onPress={() => navigation.navigate("ItemSearchScreen")}
              style={styles.itemSearchLink}
            >
              <Text>Search Items</Text>
            </TouchableOpacity>
              
            <TouchableOpacity
              onPress={() => navigation.navigate("ChampionRank")}
              style={styles.itemSearchLink}
            >
              <Text>Champion by Time Rank</Text>
            </TouchableOpacity>

              {/* link to champion search screen */}

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