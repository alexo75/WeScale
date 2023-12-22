import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const SideMenu = ({ isVisible, summonerName, items, runes }) => {
  if (!isVisible) return null;

  return (
    <View style={styles.container}>
      <Text>{summonerName}</Text>
      {/* Display items */}
      {items.map((itemId, index) => (
        <Image 
          key={index} 
          source={{ uri: `http://path-to-items/${itemId}.png` }} // Replace with the correct URL
          style={styles.itemImage} 
        />
      ))}
      {/* Display runes */}
      {/* Similar rendering for runes */}
      {runes.map((runeId, index) => (
        <Image 
          key={index} 
          source={{ uri: `http://path-to-runes/${runeId}.png` }} // Replace with the correct URL
          style={styles.runeImage} 
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    right: 0,
    top: 0,
    height: '100%',
    width: 200,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 10,
  },
  itemImage: {
    width: 50,
    height: 50,
    marginVertical: 5,
  },
  runeImage: {
    width: 50,
    height: 50,
    marginVertical: 5,
  },
});

export default SideMenu;
