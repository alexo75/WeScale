import React from "react";
import { View, Image, Text } from "react-native";
import styles from "./style_sheet";
import runes from "./runes.json";

function RuneCard({ runeIds, title }) {
    return (
      <View style={styles.runeCardContainer}>
        <Text style={styles.runeTitle}>{title}</Text>
        {runeIds.map((runeId, index) => {
          const runeInfo = getRuneInfoById(runeId);
          return (
            <Image
              key={index}
              source={{ uri: `http://ddragon.leagueoflegends.com/cdn/img/${runeInfo.path}` }}
              style={styles.runeImage}
            />
          );
        })}
      </View>
    )};

function getRuneInfoById(runeId) {
  for (const style of runes) {
    for (const slot of style.slots) {
      for (const rune of slot.runes) {
        if (rune.id === runeId) {
          return {
            name: rune.name,
            path: rune.icon,
          };
        }
      }
    }
  }
  console.warn(` ${runeId} not found `);
  return null;
}

export default RuneCard;
