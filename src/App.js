import './App.css';

import Navbar from './Components/Navbar';
import MatchDetail from './Components/ScorePage/MatchDetail';
import { Scorecard } from './Pages/Scorepage/Scorecard';
import Footer from './Pages/Footer';
import News from './Pages/News';
import { SchedualFilter } from './Components/Schedual/SchedualFilter';
import MainRoutes from './Pages/MainRoutes';
import { Carousel1 } from './Components/Schedual/Carousel1';
import TeamsRightComponent from './Components/Teams/International';
import International from './Components/Teams/International';
import Ipl from './Components/Teams/Ipl';
import PopulerWomens from './Components/Teams/PopulerWomens';
import TeamsPage from './Pages/TeamsPage';



function App() {
  return (
    <div className="App">

  <TeamsPage/>

      </div>
  );

}
export default App;
