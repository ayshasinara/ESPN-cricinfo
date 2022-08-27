import { Box, Center, Divider, HStack, Image, Text } from '@chakra-ui/react'
import React from 'react'

export const ScoreMatchDetails = () => {
  return (
    <div >
        <Box fontSize="12px" textAlign="left" boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px" borderRadius="10px">
            <Box fontWeight="bold" p="12px 16px">
            MATCH DETAILS
            </Box>
            <Divider/>
            <Box p= "8px 16px" textDecoration="underline">
           <Text>Lord's, London</Text>
            </Box>
            <Divider/>
            <HStack>
                <Box p= "8px 16px"
                w="329px"
                >Toss</Box>
                <Center height='40px'>
  <Divider orientation='vertical' />
</Center>
                <Box p= "8px 16px">Welsh Fire (Men), elected to field first</Box>
            </HStack>
            <Divider/>
            <HStack>
                <Box w="329px" p= "8px 16px">Series</Box>
                <Center height='40px'>
  <Divider orientation='vertical' />
</Center>
                <Box p= "8px 16px" cursor="pointer" textDecoration="underline" _hover={{
    color: "blue.500",
  }}><Text>The Hundred Men's Competition</Text></Box>
            </HStack>
            <Divider/>
            <HStack>
                <Box w="329px" p= "8px 16px">Season</Box>
                <Center height='35px'>
  <Divider orientation='vertical' />
</Center>
                <Box p= "8px 16px">2022</Box>
            </HStack>
            <Divider/>
            <HStack>
                <Box w="329px" p= "8px 16px">Player Of The Match</Box>
                <Center height='40px'>
  <Divider orientation='vertical' />
</Center>
                <Box display="flex" gap="3px">
                    <Box p= "8px 16px">
                    <Image   w= "24px" src="https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/317100/317119.png" alt="team"/>
                    </Box>
                    <Box pt="8px" cursor="pointer" textDecoration="underline" _hover={{
    color: "blue.500",
  }}>
                    Dan Lawrence
                    </Box>
                </Box>
            </HStack>
            <Divider/>
            <HStack>
                <Box w="329px" p= "8px 16px">Match days</Box>
                <Center height='40px'>
  <Divider orientation='vertical' />
</Center>
                <Box p= "8px 16px">24 August 2022 - night (100-ball match)</Box>
            </HStack>
            <Divider/>
            <HStack>
                <Box w="329px" pl="16px">Umpires</Box>
                <Center height='95px'>
  <Divider orientation='vertical' />
</Center>
                <Box>
                    <Box>
                        <HStack>
                            <Box display="flex" gap="3px" p= "12px 8px"><Image
                            w="24px"
                            src="https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/313100/313114.logo.png"
                             alt="flag"/></Box>
                            <Box cursor="pointer" textDecoration="underline" _hover={{
    color: "blue.500",
  }}>
                            Hassan Adnan
                            </Box>
                        </HStack>
                        <Divider/>
                        <HStack>
                            <Box display="flex" gap="3px" p= "12px 8px"><Image
                            w="24px"
                            src="https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/313100/313114.logo.png"
                             alt="flag"/></Box>
                            <Box cursor="pointer" textDecoration="underline" _hover={{
    color: "blue.500",
  }}>
                                Richard Kettleborough
                            </Box>
                </HStack>
                    </Box>
                </Box>
            </HStack>
            <Divider/>
            <HStack>
                <Box w="329px" pl="16px">TV Umpire</Box>
                <Center height='40px'>
  <Divider orientation='vertical' />
</Center>
                <Box>
                <HStack>
                            <Box display="flex" gap="3px" p= "8px 16px"
                            cursor="pointer" textDecoration="underline" _hover={{
    color: "blue.500",
  }}
                            ><Image

                            w="24px"
                            src="https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/313100/313114.logo.png"
                             alt="flag"/></Box>
                            <Box cursor="pointer" textDecoration="underline" _hover={{
    color: "blue.500",
  }}>
                               	Graham Lloyd
                            </Box>
                </HStack>
                </Box>
            </HStack>
            <Divider/>
            <HStack>
                <Box p= "8px 16px" w="329px">
                Reserve Umpire
                </Box>
                <Center height='40px'>
  <Divider orientation='vertical' />
</Center>
                <Box display="flex" gap="3px">
                <Box p= "8px 16px">

                <Image w="24px"

                            src="https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/313100/313114.logo.png"
                             alt="flag"/></Box>
                            <Box cursor="pointer" textDecoration="underline" _hover={{
    color: "blue.500",
  }}>
                               	Billy Taylor
                            </Box>
                </Box>
            </HStack>
            <Divider/>
            <HStack>
                <Box p= "8px 16px" w="329px">Balls per over</Box>
                <Center height='40px'>
  <Divider orientation='vertical' />
</Center>
                <Box p= "8px 16px">5</Box>
            </HStack>
            <Divider/>
            <HStack p= "8px 16px">
                <Box w="329px">Match Referee</Box>
                <Center height='40px'>
  <Divider orientation='vertical' />
</Center>
                <Box>
                <Box display="flex" gap="3px">
                <Box >

                <Image
                w="24px"
                            src="https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/313100/313114.logo.png"
                             alt="flag"/></Box>
                            <Box cursor="pointer" textDecoration="underline" _hover={{
    color: "blue.500",
  }}>
                            Wayne Noon
                            </Box>
                </Box>

                </Box>
            </HStack>
            <Divider/>
            <HStack>
                <Box p= "8px 16px" w="329px">Points</Box>
                <Center height='40px'>
  <Divider orientation='vertical' />
</Center>
                <Box p= "8px 16px">London Spirit (Men) 2, Welsh Fire (Men) 0</Box>
            </HStack>


        </Box>
    </div>
  )
}
