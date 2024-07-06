import React, { useState } from 'react';
import { Input } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { wordControl, startTimer } from '../../redux/typingSlice';

function TextBox() {
  const dispatch = useDispatch();
  const isTimerRunning = useSelector((state) => state.typing.isTimerRunning);
  const [input, setInput] = useState('');

  const handleKeyDown = (event) => {
    if (event.key === ' ' || event.key === 'Spacebar') {
      event.preventDefault(); // Boşluk tuşunun varsayılan işlevini engellemek için
      if (input.trim() === '') {
        return;
      }
      if (!isTimerRunning) {
        dispatch(startTimer());
      }
      dispatch(wordControl(input));
      setInput('');
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
          outline: 'none',
        }}
      />
    </div>
  );
}

export default TextBox;
