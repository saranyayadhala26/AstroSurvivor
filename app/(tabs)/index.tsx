import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import Asteroid from "../../components/Asteroid";
import Controls from "../../components/Controls";
import ScoreBoard from "../../components/ScoreBoard";
import Spaceship from "../../components/Spaceship";

export default function HomeScreen() {
  const [gameStarted, setGameStarted] = useState(false);

  const [shipX, setShipX] = useState(0);

  const [asteroidX] = useState(0);
  const [asteroidY, setAsteroidY] = useState(0);

  const [score] = useState(0);

  const moveLeft = () => {
    setShipX((prev) => Math.max(prev - 20, -120));
  };

  const moveRight = () => {
    setShipX((prev) => Math.min(prev + 20, 120));
  };

  useEffect(() => {
    if (!gameStarted) return;

    const interval = setInterval(() => {
      setAsteroidY((prev) => {
        if (prev > 550) {
          return 0;
        }

        return prev + 8;
      });
    }, 40);

    return () => clearInterval(interval);
  }, [gameStarted]);

  return (
    <View style={styles.container}>
      {!gameStarted ? (
        <>
          <Text style={styles.title}>
            🚀 Space Escape Runner
          </Text>

          <Text style={styles.scoreText}>
            Current Score: 0
          </Text>

          <TouchableOpacity
            style={styles.button}
            onPress={() => setGameStarted(true)}
          >
            <Text style={styles.buttonText}>
              Start Game
            </Text>
          </TouchableOpacity>
        </>
      ) : (
        <View style={styles.gameContainer}>
          <ScoreBoard score={score} />

          <Asteroid
            asteroidX={asteroidX}
            asteroidY={asteroidY}
          />

          <Spaceship shipX={shipX} />

          <Controls
            moveLeft={moveLeft}
            moveRight={moveRight}
          />
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

  scoreText: {
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
});