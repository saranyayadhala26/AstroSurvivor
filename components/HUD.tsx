import React from "react";
import { StyleSheet, Text, View } from "react-native";

type HUDProps = {
  score: number;
  highScore: number;
  lives: number;
  level: string;
  shieldActive: boolean;
};

export default function HUD({
  score,
  highScore,
  lives,
  level,
  shieldActive,
}: HUDProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.highScore}>
        🏆 {highScore}
      </Text>

      <Text style={styles.score}>
        ⭐ {score}
      </Text>

      <View style={styles.livesContainer}>
  {[1, 2, 3].map((heart) => (
    <Text key={heart} style={styles.heart}>
      {heart <= lives ? "❤️" : "🤍"}
    </Text>
  ))}
</View>

      <Text style={styles.level}>
        {level}
      </Text>

      {shieldActive && (
        <Text style={styles.shield}>
          🛡 ON
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginTop: 10,
  },

  highScore: {
    color: "#FFD54F",
    fontSize: 22,
    fontWeight: "bold",
  },

  score: {
    color: "white",
    fontSize: 18,
    marginTop: 5,
  },

 livesContainer: {
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  marginTop: 8,
},

heart: {
  fontSize: 30,
  marginHorizontal: 2,
},

  level: {
    color: "#00E676",
    fontSize: 18,
    marginTop: 5,
    fontWeight: "bold",
  },

  shield: {
    color: "#4FC3F7",
    marginTop: 5,
    fontWeight: "bold",
  },
});