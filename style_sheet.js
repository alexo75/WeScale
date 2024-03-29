import { StyleSheet, StatusBar } from "react-native";
import GradientText from "./gradient_text";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#722",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 20,
    paddingTop: StatusBar.currentHeight,
  },

  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 4,
    color: "black",
    paddingRight: 30,
  },

  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: "purple",
    borderRadius: 8,
    color: "black",
    paddingRight: 30,
  },

  safeViewContainer: {
    flex: 1,
    backgroundColor: "transparent",
  },

  bigTitle: {
    fontFamily: "Newake",
    fontSize: 48,
    fontWeight: "bold",
  },

  title: {
    fontFamily: "Newake",
    fontSize: 24,
    fontWeight: "bold",
    flexWrap: "wrap",
    textAlign: "center",
    color: "#e49"
  },

  gradient: {
    flex: 1,
    width: "100%",
  },

  safeViewContainer: {
    flex: 1,
    alignItems: "center",
  },

  //fonts
  oswald: {
    textAlign: "center",
    fontFamily: "Oswald",
    fontSize: 20,
    color: "#000",
  },

  newake: {
    textAlign: "center",
    fontFamily: "Newake",
    fontSize: 40,
    color: "#000",
  },
  // end fonts

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
    width: "100%",
    flexDirection: "row",
    justifyContent: "flex-start",
    flexWrap: "wrap",
  },

  itemsCardContainer: {
    backgroundColor: "#FFF",
    borderRadius: 6,
    padding: 10,
    marginVertical: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
  },

  itemCard: {
    width: 60,
    height: 60,
    backgroundColor: "#FFF",
    borderRadius: 6,
    padding: 10,
    margin: 5,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  itemImage: {
    width: 40, // Adjust as needed
    height: 40,
    resizeMode: "contain",
  },
  itemName: {
    marginTop: 5,
    fontSize: 12,
    textAlign: "center",
  },

  itemCardPlaceholder: {
    backgroundColor: "#1e90e0",
    borderRadius: 6,
    padding: 10,
    margin: 5,
    width: 60,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#ccc",
  },

  team: {
    width: "45%",
  },

  thumbcontainer: {
    padding: 20,
  },

  tooltipContainer: {
    width: 250,
    backgroundColor: "rgba(0, 0, 0, 0.7)",
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
    backgroundColor: "#fff",
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

  runeCardContainer: {
    justifyContent: "flex-start",
    alignItems: "flex-start",
    padding: 10,
    margin: 5,
    backgroundColor: "#55f",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },

  primaryRuneSection: {
    backgroundColor: "#e6e6fa",
    padding: 8,
    marginVertical: 4,
    borderRadius: 6,
  },
  secondaryRuneSection: {
    backgroundColor: "#fff0f5",
    padding: 8,
    marginVertical: 4,
    borderRadius: 6,
  },

  runeCard: {
    backgroundColor: "#FFF",
    padding: 10,
    borderRadius: 6,
  },
  runeTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  runeImage: {
    width: 30,
    height: 30,
    resizeMode: "contain",
    margin: 2,
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

  tooltip: {
    position: "absolute",
    backgroundColor: "#121f",
    padding: 10,
    width: 150,
    maxWidth: 200,
    maxHeight: 300,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#000",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 5,
    zIndex: 1,
    overflow: "hidden",
  },
  tooltipText: {
    color: "#fff",
    fontFamily: "Newake",
    flexWrap: "wrap",
  },
  item: {
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  itemText: {
    color: "#233",
    fontSize: 10,
    fontWeight: "bold",
    fontFamily: "Newake",
    padding: 5,
  },
  searchBar: {
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    margin: 10,
  },
});

export default styles;
