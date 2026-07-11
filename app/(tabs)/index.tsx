import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function HomeScreen() {
  const [gameStarted, setGameStarted] = useState(false);
  const [shipX, setShipX] = useState(0);

  const moveLeft = () => {
    setShipX((prev) => Math.max(prev - 20, -120));
  };

  const moveRight = () => {
    setShipX((prev) => Math.min(prev + 20, 120));
  };

  return (
    <View style={styles.container}>
      {!gameStarted ? (
        <>
          <Text style={styles.title}>🚀 Space Escape Runner</Text>

          <Text style={styles.score}>Current Score: 0</Text>

          <TouchableOpacity
            style={styles.button}
            onPress={() => setGameStarted(true)}
          >
            <Text style={styles.buttonText}>Start Game</Text>
          </TouchableOpacity>
        </>
      ) : (
        <View style={styles.gameContainer}>
          <Text style={styles.gameScore}>Score : 0</Text>

          <View
            style={[
              styles.spaceship,
              {
                transform: [{ translateX: shipX }],
              },
            ]}
          >
            <Text style={styles.shipEmoji}>🚀</Text>
          </View>

          <View style={styles.controls}>
            <TouchableOpacity
              style={styles.controlButton}
              onPress={moveLeft}
            >
              <Text style={styles.controlText}>⬅️</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.controlButton}
              onPress={moveRight}
            >
              <Text style={styles.controlText}>➡️</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#081229",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },

  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginBottom: 50,
    textAlign: "center",
  },

  score: {
    fontSize: 22,
    color: "#FFD54F",
    marginBottom: 40,
    fontWeight: "600",
  },

  button: {
    backgroundColor: "#2979FF",
    paddingHorizontal: 40,
    paddingVertical: 15,
    borderRadius: 12,
  },

  buttonText: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "bold",
  },

  gameContainer: {
    flex: 1,
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 70,
    paddingBottom: 40,
  },

  gameScore: {
    fontSize: 28,
    color: "#FFD54F",
    fontWeight: "bold",
  },

  spaceship: {
    justifyContent: "center",
    alignItems: "center",
  },

  shipEmoji: {
    fontSize: 70,
  },

  controls: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-evenly",
  },

  controlButton: {
    backgroundColor: "#2979FF",
    paddingHorizontal: 25,
    paddingVertical: 18,
    borderRadius: 15,
  },

  controlText: {
    fontSize: 28,
  },
});