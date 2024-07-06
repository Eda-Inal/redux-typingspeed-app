import React from 'react';
import { Box, Button, Text, Flex } from '@chakra-ui/react';
import { IoCloseSharp } from "react-icons/io5";
import { useSelector, useDispatch } from 'react-redux';
import { toggleCardVisibility, randomWords } from '../../redux/typingSlice';

function Card() {
  const { correct, wrong, isCardVisible } = useSelector((state) => state.typing);
  const dispatch = useDispatch();

  if (!isCardVisible) return null;

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
          colorScheme='pink'
          onClick={() => {
            dispatch(toggleCardVisibility())
            dispatch(randomWords())
          
          }}
        >
          <IoCloseSharp />
        </Button>
        <Text fontSize='2xl' fontWeight='bold' mb={4}>
          Game Over
        </Text>
        <Text fontSize='lg'>Correct: {correct}</Text>
        <Text fontSize='lg'>Wrong: {wrong}</Text>
      </Box>
    </Box>
  );
}

export default Card;

