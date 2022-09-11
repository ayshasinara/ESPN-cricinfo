import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { getDataMajor } from '../../Redux/data/action'

import SingleComponentsMajor from './SingleComponentsMajor'



function MajorLeagueTournament() {
  const dispatch=useDispatch()
  const data=useSelector(state=>state.AppDataReducer.majorTournament)
  
  useEffect(() =>{
    dispatch(getDataMajor());
  },[])
  return (
    <MainWrapper>
  <HeadingWrapper>
    <div>Major League Tournament</div>
  <div style={{'color':'#04c8f5','fontSize':'12px'}}>See all</div>
  </HeadingWrapper>
      <div style={{"display": "grid",
    "gridTemplateColumns": "auto auto"}}>
  {data.map((iteam)=>{
    return <SingleComponentsMajor iteam={iteam} ket={iteam.id} />
  }
  )}
  </div>
    </MainWrapper>
  )
}

export default MajorLeagueTournament
const MainWrapper = styled.div`
    margin: 30px ;
    width:95%;
 
    padding-top: 20px;
  padding-bottom: 20px;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
`
const HeadingWrapper = styled.div`
display: flex;
justify-content: space-between;

  text-align: left;
    font-weight: bold;
    font-size:medium;
    padding-top:8px;
    padding-bottom: 8px;
    padding-left: 16px;
    padding-right:16px;
    border-bottom: 0.1px solid #eeeff2;
`