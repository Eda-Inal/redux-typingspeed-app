import { Input } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { wordControl, startTimer, setInput } from '../../redux/typingSlice';

function TextBox() {
  const dispatch = useDispatch();
  const correct = useSelector((state) => state.typing.correct);
  const input = useSelector((state) => state.typing.input);
  const isTimerRunning = useSelector((state) => state.typing.isTimerRunning);
  console.log("correct", correct);

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
      dispatch(setInput(""));  // Input'u sıfırla
    } else {
      dispatch(setInput(value));  // Input değerini güncelle
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
