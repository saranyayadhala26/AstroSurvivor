import React from "react";
import { StyleSheet, View } from "react-native";

export default function StarBackground() {
  const stars = [];

  for (let i = 0; i < 50; i++) {
    stars.push(
      <View
        key={i}
        style={[
          styles.star,
          {
            left: Math.random() * 360,
            top: Math.random() * 700,
            width: Math.random() * 3 + 1,
            height: Math.random() * 3 + 1,
          },
        ]}
      />
    );
  }

  return <View style={styles.container}>{stars}</View>;
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
  },

  star: {
    position: "absolute",
    backgroundColor: "white",
    borderRadius: 50,
  },
});