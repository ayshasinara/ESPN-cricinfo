
import React from 'react'
import IrelandNetherlands from '../Components/LivescorePageComponent/IrelandNetherlands'
import MajorLeagueTournament from '../Components/LivescorePageComponent/MajorLeagueTournament'

import MenCompetition from '../Components/ResultPage/MenCompetition'
import RightPartH from '../Components/RightPartH'
function Result() {
  return (
    <div style={{'display':'flex'}}>
   <div>
   <MenCompetition/>
   <MajorLeagueTournament/>
    <IrelandNetherlands/>
    </div>
    <RightPartH/>
    </div>
  )
}

export default Result