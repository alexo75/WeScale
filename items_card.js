import React from "react";
import { View, Image, Text } from "react-native";
import styles from "./style_sheet";
import items from "./items.json";

function ItemPreview({ itemId }) {
  const item = items.data[itemId];
  if (!item) {
    return <View style={styles.itemCardPlaceholder} />; // Placeholder for empty slots
  }

  return (
    <View style={styles.itemCard}>
      <Text style={styles.itemTitle}>{title}</Text>
      <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
        <Image
          style={styles.itemImage}
          source={{ uri: `${API_BASE_URL}/img/item/${item.image.full}` }}
        />
      </View>
    </View>
  );
}

// ItemsCard component that uses ItemPreview
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
