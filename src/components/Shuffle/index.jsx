import React from 'react'
import { Button } from '@chakra-ui/react'
import { FaShuffle } from "react-icons/fa6";
function Shuffle() {
  return (
    <div>
      <Button bg="pink.300"  
          mb={10}  _hover={{ bg: 'pink.200' }}  variant='solid'>
      <FaShuffle />
  </Button>
  
    </div>
  )
}

export default Shuffle
