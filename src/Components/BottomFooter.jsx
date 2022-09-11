import { Box, Center, Divider, HStack, Text } from '@chakra-ui/react'
import React from 'react'

export const BottomFooter = () => {
  return (
    <div style={{padding:"16px", backgroundColor:"rgb(246,247,248)"}} >
<Box display="flex" justifyContent="space-between" backgroundColor="rgb(246,247,248)" p ="0px 20px">
    <Box>
    <HStack fontSize={"14px"}>
        <Text cursor="pointer"
        _hover={{textDecoration: "underline"}}
        >Terms of Use
        </Text>

            <Center height='14px'>
                <Divider borderColor={"black"} orientation='vertical' />
            </Center>

        <Text
        cursor="pointer"
        _hover={{textDecoration: "underline"}}
        >Privacy Policy
        </Text>

            <Center height='14px'>
                <Divider borderColor={"black"} orientation='vertical' />
            </Center>

        <Text
        cursor="pointer"
        _hover={{textDecoration: "underline"}}
        >Interest-Based Ads
        </Text>

            <Center height='14px'>
                <Divider borderColor={"black"} orientation='vertical' />
            </Center>

        <Text
        cursor="pointer"
        _hover={{textDecoration: "underline"}}
        >Addendum to the Global Privacy Policy
        </Text>

            <Center height='14px'>
                <Divider borderColor={"black"} orientation='vertical' />
            </Center>

        <Text
        cursor="pointer"
        _hover={{textDecoration: "underline"}}
        >Feedback
        </Text>
    </HStack>
    </Box>
    <Box>
    <Text fontSize='12px'>© 2022 ESPN Sports Media Ltd. All rights reserved</Text>
    </Box>
</Box>

    </div>
  )
}