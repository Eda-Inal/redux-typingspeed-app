import React from 'react';
import { Box, Button, Text } from '@chakra-ui/react';
import { IoCloseSharp } from "react-icons/io5";
import { useSelector, useDispatch } from 'react-redux';
import { toggleCardVisibility, randomWords,resetTimer } from '../../redux/typingSlice';

function Card() {
  const { correct, wrong, isCardVisible } = useSelector((state) => state.typing);
  const dispatch = useDispatch();

  if (!isCardVisible) return null;
 const handleCard = () => {
    dispatch(toggleCardVisibility());
    dispatch(randomWords());
    dispatch(resetTimer());
    const container = document.getElementById('word-container');
    if (container) {
      container.scrollTop = 0;
    }
  }
  return (
    <Box
      position='fixed'
      top={0}
      left={0}
      width='100%'
      height='100%'
      display='flex'
      justifyContent='center'
      alignItems='center'
      bg='rgba(0, 0, 0, 0.5)'
      zIndex={1000}
    >
      <Box
        bg='white'
        p={6}
        borderRadius='md'
        boxShadow='lg'
        maxW='sm'
        width='100%'
        maxWidth='400px'
        textAlign='center'
        position='relative'
      >
        <Button
          position='absolute'
          top={2}
          right={2}
          colorScheme='green'
          onClick={()=>handleCard()}
        >
          <IoCloseSharp />
        </Button>
        <Text fontSize='2xl' fontWeight='bold' mb={4}>
          Game Over
        </Text>
        <Text fontSize='lg'>Correct: {correct}</Text>
        <Text fontSize='lg'>Wrong: {wrong}</Text>
        <Button colorScheme='green'
         onClick={()=>handleCard()}
        >Play Again!</Button>
      </Box>
    </Box>
  );
}

export default Card;

