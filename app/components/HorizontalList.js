import { FlatList, View, StyleSheet } from "react-native";
import Title from "./Title";
import SmallCard from "./SmallCard";

export default function HorizontalList({ title, data }) {  
  return (
    <View>
      <Title>{title}</Title>
      <View style={styles.lineStyle}>
        <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => <SmallCard item={item} />}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  lineStyle: {
    marginBottom: 15,
  },
});
