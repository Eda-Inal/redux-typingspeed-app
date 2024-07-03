import React from 'react'
import Area from '../Container'
import TextBox from '../TextBox';
import Header from '../Header';
import { Container, Flex, Spacer } from '@chakra-ui/react';
import Language from '../Language';
import Shuffle from '../Shuffle';
import Time from '../Time';


function All() {
  return (
    <div>
         <Container maxW='3xl'
         borderRadius={12}
          bg='pink.100' 
          overflow='hidden'
         mt={28}
        
           centerContent>
        
<Flex  gap={36} alignItems={'center'}>


<Header/>


<Language/>

</Flex>

      <Area/>
      <Flex mt={10}   gap='2'>
     
      <TextBox/>
    
      <Shuffle/>
      <Time/>
      </Flex>
     

         </Container>
      
  
    </div>
  )
}

export default All
