import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'



import SingleTeams from './SingleTeams'


function PopulerWomens() {
    const data=[
        {
          "id": 1,
         "flag":"https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/313200/313225.logo.png",
         "countryname":"Australia Women"
        },
        {
          "id": 2,
         "flag":"https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/313400/313401.logo.png",
         "countryname":"Bangladesh Women"
        },
        {
          "id": 3,
         "flag":"https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/313200/313261.logo.png",
         "countryname":"England Women"
        },
  
        {
          "id": 4,
         "flag":"https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/313300/313309.logo.png",
         "countryname":"India Women"
        },
        {
          "id": 5,
         "flag":"https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/313300/313335.logo.png",
         "countryname":"New Zealand Women"
        },
        {
          "id": 6,
         "flag":"https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/313300/313341.logo.png",
         "countryname":"Pakistan Women"
        },
        {
          "id": 7,
         "flag":"https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/313300/313348.logo.png",
         "countryname":"South Africa Women"
        },
        {
          "id": 8,
         "flag":"https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/340000/340047.png",
         "countryname":"Sri lanka Women"
        },
        {
          "id": 9,
         "flag":"https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/313400/313402.logo.png",
         "countryname":"Thailand Women"
        },
        {
          "id": 10,
         "flag":"https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/317600/317615.png",
         "countryname":"West Indies Women"
        }
      ]
 
  
  return (
    <MainWrapper>
  <HeadingWrapper>
  POPULAR WOMEN'S TEAMS
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

export default PopulerWomens
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