import React from 'react'
import SingleComponentsMajor from './SingleComponentsMajor'
import styled from 'styled-components'
function NepalKenya() {
    const data={
        id:1,
        status:"Live",
        subheading:"2nd T20I, Nairobi (Gym), August 26, 2022, Nepal tour of Kenya",
        team1:"Kenya",
        team2:'Nepal',
        flag1:"https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/313100/313146.logo.png",
        flag2:"https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/319900/319958.png",
}

  return (
    <MainWrapper>
         <HeadingWrapper>
    <div>Nepal tour of Kenya
</div>
  <div style={{'color':'#04c8f5','fontSize':'12px'}}>See all</div>
  </HeadingWrapper>
<SingleComponentsMajor iteam={data}/>
</MainWrapper>
  )
}

export default NepalKenya
const MainWrapper = styled.div`

    margin: 30px ;
    width:95%;
    padding-top: 20px;
  padding-bottom: 20px;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
`
const HeadingWrapper = styled.div`
display: flex;
justify-content: space-between;
  text-align: left;
    font-weight: bold;
    font-size:medium;
    padding-top:8px;
    padding-bottom: 8px;
    padding-left: 16px;
    padding-right: 16px;
    border-bottom: 0.1px solid #eeeff2;
`