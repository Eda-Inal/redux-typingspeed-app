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
    language : "turkish",
    isTurkish : true,
    timer : 60,
    isTimerRunning: false,
  },
  reducers: {
    randomWords: (state) => {
      const resetWords = state.words.map(word => ({ ...word, color: 'black', background: "none" }));
      const shuffledWords = [...resetWords];
    
      for (let i = shuffledWords.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledWords[i], shuffledWords[j]] = [shuffledWords[j], shuffledWords[i]];
      }
      state.currentWordIndex = 0; 
      state.words = shuffledWords;
      if (shuffledWords.length > 0) {
        shuffledWords[0].background = 'gray.300';
      }
    },
    
      
    wordControl: (state, action) => {
      const item = action.payload.trim();
      const currentWord = state.words[state.currentWordIndex];
    
      if (currentWord.turkish === item || currentWord.english === item) {
        currentWord.color = 'green';
        state.correct += 1;
      } else {
        currentWord.color = 'red';
        state.false += 1;
      }
    
      currentWord.background = 'none';
      state.currentWordIndex += 1;
    
      if (state.currentWordIndex < state.words.length) {
        state.words[state.currentWordIndex].background = 'gray.300';
      }
    },
    
    languageControl : (state,action) => {
const selectedLanguage = action.payload;
if(selectedLanguage === "turkish") {
state.isTurkish = true;
state.language = "turkish";

}
else{
    state.isTurkish = false;
    state.language = "english";
}

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
    
  }
});

export const { randomWords, wordControl,languageControl, decrementTimer,resetTimer,startTimer, resetCurrentWordIndex} = typingSlice.actions;
export default typingSlice.reducer;
