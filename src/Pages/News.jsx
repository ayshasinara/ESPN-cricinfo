import React from 'react'
import NewsContainer from '../Components/news/NewsContainer'
import RightPartH from '../Components/RightPartH'

function News() {
  return (
    <div>
    <div style={{'display':'flex'}}>
    <NewsContainer/>
    <RightPartH/>
    </div>
   

    </div>
    
  )
}

export default News