

import React from 'react'
import styled from 'styled-components'
function SubcomponentMajorLeagueTournament({ flag, score, team }) {
  
    return (
        <div style={{ "display": "flex", "justifyContent": "space-between", "width": "90%" }}>
            <div style={{ "display": "flex" }}>
                <ImageWidth >
                    <img src={flag} style={{ "width":"100%" }} />
                </ImageWidth>
                <div style={{ "fontWeight": "bold",'paddingTop':'5%'}}>{team}</div>
            </div>
            <div style={{ "fontSize": "12px" }}>
                {score}
            </div>
        </div>
    )
}

export default SubcomponentMajorLeagueTournament
const ImageWidth = styled.div`
    width: 20%;
    padding: 2%;
`