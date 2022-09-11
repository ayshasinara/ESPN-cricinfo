import { border } from '@chakra-ui/react'
import React from 'react'

function SingleTeams({iteam}) {
  return (
    <div style={{display:'flex', justifyContent:'left', padding:"20px", width:"100%" ,border:"0.1px solid #eeeff2",height: '100px'}}>
        <div style={{width:'20%'}}><img src={iteam.flag }/></div>
        <div style={{"textAlign":'left', paddingTop:'5%', paddingLeft:'2%'}}>{iteam.countryname}</div>
    </div>
  )
}

export default SingleTeams