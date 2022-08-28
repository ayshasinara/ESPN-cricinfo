import { Box, Divider, ListItem, UnorderedList } from '@chakra-ui/react'
import React from 'react'

export const MatchNotes = () => {
  return (
    <div>
        <Box boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px">
           <Box>MATCH NOTES</Box>
           <Divider/>

            <UnorderedList>
                <ListItem> London Spirit (Men) innings</ListItem>
                <ListItem>Powerplay 1: Balls 1 - 25 (Mandatory - 41 runs, 1 wicket)</ListItem>
                <ListItem>London Spirit (Men): 50 runs in 32 balls, Extras 1</ListItem>
                <ListItem>London Spirit (Men): 100 runs in 71 balls, Extras 6</ListItem>
                <ListItem>London Spirit (Men): 150 runs in 99 balls, Extras 6</ListItem>
            </UnorderedList>


            <UnorderedList>
                <ListItem>Welsh Fire (Men) innings</ListItem>
                <ListItem>Powerplay 1: Balls 1 - 25 (Mandatory - 21 runs, 1 wicket)</ListItem>
                <ListItem>Welsh Fire (Men): 50 runs in 54 balls, Extras 1</ListItem>
                <ListItem>Welsh Fire (Men): 100 runs in 81 balls, Extras 1</ListItem>
                <ListItem>Balls 89: Review by Welsh Fire (Men) (Batting), Umpire - Hassan Adnan, Batter - JL du Plooy (Upheld)</ListItem>
            </UnorderedList>

        </Box>


    </div>
  )
}
