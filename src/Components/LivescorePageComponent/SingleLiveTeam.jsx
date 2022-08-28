import React from 'react'
import SubComponent from './SubComponent'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
function SingleLiveTeam({iteam}) {
  const navigate= useNavigate();

  const handleScorecard=()=>{
    navigate("/scorecard")
  }
    
  return (
    <div onClick={handleScorecard} style={{ "border":"0.1px solid #eeeff2", "width":"100%"}}>
        <HeadingWrapper>
        <div style={{"fontWeight":"bold", "fontSize":"10px"}}>RESULT</div>
        <div style={{"fontSize":"10px"}}>{iteam.date}</div>
        <SubComponent flag={iteam.team1flag} team={iteam.team1} score={iteam.team1score}/>
        <SubComponent flag={iteam.team2flag} team={iteam.team2} score={iteam.team2score}/>
        <div style={{"textAlign":"start","fontSize":"small"}}>  {iteam.wonBy}</div>
        </HeadingWrapper>
        <div style={{"textAlign":"left",'padding':'2%','fontSize':'12px','fontWeight':'500'}}>
        Series Home
        </div>


    </div>
  )
}

export default SingleLiveTeam
const HeadingWrapper = styled.div`
  text-align: left;
    font-weight: 500;
    font-size: small;
    padding-top:8px;
    padding-bottom: 8px;
    padding-left: 16px;
    border-bottom: 0.1px solid #eeeff2;

height: 180px;
text-align: left;
   
  
`