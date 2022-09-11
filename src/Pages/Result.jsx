
import React from 'react'
import IrelandNetherlands from '../Components/LivescorePageComponent/IrelandNetherlands'
import MajorLeagueTournament from '../Components/LivescorePageComponent/MajorLeagueTournament'

import MenCompetition from '../Components/ResultPage/MenCompetition'
import RightPartH from '../Components/RightPartH'
function Result() {
  return (
    <div style={{'display':'flex',"flexFlow":"wrap"}}>
   <div style={{'width':'75%'}}>
   <MenCompetition/>
   <MajorLeagueTournament/>
    <IrelandNetherlands/>
    </div >
    <div style={{'width':'25%'}}>
    <RightPartH/>
    </div>
    
    </div>
  )
}

export default Result