import { Table,
    TableCaption,
     TableContainer,
      Tbody,
      Tfoot,
      Th, Thead, Tr,Td, Box, Text } from '@chakra-ui/react'
 import React, { useEffect } from 'react'
 import { useDispatch, useSelector } from 'react-redux'
 import { batting2Data, bowling2Data } from '../../Redux/filter/action'
 import {ChevronDownIcon, InfoOutlineIcon} from "@chakra-ui/icons"
 import { store } from '../../Redux/store'

 const total = {
   "batsman": "Extras",
   "wiketby": "(lb 1, w 1)",
   "r": "2",

   "total": "TOTAL",
   "rpb": "100 balls (RPB: 1.39)",
   "score": "139/9",

   "b1":"Jake Ball",
   "fow":" 1-13 (Joe Clarke, 18b), 2-22 (Josh Cobb, 27b), 3-23 (Jacob Bethell, 30b), 4-37 (David Miller, 44b), 5-80 (Ben Duckett, 65b), 6-113 (Dwaine Pretorius, 85b), 7-137 (Matt Critchley, 96b), 8-138 (Leus du Plooy, 98b), 9-139 (Ish Sodhi, 100b)",

 }
 export const WfInning = () => {
 const match = useSelector((store)=>store.filter.batting2)
 const bowling = useSelector((store)=>store.filter. bowling2)
 const dispatch= useDispatch();

 console.log(match)
 useEffect(() =>{
   dispatch(batting2Data());
   dispatch(bowling2Data());
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
