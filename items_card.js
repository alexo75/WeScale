import React from "react";
import { View, Image, Text } from "react-native";
import styles from "./style_sheet";
import items from "./items.json";
import Tooltip from "./tooltip";
import { Pressable } from "react-native";

function ItemPreview({ itemId, style }) {
  const [tooltipVisible, setTooltipVisible] = React.useState(false);
  const [tooltipPosition, setTooltipPosition] = React.useState({});
  const item = items.data[itemId];

  const handlePress = (event) => {
    const { pageX, pageY } = event.nativeEvent;
    setTooltipPosition({ top: pageY, left: pageX });
    setTooltipVisible(!tooltipVisible);
  };

  if (!item) return null;

  return (
    <View>
      <Pressable onPress={handlePress} style={[styles.itemCard, style]}>
        <Image
          style={styles.itemImage}
          source={{ uri: `${API_BASE_URL}/img/item/${item.image.full}` }}
        />
      </Pressable>
      {tooltipVisible && (
        <Tooltip
          info={item.description}
          isVisible={tooltipVisible}
          position={tooltipPosition}
        />
      )}
    </View>
  );
}

function ItemsCard({ itemIds, title }) {
  return (
    <View style={styles.itemsCardContainer}>
      {itemIds.map((itemId, index) => (
        <ItemPreview key={index} itemId={itemId} />
      ))}
    </View>
  );
}

export default ItemsCard;
