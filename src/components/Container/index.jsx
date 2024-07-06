import React, { useEffect, useRef } from 'react';
import { Box, Text } from '@chakra-ui/react';
import { useSelector, useDispatch } from 'react-redux';
import { randomWords, resetTimer } from '../../redux/typingSlice';

function Area() {
  const dispatch = useDispatch();
  const { words, isTurkish, currentWordIndex } = useSelector((state) => state.typing);
  const wordRefs = useRef([]);

  useEffect(() => {
    dispatch(randomWords());
    dispatch(resetTimer());
  }, [dispatch]);

  useEffect(() => {
    if (wordRefs.current[currentWordIndex]) {
      wordRefs.current[currentWordIndex].scrollIntoView({ behavior: 'smooth' });
    }
  }, [currentWordIndex]);

  return (
    <Box 
      padding={4} 
      bg='yellow.100' 
      borderRadius={5}
      marginY={3} 
      maxW='xl' 
      height={100} 
      overflow='hidden' 
      color='black'
      whiteSpace='normal'
      wordBreak='break-word'
    >
      {words.map((word, index) => (
        <Text 
          as='span' 
          key={index} 
          mr={2} 
          fontSize='19px' 
          whiteSpace='nowrap'
          bg={word.background}
          color={word.color}
          ref={el => (wordRefs.current[index] = el)}
        >
          {isTurkish ? word.turkish : word.english}
        </Text>
      ))}
    </Box>
  );
}

export default Area;

