import React, { useEffect } from 'react'
import NewsContainer from '../Components/news/NewsContainer'
import RightPartH from '../Components/RightPartH'
import SubNavbar from '../Components/SubNavbar'

function News() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const data ={
    title:"News",
    subTitle:"News home",
    data1:"RSS Index",
    data2:"Covid-19",
    data3:"Ball-tampering",
    data4:"Technology in cricket",
    data5:"Racism"
}
 
  return (
    <div >
     <SubNavbar iteam={data}  />
     <div style={{"margin":"3%","marginLeft":"12%", }}>
     <img src="https://tpc.googlesyndication.com/simgad/16233217720762028300?" />
     </div>
    <div style={{'display':'flex'}}>
      <div style={{'width':'75%'}}>
      <NewsContainer/>
      </div>
  <div style={{'width':'25%'}}>
  <RightPartH/>
  </div>
  
    </div>
   

    </div>
    
  )
}

export default News
