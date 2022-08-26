
import './App.css';
import { SchedualCard } from './Components/Schedual/SchedualCard';
import { ChakraProvider } from '@chakra-ui/react'




import Navbar from './Components/Navbar';
import Footer from './Pages/Footer';
import { SchedualFilter } from './Components/Schedual/SchedualFilter';


function App() {
  return (
    <div className="App">

{/* <SchedualCard/> */}

<SchedualFilter/>

{/* <Footer/> */}
     {/* <Navbar/> */}



     {/* <Navbar/>    */}
      </div>
  );
}

export default App;
