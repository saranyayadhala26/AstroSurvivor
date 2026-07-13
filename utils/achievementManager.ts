import AsyncStorage from "@react-native-async-storage/async-storage";

export type Achievement = {
  id:string;
  score: number;
  title: string;
};

export const achievements: Achievement[] = [
  {
    id: "Survivor",
    score: 10,
    title: "🌟 Survivor",
  },
  {
    id: "Space Pilot",
    score: 25,
    title: "🚀 Space Pilot",
  },
  {
    id:"Galaxy Master",
    score: 50,
    title: "👑 Galaxy Master",
  },
  {
    id:"Cosmic Warrior",
    score: 75,
    title: "💫 Cosmic Warrior",
  },
  {
    id:"Legend of Space",
    score: 100,
    title: "🌌 Legend of Space",
  },
];

const STORAGE_KEY = "UNLOCKED_ACHIEVEMENTS";

export const loadUnlockedAchievements = async (): Promise<string[]> => {

  const data = await AsyncStorage.getItem(STORAGE_KEY);

  if (!data) return [];

  return JSON.parse(data);

};

export const saveUnlockedAchievements = async (
  unlocked: string[]
) => {

  await AsyncStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(unlocked)
  );

};