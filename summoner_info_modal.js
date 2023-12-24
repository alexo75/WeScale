import React from "react";
import { Text, View, Image } from "react-native";
import styles from "./style_sheet";
import { API_BASE_URL } from "./api";
import items from "./items.json";
import runes from "./runes.json";

function SummonerInfo(props) {
  const participant = props.participant;
  // console.log("Participant", participant);

  // there are 4 runes in primary and 2 in secondary
  const primaryRunes = participant.perks.styles[0].selections.map(
    (selection) => selection.perk
  );
  const secondaryRunes = participant.perks.styles[1].selections.map(
    (selection) => selection.perk
  );

  return (
    <View style={styles.centeredView}>
      <View style={styles.modalItemContainer}>
        <Text style={styles.modalText}>
          Selected: {participant.summonerName}
        </Text>
        <Text style={styles.modalText}>Runes:</Text>
        <View style={styles.runeList}>
          {primaryRunes.map((runeId, index) => (
            <RunePreview key={index} runeId={runeId} />
          ))}

          {secondaryRunes.map((runeId, index) => (
            <RunePreview key={index} runeId={runeId} />
          ))}
        </View>
        <View style={styles.itemsRow}>
          <ItemPreview itemId={participant.item0} />
          <ItemPreview itemId={participant.item1} />
          <ItemPreview itemId={participant.item2} />
        </View>
        <View style={[styles.itemsRow, { marginTop: 10 }]}>
          {/* Add margin to the top of the second row */}
          <ItemPreview itemId={participant.item3} />
          <ItemPreview itemId={participant.item4} />
          <ItemPreview itemId={participant.item5} />
          <View style={styles.seventhItem}>
            
            {/* Style for the 7th item */}
            <ItemPreview itemId={participant.item6} />
          </View>
        </View>
      </View>
    </View>
  );
}


function RunePreview({ runeId }) {
  const runeInfo = getRuneInfoById(runeId);
  if (!runeInfo) {
    return <Text style={styles.modalText}>Rune not found</Text>;
  }
  console.log("runeInfo", runeInfo);
  return (
    <View>
      <Image
        style={styles.itemImage}
        source={{
          uri: `http://ddragon.leagueoflegends.com/cdn/img/${runeInfo.path}`,
        }}
      />
    </View>
  );
}

function getRuneInfoById(runeId) {
  // console.log("runeId", runeId);
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

function ItemPreview(props) {
  const itemId = props.itemId;
  const item = items.data[itemId];
  return (
    <View>
      {item && (
        <Image
          style={styles.itemImage}
          source={{
            uri: `${API_BASE_URL}/img/item/${item.image.full}`,
          }}
        />
      )}
    </View>
  );
}



export default SummonerInfo;
