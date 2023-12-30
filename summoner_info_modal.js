import React from "react";
import { Text, View, Image } from "react-native";
import styles from "./style_sheet";
import { API_BASE_URL } from "./api";
import items from "./items.json";
import RuneCard from "./rune_card";
import { getRuneInfoById } from "./rune_card";

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
          <RuneCard runeIds={primaryRunes} title="Primary Runes" />
          <RuneCard runeIds={secondaryRunes} title="Secondary Runes" />
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
