import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import router from "./router";
import { StatusBar } from "expo-status-bar";
import * as Font from "expo-font";


export default function App() {
  const [fontsLoaded, setFontsLoaded] = React.useState(false);
  async function loadFonts() {
    await Font.loadAsync({
      Oswald: require("./assets/fonts/Oswald.ttf"),
    });
    setFontsLoaded(true);
  }
  React.useEffect(() => {
    loadFonts();
  }, []);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      {router()}
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

