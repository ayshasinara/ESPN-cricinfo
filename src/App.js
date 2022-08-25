
import './App.css';
import { SchedualCard } from './Components/Schedual/SchedualCard';
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  return (
    <div className="App">
    <ChakraProvider>
    <SchedualCard/>
    </ChakraProvider>
    </div>
  );
}

export default App;
