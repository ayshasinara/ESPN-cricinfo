import React from 'react'
import SubComponent from './SubComponent'
import styled from 'styled-components'
import SubcomponentMajorLeagueTournament from './SubcomponentMajorLeagueTournament'
function SingleComponentsMajor({iteam}) {
   
  return (
    <div style={{ "border":"0.1px solid #eeeff2", "width":"100%"}}>
        <HeadingWrapper>
        <div style={{"color":"red","fontWeight":"bold", "fontSize":"10px"}}>{iteam.status}</div>
        <div style={{"fontSize":"10px"}}>{iteam.subheading}</div>
        <SubcomponentMajorLeagueTournament flag={iteam.flag1} team={iteam.team1} score={iteam?.team1score}/>
        <SubcomponentMajorLeagueTournament flag={iteam.flag2} team={iteam.team2} score={iteam?.team2score}/>
        <div style={{"textAlign":"start","fontSize":"small"}}>  {iteam.wonBy}</div>
        </HeadingWrapper>
        <div style={{"textAlign":"left",'padding':'2%','fontSize':'12px','fontWeight':'500'}}>
        Series Home
        </div>


    </div>
  )
}

export default SingleComponentsMajor
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