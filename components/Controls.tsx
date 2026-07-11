import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

type ControlsProps = {
  moveLeft: () => void;
  moveRight: () => void;
};

export default function Controls({
  moveLeft,
  moveRight,
}: ControlsProps) {
  return (
    <View style={styles.controls}>
      <TouchableOpacity
        style={styles.button}
        onPress={moveLeft}
      >
        <Text style={styles.text}>⬅️</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={moveRight}
      >
        <Text style={styles.text}>➡️</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  controls: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-evenly",
  },

  button: {
    backgroundColor: "#2979FF",
    paddingHorizontal: 25,
    paddingVertical: 18,
    borderRadius: 15,
  },

  text: {
    fontSize: 28,
  },
});