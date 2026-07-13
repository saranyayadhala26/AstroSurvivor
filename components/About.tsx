import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

type Props = {
  onBack: () => void;
};

export default function About({
  onBack,
}: Props) {
  return (
    <View style={styles.container}>

      <Text style={styles.title}>
        ℹ About
      </Text>

      <Text style={styles.appName}>
        🚀 Astro Survivor
      </Text>

      <Text style={styles.text}>
        Version 1.0
      </Text>

      <Text style={styles.text}>
        Developed by
      </Text>

      <Text style={styles.name}>
        Saranya
      </Text>

      <Text style={styles.tech}>
        Built with
      </Text>

      <Text style={styles.tech}>
        React Native
      </Text>

      <Text style={styles.tech}>
        Expo
      </Text>

      <Text style={styles.tech}>
        TypeScript
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={onBack}
      >
        <Text style={styles.buttonText}>
          ← Back
        </Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#081229",
    justifyContent: "center",
    alignItems: "center",
    padding: 25,
  },

  title: {
    color: "white",
    fontSize: 34,
    fontWeight: "bold",
    marginBottom: 25,
  },

  appName: {
    color: "#FFD54F",
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },

  text: {
    color: "white",
    fontSize: 20,
    marginVertical: 4,
  },

  name: {
    color: "#4FC3F7",
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 12,
  },

  tech: {
    color: "#8BC34A",
    fontSize: 18,
    marginVertical: 2,
  },

  button: {
    marginTop: 40,
    backgroundColor: "#2979FF",
    paddingHorizontal: 35,
    paddingVertical: 15,
    borderRadius: 12,
  },

  buttonText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },

});