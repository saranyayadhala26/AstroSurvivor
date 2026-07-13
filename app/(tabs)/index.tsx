import AchievementsScreen from "@/components/AchievementsScreen";
import {
  achievements,
  loadUnlockedAchievements,
  saveUnlockedAchievements,
} from "@/utils/achievementManager";
import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import { Alert, StyleSheet, Text, TouchableOpacity, View, } from "react-native";
import About from "../../components/About";
import AchievementPopup from "../../components/AchievementPopup";
import Asteroid from "../../components/Asteroid";
import Controls from "../../components/Controls";
import Explosion from "../../components/Explosion";
import { BOTTOM_LIMIT, getAsteroidSpeed, getRandomAsteroidX, isCollision, MAX_X, MIN_X, RESET_Y, } from "../../components/GameEngine";
import GameOver from "../../components/GameOver";
import Heart from "../../components/Heart";
import HowToPlay from "../../components/HowToPlay";
import HUD from "../../components/HUD";
import IntroScreen from "../../components/IntroScreen";
import PauseMenu from "../../components/PauseMenu";
import Settings from "../../components/Settings";
import Shield from "../../components/Shield";
import Spaceship from "../../components/Spaceship";
import StarBackground from "../../components/StarBackground";
import StartMenu from "../../components/StartMenu";

export default function HomeScreen() {
  const [gameStarted, setGameStarted] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [showIntro, setShowIntro] = useState(true);
  const [currentPage, setCurrentPage] = useState<
  "menu" | "howToPlay" | "about" | "achievements" | "settings"
>("menu");
  const [gamePaused, setGamePaused] = useState(false);
  const [shipX, setShipX] = useState(0);

  const [asteroidX, setAsteroidX] = useState(0);
  const [asteroidY, setAsteroidY] = useState(0);
  const [asteroid2X, setAsteroid2X] = useState(getRandomAsteroidX());
  const [asteroid2Y, setAsteroid2Y] = useState(-300);
  const [heartX, setHeartX] = useState(getRandomAsteroidX());
  const [heartY, setHeartY] = useState(-800);
  const [heartVisible, setHeartVisible] = useState(false);
  const [shieldX, setShieldX] = useState(getRandomAsteroidX());

const [shieldY, setShieldY] = useState(-1200);

const [shieldVisible, setShieldVisible] = useState(false);

const [shieldActive, setShieldActive] = useState(false);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [lives, setLives] = useState(3);
  const [showExplosion, setShowExplosion] = useState(false);
  const [explosionX, setExplosionX] = useState(0);

const [explosionY, setExplosionY] = useState(0);
const [countdown, setCountdown] = useState(0);
const [showCountdown, setShowCountdown] = useState(false);
const [newHighScore, setNewHighScore] = useState(false);
const [showAchievement, setShowAchievement] = useState(false);
const [achievementTitle, setAchievementTitle] = useState("");
const [unlockedAchievements, setUnlockedAchievements] = useState<string[]>([]);
const [heartsCollected, setHeartsCollected] = useState(0);

const [shieldsCollected, setShieldsCollected] = useState(0);

const [asteroidsDodged, setAsteroidsDodged] = useState(0);

const [survivalTime, setSurvivalTime] = useState(0);


  // Asteroid speed increases with score
  const asteroidSpeed = getAsteroidSpeed(score);

  const moveLeft = () => {
    if (!gameOver) {
      setShipX((prev) => Math.max(prev - 20, MIN_X));
    }
  };

  const moveRight = () => {
    if (!gameOver) {
     setShipX((prev) => Math.min(prev + 20, MAX_X));
    }
  };

const unlockAchievement = (title: string) => {

  setAchievementTitle(title);

  setShowAchievement(true);

  setTimeout(() => {

    setShowAchievement(false);

  }, 2500);

};
const checkAchievements = async (score: number) => {

  const achievement = achievements.find(
    (item) => item.score === score
  );

  if (!achievement) return;

  if (unlockedAchievements.includes(achievement.id)) {
    return;
  }

  unlockAchievement(achievement.title);

  const updated = [
    ...unlockedAchievements,
    achievement.id,
  ];

  setUnlockedAchievements(updated);

  await saveUnlockedAchievements(updated);

};




  useEffect(() => {
  loadHighScore();
}, []);

const loadHighScore = async () => {
  try {
    const value = await AsyncStorage.getItem("HIGH_SCORE");

    if (value !== null) {
      setHighScore(Number(value));
    }

  } catch (error) {
    console.log(error);
  }

  const unlocked = await loadUnlockedAchievements();
setUnlockedAchievements(unlocked);
};

  // Falling asteroid
  useEffect(() => 
    {
    if (!gameStarted || gameOver || gamePaused) return;

    const interval = setInterval(() => {
      setAsteroidY((prev) => {
        if (prev > BOTTOM_LIMIT) {
  setScore((prevScore) => {
  const newScore = prevScore + 1;
  setAsteroidsDodged((prev) => prev + 1);

if (newScore > highScore) {

  setHighScore(newScore);

  setNewHighScore(true);

  AsyncStorage.setItem(
    "HIGH_SCORE",
    newScore.toString()
  );

}
checkAchievements(newScore);
  return newScore;
});

  setAsteroidX(getRandomAsteroidX());

  return RESET_Y;
}

        return prev + asteroidSpeed;
      });
    }, 40);

    return () => clearInterval(interval);
  }, [gameStarted, gameOver, asteroidSpeed, gamePaused]);

  useEffect(() => {
  if (!gameStarted || gameOver || gamePaused) return;

  const interval = setInterval(() => {
    setAsteroid2Y((prev) => {
      if (prev > BOTTOM_LIMIT) {
setScore((prevScore) => {
  const newScore = prevScore + 1;
  setAsteroidsDodged((prev) => prev + 1);

  setHighScore((prevHigh) =>
    newScore > prevHigh ? newScore : prevHigh
  );
checkAchievements(newScore);
  return newScore;
});

        setAsteroid2X(getRandomAsteroidX());

        return -300;
      }

      return prev + asteroidSpeed;
    });
  }, 40);

  return () => clearInterval(interval);

}, [gameStarted, gameOver, asteroidSpeed, gamePaused]);

// Heart Spawn
useEffect(() => {
  if (!gameStarted || gameOver || gamePaused) return;

  const timer = setInterval(() => {
    console.log("Heart Spawned ❤️");

    setHeartVisible(true);
    setHeartX(getRandomAsteroidX());
    setHeartY(-300);

  }, 12000);

  return () => clearInterval(timer);

}, [gameStarted, gameOver]);
useEffect(() => {
  if (!heartVisible || gamePaused) return;

  const interval = setInterval(() => {

    setHeartY((prev) => {

    if (prev > BOTTOM_LIMIT) {
    setHeartVisible(false);
    setHeartX(getRandomAsteroidX());
    return -300;
}
      return prev + 6;

    });

  }, 40);

  return () => clearInterval(interval);

}, [heartVisible]);// ===========================
// HEART SYSTEM
useEffect(() => {
  if (!heartVisible || gameOver) return;

  const verticalHit =
    heartY >= 520 && heartY <= 620;

  const horizontalHit =
    Math.abs(shipX - heartX) < 30;

  if (verticalHit && horizontalHit) {

    if (lives < 3) {
      setLives((prev) => prev + 1);
      setHeartsCollected((prev) => prev + 1);
    }

    setHeartVisible(false);
    setHeartY(-300);
    setHeartX(getRandomAsteroidX());
  }

}, [
  heartX,
  heartY,
  shipX,
  heartVisible,
  lives,
  gameOver,
]);

// ===========================
// ===========================
// SHIELD SYSTEM
// ===========================

// ===========================
// SHIELD SPAWN
// ===========================

useEffect(() => {
  if (!gameStarted || gameOver || gamePaused) return;

  const timer = setInterval(() => {
    setShieldVisible(true);
    setShieldX(getRandomAsteroidX());
    setShieldY(-500);
  }, 20000);

  return () => clearInterval(timer);

}, [gameStarted, gameOver]);
// ===========================
// SHIELD FALLING
// ===========================

useEffect(() => {
  if (!shieldVisible || gamePaused) return;

  const interval = setInterval(() => {
    setShieldY((prev) => {
      if (prev > BOTTOM_LIMIT) {
        setShieldVisible(false);
        setShieldX(getRandomAsteroidX());
        return -500;
      }

      return prev + 5;
    });
  }, 40);

  return () => clearInterval(interval);

}, [shieldVisible]);

// ===========================
// SHIELD COLLECTION
// ===========================

useEffect(() => {
  if (!shieldVisible || gameOver) return;

  const verticalHit =
    shieldY >= 520 && shieldY <= 620;

  const horizontalHit =
    Math.abs(shipX - shieldX) < 30;

  if (verticalHit && horizontalHit) {

    // Activate Shield
    setShieldActive(true);
    setShieldsCollected((prev) => prev + 1);

    
    // Remove Shield
    setShieldVisible(false);
    setShieldY(-500);
    setShieldX(getRandomAsteroidX());

  }

}, [
  shieldX,
  shieldY,
  shipX,
  shieldVisible,
  gameOver,
]);

// ===========================
// SHIELD TIMER
// ===========================

useEffect(() => {

  if (!shieldActive) return;

  const timer = setTimeout(() => {

    setShieldActive(false);

  }, 5000);

  return () => clearTimeout(timer);

}, [shieldActive]);

useEffect(() => {
  if (!showCountdown) return;

  if (countdown === 0) {
    setShowCountdown(false);
    setGamePaused(false);
    return;
  }

  const timer = setTimeout(() => {
    setCountdown((prev) => prev - 1);
  }, 1000);

  return () => clearTimeout(timer);

}, [countdown, showCountdown]);





// Collision Detection


useEffect(() => {
  if (!gameStarted || gameOver || gamePaused) return;
  if (shieldActive) return;

  const hitAsteroid1 = isCollision(
  asteroidX,
  asteroidY,
  shipX
);

const hitAsteroid2 = isCollision(
  asteroid2X,
  asteroid2Y,
  shipX
);

if (hitAsteroid1 || hitAsteroid2) {
  if (hitAsteroid1) {
  setExplosionX(asteroidX);
  setExplosionY(asteroidY);
}

if (hitAsteroid2) {
  setExplosionX(asteroid2X);
  setExplosionY(asteroid2Y);
}

setShowExplosion(true);

setTimeout(() => {
  setShowExplosion(false);
}, 500);

  if (lives > 1) {
    setLives((prev) => prev - 1);

    if (hitAsteroid1) {
      setAsteroidY(RESET_Y);
      setAsteroidX(getRandomAsteroidX());
    }

    if (hitAsteroid2) {
      setAsteroid2Y(-300);
      setAsteroid2X(getRandomAsteroidX());
    }

  } else {
    setLives(0);
    setGameOver(true);
  }
}

}, [
  asteroidY,
  asteroidX,
  asteroid2Y,
  asteroid2X,
  shipX,
  lives,
  gameStarted,
  gameOver,
]);

useEffect(() => {

  if (!gameStarted || gameOver || gamePaused) return;

  const timer = setInterval(() => {

    setSurvivalTime((prev) => prev + 1);

  }, 1000);

  return () => clearInterval(timer);

}, [gameStarted, gameOver, gamePaused]);




const restartGame = () => {
  setGameOver(false);
  setNewHighScore(false);
  setShipX(0);

  // First asteroid
  setAsteroidX(getRandomAsteroidX());
  setAsteroidY(RESET_Y);

  // Second asteroid
  setAsteroid2X(getRandomAsteroidX());
  setAsteroid2Y(-300);

  // Reset score
  setScore(0);

  // Reset lives
  setLives(3);
};

const resetGameProgress = async () => {
  try {
    // Clear all saved data
  await AsyncStorage.multiRemove([
  "HIGH_SCORE",
  "UNLOCKED_ACHIEVEMENTS",
  // Add any other game-specific keys here
]);

    // Reset states
    setHighScore(0);
    setUnlockedAchievements([]);

    // Return to menu
    setCurrentPage("menu");

    Alert.alert(
      "🎉 Reset Complete",
      "Your progress has been successfully reset!"
    );

  } catch (error) {
    Alert.alert(
      "Error",
      "Unable to reset progress."
    );
  }
};

return (

  showIntro ? (

    <IntroScreen
    onFinish={() => {
        setShowIntro(false);
    }}
/>

  ) : (

    <View style={styles.container}>
      <StarBackground />
      {!gameStarted ? (
currentPage === "menu" ? (

  <StartMenu
    highScore={highScore}
    onStart={() => {
      setGameStarted(true);
      setAsteroidX(getRandomAsteroidX());
    }}
    onHowToPlay={() => {
      setCurrentPage("howToPlay");
    }}
    onAbout={() => {
      setCurrentPage("about");
    }}
    onAchievements={() => {
      setCurrentPage("achievements");
    }}
    onSettings={() => setCurrentPage("settings")}
  />

) : currentPage === "howToPlay" ? (

  <HowToPlay
    onBack={() => setCurrentPage("menu")}
  />

) : currentPage === "about" ? (

  <About
    onBack={() => setCurrentPage("menu")}
  />

  ) : currentPage === "settings" ? (

<Settings
    onBack={() => setCurrentPage("menu")}
    onReset={resetGameProgress}
/>

) : (

  <AchievementsScreen
    unlockedAchievements={unlockedAchievements}
    onBack={() => setCurrentPage("menu")}
  />

)


  ): (
        <View style={styles.gameContainer}>
          {!gameOver && !gamePaused && (
            <TouchableOpacity
              onPress={() => setGamePaused(true)}
              style={{
                position: "absolute",
                top: 10,
    right: 20,
    backgroundColor: "#2979FF",
    padding: 10,
    borderRadius: 8,
    zIndex: 999,
  }}
>
  <Text style={{
     color: "white",
     fontSize: 20,
     }}
     >
    ⏸
  </Text>
</TouchableOpacity>
)}
          <View style={{ alignItems: "center" }}>

  <HUD
  score={score}
  highScore={highScore}
  lives={lives}
  level={
  score < 5
    ? "Easy"
    : score < 10
    ? "Medium"
    : score < 20
    ? "Hard"
    : "Extreme"
}
  shieldActive={shieldActive}
/>

</View>
          <Asteroid
            asteroidX={asteroidX}
            asteroidY={asteroidY}
          />
          <Asteroid
          asteroidX={asteroid2X}
          asteroidY={asteroid2Y}
          />
          {heartVisible && (
  <Heart
    x={heartX}
    y={heartY}
  />
)}
{shieldVisible && (
  <Shield
    x={shieldX}
    y={shieldY}
  />
)}
<Explosion
  visible={showExplosion}
  x={explosionX}
  y={explosionY}
/>
<AchievementPopup
  visible={showAchievement}
  title={achievementTitle}
/>
          <Spaceship shipX={shipX} />

          {!gameOver && !gamePaused && (
  <Controls
    moveLeft={moveLeft}
    moveRight={moveRight}
  />
)}
          {gamePaused && (
  <PauseMenu
    onResume={() => {
  setShowCountdown(true);
  setCountdown(3);
}}
    onRestart={() => {
      setGamePaused(false);
      restartGame();
      setHeartsCollected(0);

setShieldsCollected(0);

setAsteroidsDodged(0);

setSurvivalTime(0);
    }}
  />
)}
{showCountdown && (
  <View
    style={{
      position: "absolute",
      width: "100%",
      height: "100%",
      justifyContent: "center",
      alignItems: "center",
      zIndex: 1000,
    }}
  >
    <Text
      style={{
        color: "#FFD54F",
        fontSize: 90,
        fontWeight: "bold",
      }}
    >
      {countdown === 0 ? "GO!" : countdown}
    </Text>
  </View>
)}

          {gameOver && (
            <GameOver
    score={score}
    highScore={highScore}
    level={
      score < 5
        ? "Easy"
        : score < 10
        ? "Medium"
        : score < 20
        ? "Hard"
        : "Extreme"
    }
    newHighScore={newHighScore}
    heartsCollected={heartsCollected}
shieldsCollected={shieldsCollected}
asteroidsDodged={asteroidsDodged}
survivalTime={survivalTime}
  onRestart={restartGame}
/>
          )}
        </View>
      )
    }
    </View>
    )
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#081229",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },

  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginBottom: 50,
    textAlign: "center",
  },

  scoreText: {
    fontSize: 22,
    color: "#FFD54F",
    marginBottom: 40,
    fontWeight: "600",
  },

  button: {
    backgroundColor: "#2979FF",
    paddingHorizontal: 40,
    paddingVertical: 15,
    borderRadius: 12,
  },

  buttonText: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "bold",
  },

  gameContainer: {
    flex: 1,
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 70,
    paddingBottom: 40,
  },
});