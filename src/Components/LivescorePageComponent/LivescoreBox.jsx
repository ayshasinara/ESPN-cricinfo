import React from 'react'
import styled from 'styled-components'
function LivescoreBox() {
    
  return (
    <MainWrapper>
  <HeadingWrapper>
  Top Events
</HeadingWrapper>
{
    //map here  
}
    </MainWrapper>
  )
}

export default LivescoreBox
const MainWrapper = styled.div`
    margin: 30px ;
    width:70%;
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