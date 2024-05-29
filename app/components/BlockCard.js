import { View, Text, StyleSheet, Image } from "react-native";
import Title from "./Title";
import SubTitle from "./SubTitle";

export default function BlockCard({ style, imageStyle, item }) {
  const { thumbnail, title, desc } = item;

  return (
    <View style={[styles.container, style]}>
      <Image
        source={{ uri: thumbnail}}
        style={[styles.image, imageStyle]}
      />
      <View style={styles.cardContainer}>
        <Title>{ title }</Title>
        <SubTitle>{ desc }</SubTitle>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 350,
    borderRadius: 10,
    overflow: "hidden",
    borderWidth: 1,
    margin: 30,
    padding: 10,
    backgroundColor: "white",
  },
  cardContainer: {
    padding: 10,
    marginVertical: 5,
    height: 100,
  },
  image: {
    width: "100%",
    height: 200,
  },
});
