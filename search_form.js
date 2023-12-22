import React from "react";
import styles from "./style_sheet";
import { View, TextInput, Button} from "react-native";

function SearchForm({ value, onChangeText, onPress }) {
  return (
    <View>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={value}
        placeholder="Enter Summoner Name"
      />
      <Button title="Get Summoner Info" onPress={() => onPress(value)} />
    </View>
  );
}
export default SearchForm;