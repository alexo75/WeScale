import React, { useState } from "react";
import {
  View,
  TextInput,
  FlatList,
  Text,
  TouchableOpacity,
} from "react-native";
import PropTypes from "prop-types";
import styles from "./style_sheet";

function ItemSearch({ items }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredItems, setFilteredItems] = useState([]);

  const handleSearch = (query) => {
    setSearchQuery(query);
    if (query) {
      const filtered = items.filter((item) =>
        item.name.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredItems(filtered);
    } else {
      setFilteredItems([]);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search for an item"
        value={searchQuery}
        onChangeText={handleSearch}
      />
      <FlatList
        data={filteredItems}
        keyExtractor={(item) => item.id}
        renderItem={({ item: { name } }) => (
          <TouchableOpacity style={styles.itemContainer}>
            <Text style={styles.itemText}>{name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

ItemSearch.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ItemSearch;
