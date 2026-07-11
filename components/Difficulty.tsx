import React from "react";
import { StyleSheet, Text } from "react-native";

type DifficultyProps = {
  score: number;
};

export default function Difficulty({ score }: DifficultyProps) {
  let level = "Easy";
  let color = "#4CAF50";

  if (score >= 20) {
    level = "Extreme";
    color = "#F44336";
  } else if (score >= 10) {
    level = "Hard";
    color = "#FF9800";
  } else if (score >= 5) {
    level = "Medium";
    color = "#FFC107";
  }

  return (
    <Text style={[styles.text, { color }]}>
      Level : {level}
    </Text>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 8,
  },
});