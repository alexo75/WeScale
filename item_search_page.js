import React, { useState } from "react";
import { View, Text, FlatList, Dimensions, TextInput, Image } from "react-native";
import itemsData from "./items.json";
import styles from "./style_sheet";


const ItemSearchScreen = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const numColumns = 4;
  const screenWidth = Dimensions.get("window").width;
  const itemSize = screenWidth / numColumns;

  const allItems = Object.values(itemsData.data);

  const filteredItems = allItems.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const renderItem = ({ item }) => {
    return (
      <View style={[styles.item, { width: itemSize, height: itemSize }]}>
        <Image
          style={{ width: 50, height: 50 }} 
          source={{
            uri: `http://ddragon.leagueoflegends.com/cdn/14.1.1/img/item/${item.image.full}`,
          }}
        />
        <Text style={styles.itemText}>{item.name}</Text>
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
