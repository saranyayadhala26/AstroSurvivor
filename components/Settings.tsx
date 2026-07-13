import React, { useEffect, useState } from "react";
import {
  Alert,
  StyleSheet,
  Switch,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import {
  isMusicEnabled,
  setMusicEnabled,
  startBackgroundMusic,
  stopBackgroundMusic,
} from "./AudioManager";

type Props = {
  onBack: () => void;
  onReset: () => void;
};

export default function Settings({
  onBack,
  onReset,
}: Props) {
  const [musicEnabled, setMusic] = useState(true);

  useEffect(() => {
    isMusicEnabled().then(setMusic);
  }, []);

  const toggleMusic = async (value: boolean) => {
    setMusic(value);

    await setMusicEnabled(value);

    if (value) {
      await startBackgroundMusic();
    } else {
      stopBackgroundMusic();
    }
  };

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
      <Text style={styles.title}>⚙ Settings</Text>

      <View style={styles.musicContainer}>
        <Text style={styles.musicText}>🎵 Background Music</Text>

        <Switch
          value={musicEnabled}
          onValueChange={toggleMusic}
          trackColor={{ false: "#767577", true: "#2F80ED" }}
          thumbColor={musicEnabled ? "#ffffff" : "#f4f3f4"}
        />
      </View>

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
    marginBottom: 40,
  },

  musicContainer: {
    width: 300,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 35,
  },

  musicText: {
    color: "white",
    fontSize: 22,
    fontWeight: "600",
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