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
  const levelColor =
    level === "Easy"
      ? "#00E676"
      : level === "Medium"
      ? "#FFD54F"
      : level === "Hard"
      ? "#FF9800"
      : "#FF5252";

  return (
    <View style={styles.container}>
      {/* First Row */}
      <View style={styles.row}>
        <Text style={styles.highScore}>
          🏆 High: {highScore}
        </Text>

        <Text style={styles.score}>
          ⭐ {score}
        </Text>
      </View>

      {/* Second Row */}
      <View style={styles.row}>
        <View style={styles.livesContainer}>
          {[1, 2, 3].map((heart) => (
            <Text key={heart} style={styles.heart}>
              {heart <= lives ? "❤️" : "🤍"}
            </Text>
          ))}
        </View>

        <Text style={[styles.level, { color: levelColor }]}>
  {level === "Easy" && "🟢 EASY"}
  {level === "Medium" && "🟡 MEDIUM"}
  {level === "Hard" && "🟠 HARD"}
  {level === "Extreme" && "🔴 EXTREME"}
</Text>
      </View>

      {/* Third Row */}
      {shieldActive && (
        <Text style={styles.shield}>
          🛡 Shield Active
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "92%",
    backgroundColor: "rgba(10,20,50,0.85)",
    borderRadius: 18,
    paddingVertical: 12,
    paddingHorizontal: 18,
    marginTop: 10,
    borderWidth: 2,
    borderColor: "#2979FF",
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    marginVertical: 6,
  },

  highScore: {
    color: "#FFD54F",
    fontSize: 22,
    fontWeight: "bold",
  },

  score: {
    color: "#FFFFFF",
    fontSize: 22,
    fontWeight: "bold",
  },

  livesContainer: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },

  heart: {
    fontSize: 30,
    marginHorizontal: 2,
  },

 level: {
  fontSize: 18,
  fontWeight: "bold",
  marginLeft: 12,
},

  shield: {
    color: "#4FC3F7",
    marginTop: 10,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 18,
  },
});