import React from 'react'
import styled from 'styled-components'

function RightSidePhotoComponent() {
    return (
        <MainWrapper>
            <HeadingWrapper>
         
           <img style={{"width":"100%","borderRadius":"15px"}}  src='https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_640,q_50/lsci/db/PICTURES/CMS/294000/294030.jpg' alt='img'/>
          
           <div>On This Day: Stokes' Headingley epic</div>
            </HeadingWrapper>
            <HeadingWrapper>
           <img  style={{"width":"100%","borderRadius":"15px"}} src='https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_640,q_50/lsci/db/PICTURES/CMS/344600/344603.png' alt='img'/>
           <div>Quote Unquote: who's saying what?</div>
            </HeadingWrapper>
            <HeadingWrapper>
           <img  style={{"width":"100%","borderRadius":"15px"}} src='https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_640,q_50/lsci/db/PICTURES/CMS/342200/342284.6.jpg' alt='img'/>
           <div>Photo feature: helmets</div>
            </HeadingWrapper>
            <HeadingWrapper>
           <img  style={{"width":"100%","borderRadius":"15px"}} src='https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_640,q_50/lsci/db/PICTURES/CMS/344500/344554.6.jpg' alt='img'/>
           <div>The latest cricket photos</div>
            </HeadingWrapper>
            <HeadingWrapper>
           <img  style={{"width":"100%","borderRadius":"15px"}} src='https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_640,q_50/lsci/db/PICTURES/CMS/340500/340544.6.jpg' alt='img'/>
           <div>Photo feature: Stairs in cricket</div>
            </HeadingWrapper>
            
            <HeadingWrapper>
           <img style={{"width":"100%","borderRadius":"15px"}} src='https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_640,q_50/lsci/db/PICTURES/CMS/318700/318789.jpg' alt='img'/>
           <div>Records index: most runs, most wickets, and a lot more</div>
            </HeadingWrapper>
            <HeadingWrapper>
           <img  style={{"width":"100%","borderRadius":"15px"}} src='https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_640,q_50/lsci/db/PICTURES/CMS/340200/340228.6.jpg' alt='img'/>
           <div>Temba Bavuma: 'I understand I have the influence to make things better around me'</div>
            </HeadingWrapper>
            <HeadingWrapper>
           <img  style={{"width":"100%","borderRadius":"15px"}} src='https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_640,q_50/lsci/db/PICTURES/CMS/339900/339937.6.jpg' alt='img'/>
           <div>Rankings: Who's leading in every format</div>
            </HeadingWrapper>
            <HeadingWrapper>
           <img  style={{"width":"100%","borderRadius":"15px"}} src='https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_640,q_50/lsci/db/PICTURES/CMS/222300/222305.11.jpg' alt='img'/>
           <div>Taufel: 'Can't solve odd grey area by replacing with technology'</div>
            </HeadingWrapper> 
             <HeadingWrapper>
           <img src='https://tpc.googlesyndication.com/simgad/14261750176255013681?' alt='img' style={{"width":"100%"}}/>
         
            </HeadingWrapper>
            
           
        </MainWrapper>
    )
}

export default RightSidePhotoComponent
const MainWrapper = styled.div`
    margin: 30px;
    width:90%;
  padding-bottom: 20px;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;


`
const HeadingWrapper = styled.div`
width: 85%;
  text-align: left;
    font-weight: 500;
    font-size: small;
    padding-top:8px;
    padding-bottom: 8px;
    padding-left: 8%;
    border-bottom: 0.1px solid #eeeff2;
`

