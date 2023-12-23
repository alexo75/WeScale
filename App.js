import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import router from "./router";
import { StatusBar } from "expo-status-bar";

export default function App() {
  return (
    <NavigationContainer>
      {router()}
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
