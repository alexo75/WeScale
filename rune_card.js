import React, { useState } from "react";
import { View, Image, Text, Pressable, Dimensions } from "react-native";
import styles from "./style_sheet";
import runes from "./runes.json";
import Tooltip from "./tooltip";
// import tooltipPosition from "./tooltip_position";

function RuneCard({ runeIds, title }) {
  const {
    tooltipInfo,
    tooltipVisible,
    tooltipPosition,
    setTooltipVisible,
    handleTooltipPress,
  } = tooltipPosition();

  return (
    <View style={styles.runeCardContainer}>
      <Text style={styles.runeTitle}>{title}</Text>
      <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
        {runeIds.map((runeId, index) => {
          const runeInfo = getRuneInfoById(runeId);
          return (
            <Pressable
              key={index}
              onPress={(event) => handleTooltipPress(runeInfo, event)}
              style={styles.runeRow}
            >
              <Image
                source={{
                  uri: `http://ddragon.leagueoflegends.com/cdn/img/${runeInfo.path}`,
                }}
                style={styles.runeImage}
              />
            </Pressable>
          );
        })}
      </View>
      {tooltipVisible && (
        <Tooltip
          info={tooltipInfo}
          isVisible={tooltipVisible}
          position={tooltipPosition}
        />
      )}
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
