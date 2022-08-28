import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'


import styled from 'styled-components'
import { getUpComingDataSat } from '../../Redux/data/action'
import SingleUpcomingComponent from '../UpcomingSun/SingleUpcomingComponent'
function SatUpcoming() {
  const data= useSelector(state=>state.AppDataReducer.UpcomingSat)
  console.log(data)
  const dispatch =useDispatch()
  
useEffect(()=>{
dispatch(getUpComingDataSat())
},[])
  return (
    <div>
      <div style={{ 'backgroundColor': '#edeaf5', 'width': '120px', 'borderRadius': '10px', 'marginLeft': '45%', 'marginTop': '40px' }}>
                        Sun, 29 Aug
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

export default SatUpcoming
const MainWrapper = styled.div`
   margin: 30px ;
    width:95%;
 
    padding-top: 20px;
  padding-bottom: 20px;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
`