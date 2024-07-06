import { Input } from '@chakra-ui/react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {  wordControl,startTimer } from '../../redux/typingSlice';

function TextBox() {
  const dispatch = useDispatch();
  const correct = useSelector((state) => state.typing.correct);
  const isTimerRunning = useSelector((state) => state.typing.isTimerRunning);
  console.log("correct", correct);
  const [input, setInput] = useState("");

  
  const handleKeyDown = (event) => {
    if (event.key === ' ') {
      if (input.trim() === '') {  // Eğer input boşsa, işlemi durdur
        return;
      }
      if (!isTimerRunning) {
        dispatch(startTimer());
      }
      dispatch(wordControl(input));
  
      setInput("");
    }
  };
  

  return (
    <div>
    
        <Input 
        
          bg="white"
          onKeyDown={handleKeyDown}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          centerContent
          maxWidth='400px'
         
         
          _focusVisible={{
            outline: "none",
          }}
        />
      
    </div>
  );
}

export default TextBox;
