import React, { useEffect } from 'react'
import FeaturesComponents from '../Components/FeaturesPage/FeaturesComponents'
import RightPartH from '../Components/RightPartH'
import SubNavbar from '../Components/SubNavbar'

function Features() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const data ={
    title:"Features",
    subTitle:"Features home",
    data1:"Writers",
    data2:"The Cricket Monthly",
    data3:"Photo Galleries",
 
}
  return (
    <div >
     <SubNavbar iteam={data}  />
     <div style={{"margin":"3%","marginLeft":"12%", }}>
     <img src="https://tpc.googlesyndication.com/simgad/16233217720762028300?" />
     </div>
   
    <div style={{'display':'flex'}}>
      <div style={{'width':'75%'}}>
      <FeaturesComponents/>
      </div>
  <div style={{'width':'25%'}}>
  <RightPartH/>
  </div>
  
    </div>
    

    </div>
    
  )
}


export default Features