import React, { useEffect, useRef } from 'react';
import { Box, Text } from '@chakra-ui/react';
import { useSelector, useDispatch } from 'react-redux';
import { randomWords, resetTimer } from '../../redux/typingSlice';

function Area() {
  const dispatch = useDispatch();
  const { words, isTurkish, currentWordIndex } = useSelector((state) => state.typing);
  const wordRefs = useRef([]);
  const containerRef = useRef();

  useEffect(() => {
    dispatch(randomWords());
    dispatch(resetTimer());
  }, [dispatch]);

  useEffect(() => {
    if (wordRefs.current[currentWordIndex]) {
      const wordElement = wordRefs.current[currentWordIndex];
      const containerElement = containerRef.current;
      
      if (wordElement && containerElement) {
        const containerRect = containerElement.getBoundingClientRect();
        const wordRect = wordElement.getBoundingClientRect();

        if (wordRect.bottom > containerRect.bottom) {
          containerElement.scrollTop += wordRect.bottom - containerRect.bottom;
        }
      }
    }
  }, [currentWordIndex]);

  return (
    <Box 
      ref={containerRef}
      id='word-container' // Container'a id ekleyin
      padding={4} 
      bg='yellow.100' 
      borderRadius={5}
      marginY={3} 
      maxW='xl' 
      height={100} 
      overflow='hidden' // Kaydırma çubuğunu gizlemek için overflow'u hidden olarak ayarla
      color='black'
      whiteSpace='normal'
      wordBreak='break-word'
      position='relative' // Relative positioning for better control
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


