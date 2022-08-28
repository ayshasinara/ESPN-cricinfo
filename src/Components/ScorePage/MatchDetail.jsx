import { Avatar, Box, Center, Divider, Heading, HStack, Image, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { mvpData } from '../../Redux/filter/action';
import { AccordianTask } from './AccordianTask';
import { AskCrickinfo } from './AskCrickinfo';
import { MatchNotes } from './MatchNotes';
import { ScoreMatchDetails } from './ScoreMatchDetails';

const MatchDetail = () => {
    const match = useSelector((state)=>state.filter.mvp)
const dispatch = useDispatch();
console.log(match)
useEffect(() =>{
    dispatch(mvpData());
},[]);
  return (
    <div>
        <Box boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px" w="904px">
            <Box display="flex" justifyContent="space-between" p="12px 16px" b>
                <Box fontSize="14">
                    <Heading fontSize="14px" textAlign="left">{match.results}</Heading>
                    <Text cursor="text">{match.date}, <u style={{cursor: "pointer",
                    _hover:{
                        color:"blue"
                    }}}>{match.legue}</u></Text>
                </Box>
                <Box>
                    <Image src="https://img.icons8.com/ios-glyphs/344/share--v1.png" w="20px" alt="share"/>
                </Box>
            </Box>
            <Divider/>
            <Box display="flex" h="128px">
                <Box p = "12px 16px" fontSize="16px" fontWeight="bold" w="603px">
                    <HStack justifyContent="space-between" color={match.team1run>match.team2run? "black" : "gray"} mb="8px">
                        <Box display="flex">
                            <Image w="32px" mr="8px" src={match.team1flag} alt="team1"/>
                            <Text cursor="pointer"
                              _hover={{
    color: "blue.500",
  }}>{match.team1}</Text>
                        </Box>
                        <Box><Text>{match.team1score}</Text></Box>
                    </HStack>
                    <Box>
                    <HStack mb="8px"justifyContent="space-between" color={match.team1run<match.team2run? "black" : "gray"}>
                        <Box display="flex">
                            <Image mr="8px" w="32px" src={match.team2flag} alt="team1"/>
                            <Text
                            _hover={{
    color: "blue.500",
  }}
                            cursor="pointer">{match.team2}</Text>
                        </Box>
                        <Box display="flex" gap="2px"><Text fontWeight="light">{match.result}</Text><Text>{match.team2score}</Text></Box>
                    </HStack>
                    </Box>
                    <Text textAlign="left" fontSize="14px" fontWeight="medium" color="black">{match.wonBy}</Text>
                </Box>
                <Center height='128px'>
                <Divider orientation='vertical' />
                </Center>
                <Box p="8px 16px" display="flex" justifyContent="space-between" w="300px">
                    <Box textAlign="left">
                        <Text fontSize="10px">{match.pov}</Text>
                        <Box display="flex" mt="2px" mb="8px">
                        <Box>
                        <Text cursor="pointer" fontSize="14px" color="black" fontWeight="bold" textDecoration="underline" mr="2px">{match.povname}</Text>
                        </Box>
                        <Box><Text fontSize="12px" pt="2px">, {match.teamsub}</Text></Box>
                        </Box>
                        <Text fontSize="12px">{match.runs}</Text>
                    </Box>
                    <Box >
                    <Avatar size='lg' src={match.pimg} alt="pov"/>
                    <Box  bg="white" borderRadius="50%" w="20px" position="absolute" top="380px">
                    <Image borderRadius="50%" src={match.vimg} bg="white"boxSize='1.25em' />
                    </Box>
                    </Box>
                </Box>
            </Box>
            <Divider/>
            <Box>
            <Tabs defaultIndex={1}>
  <TabList  >
    <Tab fontSize="14px">Summary</Tab>
    <Tab fontSize="14px">Scorecard</Tab>
    <Tab fontSize="14px">Report</Tab>
    <Tab fontSize="14px">Commentary</Tab>
    <Tab fontSize="14px">Statistics</Tab>
    <Tab fontSize="14px">Table</Tab>
    <Tab fontSize="14px">News</Tab>
    <Tab fontSize="14px">Photos</Tab>
  </TabList>

  <TabPanels >
    <TabPanel>
      <p>one!</p>
    </TabPanel>
    <TabPanel>
    <AccordianTask/>
    <AskCrickinfo/>
    <ScoreMatchDetails/>
    {/* <MatchNotes/> */}
    </TabPanel>
    <TabPanel>
      <p>three!</p>
    </TabPanel>
    <TabPanel>
      <p>four!</p>
    </TabPanel>
    <TabPanel>
      <p>five!</p>
    </TabPanel>
    <TabPanel>
      <p>six!</p>
    </TabPanel>
    <TabPanel>
      <p>seven!</p>
    </TabPanel>
    <TabPanel>
      <p>eight!</p>
    </TabPanel>
  </TabPanels>
</Tabs>
            </Box>
        </Box>
    </div>
  )
}

export default MatchDetail