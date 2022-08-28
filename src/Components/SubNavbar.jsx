import React from 'react'
import styled from 'styled-components'

function SubNavbar({ iteam }) {
    console.log(iteam)
    return (
        <div style={{ "display": "flex", 'height': '10vh', 'padding': '20px' ,"boxShadow":'rgba(0, 0, 0, 0.05) 0px 1px 2px 0px',"position": "sticky","top": "0" ,zIndex:"2", "backgroundColor":"white"}}>
            <TitleWrapper>
                {iteam.title}
            </TitleWrapper>
            <TitleWrapper style={{"border":"none"}}>
                {iteam.subTitle}
            </TitleWrapper>
            <IteamWrapper>
                {iteam?.data1}
            </IteamWrapper>
            <IteamWrapper>
                {iteam?.data2}
            </IteamWrapper>
            <IteamWrapper>
                {iteam?.data3}
            </IteamWrapper>
            <IteamWrapper>
                {iteam?.data4}
            </IteamWrapper>
            <IteamWrapper>
                {iteam?.data5}
            </IteamWrapper>
            <IteamWrapper>
                {iteam?.data6}
            </IteamWrapper>
            <IteamWrapper>
                {iteam?.data7}
            </IteamWrapper>
            <IteamWrapper>
                {iteam?.data8}
            </IteamWrapper>



        </div>
    )
}

export default SubNavbar
const TitleWrapper = styled.div`
   
    padding-right:10px;
    padding-left: 10px;
    font-weight: bold;
    border-right:1.5px solid #8a8a8b;
`
const IteamWrapper=styled.div`
    margin: 0px 10px;
`
