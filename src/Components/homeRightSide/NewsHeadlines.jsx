import React from 'react'
import styled from 'styled-components'
import { IoIosArrowForward } from "react-icons/io";
function NewsHeadlines() {
    return (
        <MainWrapper>
            <HeadingWrapper>
            News Headlines
            </HeadingWrapper>
            <FlexWrapper>
                <div style={{ "color": "#04c8f5" ,"padding":"5px 0px 5px 0px"}}>
                    <IoIosArrowForward />
                </div>
                <TeamVs>
                Boult hoping he's not done with Tests
                </TeamVs>
            </FlexWrapper>
            <FlexWrapper>
                <div style={{ "color": "#04c8f5" ,"padding":"5px 0px 5px 0px"}}>
                    <IoIosArrowForward />
                </div>

                <TeamVs>
                IPL: Punjab Kings part ways with Kumble
                </TeamVs>
            </FlexWrapper>  
            <FlexWrapper>
                <div style={{ "color": "#04c8f5" ,"padding":"5px 0px 5px 0px"}}>
                    <IoIosArrowForward />
                </div>

                <TeamVs>
                Domingo denies reports of his resignation
                </TeamVs>
            </FlexWrapper>
            <FlexWrapper>
                <div style={{ "color": "#04c8f5" ,"padding":"5px 0px 5px 0px"}}>
                    <IoIosArrowForward />
                </div>

                <TeamVs>
                ICC eyes $4 billion-plus for media rights
                </TeamVs>
            </FlexWrapper>
            <FlexWrapper>
                <div style={{ "color": "#04c8f5" ,'padding':'5px 0px 5px 0px'}}>
                    <IoIosArrowForward />
                </div>

                <TeamVs>
                Lynn signs 11-game Strikers BBL deal
                </TeamVs>
            </FlexWrapper>
            <FlexWrapper>
                <div style={{ "color": "#04c8f5" ,"padding":"5px 0px 5px 0px"}}>
                    <IoIosArrowForward />
                </div>

                <TeamVs>
                Buzz: Rizwan shows off his shots
                </TeamVs>
            </FlexWrapper>
           

        </MainWrapper>
    )
}

export default NewsHeadlines
const MainWrapper = styled.div`
    margin: 30px;
    width:90%;
  padding-bottom: 4px;
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
font-size:11px;
font-weight: 500;
padding: 5px 0px 5px 0px;
`

