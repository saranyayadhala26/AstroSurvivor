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

export default function HowToPlay({
  onBack,
}: Props) {
  return (
    <View style={styles.container}>

      <Text style={styles.title}>
        📖 How To Play
      </Text>

      <Text style={styles.text}>
        ⬅ Move Left
      </Text>

      <Text style={styles.text}>
        ➡ Move Right
      </Text>

      <Text style={styles.text}>
        ☄ Avoid Asteroids
      </Text>

      <Text style={styles.text}>
        ❤️ Collect Hearts
      </Text>

      <Text style={styles.text}>
        🛡 Collect Shields
      </Text>

      <Text style={styles.text}>
        🏆 Beat Your High Score
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

  container:{
    flex:1,
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:"#081229",
    padding:25,
  },

  title:{
    color:"white",
    fontSize:34,
    fontWeight:"bold",
    marginBottom:40,
  },

  text:{
    color:"#FFD54F",
    fontSize:22,
    marginVertical:8,
    textAlign:"center",
  },

  button:{
    marginTop:40,
    backgroundColor:"#2979FF",
    paddingHorizontal:35,
    paddingVertical:15,
    borderRadius:12,
  },

  buttonText:{
    color:"white",
    fontWeight:"bold",
    fontSize:20,
  }

});