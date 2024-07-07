import React from 'react'
import { FaGithubAlt } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { Flex } from '@chakra-ui/react';

function Footer() {
  return (
    <div>
     <Flex >
        <a href="https://github.com/Eda-Inal" target="_blank" rel="noreferrer" style={{ marginRight: '8px' }}><FaGithubAlt    size={32} /></a>
         <a href="https://www.linkedin.com/in/eda-i%C5%9F%C4%B1l-inal-887a69267" target="_blank" rel="noreferrer">   <FaLinkedinIn size={32}  /> </a>
  
     </Flex>
   
    </div>
  )
}

export default Footer
