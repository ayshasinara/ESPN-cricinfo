import React from 'react'
import styled from 'styled-components'
import { IoIosArrowForward } from "react-icons/io";
function ESPNSites() {
    return (
        <MainWrapper>
            <HeadingWrapper>
            ESPN Sites
            </HeadingWrapper>
            <FlexWrapper>
                <div style={{ "color": "#04c8f5" ,"padding":"5px"}}>
                    <IoIosArrowForward />
                </div>
                <TeamVs>
                The Cricket Monthly
                </TeamVs>
            </FlexWrapper>
            <FlexWrapper>
                <div style={{ "color": "#04c8f5" ,"padding":"5px"}}>
                    <IoIosArrowForward />
                </div>

                <TeamVs>
                ESPN
                </TeamVs>
            </FlexWrapper>
           
           
        </MainWrapper>
    )
}

export default ESPNSites
const MainWrapper = styled.div`
    margin: 30px;
    width:80%;
  padding-bottom: 20px;
  border-radius: 2%;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;


`
const HeadingWrapper = styled.div`
  text-align: left;
    font-weight: 500;
    font-size: small;
    padding-top:8px;
    padding-bottom: 8px;
    padding-left: 16px;
    border-bottom: 0.1px solid #eeeff2;

   
  
`
const FlexWrapper = styled.div`
padding:5px;
display: flex;
&:hover {
    background-color: #c8eff7
  }
  &:active{
    background-color: #06acd2;
  }

    
`
const TeamVs = styled.div`
/* color: #4b4848; */
font-size:smaller;
font-weight: 385;
padding: 5px;
`

