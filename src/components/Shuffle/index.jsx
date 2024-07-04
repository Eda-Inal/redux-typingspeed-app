import React from 'react'
import { Button } from '@chakra-ui/react'
import { FaShuffle } from "react-icons/fa6";
import { randomWords,resetTimer } from '../../redux/typingSlice';
import { useDispatch } from 'react-redux';
function Shuffle() {
    const dispatch = useDispatch();
  return (
    <div>
      <Button bg="pink.300"  
          mb={10}  _hover={{ bg: 'pink.200' }}  variant='solid'>
      <FaShuffle onClick={() =>{ 
        dispatch(randomWords());
        dispatch(resetTimer());

        }} />
  </Button>
  
    </div>
  )
}

export default Shuffle
