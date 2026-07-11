import React from "react";
import { StyleSheet, Text, View } from "react-native";

type AsteroidProps = {
  asteroidY: number;
  asteroidX: number;
};

export default function Asteroid({
  asteroidY,
  asteroidX,
}: AsteroidProps) {
  return (
    <View
      style={[
        styles.container,
        {
          transform: [
            { translateX: asteroidX },
            { translateY: asteroidY },
          ],
        },
      ]}
    >
      <Text style={styles.asteroid}>☄️</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
  },

  asteroid: {
    fontSize: 50,
  },
});