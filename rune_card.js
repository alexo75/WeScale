import React, { useState } from 'react';
import { View, Image, Text, Pressable } from 'react-native';
import styles from './style_sheet';
import runes from './runes.json';
import Tooltip from './Tooltip';

function RuneCard({ runeIds, title }) {
  const [tooltipInfo, setTooltipInfo] = useState(null);
  const [tooltipVisible, setTooltipVisible] = useState(false);
  const [tooltipPosition, setTooltipPosition] = useState({});

  const handlePress = (runeInfo, event) => {
    const { pageX, pageY } = event.nativeEvent;
    setTooltipPosition({ top: pageY, left: pageX }); // You might need to adjust this
    setTooltipInfo(runeInfo.longDesc); // Assuming longDesc holds the detailed info
    setTooltipVisible(true);
  };

  return (
    <View style={styles.runeCardContainer}>
      <Text style={styles.runeTitle}>{title}</Text>
      <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
        {runeIds.map((runeId, index) => {
          const runeInfo = getRuneInfoById(runeId);
          return (
            <Pressable
              key={index}
              onPress={(event) => handlePress(runeInfo, event)}
              style={styles.runeRow}
            >
              <Image
                source={{ uri: `http://ddragon.leagueoflegends.com/cdn/img/${runeInfo.path}` }}
                style={styles.runeImage}
              />
              <Text style={styles.runeName}>{runeInfo.name}</Text>
            </Pressable>
          );
        })}
      </View>
      {tooltipVisible && (
        <Tooltip info={tooltipInfo} isVisible={tooltipVisible} position={tooltipPosition} />
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
