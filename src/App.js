import './App.css';

import Navbar from './Components/Navbar';

import Footer from './Pages/Footer';

import { SchedualFilter } from './Components/Schedual/SchedualFilter';
import MainRoutes from './Pages/MainRoutes';
import { BottomFooter } from './Components/BottomFooter';




function App() {
  return (
    <div className="App">

      <SchedualFilter/>
      <Navbar/>
      <MainRoutes/>
      <Footer/>
      <BottomFooter/>
      </div>
  );

}
export default App;
