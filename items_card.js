// importing necessary components and data
import React, { useState } from 'react';
import { View, Image, Text, Pressable } from 'react-native';
import { Tooltip } from 'react-native-elements';
import styles from './style_sheet';
import items from './items.json';

// component to preview individual item
function ItemPreview({ itemId }) {
  const [tooltipVisible, setTooltipVisible] = useState(false);
  const item = items.data[itemId];

  // return null if no item found
  if (!item) return null;

  return (
    <View style={styles.itemCard}>
      {/*  pressable to toggle tooltip */}
      <Pressable onPress={() => setTooltipVisible(!tooltipVisible)}>
        <Image
          style={styles.itemImage}
          source={{ uri: `${API_BASE_URL}/img/item/${item.image.full}` }}
        />
        {/*  displaying tooltip when visible */}
        {tooltipVisible && (
          <Tooltip
            popover={<Text>{item.description}</Text>}
            isVisible={tooltipVisible}
            onOpen={() => setTooltipVisible(false)}
            height={100}
            width={200}
          />
        )}
      </Pressable>
    </View>
  );
}

// component to display a collection of item previews
function ItemsCard({ itemIds, title }) {
  return (
    <View style={styles.itemsCardContainer}>
      {/*  mapping item ids to item previews */}
      {itemIds.map((itemId, index) => (
        <ItemPreview key={index} itemId={itemId} />
      ))}
    </View>
  );
}

export default ItemsCard;
