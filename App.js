import { View, Text, StyleSheet, StatusBar } from "react-native";
import Screen from "./app/components/Screen";
import SearchBar from "./app/components/SearchBar";
import FeaturedNews from "./app/components/FeaturedNews";
import BreakingNews from "./app/components/BreakingNews";
import TechNews from "./app/components/TechNews";
import PoliticalNews from "./app/components/PoliticalNews";
import EntertainmentNews from "./app/components/EntertainmentNews";

import data from "./app/data/data";


export default function App() {
  const breakingNews = data.filter((item) => item.category === "breaking-news");
  const techNews = data.filter((item) => item.category === "tech");
  const politicalNews = data.filter((item) => item.category === "political");
  const entertainmentNews = data.filter((item) => item.category === "entertainment");

  return (
    <Screen>
      <SearchBar />
      <FeaturedNews
        item={{
          id: "20",
          title: "This is the title no twenty.",
          desc: "Desc is the short form of description and this format is the actual same as our real database.",
          thumbnail: "https://picsum.photos/id/20/200/300",
          category: "entertainment",
        }}
      />
      <BreakingNews data={breakingNews} />
      <PoliticalNews data={politicalNews} />
      <TechNews data={techNews} />
      <EntertainmentNews data={entertainmentNews} />
    </Screen>
  );
}
