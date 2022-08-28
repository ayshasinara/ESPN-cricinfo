import { Box, Button, HStack } from '@chakra-ui/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { filterData, getData } from '../../Redux/filter/action'
import { Carousel1 } from './Carousel1'
import { SchedualCard } from './SchedualCard'

export const SchedualFilter = () => {
  const match = useSelector((state)=> state.filter.events);
  const dispatch = useDispatch();
  const [data,setData]= useState([]);


  const getFilterData = (data) =>{
    return axios
    .get(`http://localhost:3004/TopEvenet?legue=${data}`)
    .then(r=>r.data)
    .then(rdata=>{
      setData(rdata)
    })
    .catch(err=>{console.log(err)
    });

  }

console.log(data)

  useEffect(() => {
    dispatch(getData());
  },[dispatch])
  useEffect(()=>{
    getFilterData(data);
  },[])
  return (
    <Box backgroundColor="rgb(3,152,220)" color="white">
    <HStack  w="95%" m="auto">
      <Button
      size = "sm"
      backgroundColor="transparent"
      fontSize="12px"
      _hover={{ bg: 'none' }}
  _active={{
    fontSize:"14px",
    bg: '#dddfe2',
    transform: 'scale(0.98)',
    borderColor: '#bec3c9',
  }}
  _focus={{
    fontSize:"14px",
    fontWeight:"bold",
    boxShadow:
      '0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)',
  }}
      onClick={() => getFilterData("Match")}
      >
       Match <span>({match.length})</span>

       </Button>
      <Button
      size = "sm"
      fontSize="12px"
      backgroundColor="transparent"
      _hover={{ bg: 'none' }}
  _active={{
    fontSize:"14px",
    bg: '#dddfe2',
    transform: 'scale(0.98)',
    borderColor: '#bec3c9',
  }}
  _focus={{
    fontSize:"14px",
    fontWeight:"bold",
    boxShadow:
      '0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)',
  }}
      onClick={() =>getFilterData("Asia Cup (M)")}
      >
      Asia Cup (M)<span>(2)</span>
      </Button>
      <Button
      size = "sm"
      fontSize="12px"
      backgroundColor="transparent"
      _hover={{ bg: 'none' }}
  _active={{
    fontSize:"14px",
    bg: '#dddfe2',
    transform: 'scale(0.98)',
    borderColor: '#bec3c9',
  }}
  _focus={{
    fontSize:"14px",
    fontWeight:"bold",
    boxShadow:
      '0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)',
  }}
      onClick={() =>getFilterData("Men's Hundred")}
      >
      Men's Hundred<span>(1)</span>
      </Button>
      <Button
      size = "sm"
      fontSize="12px"
      backgroundColor="transparent"
      _hover={{ bg: 'none' }}
  _active={{
    fontSize:"14px",
    bg: '#dddfe2',
    transform: 'scale(0.98)',
    borderColor: '#bec3c9',
  }}
  _focus={{
    fontSize:"14px",
    fontWeight:"bold",
    boxShadow:
      '0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)',
  }}
      onClick={() => getFilterData("6IXTY (W)")}
      >
       6IXTY (W) <span>(3)</span>
       </Button>
      <Button
      size = "sm"
      fontSize="12px"
      backgroundColor="transparent"
      _hover={{ bg: 'none' }}
  _active={{
    fontSize:"14px",
    bg: '#dddfe2',
    transform: 'scale(0.98)',
    borderColor: '#bec3c9',
  }}
  _focus={{
    fontSize:"14px",
    fontWeight:"bold",
    boxShadow:
      '0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)',
  }}
      onClick={() => getFilterData("Women's Hundred")}
      >
      Women's Hundred <span>(1)</span>
      </Button>
       <Button
       size = "sm"
       fontSize="12px"
       backgroundColor="transparent"
       _hover={{ bg: 'none' }}
  _active={{
    fontSize:"14px",
    bg: '#dddfe2',
    transform: 'scale(0.98)',
    borderColor: '#bec3c9',
  }}
  _focus={{
    fontSize:"14px",
    fontWeight:"bold",
    boxShadow:
      '0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)',
  }}
      onClick={() =>getFilterData("IRE v NER (W)")}
      >
      IRE v NER (W)<span>(1)</span>
      </Button>
       <Button
       size = "sm"
       fontSize="12px"
       backgroundColor="transparent"
       _hover={{ bg: 'none' }}
  _active={{
    fontSize:"14px",
    bg: '#dddfe2',
    transform: 'scale(0.98)',
    borderColor: '#bec3c9',
  }}
  _focus={{
    fontSize:"14px",
    fontWeight:"bold",
    boxShadow:
      '0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)',
  }}
      onClick={() => getFilterData("SA V ENG")}
      >SA V ENG <span>(1)</span></Button>
    </HStack>
    <Carousel1 match={match} data={data}/>
    </Box>
  )
}
