import React from 'react';
import { Button } from '@chakra-ui/react';
import { MdOutlineRestartAlt } from "react-icons/md";
import { randomWords, resetTimer,setInput } from '../../redux/typingSlice';
import { useDispatch } from 'react-redux';

function Shuffle() {
  const dispatch = useDispatch();

  const handleRestart = () => {
    dispatch(randomWords());
    dispatch(resetTimer());
    dispatch(setInput("")); 

    // Kelimelerin bulunduğu container'ın kaydırma konumunu sıfırlayın
    const container = document.getElementById('word-container');
    if (container) {
      container.scrollTop = 0;
    }
  };

  return (
    <div>
      <Button 
        bg="pink.300"
        mb={10}
        _hover={{ bg: 'pink.200' }}
        fontSize={20}
        variant='solid'
        onClick={handleRestart} // Restart işlemi için handleRestart fonksiyonunu kullan
      >
        <MdOutlineRestartAlt />
      </Button>
    </div>
  );
}

export default Shuffle;
