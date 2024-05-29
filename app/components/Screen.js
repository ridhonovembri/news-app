import { View, StyleSheet, StatusBar } from 'react-native'
import SearchBar from './SearchBar'
import BlockCard from './BlockCard'
import FeaturedNews from './FeaturedNews'
import SmallCard from './SmallCard'

export default function Screen() {
  return (
    <View style={styles.container}>
      <SearchBar />      
      <FeaturedNews />
      <SmallCard />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    backgroundColor: '#f5f5f5'
  }
})

