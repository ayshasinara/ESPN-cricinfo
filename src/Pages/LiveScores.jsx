import { Flex } from '@chakra-ui/react'
import React from 'react'
import IrelandNetherlands from '../Components/LivescorePageComponent/IrelandNetherlands'
import MajorLeagueTournament from '../Components/LivescorePageComponent/MajorLeagueTournament'
import NepalKenya from '../Components/LivescorePageComponent/NepalKenya'
import TopEvents from '../Components/LivescorePageComponent/TopEvents'
import RightPartH from '../Components/RightPartH'
function LiveScores() {
  return (
    <div style={{'display':'flex',"flexFlow":"wrap"}}>
      <div style={{'width':'75%'}}>
    <TopEvents/>
    <NepalKenya/>
    <MajorLeagueTournament/>
    <IrelandNetherlands/>
    </div >
    <div style={{'width':'25%'}}>
    <RightPartH/>
    </div>
  
    </div>
  )
}

export default LiveScores