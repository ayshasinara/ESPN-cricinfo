import React from 'react'
import styled from 'styled-components'
import { BiSearchAlt2 } from "react-icons/bi";
function AskQuestionBox() {
  return (
    <MainWrapper>
        <img src='https://www.espncricinfo.com/ask/images/askcriclogo.png' alt='asl cricinfo'/>
<div style={{'padding':'10px'}}>Which batter has the highest average in men's ODIs (min 30 innings)?</div>
<ButtonWrapper > <BiSearchAlt2 style={{"padding":"5px"}} /> <div >Ask a question</div> </ButtonWrapper>
    </MainWrapper>
  )
}

export default AskQuestionBox
const MainWrapper = styled.div`
    margin: 30px ;
    width:80%;
    padding-top: 20px;
  padding-bottom: 20px;
  border-radius: 2%;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
`
const ButtonWrapper = styled.div`
display: flex;
justify-content:center ;
width:80%;
height: 5vh;
    background-color: #fff;
    border:0.5px solid #06acd2;
    border-radius: 30px;
    margin: auto;
    padding: 5px;
    color: #06acd2;
    &:hover {
    background-color: #c8eff7;
 
   
  }
 
`