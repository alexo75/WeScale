import React from "react";
import { Text, View, Image } from "react-native";
import styles from "./style_sheet";
import { API_BASE_URL } from "./api";
import items from "./items.json";

function SummonerInfo(props) {
  const participant = props.participant;

  return (
    <View style={styles.centeredView}>
      <View style={styles.modalItemContainer}>
        <Text style={styles.modalText}>
          {" "}
          Selected : {participant.summonerName}{" "}
        </Text>
        <Text style={styles.modalText}>Runes: {participant.perks.perkIds}</Text>
        <Text style={styles.modalText}>
          Items: <ItemPreview itemId={participant.item0} />
          <ItemPreview itemId={participant.item1} />
          <ItemPreview itemId={participant.item2} />
          <ItemPreview itemId={participant.item3} />
          <ItemPreview itemId={participant.item4} />
          <ItemPreview itemId={participant.item5} />
          <ItemPreview itemId={participant.item6} />
        </Text>

        {/* <Text style = {styles.modalText}> Runes: {participant.} </Text> */}
      </View>
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
