// import React from "react";
// import {text, View, Image, StyleSheet} from "react-native";
import API_BASE_URL from "./config.js";
import React from 'react';
import { Text, View, Image } from 'react-native';
import styles from './style_sheet';

function SummonerCard(props) {
        // console.log(participant, "participant")

        const participant = props.participant;
        const getChampionByKey = props.getChampionByKey;

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
      };
export default SummonerCard;