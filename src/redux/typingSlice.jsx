import { createSlice } from "@reduxjs/toolkit";
import words from "../words/words.json";

// Kelimeleri 'color' ile birlikte başlatmak için words.json'u modifiye edelim
const wordsWithColor = words.map(word => ({ ...word, color: 'black',background : "none" }));

export const typingSlice = createSlice({
  name: 'typing',
  initialState: {
    words: wordsWithColor, // Initial state kelimelerini color ile birlikte başlatalım
    correct: 0,
    false: 0,
    currentWordIndex: 0,
  },
  reducers: {
    randomWords: (state) => {
      const randomWords = [];
      for (let i = 0; i < 300; i++) {
        const randomIndex = Math.floor(Math.random() * state.words.length);
        randomWords.push(state.words[randomIndex]);
      }
      state.words = randomWords;
      randomWords[0].background = 'gray.300';
    },
    wordControl: (state, action) => {
      const item = action.payload.trim();
      
      const currentWord = state.words[state.currentWordIndex];
      if (currentWord.turkish === item) {
        currentWord.color = 'green'; // Doğru kelimenin rengini yeşil yapalım
        state.correct = state.correct +1;
      } else {
        currentWord.color = 'red'; // Yanlış kelimenin rengini kırmızı yapalım
        state.false = state.false +1;
      }
    
      currentWord.background = 'none'; // Arka plan rengini kaldır
      state.currentWordIndex += 1; // Bir sonraki kelimeye geç

      // Eğer daha fazla kelime varsa bir sonraki kelimenin arka plan rengini gri yapalım
      if (state.currentWordIndex < state.words.length) {
        state.words[state.currentWordIndex].background = 'gray.300';
      }
    },
    
  }
});

export const { randomWords, wordControl } = typingSlice.actions;
export default typingSlice.reducer;
