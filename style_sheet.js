import { StyleSheet, StatusBar } from "react-native";

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: StatusBar.currentHeight,
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start", // Adjust as needed
  },

  teamsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
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
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#000",
    backgroundColor: "#eee",
    marginBottom: 10,
  },

  summonerSpells: {
    width: 40,
    height: 40,
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
    width: "100%",
    padding: 10,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "red",
  },
});

export default styles;
