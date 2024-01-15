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
import RNPickerSelect from "react-native-picker-select";
import ItemSearchScreen from "./item_search_page";
import items from "./items.json";

// TODO: add a way to select a region for the summoner search
// I think I added this to another seciton but wanted to include it here to remind myself
// probably a simple select option that changes the region in the api call

//(later) TODO: eventually we have to move away from summoner names and instead us riot ids

function HomeScreen({ navigation }) {
  const [summonerName, setSummonerName] = React.useState("");
  const [lastGameStats, setLastGameStats] = React.useState(null);
  const [showTooltip, setShowTooltip] = useState(false);
  const [region, setRegion] = useState("na1");

  //TODO: include a pressable option to show all items from the game
  // this can use the information from the items.json file
  // display the items on a separate page or modal
  // tooltip for each item that displays the item description

  // const handleItems = async () => {
  //   console.log("Items pressed - - take us to the item page");
  // };

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

  return (
    <LinearGradient
      colors={["#4c661f", "#722", "#d22"]}
      style={styles.gradient}
    >
      <SafeAreaView style={styles.safeViewContainer}>
        <GradientText style={styles.bigTitle}>WeScale</GradientText>

        <RNPickerSelect
          onValueChange={(value) => setRegion(value)}
          items={[
            { label: "North America", value: "na" },
            { label: "Europe West", value: "euw" },
            { label: "Europe Nordic & East", value: "eun" },
            { label: "Korea", value: "kr" },
            { label: "Japan", value: "jp1" },
            { label: "Brazil", value: "br1" },
            { label: "Oceania", value: "oc1" },
            { label: "Turkey", value: "tr1" },
            { label: "Russia", value: "ru" },
            { label: "Latin America North", value: "lan" },
            { label: "Latin America South", value: "las" },
          ]}
          style={styles.inputIOS}
          placeholder={{ label: "Select a region", value: null }}
        />
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
            <TouchableOpacity
              onPress={() => navigation.navigate("ItemSearchScreen")}
              style={styles.itemSearchLink}
            >
              <Text>Search Items</Text>
            </TouchableOpacity>
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
