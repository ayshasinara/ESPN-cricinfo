import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import SingleUpcomingComponent from './SingleUpcomingComponent'
import styled from 'styled-components'
import { getUpComingData } from '../../Redux/data/action'
function SunUpcoming() {
  const data= useSelector(state=>state.AppDataReducer.UpcomingSun)
  console.log(data)
  const dispatch =useDispatch()
  
useEffect(()=>{
dispatch(getUpComingData())
},[])
  return (
    <div >
        <div style={{ 'backgroundColor': '#edeaf5', 'width': '120px', 'borderRadius': '10px', 'marginLeft': '45%' }}>
                        Sun, 28 Aug
                    </div>
    <MainWrapper>
     
      {
        data.map((iteam)=>{
          return <SingleUpcomingComponent iteam={iteam} key={iteam.id}/>
        })
      }

    </MainWrapper>
    </div>
  )
}

export default SunUpcoming
const MainWrapper = styled.div`
   margin: 30px ;
    width:95%;
 
    padding-top: 20px;
  padding-bottom: 20px;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
`