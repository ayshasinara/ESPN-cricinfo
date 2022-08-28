import { Box, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'

export const AskCrickinfo = () => {
  return (
    <div>
        <Box boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
        mt = "16px" mb = "16px"
         p = "16px"
          display="flex"
           justifyContent="space-between"
           borderRadius="10px"
           cursor="pointer"
           >
            <Box pt="12px">
            <Text fontSize="17px" fontWeight="bold">Unlocking the magic of Statsguru</Text>
            </Box>
            <Box>
            <Image src="https://wassets.hscicdn.com/static/images/nlp-logo.svg"  w="120px" h="56px"alt="AskMe"/>
            </Box>
        </Box>
    </div>
  )
}
