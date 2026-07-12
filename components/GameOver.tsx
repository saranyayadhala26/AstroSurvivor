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
  onRestart: () => void;
};

export default function GameOver({
  score,
  highScore,
  level,
  newHighScore,
  onRestart,
}: GameOverProps) {
  return (
    <View style={styles.overlay}>
      <View style={styles.box}>

        <Text style={styles.title}>
          💥 GAME OVER
        </Text>

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