import { View, Text, StyleSheet, Image } from "react-native";
import Title from "./Title";
import SubTitle from "./SubTitle";

export default function BlockCard( { style, imageStyle }) {
  return (
    <View style={[styles.container, style]}>
      <Image
        source={require("../../assets/adaptive-icon.png")}
        style={[styles.image, imageStyle]}
      />
      <View style={styles.cardContainer}>
        <Title>this is title</Title>
        <SubTitle>this sub title</SubTitle>
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
    backgroundColor: 'white'
  },
  cardContainer: {
    padding: 10,
    marginVertical: 5,
    height: 100
  },
  image: {
    width: "100%",
    height: 200,           
  },
});
