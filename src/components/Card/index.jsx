import React from 'react'
import { Box , Button,Text} from '@chakra-ui/react';
import { IoCloseSharp } from "react-icons/io5";
import { useSelector } from 'react-redux';

function Card() {
    const { correct,wrong } = useSelector((state) => state.typing);
  return (
    <div>
        <Box bg='pink' p={4} maxW='sm' boxShadow='dark-lg' height='200px' >
        <Box  display='flex' justifyContent='flex-end' alignItems='flex-start'>
    <Button colorScheme='pink'><IoCloseSharp /></Button> </Box> 

    <Box  p={4}  color='black' display='flex' justifyContent='center' >
    <Text>asad</Text>
    </Box>
    <Box  p={4}  color='black' display='flex' justifyContent='center' >
    <Text>asad</Text>
    </Box>
 


       </Box> 
        


    </div>
  )
}

export default Card
