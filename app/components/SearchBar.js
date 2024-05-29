import React from "react";
import { Text, View, StyleSheet, TextInput } from "react-native";

export default function SearchBar() {
  return (
    <View style={styles.container}>
      <TextInput style={styles.searchInput} placeholder="Search News.." />      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {    
    backgroundColor: "white",    
    justifyContent: 'center',
  },
  searchInput: {
    borderWidth: 1,
    fontSize: 16,    
    padding: 10,    
    borderRadius: 10,
    margin: 5
  },
});
