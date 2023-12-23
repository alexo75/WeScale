import React from "react";
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Modal,
  Pressable,
  Alert,
} from "react-native";
import styles from "./style_sheet";


//when user clicks on a summoner card we should make a modal that contains
// pngs and links to the items that the summoner used in the game
// we should also have a button that allows you to go back to the previous screen

function SummonerInfo(props) {
  return (
    <View style={styles.centeredView}>
      <View style={styles.modalView}>
        <Text style={styles.modalText}>my test modal</Text>
        <Text style={styles.modalText}>
          Enter your summoner name to get started!
        </Text>
      </View>
    </View>
  );
}

export default SummonerInfo;
