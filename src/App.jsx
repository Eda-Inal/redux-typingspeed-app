import { useSelector } from "react-redux";


function App() {
  const {value} = useSelector((state) => state.typing)
  return (
    <div className="App">
     <h1>{value}</h1>
    </div>
  );
}

export default App;
