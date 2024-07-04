import React from 'react'
import { Select } from '@chakra-ui/react';
import { languageControl, randomWords, resetTimer } from '../../redux/typingSlice';
import { useDispatch,useSelector } from 'react-redux';

function Language() {
    const dispatch = useDispatch();
     const isTurkish = useSelector((state) => state.typing.isTurkish);
    console.log("konsol" ,isTurkish);
    const handleLanguage = (e) => {
console.log(e.target.value);
dispatch(languageControl(e.target.value));
    }
    const changeRandomWords= () => {
dispatch(randomWords());
dispatch(resetTimer());

    }
  return (
    <div>

<Select bg="pink.300" _hover={{ bg: 'pink.200' }} 
onChange={(event) => {
  handleLanguage(event);
  changeRandomWords();
}}>
  <option value='turkish'>Türkçe</option>
  <option value='english'>English</option>
  
</Select>
 
    </div>
  )
}

export default Language
