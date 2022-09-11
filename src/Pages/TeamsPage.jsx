import React, { useEffect } from 'react'
import International from '../Components/Teams/International'
import Ipl from '../Components/Teams/Ipl'
import PopulerWomens from '../Components/Teams/PopulerWomens'

function TeamsPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (

    <div >
      <img src="https://tpc.googlesyndication.com/simgad/13673083738639890423?" style={{ "margin": '1% 11%' }} />
      <International />
      <Ipl />
      <PopulerWomens />
    </div>

  )
}

export default TeamsPage