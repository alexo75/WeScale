import React, { useState } from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import styles from "./style_sheet";
import runes from "./runes.json";
import { Tooltip } from "react-native-elements";

function RuneCard({ runeIds, title }) {
  // const [tooltipVisible, setTooltipVisible] = useState(false);
  // const [selectedRune, setSelectedRune] = useState("");

  // const handleRunePress = (runeDesc) => {
  //   setSelectedRune(runeDesc);
  //   setTooltipVisible(!tooltipVisible);
  // };
  return (
    <View style={styles.runeCardContainer}>
      <Text style={styles.runeTitle}>{title}</Text>
      <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
        {runeIds.map((runeId, index) => {
          const runeInfo = getRuneInfoById(runeId);
          return (
            <Tooltip
              key={index}
              popover={<Text>Test Tooltip</Text>} // Static test content
              height={100}
              width={200}
            >
              <TouchableOpacity style={styles.runeRow}>
                <Image
                  source={{
                    uri: `http://ddragon.leagueoflegends.com/cdn/img/${runeInfo.path}`,
                  }}
                  style={styles.runeImage}
                />
              </TouchableOpacity>
            </Tooltip>
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
            name: rune.name,
            path: rune.icon,
            longDesc: rune.longDesc,
          };
        }
      }
    }
  }
  console.warn(`Rune ID ${runeId} not found`);
  return null;
}

export default RuneCard;
