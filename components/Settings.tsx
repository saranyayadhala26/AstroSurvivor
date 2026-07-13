import React from "react";
import {
    Alert,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

type Props = {
  onBack: () => void;
  onReset: () => void;
};

export default function Settings({
  onBack,
  onReset,
}: Props) {
  const handleReset = () => {
    Alert.alert(
      "⚠ Reset Progress",
      "This will permanently erase your High Score, Achievements and all saved progress.\n\nThis action cannot be undone.",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Reset",
          style: "destructive",
          onPress: onReset,
        },
      ]
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        ⚙ Settings
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={handleReset}
      >
        <Text style={styles.buttonText}>
          🔄 Reset Progress
        </Text>
      </TouchableOpacity>

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
    justifyContent: "center",
    alignItems: "center",
  },

  title: {
    color: "white",
    fontSize: 40,
    fontWeight: "bold",
    marginBottom: 50,
  },

  button: {
    width: 280,
    backgroundColor: "#2F80ED",
    padding: 18,
    borderRadius: 18,
    marginVertical: 12,
    alignItems: "center",
  },

  buttonText: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
  },
});