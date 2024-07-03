import { createSlice } from "@reduxjs/toolkit";
import words from "../words/words.json";

// Kelimeleri 'color' ile birlikte başlatmak için words.json'u modifiye edelim
const wordsWithColor = words.map(word => ({ ...word, color: 'black' }));

export const typingSlice = createSlice({
  name: 'typing',
  initialState: {
    words: wordsWithColor, // Initial state kelimelerini color ile birlikte başlatalım
    correct: [],
  },
  reducers: {
    randomWords: (state) => {
      const randomWords = [];
      for (let i = 0; i < 300; i++) {
        const randomIndex = Math.floor(Math.random() * state.words.length);
        randomWords.push(state.words[randomIndex]);
      }
      state.words = randomWords;
    },
    wordControl: (state, action) => {
      const item = action.payload.trim();
      console.log("Input item:", item);
      const findItem = state.words.find((word) => word.turkish === item);
      console.log("Found item:", findItem);
      if (findItem) {
        state.correct.push(findItem.id);
        const wordIndex = state.words.findIndex((word) => word.id === findItem.id);
        if (wordIndex !== -1) {
          state.words[wordIndex].color = 'green'; // Kelimenin rengini yeşil olarak değiştirelim
        }
      }
    },
  }
});

export const { randomWords, wordControl } = typingSlice.actions;
export default typingSlice.reducer;
