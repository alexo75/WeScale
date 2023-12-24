import { StyleSheet, StatusBar } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 20,
    paddingTop: StatusBar.currentHeight,
  },

  teamsContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
  },

  itemImage: {
    width: 50,
    height: 50,
    resizeMode: "contain",
  },

  modalItemContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    flexWrap: "wrap",
  },

  runeList: {
    width: "30%",
    flexDirection: "column",
    justifyContent: "flex-start",
  },

  itemsRow: {
    width: "80%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginBottom: 10,
  },
  
  seventhItem: {
    position: 'absolute',
    right: 10,
    top: 10,
  },

  singleItemRow: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
  },

  team: {
    width: "45%",
  },

  thumbcontainer: {
    padding: 20,
  },

  summonerSpellsSection: {
    flexDirection: "row",
    justifyContent: "space-around",
  },

  thumbnail: {
    width: 50,
    height: 50,
    resizeMode: "contain",
  },

  champimage: {
    width: 50,
    height: 50,
    resizeMode: "contain",
  },

  summonerCard: {
    padding: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#000",
    backgroundColor: "#eee",
    marginBottom: 20,
  },

  summonerSpells: {
    width: 30,
    height: 30,
    resizeMode: "contain",
  },

  teamTitle: {
    fontWeight: "bold",
    textAlign: "center",
  },

  scroll: {
    width: "100%",
  },

  input: {
    height: 40,
    width: 200,
    padding: 10,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "blue",
  },

  safeViewContainer: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },

  // modal stuff
  modalSafeArea: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  modalContainer: {
    width: "90%",
    height: "75%",
    backgroundColor: "orange",
    padding: 20,
    borderRadius: 10,
    justifyContent: "center",
  },

  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },

  centeredCardView: {
    justifyContent: "center",
    alignItems: "center",
  },

  modalView: {
    margin: 20,
    backgroundColor: "cyan",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    fontWeight: "bold",
  },
});

export default styles;
