import { border } from '@chakra-ui/react'
import React from 'react'

import styled from 'styled-components'
function SingleFeaturesComponent({iteam}) {
   
  return (
    <div style={{ "border":"0.1px solid #eeeff2", "width":"100%", 'padding':'10px'}}>
        <HeadingWrapper>
        <div style={{"width":"30%" }}>
          <img src={iteam.image} style={{'width':'100%', 'height':'25vh','borderRadius':'10px' }}/>
        </div>
        <div style={{'padding':'10px'}}>
          < NewsHeading >
            {iteam.heading}
          </ NewsHeading>
 
        <div style={{'fontWeight':'400'}}>
          {iteam.para}
        </div>
       <div style={{'display':'flex' ,'justifyContent':'left', 'fontWeight':'300'}}>
        <div>{iteam.time}</div>
        <div style={{"paddingLeft":"10px"}}>{`${iteam.name}`}</div>
       </div>
        </div>
        </HeadingWrapper>
     

    </div>
  )
}

export default SingleFeaturesComponent
const HeadingWrapper = styled.div`
display: flex;

  text-align: left;
    font-weight: 500;
    font-size: small;
    padding-top:8px;
   
    padding-left: 16px;
   

height: 30vh;
text-align: left;
   
  
`
const NewsHeading=styled.div`
  font-size: 15px;
  font-weight: bold;
`