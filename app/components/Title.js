import { View, Text, StyleSheet } from "react-native";

export default function Title({ children, numberOfLines = 2, size = 16 }) {
  return (
    <Text
      numberOfLines={numberOfLines}
      style={{ fontSize: size, fontWeight: "bold" }}
    >
      {children}
    </Text>
  );
}


