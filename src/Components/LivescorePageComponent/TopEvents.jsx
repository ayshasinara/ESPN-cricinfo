import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { getData } from '../../Redux/data/action'

import SingleLiveTeam from './SingleLiveTeam'


function TopEvents() {
  const dispatch=useDispatch()
  const data=useSelector(state=>state.AppDataReducer.liveScore)
 
  useEffect(() =>{
    dispatch(getData());
  },[])
  return (
    <MainWrapper>
  <HeadingWrapper>
  Top Events
  </HeadingWrapper>
      <div style={{"display": "grid",
    "gridTemplateColumns": "auto auto"}}>
  {data.map((iteam)=>{
    return <SingleLiveTeam iteam={iteam} ket={iteam.id} />
  }
  )}
  </div>
    </MainWrapper>
  )
}

export default TopEvents
const MainWrapper = styled.div`
    margin: 30px ;
    width:95%;
 
    padding-top: 20px;
  padding-bottom: 20px;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
`
const HeadingWrapper = styled.div`
  text-align: left;
    font-weight: bold;
    font-size:medium;
    padding-top:8px;
    padding-bottom: 8px;
    padding-left: 16px;
    border-bottom: 0.1px solid #eeeff2;
`