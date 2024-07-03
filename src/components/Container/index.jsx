import React, { useEffect } from 'react';
import { Container, Box, Text } from '@chakra-ui/react';
import { useSelector, useDispatch } from 'react-redux';
import { randomWords } from '../../redux/typingSlice';

function Area() {
  const dispatch = useDispatch();
  const { words} = useSelector((state) => state.typing);

  useEffect(() => {
    dispatch(randomWords());

    
  }, [dispatch]);

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
          {words.map((word, index) => (
            <Text 
              as='span' 
              key={index} 
              mr={2} 
              fontSize='18px' 
              whiteSpace='nowrap'
              bg={word.background}
              color={word.color} // Kelimenin rengini buradan alalım
            >
              {word.turkish}
            </Text>
          ))}
        </Box>
      
    </div>
  );
}

export default Area;

