import React from "react";
import { View, Image, Text } from "react-native";

const Tooltip = ({ info, isVisible, position }) => {
  if (!isVisible) return null;

  return (
    <View style={[styles.tooltip, position]}>
      <Text style={styles.tooltipText}>{info}</Text>
    </View>
  );
};

export default Tooltip;