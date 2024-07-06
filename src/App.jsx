import { useSelector } from "react-redux";
import './App.css';
import All from "./components/All/all";
import theme from "./Theme";
import { ChakraProvider } from "@chakra-ui/react";





function App() {
  const {value} = useSelector((state) => state.typing)
  return (
    <div className="App" >
      <ChakraProvider theme={theme} >
       <All  />
      </ChakraProvider>
     <h1>{value}</h1>
    </div>
  );
}

export default App;
