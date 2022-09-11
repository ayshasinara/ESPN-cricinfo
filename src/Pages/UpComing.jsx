import React from 'react'
import SunUpcoming from '../Components/UpcomingSun/SunUpcoming'

import RightPartH from '../Components/RightPartH'
import SatUpcoming from '../Components/UpcomingSat/SatUpcoming'
function UpComing() {
    return (
        <div style={{ 'display': 'flex' }} >



           <div style={{'width':'75%'}}>
                <SunUpcoming />
         <SatUpcoming/>
                </div>
<div style={{'width':"25%"}}><RightPartH /></div>
                
          


        </div>





    )
}

export default UpComing