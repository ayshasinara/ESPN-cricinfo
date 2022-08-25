import { Box, Divider, Image, Text } from '@chakra-ui/react'
import React from 'react'

export const SchedualCard = () => {
  return (
    <Box fontFamily="BentonSans-Bold,Arial,Noto Sans,sans-serif" mt = "10px" >
        <Box border="1px solid black" w="310px" h="150px" m ="auto" p="8px" borderRadius="10px">
            <Box>
                <Text textAlign="left" fontSize="10px"><span style = {{ color:"#E44242",fontWeight:"bold" }}>LIVE</span> <span style = {{ color:"#48494A",fontWeight:"medium" }}> •  6IXTY</span>   <span style = {{ color:"#48494A"}}> •  Basseterre</span></Text>
            </Box>
            <Box m = "8px 0px">
                <Box display="flex" gap="2px" justifyContent="space-between" m="0px 0px 4px">
                    <Box display="flex" gap="2px">
                        <Image src = "https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_80/lsci/db/PICTURES/CMS/325900/325974.png" w="20px" h="20px" alt="t1"/>
                        <Text fontWeight="bold" fontSize="12px">BR-W</Text>
                    </Box>
                    <Text fontSize="14px"><span style={{ fontSize:"10px"}}>(86/100 balls, T:120)</span>  122/2</Text>
                </Box>
                <Box display="flex" gap="2px" justifyContent="space-between" m="0px 0px 4px">
                <Box display="flex" gap="2px" >
                        <Image src="https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_80/lsci/db/PICTURES/CMS/313400/313482.logo.png" w="20px" h="20px" alt="t2"/>
                        <Text fontWeight="bold" fontSize="12px">GAW-W</Text>
                </Box>
                <Text fontSize="14px">119/9</Text>
                </Box>
            </Box>
            <Text textAlign="left" fontSize="10px">Amazon WMN won by 15 runs</Text>
            <Divider color="lightgray" m="8px 0px 0px"/>
            <Box display="flex" gap="20px" p="6px 0px 0px">
                <Box fontSize="12px" fontWeight="medium">Schedual</Box>
                <Box fontSize="12px" fontWeight="medium">Fantacy</Box>
            </Box>
        </Box>
    </Box>


  )
}
