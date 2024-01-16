import React, { useState } from 'react';
import { View, Image, Text, Pressable } from 'react-native';
import { Tooltip } from 'react-native-elements'; // Import Tooltip from react-native-elements
import styles from './style_sheet';
import items from './items.json';

function ItemPreview({ itemId }) {
  const [tooltipVisible, setTooltipVisible] = useState(false);
  const item = items.data[itemId];

  if (!item) return null;

  return (
    <View style={styles.itemCard}>
      <Pressable onPress={() => setTooltipVisible(!tooltipVisible)}>
        <Image
          style={styles.itemImage}
          source={{ uri: `${API_BASE_URL}/img/item/${item.image.full}` }}
        />
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
