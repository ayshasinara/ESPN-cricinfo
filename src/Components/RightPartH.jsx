import React from 'react'

import RightSidePhotoComponent from './homeRightSide/RightSidePhotoComponent'
import NewsHeadlines from './homeRightSide/NewsHeadlines'

function RightPartH() {
  return (
    <div style={{'width':'90%'}}>



<NewsHeadlines/>
<RightSidePhotoComponent/>

    </div>
  )
}

export default RightPartH