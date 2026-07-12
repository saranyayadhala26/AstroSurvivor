import React from "react";
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

type PauseMenuProps = {
  onResume: () => void;
  onRestart: () => void;
};

export default function PauseMenu({
  onResume,
  onRestart,
}: PauseMenuProps) {
  return (
    <View style={styles.overlay}>
      <View style={styles.box}>

        <Text style={styles.title}>
          ⏸ GAME PAUSED
        </Text>

        <TouchableOpacity
          style={styles.button}
          onPress={onResume}
        >
          <Text style={styles.buttonText}>
            ▶ Resume
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={onRestart}
        >
          <Text style={styles.buttonText}>
            🔄 Restart
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
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.65)",
    zIndex: 999,
  },

  box: {
    backgroundColor: "#1C2541",
    padding: 30,
    borderRadius: 20,
    width: 300,
    alignItems: "center",
  },

  title: {
    color: "white",
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 25,
  },

  button: {
    backgroundColor: "#2979FF",
    paddingVertical: 15,
    width: "100%",
    borderRadius: 12,
    marginVertical: 8,
  },

  buttonText: {
    color: "white",
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
  },
});