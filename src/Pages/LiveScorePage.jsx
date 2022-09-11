import React, { useEffect, useState } from 'react'
import UpComing from './UpComing'
import Result from './Result'
import LiveScores from './LiveScores'
import styled from 'styled-components'
function LiveScorePage() {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    const [liveScore, setLiveScore] = useState(true)
    const [upComing, setUpComing] = useState(false)
    const [result, setResult] = useState(false)
    const handleliveScore = () => {
        setLiveScore(true);
        setUpComing(false);
        setResult(false)
    }
    const handleupComing = () => {
        setLiveScore(false);
        setUpComing(true);
        setResult(false)
    }
    const handleResult = () => {
        setLiveScore(false);
        setUpComing(false);
        setResult(true)
    }
    return (
        <div>
            <MiniNavbar>
                <div style={{
                    borderBottom: liveScore ? 'solid #04c8f5 5px' : 'none', "width":'25%'
                }}
                    onClick={handleliveScore}
                >Live</div>
                <div
                    style={{
                        borderBottom: upComing ? 'solid #04c8f5 5px' : 'none',"width":'25%'
                    }}
                    onClick={handleupComing}
                >Upcoming</div>
                <div
                    style={{
                        borderBottom: result ? 'solid #04c8f5 5px' : 'none',"width":'25%'
                    }}
                    onClick={handleResult}
                >Result</div>
            </MiniNavbar>

            {liveScore ? <LiveScores /> : ""}
            {upComing ? <UpComing /> : ""}
            {result ? <Result /> : ""}


        </div>
    )
}

export default LiveScorePage
const MiniNavbar = styled.div`
    width: 72%;
    display: flex;
    justify-content: space-around;
    margin: 30px ;
  
   padding-top: 4px;
   padding-bottom: 4px;
   
  border-radius: 5px;
  

    box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
`