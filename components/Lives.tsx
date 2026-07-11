import React from "react";
import { StyleSheet, Text, View } from "react-native";

type LivesProps = {
  lives: number;
};

export default function Lives({ lives }: LivesProps) {
  return (
    <View style={styles.container}>
      {[1, 2, 3].map((heart) => (
        <Text key={heart} style={styles.heart}>
          {heart <= lives ? "❤️" : "🤍"}
        </Text>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 8,
    marginTop: 10,
  },

  heart: {
    fontSize: 28,
  },
});