import React from 'react'
import ESPNcricinfoApps from './HomeLeftSide/ESPNcricinfoApps'
import ESPNSites from './HomeLeftSide/ESPNSites'
import FollowESPNcricinfo from './HomeLeftSide/FollowESPNcricinfo'
import KeySeries from './HomeLeftSide/KeySeries'
import QuickLinks from './HomeLeftSide/QuickLinks'

function HomePageLeft() {
  return (
    <div> 

        <KeySeries/>
    <QuickLinks/>
    <ESPNcricinfoApps/>
   <FollowESPNcricinfo/>
   <ESPNSites/></div>

  )
}

export default HomePageLeft