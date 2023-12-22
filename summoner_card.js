// import React from "react";
// import {text, View, Image, StyleSheet} from "react-native";
import API_BASE_URL from "./config.js";
import React from "react";
import { Text, View, Image } from "react-native";
import styles from "./style_sheet";
import summonerSpellsData from "./summoner_spells.js";

function SummonerCard(props) {
  // console.log(participant, "participant")

  const participant = props.participant;
  const getChampionByKey = props.getChampionByKey;
  const summonerSpell1 = summonerSpellsData[participant.summoner1Id];
  const summonerSpell2 = summonerSpellsData[participant.summoner2Id];

  return (
    <View style={styles.summonerCard}>
      <Image
        style={styles.champimage}
        source={{
          uri: `${API_BASE_URL}/img/champion/${
            getChampionByKey(participant.championId).image.full
          }`,
        }}
      />
      <Text>Participant: {participant.summonerName}</Text>
      <Text>Champion: {getChampionByKey(participant.championId).name}</Text>
      <Text>
        KDA: {participant.kills} / {participant.deaths} / {participant.assists}
      </Text>
      <Text>Gold Earned: {participant.goldEarned}</Text>
        <Text>Summoner Spells: </Text>
        <View style={styles.summonerSpellsSection}>
        <Image
            style={styles.summonerSpells}
            source={{
            uri: `${API_BASE_URL}/img/spell/${summonerSpell1.icon}`,
            }}
        />
            <Image
                style={styles.summonerSpells}
                source={{
                uri: `${API_BASE_URL}/img/spell/${summonerSpell2.icon}`,
                }}
            />
          </View>  
    </View>
  );
}
export default SummonerCard;
