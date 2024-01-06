import React from "react";
import { View, Image, Text } from "react-native";
import styles from "./style_sheet";
import RenderHtml from "react-native-render-html";

const Tooltip = ({ info, isVisible, position }) => {
  const source = {
    html: info,
  };

  if (!isVisible) return null;

  return (
    <View style={[styles.tooltip, position]}>
      <RenderHtml
        contentWidth={200}
        source={source}
        tagsStyles={{
          p: { fontFamily: "Newake", color: "white" },
        }}
        ignoredDomTags={[
          "lol-uikit-tooltipped-keyword",
          "scaleap",
          "scalead",
          "rules",
        ]}
      />
    </View>
  );
};
export default Tooltip;
