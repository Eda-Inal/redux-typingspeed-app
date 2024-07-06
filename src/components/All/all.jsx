import React from 'react';
import { Container, Flex } from '@chakra-ui/react';
import Area from '../Container';
import TextBox from '../TextBox';
import Header from '../Header';
import Language from '../Language';
import Shuffle from '../Shuffle';
import Time from '../Time';
import Card from '../Card';
import Footer from '../Footer';

function All() {
  return (
    <div>
      <Card  />
      <Container
        maxW='3xl'
        borderRadius={12}
        bg='green.100'
        mt={28}
        centerContent
  
      >
        <Flex gap={36} alignItems={'center'}>
          <Header />
          <Language />
        </Flex>
        <Area />
        <Flex mt={10} gap='2'>
          <TextBox />
          <Shuffle />
          <Time />
        </Flex>
        <Footer/>
      </Container>
    </div>
  );
}

export default All;
