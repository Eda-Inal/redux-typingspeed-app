import { createSlice } from "@reduxjs/toolkit";
import words from "../words/words.json";

export const typingSlice = createSlice({
  name: 'typing',
  initialState: {
    words: []
  },
  reducers: {
    randomWords: (state) => {
      const randomWords = [];
      for (let i = 0; i < 300; i++) {
        const randomIndex = Math.floor(Math.random() * words.length);
        randomWords.push(words[randomIndex].turkish);  // Türkçe kelimeleri kullanıyoruz
      }
      state.words = randomWords;
    }
  }
});

export const { randomWords } = typingSlice.actions;
export default typingSlice.reducer;
