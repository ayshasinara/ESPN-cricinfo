import { Box } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import MatchDetail from '../../Components/ScorePage/MatchDetail'

export const Scorecard = () => {

  return (
    <div style={{width: '85%',margin:"auto", marginTop: '10px'}}>
    <Box w="70%">
    <MatchDetail/>

</Box>
    </div>
  )
}
