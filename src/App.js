import './App.css';

import Navbar from './Components/Navbar';

import Footer from './Pages/Footer';

import { SchedualFilter } from './Components/Schedual/SchedualFilter';
import MainRoutes from './Pages/MainRoutes';




function App() {
  return (
    <div className="App">

      <SchedualFilter/>
      <Navbar/>
      <MainRoutes/>
      <Footer/>
      {/* <Scorecard/> */}

      </div>
  );

}
export default App;
