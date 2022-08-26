import { Flex } from '@chakra-ui/react'
import React from 'react'
import IrelandNetherlands from '../Components/LivescorePageComponent/IrelandNetherlands'
import MajorLeagueTournament from '../Components/LivescorePageComponent/MajorLeagueTournament'
import NepalKenya from '../Components/LivescorePageComponent/NepalKenya'
import TopEvents from '../Components/LivescorePageComponent/TopEvents'
import RightPartH from '../Components/RightPartH'
function LiveScores() {
  return (
    <div style={{'display':'flex'}}>
      <div>
    <TopEvents/>
    <NepalKenya/>
    <MajorLeagueTournament/>
    <IrelandNetherlands/>
    </div>
    <RightPartH/>
    </div>
  )
}

export default LiveScores