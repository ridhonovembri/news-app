import { View, Text, StyleSheet } from "react-native";

export default function SubTitle({ children, numberOfLines = 2, size = 16 }) {
  return (
    <Text numberOfLines={numberOfLines} style={{ fontSize: size }}>
      {children}
    </Text>
  );
}


