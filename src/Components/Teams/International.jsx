import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'



import SingleTeams from './SingleTeams'


function International() {
    const data=[
        {
          "id": 1,
         "flag":"https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/313100/313128.logo.png",
         "countryname":"India"
        },
        {
          "id": 2,
         "flag":"https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/321000/321005.png",
         "countryname":"Afghanistan"
        },
        {
          "id": 3,
         "flag":"https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/340400/340493.png",
         "countryname":"Australia"
        },
        {
          "id": 4,
         "flag":"https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/341400/341456.png",
         "countryname":"Bangladesh"
        },
        {
          "id": 5,
         "flag":"https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/313100/313114.logo.png",
         "countryname":"England"
        },
        {
          "id": 6,
         "flag":"https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/313100/313149.logo.png",
         "countryname":"Ireland"
        },
        {
          "id": 7,
         "flag":"https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/340500/340505.png",
         "countryname":"New Zealand"
        },
        {
          "id": 8,
         "flag":"https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/313100/313129.logo.png",
         "countryname":"Pakistan"
        },
        {
          "id": 9,
         "flag":"https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/313100/313150.logo.png",
         "countryname":"Scotland"
        },
        {
          "id": 10,
         "flag":"https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/313100/313125.logo.png",
         "countryname":"South Africa"
        },
        {
          "id": 11,
         "flag":"https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/340000/340047.png",
         "countryname":"Srilanka"
        },
        {
          "id": 12,
         "flag":"https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/313100/313147.logo.png",
         "countryname":"United Arab Emirates"
        },
        {
          "id": 13,
         "flag":"https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/317600/317615.png",
         "countryname":"West Indies"
        },
        {
          "id": 14,
         "flag":"https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/340500/340503.png",
         "countryname":"Zimbabwe"
        }
        
      ]
 
  
  return (
    <MainWrapper>
  <HeadingWrapper>
  POPULAR INTERNATIONAL TEAMS
  </HeadingWrapper>
      <div style={{"display": "grid",
    "gridTemplateColumns": "auto auto auto"}}>
  {data.map((iteam)=>{
    return <SingleTeams iteam={iteam} ket={iteam.id} />
  }
  )}
  </div>
    </MainWrapper>
  )
}

export default International
const MainWrapper = styled.div`
    margin: 30px ;
    width:95%;
 
    padding-top: 10px;

  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
`
const HeadingWrapper = styled.div`
  text-align: left;
    font-weight: bold;
    font-size:medium;
    
    padding-bottom: 8px;
    padding-left: 16px;
    border-bottom: 0.1px solid #eeeff2;
`