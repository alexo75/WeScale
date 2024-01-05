import React from "react";
import { Text, View, Image } from "react-native";
import styles from "./style_sheet";
import { API_BASE_URL } from "./api";
import items from "./items.json";
import RuneCard from "./rune_card";

function ItemsCard({ participant }) {
  const itemIds = [
    participant.item0,
    participant.item1,
    participant.item2,
    participant.item3,
    participant.item4,
    participant.item5,
    participant.item6,
  ];

  return (
    <View style={styles.itemsCardContainer}>
      {itemIds.map((itemId, index) => (
        itemId ? <ItemPreview key={index} itemId={itemId} /> : null
      ))}
    </View>
  );
}

function ItemPreview({ itemId }) {
  const item = items.data[itemId];
  if (!item) return null;

  return (
    <View style={styles.itemCard}>
      <Image
        style={styles.itemImage}
        source={{ uri: `${API_BASE_URL}/img/item/${item.image.full}` }}
      />
    </View>
  );
}

function SummonerInfo(props) {
  const participant = props.participant;

  const primaryRunes = participant.perks.styles[0].selections.map(
    (selection) => selection.perk
  );
  const secondaryRunes = participant.perks.styles[1].selections.map(
    (selection) => selection.perk
  );

  return (
    <View style={styles.centeredView}>
      <View style={styles.modalItemContainer}>
        <Text style={styles.modalText}>Selected: {participant.summonerName}</Text>
        <Text style={styles.modalText}>Runes:</Text>
        <View style={styles.runeList}>
          <RuneCard runeIds={primaryRunes} title="Primary Runes" />
          <RuneCard runeIds={secondaryRunes} title="Secondary Runes" />
          <ItemsCard participant={participant} title="Items" />

        </View>
      </View>
    </View>
  );
}

export default SummonerInfo;
