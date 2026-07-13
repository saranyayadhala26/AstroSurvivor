import AsyncStorage from "@react-native-async-storage/async-storage";
import { AudioPlayer, createAudioPlayer } from "expo-audio";

let backgroundPlayer: AudioPlayer | null = null;

const MUSIC_KEY = "background_music_enabled";

/**
 * Returns true if background music is enabled.
 * Default = true
 */
export async function isMusicEnabled(): Promise<boolean> {
  const value = await AsyncStorage.getItem(MUSIC_KEY);
  return value !== "false";
}

/**
 * Save music preference.
 */
export async function setMusicEnabled(enabled: boolean) {
  await AsyncStorage.setItem(MUSIC_KEY, enabled ? "true" : "false");
}

/**
 * Start looping background music.
 */
export async function startBackgroundMusic() {
  const enabled = await isMusicEnabled();

  if (!enabled) return;

  if (backgroundPlayer) return;

  backgroundPlayer = createAudioPlayer(
    require("../assets/sounds/bgmusic.mp3")
  );

  backgroundPlayer.loop = true;
  backgroundPlayer.play();
}

/**
 * Stop background music.
 */
export function stopBackgroundMusic() {
  if (!backgroundPlayer) return;

  backgroundPlayer.pause();
  backgroundPlayer.remove();

  backgroundPlayer = null;
}

/**
 * Explosion SFX
 */
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

/**
 * Heart pickup SFX
 */
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

/**
 * Shield pickup SFX
 */
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