import React from "react";
import { StyleSheet, Text, View } from "react-native";

type SpaceshipProps = {
  shipX: number;
};

export default function Spaceship({ shipX }: SpaceshipProps) {
  return (
    <View
      style={[
        styles.container,
        {
          transform: [{ translateX: shipX }],
        },
      ]}
    >
      <Text style={styles.ship}>🚀</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },

  ship: {
    fontSize: 70,
  },
});