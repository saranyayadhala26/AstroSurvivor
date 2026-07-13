import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

type GameOverProps = {
  score: number;
  highScore: number;
  level: string;
  newHighScore: boolean;

  heartsCollected: number;
shieldsCollected: number;
asteroidsDodged: number;
survivalTime: number;
  onRestart: () => void;
  
};

export default function GameOver({
  score,
  highScore,
  level,
  newHighScore,

   heartsCollected,
    shieldsCollected,
    asteroidsDodged,
    survivalTime,
  onRestart,
}: GameOverProps) {
  return (
    <View style={styles.overlay}>
      <View style={styles.box}>

        <Text style={styles.title}>
    💀 Game Summary
</Text>

<View style={styles.statsContainer}>

    <View style={styles.row}>
        <Text style={styles.label}>🏆 Score</Text>
        <Text style={styles.value}>{score}</Text>
    </View>

    <View style={styles.row}>
        <Text style={styles.label}>💯 High Score</Text>
        <Text style={styles.value}>{highScore}</Text>
    </View>

    <View style={styles.row}>
        <Text style={styles.label}>❤️ Hearts</Text>
        <Text style={styles.value}>
            {heartsCollected}
        </Text>
    </View>

    <View style={styles.row}>
        <Text style={styles.label}>🛡 Shields</Text>
        <Text style={styles.value}>
            {shieldsCollected}
        </Text>
    </View>

    <View style={styles.row}>
        <Text style={styles.label}>
            ☄ Asteroids Dodged
        </Text>

        <Text style={styles.value}>
            {asteroidsDodged}
        </Text>
    </View>

    <View style={styles.row}>
        <Text style={styles.label}>
            🎯 Difficulty
        </Text>

        <Text style={styles.value}>
            {level}
        </Text>
    </View>

    <View style={styles.row}>
        <Text style={styles.label}>
            ⏱ Survival Time
        </Text>

        <Text style={styles.value}>
            {survivalTime}s
        </Text>
    </View>

</View>

        <Text style={styles.text}>
          ⭐ Final Score : {score}
        </Text>

        <Text style={styles.text}>
          🏆 High Score : {highScore}
        </Text>
        {newHighScore && (
  <Text
    style={{
      color: "#00E676",
      fontSize: 22,
      fontWeight: "bold",
      marginVertical: 10,
    }}
  >
    🎉 NEW HIGH SCORE!
  </Text>
)}

        <Text style={styles.text}>
          🎯 Difficulty : {level}
        </Text>

        <TouchableOpacity
          style={styles.button}
          onPress={onRestart}
        >
          <Text style={styles.buttonText}>
            🔄 Play Again
          </Text>
        </TouchableOpacity>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  overlay: {
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,0.75)",
    justifyContent: "center",
    alignItems: "center",
  },

  box: {
    backgroundColor: "#1C2541",
    width: 320,
    borderRadius: 20,
    padding: 30,
    alignItems: "center",
  },

  title: {
    color: "#FF5252",
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 25,
  },

  text: {
    color: "white",
    fontSize: 20,
    marginVertical: 6,
  },

  statsContainer: {

    width: "100%",

    backgroundColor: "#1A237E",

    borderRadius: 18,

    padding: 18,

    marginVertical: 25,

},

row: {

    flexDirection: "row",

    justifyContent: "space-between",

    marginVertical: 8,

},

label: {

    color: "#FFFFFF",

    fontSize: 18,

},

value: {

    color: "#FFD54F",

    fontSize: 18,

    fontWeight: "bold",

},




  button: {
    marginTop: 25,
    backgroundColor: "#2979FF",
    width: "100%",
    padding: 15,
    borderRadius: 12,
  },

  buttonText: {
    color: "white",
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
});