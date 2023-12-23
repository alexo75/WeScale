import React from "react";
import { Text, View, Image, Pressable, Modal, SafeAreaView } from "react-native";
import styles from "./style_sheet";
import summonerSpellsData from "./summoner_spells.js";
import API_BASE_URL from "./config.js";
import SummonerInfo from "./summoner_info_modal.js";

function SummonerCard(props) {
  const [modalVisible, setModalVisible] = React.useState(false);

  const participant = props.participant;
  // console.log("Participant:", participant);
  const getChampionByName = props.getChampionByName;
  const championData = getChampionByName(participant.championName);

  // console.log("Champion Data: in summoner card", championData);
  // Additional checks

  if (!championData || !championData.image) {
    return <Text>Loading champion data...</Text>;
  }

  const summonerSpell1 = summonerSpellsData[participant.summoner1Id];
  const summonerSpell2 = summonerSpellsData[participant.summoner2Id];

  //when you click on the summoner card we should make a summoner_info_modal that contains items and runes
  // when a user presses anyuwhere in the card, we should open the modal
  return (
    <Pressable onPress={() => setModalVisible(true)}>
      <SafeAreaView style={{ flex: 1 }}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(false);
          }}
        >
          <SafeAreaView style={styles.modalSafeArea}>
            <Pressable
              style={styles.modalBackground}
              onPress={() => setModalVisible(false)}
            >
              <View style={styles.modalContainer}>
                <SummonerInfo participant={participant} />
              </View>
            </Pressable>
          </SafeAreaView>
        </Modal>
      </SafeAreaView>
      <View style={styles.summonerCard}>
            <View style={styles.centeredCardView}>

        <Image
          style={styles.champimage}
          source={{
            uri: `${API_BASE_URL}/img/champion/${championData.image.full}`,
          }}
        />
        <Text>Participant: {participant.summonerName}</Text>
        <Text>Champion: {championData.name}</Text>
        <Text>
          KDA: {participant.kills} / {participant.deaths} /{" "}
          {participant.assists}
        </Text>
        <Text>Gold Earned: {participant.goldEarned}</Text>
        <Text>Summoner Spells: </Text>
        <View style={styles.summonerSpellsSection}>
          <Image
            style={styles.summonerSpells}
            source={{ uri: `${API_BASE_URL}/img/spell/${summonerSpell1.icon}` }}
          />
          <Image
            style={styles.summonerSpells}
            source={{ uri: `${API_BASE_URL}/img/spell/${summonerSpell2.icon}` }}
          />
        </View>
      </View>
    </View>
    </Pressable>
  );
}

export default SummonerCard;
