import { Box } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import RightPartH from '../../Components/RightPartH'
import MatchDetail from '../../Components/ScorePage/MatchDetail'

export const Scorecard = () => {

  return (
    <div style={{width: '100%',margin:"auto", marginTop: '10px',display:"flex", justifyContent:"space-between"}}>
      <div style={{width:"65%", paddingLeft:"20px"}}>
      <MatchDetail/>
      </div>
    <div style={{width:"28%"}}>
    <RightPartH/>
    </div>
    

    </div>
  )
}
