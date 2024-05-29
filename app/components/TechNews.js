import { View } from "react-native";
import HorizontalList from "./HorizontalList";

export default function TechNews({ data }) {
  return <HorizontalList title="Tech News" data={data} />;
}
