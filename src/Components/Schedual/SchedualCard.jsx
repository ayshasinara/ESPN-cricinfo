import { Box, Divider, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom';

export const SchedualCard = ({item}) => {
    const navigate= useNavigate();
    const handleScorecard=()=>{
      navigate("/scorecard")
    }
  return (
    <Box onClick={handleScorecard} fontFamily="BentonSans-Bold,Arial,Noto Sans,sans-serif" mt = "10px" w = "100%" mb="20px" cursor="pointer">
        <Box  w="260px" h="146px" m ="auto" p="8px" borderRadius="10px" backgroundColor="white" color="black">
            <Box>
                <Text textAlign="left" fontSize="10px"><span style = {{ color:"black",fontWeight:"bold" }}>{item.status}</span> <span style = {{ color:"#48494A",fontWeight:"medium" }}> •  {item.legue}</span>   <span style = {{ color:"#48494A"}}> •  {item.place}</span></Text>
            </Box>
            <Box m = "8px 0px">
                <Box display="flex" gap="2px" justifyContent="space-between" m="0px 0px 4px" color={item.team1run<item.team2run ? "black" : "gray"}>
                    <Box display="flex" gap="2px">
                        <Image src = {item.team1flag} w="20px" h="20px" alt="t1"/>
                        <Text fontWeight="bold" fontSize="12px">{item.team1}</Text>
                    </Box>
                    <Text fontSize="14px">{item.team1score}</Text>
                </Box>
                <Box display="flex" gap="2px" justifyContent="space-between" m="0px 0px 4px" color={item.team1run>item.team2run ? "black" : "gray"}>
                <Box display="flex" gap="2px" >
                        <Image src={item.team2flag} w="20px" h="20px" alt="t2"/>
                        <Text fontWeight="bold" fontSize="12px">{item.team2}</Text>
                </Box>
                <Text fontSize="14px"><span style={{ fontSize:"10px"}}>{item.result}</span>  {item.team2score}</Text>
                </Box>
            </Box>
            <Text textAlign="left" fontSize="10px">{item.wonBy}</Text>
            <Divider color="lightgray" m="8px 0px 0px"/>
            <Box display="flex" gap="20px" p="6px 0px 0px">
                <Box fontSize="12px" fontWeight="medium">Schedual</Box>
                <Box fontSize="12px" fontWeight="medium">Fantacy</Box>
            </Box>
        </Box>
    </Box>


  )
}
