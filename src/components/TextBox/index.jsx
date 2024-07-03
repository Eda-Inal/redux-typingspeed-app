import { Input } from '@chakra-ui/react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {  wordControl } from '../../redux/typingSlice';

function TextBox() {
  const dispatch = useDispatch();
  const correct = useSelector((state) => state.typing.correct);
  console.log("correct", correct);
  const [input, setInput] = useState("");

  
  const handleKeyDown = (event) => {
    if (event.key === ' ') {
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
          maxW='800px'
         
         
          _focusVisible={{
            outline: "none",
          }}
        />
      
    </div>
  );
}

export default TextBox;
