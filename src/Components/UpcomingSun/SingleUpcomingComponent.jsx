import React from 'react'
import styled from 'styled-components'

function SingleUpcomingComponent({iteam}) {
  return (
    <div>
        <div style={{"display":"flex", 'justifyContent':'space-between',"border-bottom": "0.1px solid #eeeff2","padding":"20px",'textAlign':'left'}}>
        <div>
            <div>{iteam.time}</div>
            <SubDivWrapper style={{"display":"flex"}}><div>{iteam.GMT}</div>
            <div>{iteam.localtime}</div>
            </SubDivWrapper>
  
        </div>
        <div>
            <div>{iteam.teams}</div>
            <SubDivWrapper>{iteam.dateAndtime}</SubDivWrapper>
        </div>
        <div>{iteam.competition}</div>
        </div>
    </div>
  )
}

export default SingleUpcomingComponent
const SubDivWrapper=styled.div`
  font-size: 10px;
  font-weight: 100;
  
`