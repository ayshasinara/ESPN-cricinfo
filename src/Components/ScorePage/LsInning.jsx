import { Table,
   TableCaption,
    TableContainer,
     Tbody,
     Tfoot,
     Th, Thead, Tr,Td, Box, Text } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { battingData, bowlingData } from '../../Redux/filter/action'
import {ChevronDownIcon, InfoOutlineIcon} from "@chakra-ui/icons"
import { store } from '../../Redux/store'

const total = {
  "batsman": "Extras",
  "wiketby": "(lb 3, w 3)",
  "r": "6",

  "total": "TOTAL",
  "rpb": "100 balls (RPB: 1.56)",
  "score": "156/6",

  "b1":"Nathan Ellis",
  "b2":"Chris Wood",
  "b3":"Mason Crane",
  "fow":"1-41 (Daniel Bell-Drummond, 23b), 2-56 (Adam Rossington, 38b), 3-57 (Eoin Morgan, 42b), 4-90 (Ben McDermott, 64b), 5-138 (Dan Lawrence, 93b), 6-150 (Jordan Thompson, 99b)",

}
export const LsInning = () => {
const match = useSelector((store)=>store.filter.batting1)
const bowling = useSelector((store)=>store.filter. bowling1)
const dispatch= useDispatch();

console.log(match)
useEffect(() =>{
  dispatch(battingData());
  dispatch(bowlingData());
},[]);

  return (
    <div>
<TableContainer>
  <Table >
    <Thead backgroundColor="rgb(246,247,248)" fontWeight="normal">
      <Tr>
        <Th p ="8px 12px">BATTING	</Th>
        <Th color="white">.</Th>
        <Th  p ="8px 12px" textAlign="end">R</Th>
        <Th p ="8px 12px" textAlign="center">B</Th>
        <Th p ="8px 12px" textAlign="center">4s</Th>
        <Th p ="8px 12px" textAlign="center">6s</Th>
        <Th p ="8px 12px" textAlign="center">SR</Th>
      </Tr>
    </Thead>
    <Tbody>
    {match.map((item)=>{
      return (
        <Tr key={item.id}>
        <Td fontSize="12px" p ="8px 12px" fontWeight="medium" cursor="pointer" textDecoration="underline" _hover={{
    color: "blue.500"
  }}>{item.batsman}</Td>
        <Td fontSize="12px"   p ="8px 12px">{item.wiketby == "not out" ? null: <ChevronDownIcon color="blue.600"/>}{item.wiketby}</Td>
        <Td fontSize="12px" color="black" textAlign="end" fontWeight="bold" p ="8px 12px">{item.r}</Td>
        <Td fontSize="12px" textAlign="center" p ="8px 12px">{item.b}</Td>
        <Td fontSize="12px" textAlign="center" p ="8px 12px">{item.four}</Td>
        <Td fontSize="12px" textAlign="center" p ="8px 12px">{item.six}</Td>
        <Td fontSize="12px" p ="8px 12px">{item.sr}</Td>
      </Tr>
      )
    })}
    <Tr>
        <Td fontSize="12px" p ="8px 12px">{total.batsman}</Td>
        <Td fontSize="12px"   p ="8px 12px">{total.wiketby}</Td>
        <Td fontSize="12px" color="black" textAlign="end" fontWeight="bold" p ="8px 12px">{total.r}</Td>
        <Td></Td>
        <Td></Td>
        <Td></Td>
        <Td></Td>
      </Tr>
    </Tbody>
    <Tfoot backgroundColor="rgb(246,247,248)" fontWeight="bold">
      <Tr>
        <Th fontSize="14px">{total.total}</Th>
        <Th fontSize="14px">{total.rpb}  <InfoOutlineIcon color="blue.500"/> </Th>
        <Th fontSize="14px" textAlign="end">{total.score}</Th>
        <Th></Th>
        <Th></Th>
        <Th></Th>
        <Th></Th>
      </Tr>
    </Tfoot>
  </Table>
</TableContainer>
<Box>
  <Box display="flex" gap="2px" fontSize="12px" p="8px 16px">
    <Text fontWeight="bold">Did not bat:</Text>
    <Text cursor="pointer" textDecoration="underline" _hover={{
    color: "blue.500",
  }}>{total.b1},</Text>
   <Text cursor="pointer" textDecoration="underline" _hover={{
    color: "blue.500",
  }}>{total.b2},</Text>
   <Text cursor="pointer" textDecoration="underline" _hover={{
    color: "blue.500",
  }}>{total.b3}</Text>
  </Box>
  <Box fontSize="12px" p="8px 16px">
  <p style={{textAlign: "left"}}>
  <Text fontWeight="bold">Fall of wickets: <span style={{fontWeight:"normal"}}>{total.fow}</span></Text>
  </p>
  </Box>

</Box>
<Box>
<TableContainer >
  <Table fontSize="12px" >
    <Thead >
      <Tr backgroundColor="rgb(246,247,248)">

        <Th pr="250px">BOWLING</Th>
        <Th p ="8px 12px" isNumeric>B</Th>
        <Th p ="8px 12px" isNumeric>0s</Th>
        <Th p ="8px 12px" isNumeric>R</Th>
        <Th p ="8px 12px" isNumeric>W</Th>
        <Th p ="8px 12px" isNumeric>RPB</Th>
        <Th p ="8px 12px" isNumeric>4s</Th>
        <Th p ="8px 12px" isNumeric>6s</Th>
        <Th p ="8px 12px" isNumeric>WD</Th>
        <Th p ="8px 12px" isNumeric>NB</Th>
      </Tr>
    </Thead>
    <Tbody>
    {bowling.map((item)=>{
      return (
        <Tr key={item.id}>
        <Td p ="8px 12px"
        fontWeight="medium" cursor="pointer" textDecoration="underline" _hover={{
    color: "blue.500",
  }}
        >{item.bowling}</Td>
        <Td p ="8px 12px"isNumeric>{item.b}</Td>
        <Td p ="8px 12px"isNumeric>{item.zero}</Td>
        <Td p ="8px 12px"isNumeric>{item.r}</Td>
        <Td p ="8px 12px"  fontWeight="bold" textAlign="end" isNumeric>{item.w}{item.w == 0 ? null: <ChevronDownIcon color="blue.600"/>}</Td>
        <Td p ="8px 12px"isNumeric>{item.rpb}</Td>
        <Td p ="8px 12px"isNumeric>{item.four}</Td>
        <Td p ="8px 12px"isNumeric>{item.six}</Td>
        <Td p ="8px 12px"isNumeric>{item.wd}</Td>
        <Td p ="8px 12px"isNumeric>{item.nb}</Td>
      </Tr>
      )
    })}

    </Tbody>
  </Table>
</TableContainer>
</Box>
    </div>
  )
}
