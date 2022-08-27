import React from 'react'
import { Switch,Box,Heading, color,Text} from "@chakra-ui/react";
import { Grid, GridItem } from '@chakra-ui/react'

const Videos = () => {
  return (
    <div style={{backgroundColor:'#f9f9fb' , marginBottom:'-200px'}}>
 <Box style={{backgroundColor:'white'}} width='75%' border='1px solid #f3f4f5' ml='12.4%'  height='40px'>
  <Text  textAlign='left' fontWeight='bold'  marginTop='5px'>POPULAR INTERNATIONAL TEAMS</Text>
  </Box>
 <Box style={{gridDisplay:'', backgroundColor:'white' }} height='502px' display='grid'  width='75%' ml='12.4%' border='1px solid #f3f4f5'>
 <Grid templateColumns='repeat(3, 1fr)'>
  <GridItem w='100%' h='100' border='1px solid #f3f4f5'>
  <Grid templateColumns='repeat(2, 1fr)'>
  <GridItem w='40%' h='70'  marginTop='10px' marginLeft='20px' >
    <img style={{height:"100%" ,weight:"100%"}} src="https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/313100/313128.logo.png"/>
  </GridItem>
  <GridItem w='90%' h='70' marginTop='10px' marginLeft='-90px' >
    <Text  marginTop='19px' marginLeft='-120px' fontWeight='bold' >India</Text>
  </GridItem>
    </Grid>
  </GridItem>

  <GridItem w='100%' h='100' border='1px solid #f3f4f5' >
  <Grid templateColumns='repeat(2, 1fr)'>
  <GridItem w='40%' h='70' marginTop='10px' marginLeft='20px' >
    <img style={{height:"100%" ,weight:"100%"}} src="https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/321000/321005.png"/>
  </GridItem>
  <GridItem w='90%' h='70' marginTop='10px' marginLeft='-90px' >
    <Text  marginTop='19px' marginLeft='-80px' fontWeight='bold' >Afghanistan</Text>
  </GridItem>
    </Grid>
  </GridItem>

 <GridItem w='100%' h='100' border='1px solid #f3f4f5' >
  <Grid templateColumns='repeat(2, 1fr)'>
  <GridItem w='40%' h='70' marginTop='10px' marginLeft='20px' >
    <img style={{height:"100%" ,weight:"100%"}} src="https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/340400/340493.png"/>
  </GridItem>
  <GridItem w='90%' h='70'marginTop='10px' marginLeft='-90px' >
    <Text  marginTop='19px' marginLeft='-100px' fontWeight='bold' >Australia</Text>
  </GridItem>
    </Grid>
  </GridItem>

<GridItem w='100%' h='100' border='1px solid #f3f4f5 ' >
  <Grid templateColumns='repeat(2, 1fr)'>
  <GridItem w='40%' h='70' marginTop='10px' marginLeft='20px' >
    <img style={{height:"100%" ,weight:"100%"}} src="https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/341400/341456.png"/>
  </GridItem>
  <GridItem w='90%' h='70' marginTop='10px' marginLeft='-90px' >
    <Text  marginTop='19px' marginLeft='-80px' fontWeight='bold' >Bangladesh</Text>
  </GridItem>
    </Grid>
  </GridItem>

<GridItem w='100%' h='100' border='1px solid #f3f4f5' >
  <Grid templateColumns='repeat(2, 1fr)'>
  <GridItem w='40%' h='70' marginTop='10px' marginLeft='20px' >
    <img style={{height:"100%" ,weight:"100%"}} src="https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/313100/313114.logo.png"/>
  </GridItem>
  <GridItem w='90%' h='70' marginTop='10px' marginLeft='-90px' >
    <Text  marginTop='19px' marginLeft='-100px' fontWeight='bold' >England</Text>
  </GridItem>
    </Grid>
  </GridItem>

 <GridItem w='100%' h='100' border='1px solid #f3f4f5' >
  <Grid templateColumns='repeat(2, 1fr)'>
  <GridItem w='40%' h='70'  marginTop='10px' marginLeft='20px' >
    <img style={{height:"100%" ,weight:"100%"}} src="https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/313100/313149.logo.png"/>
  </GridItem>
  <GridItem w='90%' h='70'  marginTop='10px' marginLeft='-90px' >
    <Text  marginTop='19px' marginLeft='-110px' fontWeight='bold' >Ireland</Text>
  </GridItem>
    </Grid>
  </GridItem>

<GridItem w='100%' h='100' border='1px solid #f3f4f5' >
  <Grid templateColumns='repeat(2, 1fr)'>
  <GridItem w='40%' h='70'  marginTop='10px' marginLeft='20px' >
    <img style={{height:"100%" ,weight:"100%"}} src="https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/340500/340505.png"/>
  </GridItem>
  <GridItem w='90%' h='70'  marginTop='10px' marginLeft='-90px' >
    <Text  marginTop='19px' marginLeft='-70px' fontWeight='bold' >New Zealand</Text>
  </GridItem>
    </Grid>
  </GridItem>

<GridItem w='100%' h='100' border='1px solid #f3f4f5' >
  <Grid templateColumns='repeat(2, 1fr)'>
  <GridItem w='40%' h='70'  marginTop='10px' marginLeft='20px' >
    <img style={{height:"100%" ,weight:"100%"}} src="https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/313100/313129.logo.png"/>
  </GridItem>
  <GridItem w='90%' h='70'  marginTop='10px' marginLeft='-90px' >
    <Text  marginTop='19px' marginLeft='-100px' fontWeight='bold' >Pakistan</Text>
  </GridItem>
    </Grid>
  </GridItem>

<GridItem w='100%' h='100' border='1px solid #f3f4f5' >
  <Grid templateColumns='repeat(2, 1fr)'>
  <GridItem w='40%' h='70'  marginTop='10px' marginLeft='20px' >
    <img style={{height:"100%" ,weight:"100%"}} src="https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/313100/313150.logo.png"/>
  </GridItem>
  <GridItem w='90%' h='70'  marginTop='10px' marginLeft='-90px' >
    <Text  marginTop='19px' marginLeft='-100px' fontWeight='bold' >Scotland</Text>
  </GridItem>
    </Grid>
  </GridItem>

  <GridItem w='100%' h='100' border='1px solid #f3f4f5' >
  <Grid templateColumns='repeat(2, 1fr)'>
  <GridItem w='40%' h='70'  marginTop='10px' marginLeft='20px' >
    <img style={{height:"100%" ,weight:"100%"}} src="https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/313100/313125.logo.png"/>
  </GridItem>
  <GridItem w='90%' h='70'  marginTop='10px' marginLeft='-90px' >
    <Text  marginTop='19px' marginLeft='-70px' fontWeight='bold' >South Africa</Text>
  </GridItem>
    </Grid>
  </GridItem>

  <GridItem w='100%' h='100' border='1px solid #f3f4f5' >  <Grid templateColumns='repeat(2, 1fr)'>
  <GridItem w='40%' h='70'  marginTop='10px' marginLeft='20px' >
    <img style={{height:"100%" ,weight:"100%"}} src="https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/340000/340047.png"/>
  </GridItem>
  <GridItem w='90%' h='70'  marginTop='10px' marginLeft='-90px' >
    <Text  marginTop='19px' marginLeft='-100px' fontWeight='bold' >Srilanka</Text>
  </GridItem>
    </Grid></GridItem>

  <GridItem w='100%' h='100' border='1px solid #f3f4f5' >
  <Grid templateColumns='repeat(2, 1fr)'>
  <GridItem w='40%' h='70'  marginTop='10px' marginLeft='20px' >
    <img style={{height:"100%" ,weight:"100%"}} src="https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/313100/313147.logo.png"/>
  </GridItem>
  <GridItem w='90%' h='70'  marginTop='10px' marginLeft='-90px' >
    <Text  marginTop='19px' marginLeft='-10px' fontWeight='bold' >United Arab Emirates</Text>
  </GridItem>
    </Grid>
  </GridItem>

  <GridItem w='100%' h='100' border='1px solid #f3f4f5' >
  <Grid templateColumns='repeat(2, 1fr)'>
  <GridItem w='40%' h='70'  marginTop='10px' marginLeft='20px' >
    <img style={{height:"100%" ,weight:"100%"}} src="https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/317600/317615.png"/>
  </GridItem>
  <GridItem w='90%' h='70'  marginTop='10px' marginLeft='-90px' >
    <Text  marginTop='19px' marginLeft='-80px' fontWeight='bold' >West Indies</Text>
  </GridItem>
    </Grid>
  </GridItem>

  <GridItem w='100%' h='100' border='1px solid #f3f4f5' >
  <Grid templateColumns='repeat(2, 1fr)'>
  <GridItem w='40%' h='70'  marginTop='10px' marginLeft='20px' >
    <img style={{height:"100%" ,weight:"100%"}} src="https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/340500/340503.png"/>
  </GridItem>
  <GridItem w='90%' h='70'  marginTop='10px' marginLeft='-90px' >
    <Text  marginTop='19px' marginLeft='-90px' fontWeight='bold' >Zimbabew</Text>
  </GridItem>
    </Grid>
  </GridItem>
</Grid>
</Box>


<Box style={{backgroundColor:'white'}} width='75%'  border='1px solid #f3f4f5' ml='12.4%'  height='40px'  marginTop='50px'>
  <Text  textAlign='left' fontWeight='bold'  marginTop='5px' >POPULAR WOMEN'S TEAMS</Text>
  </Box>
 <Box style={{gridDisplay:'', backgroundColor:'white' }} height='402px' display='grid'  width='75%' ml='12.4%' border='1px solid #f3f4f5'>
 <Grid templateColumns='repeat(3, 1fr)'>
  <GridItem w='100%' h='100' border='1px solid #f3f4f5'>
  <Grid templateColumns='repeat(2, 1fr)'>
  <GridItem w='40%' h='70'  marginTop='10px' marginLeft='20px' >
    <img style={{height:"100%" ,weight:"100%"}} src="https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/313100/313128.logo.png"/>
  </GridItem>
  <GridItem w='90%' h='70'  marginTop='10px' marginLeft='-90px' >
    <Text  marginTop='19px' marginLeft='-60px' fontWeight='bold' >India Women</Text>
  </GridItem>
    </Grid>
  </GridItem>

  <GridItem w='100%' h='100' border='1px solid #f3f4f5' >
  <Grid templateColumns='repeat(2, 1fr)'>
  <GridItem w='40%' h='70'  marginTop='10px' marginLeft='20px' >
    <img style={{height:"100%" ,weight:"100%"}} src="https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/340400/340493.png"/>
  </GridItem>
  <GridItem w='90%' h='70'  marginTop='10px' marginLeft='-90px' >
    <Text  marginTop='19px' marginLeft='-30px' fontWeight='bold' >Australia Women</Text>
  </GridItem>
    </Grid>
  </GridItem>

  <GridItem w='100%' h='100' border='1px solid #f3f4f5' >
  <Grid templateColumns='repeat(2, 1fr)'>
  <GridItem w='40%' h='70'  marginTop='10px' marginLeft='20px' >
    <img style={{height:"100%" ,weight:"100%"}} src="https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/341400/341456.png"/>
  </GridItem>
  <GridItem w='90%' h='70'  marginTop='10px' marginLeft='-90px' >
    <Text  marginTop='19px' marginLeft='-20px' fontWeight='bold' >Bangladesh Women</Text>
  </GridItem>
    </Grid>
  </GridItem>

  <GridItem w='100%' h='100' border='1px solid #f3f4f5' >
  <Grid templateColumns='repeat(2, 1fr)'>
  <GridItem w='40%' h='70'  marginTop='10px' marginLeft='20px' >
    <img style={{height:"100%" ,weight:"100%"}} src="https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/313100/313114.logo.png"/>
  </GridItem>
  <GridItem w='90%' h='70'  marginTop='10px' marginLeft='-90px' >
    <Text  marginTop='19px' marginLeft='-40px' fontWeight='bold' >England Women</Text>
  </GridItem>
    </Grid>
  </GridItem>

  <GridItem w='100%' h='100' border='1px solid #f3f4f5' >
  <Grid templateColumns='repeat(2, 1fr)'>
  <GridItem w='40%' h='70'  marginTop='10px' marginLeft='20px' >
    <img style={{height:"100%" ,weight:"100%"}} src="https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/340500/340505.png"/>
  </GridItem>
  <GridItem w='90%' h='70'  marginTop='10px' marginLeft='-90px' >
    <Text  marginTop='19px' marginLeft='-10px' fontWeight='bold' >New Zealand Women</Text>
  </GridItem>
    </Grid>
  </GridItem>

  <GridItem w='100%' h='100' border='1px solid #f3f4f5' >
  <Grid templateColumns='repeat(2, 1fr)'>
  <GridItem w='40%' h='70'  marginTop='10px' marginLeft='20px' >
    <img style={{height:"100%" ,weight:"100%"}} src="https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/313100/313129.logo.png"/>
  </GridItem>
  <GridItem w='90%' h='70'  marginTop='10px' marginLeft='-90px' >
    <Text  marginTop='19px' marginLeft='-30px' fontWeight='bold' >Pakistan Women</Text>
  </GridItem>
    </Grid>
  </GridItem>

  <GridItem w='100%' h='100' border='1px solid #f3f4f5' >
  <Grid templateColumns='repeat(2, 1fr)'>
  <GridItem w='40%' h='70'  marginTop='10px' marginLeft='20px' >
    <img style={{height:"100%" ,weight:"100%"}} src="https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/313400/313402.logo.png"/>
  </GridItem>
  <GridItem w='90%' h='70'  marginTop='10px' marginLeft='-90px' >
    <Text  marginTop='19px' marginLeft='-40px' fontWeight='bold' >Thailand Women</Text>
  </GridItem>
    </Grid>
  </GridItem>

  <GridItem w='100%' h='100' border='1px solid #f3f4f5' >
  <Grid templateColumns='repeat(2, 1fr)'>
  <GridItem w='40%' h='70'  marginTop='10px' marginLeft='20px' >
    <img style={{height:"100%" ,weight:"100%"}} src="https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/313100/313125.logo.png"/>
  </GridItem>
  <GridItem w='90%' h='70'  marginTop='10px' marginLeft='-90px' >
    <Text  marginTop='19px' marginLeft='-10px' fontWeight='bold' >South Africa Women</Text>
  </GridItem>
    </Grid>
  </GridItem>

  <GridItem w='100%' h='100' border='1px solid #f3f4f5' >  <Grid templateColumns='repeat(2, 1fr)'>
  <GridItem w='40%' h='70'  marginTop='10px' marginLeft='20px' >
    <img style={{height:"100%" ,weight:"100%"}} src="https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/340000/340047.png"/>
  </GridItem>
  <GridItem w='90%' h='70'  marginTop='10px' marginLeft='-90px' >
    <Text  marginTop='19px' marginLeft='-30px' fontWeight='bold' >Srilanka Women</Text>
  </GridItem>
    </Grid></GridItem>

  <GridItem w='100%' h='100' border='1px solid #f3f4f5' >
  <Grid templateColumns='repeat(2, 1fr)'>
  <GridItem w='40%' h='70'  marginTop='10px' marginLeft='20px' >
    <img style={{height:"100%" ,weight:"100%"}} src="https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/317600/317615.png"/>
  </GridItem>
  <GridItem w='90%' h='70'  marginTop='10px' marginLeft='-90px' >
    <Text  marginTop='19px' marginLeft='-10px' fontWeight='bold' >West Indies Women</Text>
  </GridItem>
    </Grid>
  </GridItem>
</Grid>
</Box>


<Box style={{backgroundColor:'white'}} width='75%'  border='1px solid #f3f4f5' ml='12.4%'  height='40px'  marginTop='50px'>
  <Text  textAlign='left' fontWeight='bold' marginTop='5px' >IPL 2022 TEAMS</Text>
  </Box>
<Box style={{gridDisplay:'', backgroundColor:'white' }} height='402px' display='grid'  width='75%' ml='12.4%' border='1px solid #f3f4f5'>
 <Grid templateColumns='repeat(3, 1fr)'>
<GridItem w='100%' h='100' border='1px solid #f3f4f5'>
  <Grid templateColumns='repeat(2, 1fr)'>
  <GridItem w='40%' h='70'  marginTop='10px' marginLeft='20px' >
    <img style={{height:"100%" ,weight:"100%"}} src="https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/313400/313421.logo.png"/>
  </GridItem>
  <GridItem w='90%' h='70'  marginTop='10px' marginLeft='-90px' >
    <Text  marginTop='19px' marginLeft='-10px' fontWeight='bold' >Chennai Super Kings</Text>
  </GridItem>
    </Grid>
  </GridItem>

<GridItem w='100%' h='100' border='1px solid #f3f4f5' >
  <Grid templateColumns='repeat(2, 1fr)'>
  <GridItem w='40%' h='70'  marginTop='10px' marginLeft='20px' >
    <img style={{height:"100%" ,weight:"100%"}} src="https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/313400/313422.logo.png"/>
  </GridItem>
  <GridItem w='90%' h='70'  marginTop='10px' marginLeft='-90px' >
    <Text  marginTop='19px' marginLeft='-60px' fontWeight='bold' >Delhi Capitals</Text>
  </GridItem>
    </Grid>
  </GridItem>

<GridItem w='100%' h='100' border='1px solid #f3f4f5' >
  <Grid templateColumns='repeat(2, 1fr)'>
  <GridItem w='40%' h='70'  marginTop='10px' marginLeft='20px' >
    <img style={{height:"100%" ,weight:"100%"}} src="https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/334700/334707.png"/>
  </GridItem>
  <GridItem w='90%' h='70'  marginTop='10px' marginLeft='-90px' >
    <Text  marginTop='19px' marginLeft='-70px' fontWeight='bold' >Gujrat Titans</Text>
  </GridItem>
    </Grid>
  </GridItem>

<GridItem w='100%' h='100' border='1px solid #f3f4f5' >
  <Grid templateColumns='repeat(2, 1fr)'>
  <GridItem w='40%' h='70'  marginTop='10px' marginLeft='20px' >
    <img style={{height:"100%" ,weight:"100%"}} src="https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/313400/313419.logo.png"/>
  </GridItem>
  <GridItem w='90%' h='70'  marginTop='10px' marginLeft='-90px' >
    <Text  marginTop='19px'  fontWeight='bold' >Kolkata Knight Riders</Text>
  </GridItem>
    </Grid>
  </GridItem>

<GridItem w='100%' h='100' border='1px solid #f3f4f5' >
  <Grid templateColumns='repeat(2, 1fr)'>
  <GridItem w='40%' h='70'  marginTop='10px' marginLeft='20px' >
    <img style={{height:"100%" ,weight:"100%"}} src="https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/333800/333885.png"/>
  </GridItem>
  <GridItem w='90%' h='70'  marginTop='10px' marginLeft='-90px' >
    <Text  marginTop='19px' fontWeight='bold' >Lucknow Super Giants</Text>
  </GridItem>
    </Grid>
  </GridItem>

 <GridItem w='100%' h='100' border='1px solid #f3f4f5' >
  <Grid templateColumns='repeat(2, 1fr)'>
  <GridItem w='40%' h='70'  marginTop='10px' marginLeft='20px' >
    <img style={{height:"100%" ,weight:"100%"}} src="https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/344000/344062.png"/>
  </GridItem>
  <GridItem w='90%' h='70'  marginTop='10px' marginLeft='-90px' >
    <Text  marginTop='19px' marginLeft='-40px' fontWeight='bold' >Mumbai Indians</Text>
  </GridItem>
    </Grid>
  </GridItem>

<GridItem w='100%' h='100' border='1px solid #f3f4f5' >
  <Grid templateColumns='repeat(2, 1fr)'>
  <GridItem w='40%' h='70'  marginTop='10px' marginLeft='20px' >
    <img style={{height:"100%" ,weight:"100%"}} src="https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/317000/317003.png"/>
  </GridItem>
  <GridItem w='90%' h='70'  marginTop='10px' marginLeft='-90px' >
    <Text  marginTop='19px' marginLeft='-60px' fontWeight='bold' >Punjab Kings</Text>
  </GridItem>
    </Grid>
  </GridItem>

<GridItem w='100%' h='100' border='1px solid #f3f4f5' >
  <Grid templateColumns='repeat(2, 1fr)'>
  <GridItem w='40%' h='70'  marginTop='10px' marginLeft='20px' >
    <img style={{height:"100%" ,weight:"100%"}} src="https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/313400/313423.logo.png"/>
  </GridItem>
  <GridItem w='90%' h='70'  marginTop='10px' marginLeft='-90px' >
    <Text  marginTop='19px' marginLeft='-40px' fontWeight='bold' >Rajasthan Royals</Text>
  </GridItem>
    </Grid>
  </GridItem>

<GridItem w='100%' h='100' border='1px solid #f3f4f5' >  <Grid templateColumns='repeat(2, 1fr)'>
  <GridItem w='40%' h='70'  marginTop='10px' marginLeft='20px' >
    <img style={{height:"100%" ,weight:"100%"}} src="https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/313400/313418.logo.png"/>
  </GridItem>
  <GridItem w='130%' h='70'  marginTop='10px' marginLeft='-90px' >
    <Text  marginTop='19px' marginLeft='-20px' fontWeight='bold' >Royal Challengers Bangalore</Text>
  </GridItem>
    </Grid></GridItem>

<GridItem w='100%' h='100' border='1px solid #f3f4f5' >
  <Grid templateColumns='repeat(2, 1fr)'>
  <GridItem w='40%' h='70' marginTop='10px' marginLeft='20px' >
    <img style={{height:"100%" ,weight:"100%"}} src="https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/313400/313480.logo.png"/>
  </GridItem><GridItem w='90%' h='70' marginTop='10px' marginLeft='-90px' >
    <Text  marginTop='19px' marginLeft='-10px' fontWeight='bold' >Sunrisers Hyderabad</Text>
  </GridItem>
    </Grid>
  </GridItem>
</Grid>
</Box>
 </div>
  )
}
export default Videos
