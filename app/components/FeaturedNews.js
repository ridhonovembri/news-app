import { View, StyleSheet } from "react-native";
import BlockCard from "./BlockCard";

export default function FeaturedNews({ item }) {
  return (
    <BlockCard style={{ margin: 5 }} imageStyle={styles.image} item={item}  />
  );
}

const styles = StyleSheet.create({
  image: {
    height: 250,
  },
});
