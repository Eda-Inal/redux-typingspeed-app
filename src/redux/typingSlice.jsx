import { createSlice } from "@reduxjs/toolkit";
import words from "../words/words.json";

const wordsWithColor = words.map(word => ({ ...word, color: 'black', background: "none" }));

export const typingSlice = createSlice({
  name: 'typing',
  initialState: {
    words: wordsWithColor,
    correct: 0,
    wrong: 0,
    currentWordIndex: 0,
    currentRowIndex: 0,
    language: "turkish",
    isTurkish: true,
    timer: 60,
    isCardVisible: false,
    isTimerRunning: false,
    input : ""
  },
  reducers: {
    randomWords: (state) => {
      const resetWords = state.words.map(word => ({ ...word, color: 'black', background: "none" }));
      const shuffledWords = [...resetWords];
      state.correct = 0;
      state.wrong = 0;
    
      for (let i = shuffledWords.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledWords[i], shuffledWords[j]] = [shuffledWords[j], shuffledWords[i]];
      }
      state.currentWordIndex = 0;
      state.currentRowIndex = 0;
      state.words = shuffledWords;
      if (shuffledWords.length > 0) {
        shuffledWords[0].background = 'gray.300';
      }
    },
    setInput: (state, action) => {
      state.input = action.payload;
    }
    ,
    wordControl: (state, action) => {
      const item = action.payload.trim();
      const currentWord = state.words[state.currentWordIndex];
    
      if (currentWord.turkish === item || currentWord.english === item) {
        currentWord.color = 'green';
        state.correct += 1;
      } else {
        currentWord.color = 'red';
        state.wrong += 1;
      }
    
      currentWord.background = 'none';
      state.currentWordIndex += 1;
    
      if (state.currentWordIndex < state.words.length) {
        state.words[state.currentWordIndex].background = 'gray.300';
      }

      const wordsPerRow = 9; 
      if (state.currentWordIndex % wordsPerRow === 0) {
        state.currentRowIndex += 1;
      }

      if (state.currentWordIndex >= state.words.length) {
        state.words.push(...state.words.splice(0, state.currentWordIndex));
        state.currentWordIndex = 0;
        state.currentRowIndex = 0;
      }
    },
    languageControl: (state, action) => {
      const selectedLanguage = action.payload;
      state.isTurkish = selectedLanguage === "turkish";
      state.language = selectedLanguage;
    },
    startTimer: (state) => {
      state.isTimerRunning = true;
    },
    decrementTimer: (state) => {
      if (state.timer > 0) {
        state.timer--;
      }
    },
    resetTimer: (state) => {
      state.timer = 60;
      state.isTimerRunning = false;
    },
    resetCurrentWordIndex: (state) => {
      state.currentWordIndex = 0;
    },
    toggleCardVisibility: (state) => {
      state.isCardVisible = !state.isCardVisible;
    },
  }
});

export const { randomWords, wordControl, languageControl, decrementTimer, resetTimer, startTimer, resetCurrentWordIndex, toggleCardVisibility,setInput } = typingSlice.actions;
export default typingSlice.reducer;
