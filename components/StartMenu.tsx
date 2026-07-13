import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

type StartMenuProps = {
  highScore: number;
  onStart: () => void;
  onHowToPlay: () => void;
  onAbout: () => void;
  onAchievements: () => void;
  onSettings: () => void;
};

export default function StartMenu({
  highScore,
  onStart,
  onHowToPlay,
  onAchievements,
  onSettings,
  onAbout,
}: StartMenuProps) {
  return (
    <View style={styles.container}>

      <Text style={styles.title}>
        🚀 Astro Survivor
      </Text>

      <Text style={styles.score}>
        🏆 High Score : {highScore}
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={onStart}
      >
        <Text style={styles.buttonText}>
          ▶ Start Game
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={onHowToPlay}
      >
        <Text style={styles.buttonText}>
          📖 How to Play
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
  style={styles.button}
  onPress={onAchievements}
>
  <Text style={styles.buttonText}>
    🏆 Achievements
  </Text>
</TouchableOpacity>

<TouchableOpacity
  style={styles.button}
  onPress={onSettings}
>
  <Text style={styles.buttonText}>
    ⚙ Settings
  </Text>
</TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={onAbout}
      >
        <Text style={styles.buttonText}>
          ℹ About
        </Text>
      </TouchableOpacity>
      <View style={styles.footer}>

  <Text style={styles.footerText}>
    Version 1.0
  </Text>

  <Text style={styles.footerText}>
    Developed by Saranya 
  </Text>

</View>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#081229",
  },

  title: {
    color: "white",
    fontSize: 34,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 30,
  },

  score: {
    color: "#FFD54F",
    fontSize: 22,
    marginBottom: 40,
  },

  button: {
    backgroundColor: "#2979FF",
    width: 260,
    paddingVertical: 16,
    borderRadius: 15,
    marginVertical: 10,
    alignItems: "center",
  },

  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 22,
  },

  footer: {
  marginTop: 40,
  alignItems: "center",
},

footerTitle: {
  color: "#FFD54F",
  fontSize: 18,
  fontWeight: "bold",
},

footerText: {
  color: "#BDBDBD",
  fontSize: 14,
  marginTop: 4,
},

});