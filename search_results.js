import React from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import SummonerCard from "./summoner_card";
import styles from "./style_sheet";

function SearchResults(props) {
  const { lastGameStats, getChampionByKey } = props;

  if (!lastGameStats) return null;

  const enemyTeamParticipants = lastGameStats.info.participants.filter(
    (p) => p.teamId === 100
  );
  const myTeamParticipants = lastGameStats.info.participants.filter(
    (p) => p.teamId === 200
  );


  return (
    <View style={styles.teamsContainer}>
      <ScrollView style={styles.scroll}>
        <View style={styles.team}>
          <Text style={styles.teamTitle}>Your Team</Text>
          {myTeamParticipants.map((participant, index) => (
            <SummonerCard
              participant={participant}
              getChampionByKey={getChampionByKey}
              key={index}
            />
          ))}
        </View>

        <View style={styles.team}>
          <Text style={styles.teamTitle}>Enemy Team</Text>
          {enemyTeamParticipants.map((participant, index) => (
            <SummonerCard
              participant={participant}
              getChampionByKey={getChampionByKey}
              key={index}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
}
export default SearchResults;
