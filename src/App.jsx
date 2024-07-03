import { useSelector } from "react-redux";
import All from "./components/All/all";
import { ChakraProvider } from "@chakra-ui/react";
import {
  ChakraBaseProvider,
  extendBaseTheme,
  theme as chakraTheme,
} from '@chakra-ui/react'





function App() {
  const {value} = useSelector((state) => state.typing)
  return (
    <div className="App">
      <ChakraProvider>
       <All />
      </ChakraProvider>
     <h1>{value}</h1>
    </div>
  );
}

export default App;
