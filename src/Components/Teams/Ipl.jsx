import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'



import SingleTeams from './SingleTeams'


function Ipl() {
    const data=[
        {
          "id": 1,
         "flag":"https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/313400/313421.logo.png",
         "countryname":"Chennai Super Kings"
        },
        {
          "id": 2,
         "flag":"https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/313400/313422.logo.png",
         "countryname":"Delhi Capitals"
        },
        {
          "id": 3,
         "flag":"https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/334700/334707.png",
         "countryname":"Gujarat Titans"
        },
        {
          "id": 4,
         "flag":"https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/313400/313419.logo.png",
         "countryname":"Kolkata Knight Riders"
        },
        {
          "id": 5,
         "flag":"https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/333800/333885.png",
         "countryname":"Lucknow Super Giants"
        },
        {
          "id": 6,
         "flag":"https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/344000/344062.png",
         "countryname":"Mumbai Indians"
        },
        {
          "id": 7,
         "flag":"https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/317000/317003.png",
         "countryname":"Punjab Kings"
        },
        {
          "id": 8,
         "flag":"https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/313400/313423.logo.png",
         "countryname":"Rajasthan Royals"
        },
        {
          "id": 9,
         "flag":"https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/313400/313418.logo.png",
         "countryname":"Royal Challengers Bangalore"
        },
        {
          "id": 10,
         "flag":"https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/313400/313480.logo.png",
         "countryname":"Sunrisers Hyderabad"
        }
  
      ]
 
  
  return (
    <MainWrapper>
  <HeadingWrapper>
  IPL 2022 TEAMS
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

export default Ipl
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