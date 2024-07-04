import React, { useEffect } from 'react';
import { Container, Box, Text } from '@chakra-ui/react';
import { useSelector, useDispatch } from 'react-redux';
import { randomWords, shiftRows, resetTimer } from '../../redux/typingSlice';

function Area() {
  const dispatch = useDispatch();
  const { words, isTurkish, currentRowIndex } = useSelector((state) => state.typing);

  useEffect(() => {
    dispatch(randomWords());
    dispatch(resetTimer());
  }, [dispatch]);

  const wordsPerRow = 10; 
  const startIndex = currentRowIndex * wordsPerRow;
  const endIndex = startIndex + wordsPerRow * 3; // 

  const visibleWords = words.slice(startIndex, endIndex);

  useEffect(() => {
    if (currentRowIndex > 0 && currentRowIndex % 3 === 0) {
      dispatch(shiftRows());
    }
  }, [currentRowIndex, dispatch]);

  return (
    <div>
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
        {visibleWords.map((word, index) => (
          <Text 
            as='span' 
            key={index} 
            mr={2} 
            fontSize='18px' 
            whiteSpace='nowrap'
            bg={word.background}
            color={word.color}
          >
            {isTurkish ? word.turkish : word.english}
          </Text>
        ))}
      </Box>
    </div>
  );
}

export default Area;


