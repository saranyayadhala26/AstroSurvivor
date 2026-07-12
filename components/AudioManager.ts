import { AudioPlayer, createAudioPlayer } from "expo-audio";

let backgroundPlayer: AudioPlayer | null = null;

export async function startBackgroundMusic() {
  if (backgroundPlayer) return;

  backgroundPlayer = createAudioPlayer(
    require("../assets/sounds/bgmusic.mp3")
  );

  backgroundPlayer.loop = true;
  backgroundPlayer.play();
}

export function stopBackgroundMusic() {
  if (!backgroundPlayer) return;

  backgroundPlayer.pause();
  backgroundPlayer.remove();

  backgroundPlayer = null;
}

export function playExplosionSound() {
  const player = createAudioPlayer(
    require("../assets/sounds/explosion.mp3")
  );

  player.play();

  player.addListener("playbackStatusUpdate", (status) => {
    if (status.didJustFinish) {
      player.remove();
    }
  });
}

export function playHeartSound() {
  const player = createAudioPlayer(
    require("../assets/sounds/heart.mp3")
  );

  player.play();

  player.addListener("playbackStatusUpdate", (status) => {
    if (status.didJustFinish) {
      player.remove();
    }
  });
}

export function playShieldSound() {
  const player = createAudioPlayer(
    require("../assets/sounds/shield.mp3")
  );

  player.play();

  player.addListener("playbackStatusUpdate", (status) => {
    if (status.didJustFinish) {
      player.remove();
    }
  });
}