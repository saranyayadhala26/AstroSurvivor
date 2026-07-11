import React from "react";
import { StyleSheet, Text } from "react-native";

type ScoreBoardProps = {
  score: number;
};

export default function ScoreBoard({ score }: ScoreBoardProps) {
  return <Text style={styles.score}>Score : {score}</Text>;
}

const styles = StyleSheet.create({
  score: {
    fontSize: 28,
    color: "#FFD54F",
    fontWeight: "bold",
  },
});