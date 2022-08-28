import { useEffect } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import MatchDetail from './Components/ScorePage/MatchDetail';
import { Scorecard } from './Pages/Scorepage/Scorecard';
import Footer from './Pages/Footer';
import News from './Pages/News';
import { SchedualFilter } from './Components/Schedual/SchedualFilter';
import MainRoutes from './Pages/MainRoutes';


function App() {


  return (
    <div className="App">
      <Navbar/>
      <MainRoutes/>
      <Footer/>
      </div>
  );
}
export default App;
