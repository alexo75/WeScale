import React from "react";
import { View, Image, Text } from "react-native";
import styles from "./style_sheet";
import items from "./items.json";
import Tooltip from "./tooltip";
import { Pressable } from "react-native";

function ItemPreview({ itemId }) {
  const [tooltipVisible, setTooltipVisible] = useState(false);
  const [tooltipPosition, setTooltipPosition] = useState({});
  const item = items.data[itemId];
  
  const handlePress = (event) => {
    const { pageX, pageY } = event.nativeEvent;
    setTooltipPosition({ top: pageY, left: pageX });
    setTooltipVisible(!tooltipVisible);
  };

  if (!item) return null;

  return (
    <View>
      <Pressable onPress={handlePress} style={styles.itemCard}>
        <Image
          style={styles.itemImage}
          source={{ uri: `${API_BASE_URL}/img/item/${item.image.full}` }}
        />
      </Pressable>
      {tooltipVisible && (
        <Tooltip info={item.description} isVisible={tooltipVisible} position={tooltipPosition} />
      )}
    </View>
  );
}
      const handleOutsidePress = () => {
        setTooltipVisible(false);
      };

      return (
        <View>
          <Pressable onPress={handleOutsidePress} style={styles.container}>
            <Pressable onPress={handlePress} style={styles.itemCard}>
              <Image
                style={styles.itemImage}
                source={{ uri: `${API_BASE_URL}/img/item/${item.image.full}` }}
              />
            </Pressable>
          </Pressable>
          {tooltipVisible && (
            <Tooltip info={item.description} isVisible={tooltipVisible} position={tooltipPosition} />
          )}
        </View>
      );
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