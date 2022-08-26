
import './App.css';

import { SchedualCard } from './Components/Schedual/SchedualCard';
import { ChakraProvider } from '@chakra-ui/react'





import Navbar from './Components/Navbar';
import Footer from './Pages/Footer';
import HomePageLeft from "./Components/HomePageLeft"
import RightPartH from './Components/RightPartH';
import LivescoreBox from "./Components/LivescoreBox"
import HomePage from "./Pages/HomePage"


function App() {
  return (
    <div className="App">
<Navbar/>
<HomePage />



     
    </div>
  );
}

export default App;
