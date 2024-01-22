// my goal is for a user to be able to select the 5 champions on their team
//(maybe from a drop down or one of those ios scroll lists?)
//tell if they "scale" (or if their win rates increase) over time

// the practical use of this is to see if you want the game to go long
// or if you want to try end it early (eg. snowball til opposingteam ff or something)

// I think Im going to attach win rate by time to each champion
// this means champion objects will also include a win rate by time
// for each period of time (maybe 5-10 minutes segments)
// I can then use the average of a team to calculate the win rate of that team

// in the big picture I want to beable to get win rates each day
// more than that feels like overkill
//if I can I'd like to get this data from op.gg/u.gg
// if not I might be able to get it from the riot api

// I think I'll need to make a new component for this
// and a new screen/page for this
// I'll need to make a new api call for this in some form.

//TODO: name of this file might be a misnomer
import React, { useState } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { LineChart } from "react-native-chart-kit";
import styles from "./style_sheet";
import championsData from "./champions.json";

export default function ChampionRank() {
  const [yourTeamSearchQuery, setYourTeamSearchQuery] = useState("");
  const [yourTeamChampions, setYourTeamChampions] = useState([]);
  const [enemyTeamSearchQuery, setEnemyTeamSearchQuery] = useState("");
  const [enemyTeamChampions, setEnemyTeamChampions] = useState([]);

  //to start unti I sort out the api call I'll just hard code some data
  const championWinRates = {
    name: "Karthus",
    winRates: [
      { time: 15, winRate: 45 },
      { time: 20, winRate: 47 },
      { time: 25, winRate: 50 },
      { time: 30, winRate: 53 },
      { time: 35, winRate: 55 },
      { time: 40, winRate: 57 },
    ],
    name: "Yasuo",
    winRates: [
      { time: 15, winRate: 53.6 },
      { time: 20, winRate: 50 },
      { time: 25, winRate: 50 },
      { time: 30, winRate: 48.8 },
      { time: 35, winRate: 46.9 },
      { time: 40, winRate: 67 },
    ],
  };
  const filterChampions = (query) =>
    Object.keys(championsData).filter((champion) =>
      champion.toLowerCase().includes(query.toLowerCase())
    );

  //champion select for eachh team
  const handleSelectChampion = (team, setTeam, champion, index) => {
    let updatedTeam = [...team];
    updatedTeam[index] = champion;
    setTeam(updatedTeam);
  };

  // list of champions based on search query
  const renderChampionList = (query, team, setTeam, index) => (
    <FlatList
      data={filterChampions(query)}
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() => handleSelectChampion(team, setTeam, item, index)}
        >
          <Text>{item}</Text>
        </TouchableOpacity>
      )}
      keyExtractor={(item) => item}
    />
  );

  // Render slots for team selection
  const renderTeamSlots = (team, setTeam, searchQuery, setSearchQuery) =>
    team.map((champion, index) => (
      <View key={index}>
        <Text>Champion Slot {index + 1}: {champion}</Text>
        <TextInput
          placeholder="Search Champion"
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
        {renderChampionList(searchQuery, team, setTeam, index)}
      </View>
    ));

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select Your Team Champions</Text>
      {renderTeamSlots(yourTeamChampions, setYourTeamChampions, yourTeamSearchQuery, setYourTeamSearchQuery)}

      <Text style={styles.title}>Select Enemy Team Champions</Text>
      {renderTeamSlots(enemyTeamChampions, setEnemyTeamChampions, enemyTeamSearchQuery, setEnemyTeamSearchQuery)}
    </View>
  );
}