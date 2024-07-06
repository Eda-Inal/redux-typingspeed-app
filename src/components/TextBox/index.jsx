import { Input } from '@chakra-ui/react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { wordControl, startTimer } from '../../redux/typingSlice';

function TextBox() {
  const dispatch = useDispatch();
  const correct = useSelector((state) => state.typing.correct);
  const isTimerRunning = useSelector((state) => state.typing.isTimerRunning);
  console.log("correct", correct);
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    if (value.includes(' ')) {  // Eğer input boşluk içeriyorsa, işlemi tetikle
      const word = value.trim(); // Kelimeyi alın ve boşlukları temizleyin
      if (word === '') {  // Eğer kelime boşsa, işlemi durdur
        return;
      }
      if (!isTimerRunning) {
        dispatch(startTimer());
      }
      dispatch(wordControl(word));
      setInput("");  // Input'u sıfırla
    } else {
      setInput(value);  // Input değerini güncelle
    }
  };

  return (
    <div>
      <Input
        bg="white"
        value={input}
        onChange={handleChange}
        maxWidth='400px'
        _focusVisible={{
          outline: "none",
        }}
      />
    </div>
  );
}

export default TextBox;
