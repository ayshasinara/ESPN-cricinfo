import React from 'react'
import ESPNcricinfoApps from './HomeRightSide/ESPNcricinfoApps'
import ESPNSites from './HomeRightSide/ESPNSites'
import FollowESPNcricinfo from './HomeRightSide/FollowESPNcricinfo'
import KeySeries from './HomeRightSide/KeySeries'
import QuickLinks from './HomeRightSide/QuickLinks'

function HomePageRight() {
  return (
    <div> 

        <KeySeries/>
    <QuickLinks/>
    <ESPNcricinfoApps/>
   <FollowESPNcricinfo/>
   <ESPNSites/></div>

  )
}

export default HomePageRight