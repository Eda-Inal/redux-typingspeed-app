
import { Input, Center } from '@chakra-ui/react'

function TextBox() {
  return (
    <div>
      <Center>
         <Input mt={12}
          centerContent maxW='3xl'
          size='lg'
          _focusVisible={{
            outline: "none",
       }}
          />
      </Center>
     
    </div>
  )
}

export default TextBox;
