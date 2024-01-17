// importing components
import React, { useState } from "react";
import { View, Text, FlatList, Dimensions, TextInput, Image } from "react-native";
import itemsData from "./items.json";
import styles from "./style_sheet";

// main component
const ItemSearchScreen = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const numColumns = 4;
  const screenWidth = Dimensions.get("window").width;
  const itemSize = screenWidth / numColumns;

  // filtering items based on search query
  const filteredItems = Object.values(itemsData.data).filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // render function for each item
  const renderItem = ({ item }) => {
    const [tooltipVisible, setTooltipVisible] = useState(false);

    return (
      <View style={[styles.item, { width: itemSize, height: itemSize }]}>
        <Pressable onPress={() => setTooltipVisible(!tooltipVisible)}>
          <Image
            style={{ width: 50, height: 50 }}
            source={{ uri: `http://ddragon.leagueoflegends.com/cdn/14.1.1/img/item/${item.image.full}` }}
          />
          <Text style={styles.itemText}>{item.name}</Text>
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
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Search for an item"
        value={searchQuery}
        onChangeText={setSearchQuery}
        style={styles.searchBar}
      />
      <FlatList
        data={filteredItems}
        renderItem={renderItem}
        keyExtractor={(item) => item.image.full}
        numColumns={numColumns}
      />
    </View>
  );
};

export default ItemSearchScreen;
