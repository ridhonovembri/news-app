import { View, StyleSheet, StatusBar, Text, ScrollView } from "react-native";

export default function Screen({ children }) {
  return <ScrollView style={styles.container}>{children}</ScrollView>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    backgroundColor: "#f7f3f3",
    paddingHorizontal: 15,
  },
});
