import React, { useEffect, useRef } from "react";
import {
  Animated,
  StyleSheet,
  Text
} from "react-native";
type Props = {
  visible: boolean;
  title: string;
};

export default function AchievementPopup({
  visible,
  title,
}: Props) {
  const translateY = useRef(new Animated.Value(-40)).current;
const opacity = useRef(new Animated.Value(0)).current;
useEffect(() => {
  if (visible) {
    translateY.setValue(-40);
    opacity.setValue(0);

    Animated.parallel([
      Animated.timing(translateY, {
        toValue: 0,
        duration: 400,
        useNativeDriver: true,
      }),
      Animated.timing(opacity, {
        toValue: 1,
        duration: 400,
        useNativeDriver: true,
      }),
    ]).start();
  }
}, [visible]);
  if (!visible) return null;

  return (
    <Animated.View
  style={[
    styles.container,
    {
      opacity,
      transform: [
        {
          translateY,
        },
      ],
    },
  ]}
>

      <Text style={styles.heading}>
        🏆 Achievement Unlocked!
      </Text>

      <Text style={styles.title}>
        {title}
      </Text>

    </Animated.View>
  );
}

const styles = StyleSheet.create({

  container:{
    position:"absolute",
    top:60,
    alignSelf:"center",

    backgroundColor:"#1B5E20",

    paddingHorizontal:28,
    paddingVertical:20,

    borderRadius:18,

    zIndex:9999,

    borderWidth:2,

    borderColor:"#FFD54F",

    elevation:12,

    shadowColor: "#FFD54F",
  shadowOpacity: 0.4,
  shadowRadius: 12,

  },

  heading:{
    color:"#FFD54F",
    fontWeight:"bold",
    fontSize:18,
    textAlign:"center",
  },

  title:{
    color:"white",
    fontSize:22,
    fontWeight:"bold",
    marginTop:8,
    textAlign:"center",
  }

});