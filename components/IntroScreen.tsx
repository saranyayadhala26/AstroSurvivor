import React, { useEffect, useRef } from "react";
import {
  Animated,
  StyleSheet, Text,
  View
} from "react-native";
import StarBackground from "./StarBackground";

type IntroScreenProps = {
  onFinish: () => void;
};

export default function IntroScreen({
  onFinish,
}: IntroScreenProps) {

  const fade = useRef(new Animated.Value(0)).current;

  const float = useRef(new Animated.Value(0)).current;

  const glow = useRef(new Animated.Value(0.6)).current;

  useEffect(() => {

    Animated.timing(fade, {
      toValue: 1,
      duration: 1500,
      useNativeDriver: true,
    }).start();

    Animated.loop(
      Animated.sequence([
        Animated.timing(float, {
          toValue: -10,
          duration: 1200,
          useNativeDriver: true,
        }),

        Animated.timing(float, {
          toValue: 10,
          duration: 1200,
          useNativeDriver: true,
        }),
      ])
    ).start();
    Animated.loop(
  Animated.sequence([
    Animated.timing(glow, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }),
    Animated.timing(glow, {
      toValue: 0.6,
      duration: 1000,
      useNativeDriver: true,
    }),
  ])
).start();
    const timer = setTimeout(() => {
      onFinish();
    }, 3000);

    return () => clearTimeout(timer);

  }, []);

  return (
    <View style={styles.container}>
        <StarBackground />
      <Animated.Text
        style={[
          styles.rocket,
          {
            opacity: fade,
            transform: [
              { translateY: float }
            ],
          },
        ]}
      >
        🚀
      </Animated.Text>

     <Animated.Text
  style={[
    styles.title,
    {
      opacity: glow,
      transform: [{ scale: glow }],
    },
  ]}
>
        {"🚀 Astro Survivor"}
      </Animated.Text>
      <Text style={styles.tagline}>
  ☄️ Dodge Asteroids
</Text>

<Text style={styles.tagline}>
  ❤️ Collect Power-ups
</Text>

<Text style={styles.tagline}>
    🏆 Become the Champion
</Text>
      <Animated.Text
        style={[
          styles.subtitle,
          {
            opacity: fade,
          },
        ]}
      >
        Created by Saranya
      </Animated.Text>

      <Animated.Text
        style={[
          styles.loading,
          {
            opacity: fade,
          },
        ]}
      >
        Initializing Launch Sequence...
      </Animated.Text>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#081229",
    justifyContent: "center",
    alignItems: "center",
  },

  rocket: {
    fontSize: 95,
    marginBottom: 30,
  },

  title: {
    color: "white",
    fontSize: 34,
    fontWeight: "bold",
    marginBottom: 15,
  },

  subtitle: {
    color: "#FFD54F",
    fontSize: 22,
    marginBottom: 40,
  },

  tagline: {
    color: "#E0E0E0",
    fontSize: 18,
    marginBottom: 6,
    textAlign: "center",
},
  loading: {
    color: "#8BC34A",
    fontSize: 20,
  },

});
