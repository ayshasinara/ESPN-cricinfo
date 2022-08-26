import { Box, Button, HStack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { filterData, getData } from '../../Redux/filter/action'
import { Carousel1 } from './Carousel1'
import { SchedualCard } from './SchedualCard'

export const SchedualFilter = () => {
  const match = useSelector((state)=> state.events);
  const dispatch = useDispatch();
  const [data,setdata]= useState();
console.log(match)

  useEffect(() => {
    dispatch(getData());
  },[dispatch])
  return (
    <Box backgroundColor="rgb(3,152,220)" color="white">
    <HStack >
      <Button
      size = "sm"
      backgroundColor="transparent"
      fontSize="12px"
      onClick={() => filterData("Match")}
      > Match <span>({match.length})</span></Button>
      <Button
      size = "sm"
      fontSize="12px"
      backgroundColor="transparent"
      onClick={() =>filterData("Asia Cup (M)")}
      >Asia Cup (M)<span>(2)</span></Button>
      <Button
      size = "sm"
      fontSize="12px"
      backgroundColor="transparent"
      onClick={() =>filterData("Men's Hundred")}
      >Men's Hundred<span>(1)</span></Button>
      <Button
      size = "sm"
      fontSize="12px"
      backgroundColor="transparent"
      onClick={() => filterData("6IXTY (W)")}
      > 6IXTY (W) <span>(3)</span></Button>
      <Button
      size = "sm"
      fontSize="12px"
      backgroundColor="transparent"
      onClick={() => filterData("Women's Hundred")}
      >Women's Hundred <span>(1)</span></Button>
       <Button
       size = "sm"
       fontSize="12px"
       backgroundColor="transparent"
      onClick={() =>filterData("IRE v NER (W)")}
      >IRE v NER (W)<span>(1)</span></Button>
       <Button
       size = "sm"
       fontSize="12px"
       backgroundColor="transparent"
      onClick={() => filterData("SA V ENG")}
      >SA V ENG <span>(1)</span></Button>
    </HStack>
    <Carousel1 match={match}/>
    </Box>
  )
}
