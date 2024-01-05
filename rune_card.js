import React from "react";
import { View, Image, Text } from "react-native";
import styles from "./style_sheet";
import runes from "./runes.json";

// so my goal of this is to make a card that displays the runes that the user has selected
// display the primary and secondary runes, in a neat manner
// display the rune name and the rune image
// contain all the runes in a card ( one card for primary and one for secondary )

function RuneCard({ runeIds, title }) {
  return (
    <View style={styles.runeCardContainer}>
      <Text style={styles.runeTitle}>{title}</Text>
      <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
        {runeIds.map((runeId, index) => {
          const runeInfo = getRuneInfoById(runeId);
          return (
            <View key={index} style={styles.runeRow}>
              <Image
                source={{ uri: `http://ddragon.leagueoflegends.com/cdn/img/${runeInfo.path}` }}
                style={styles.runeImage}
              />
              <Text style={styles.runeName}>{runeInfo.name}</Text>
            </View>
          );
        })}
      </View>
    </View>
  );
}
function getRuneInfoById(runeId) {
  for (const style of runes) {
    for (const slot of style.slots) {
      for (const rune of slot.runes) {
        if (rune.id === runeId) {
          return {
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
