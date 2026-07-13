import React from "react";
import {
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

import { achievements } from "@/utils/achievementManager";

type Props = {
  unlockedAchievements: string[];
  onBack: () => void;
};

export default function AchievementsScreen({
  unlockedAchievements,
  onBack,
}: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>🏆 Achievements</Text>

      <ScrollView
        style={{ width: "100%" }}
        contentContainerStyle={{
          paddingBottom: 20,
        }}
      >
        {achievements.map((achievement) => {

          const unlocked =
            unlockedAchievements.includes(
              achievement.id
            );

          return (
            <View
              key={achievement.id}
              style={styles.card}
            >
              <Text style={styles.name}>
                {achievement.title}
              </Text>

              <Text
  style={{
    color: "#BDBDBD",
    marginTop: 6,
    fontSize: 16,
  }}
>
  Unlock at Score: {achievement.score}
</Text>

              <Text style={styles.status}>
                {unlocked
                  ? "✅ Unlocked"
                  : "🔒 Not Unlocked Yet"}
              </Text>
            </View>
          );
        })}
      </ScrollView>

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
    padding: 20,
    paddingTop: 70,
  },

  title: {
    color: "#FFD54F",
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 25,
  },

  card: {
    backgroundColor: "#1A237E",
    borderRadius: 15,
    padding: 18,
    marginBottom: 15,
  },

  name: {
    color: "white",
    fontSize: 22,
    fontWeight: "bold",
  },

  status: {
    color: "#FFD54F",
    fontSize: 18,
    marginTop: 5,
  },

  button: {
    marginTop: 20,
    alignSelf: "center",
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