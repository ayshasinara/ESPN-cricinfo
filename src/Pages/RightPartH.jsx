import React from 'react';
import { Box, Text, Button, Image } from '@chakra-ui/react';
import { ChevronRightIcon } from'@chakra-ui/icons';


const RightPartH = () => {
  return (
    // <div style={{border:"1px solid red"}}>
    <Box display={{base: "none", md: "none", lg: "block"}} w='21%' ml='1100'>
        {/* <div style={{border:"1px solid red",marginleft:"-1000px"}}> */}
      <Box mb='3rem' border='1px solid grey'>
        <Text p='0.5rem' pl='1rem' borderBottom='1px solid grey' fontSize='14px' fontWeight='600'  >News Headlines</Text>
        <Button _hover={{background: "#9ed1f9"}} color='black' w='100%' justifyContent='left' backgroundColor='white' border='1px solid white' fontSize='12px' >
          <ChevronRightIcon fontSize='20px' color='#03a9f4' mr='0.80rem' />Akram: Too early to compare Babar, Kohli</Button>
        <Button _hover={{background: "#9ed1f9"}} color='black' w='100%' justifyContent='left' backgroundColor='white' border='1px solid white' fontSize='12px' >
          <ChevronRightIcon  fontSize='20px' color='#03a9f4'  mr='0.80rem' />Babar: Shafique can be 'one of the best'</Button>
        <Button _hover={{background: "#9ed1f9"}} color='black' w='100%' justifyContent='left'backgroundColor='white'  border='1px solid white' fontSize='12px' >
          <ChevronRightIcon  fontSize='20px' color='#03a9f4' mr='0.80rem' />Agarwal turns his white-ball form around</Button>
        <Button _hover={{background: "#9ed1f9"}} color='black' w='100%' justifyContent='left' backgroundColor='white'  border='1px solid white' fontSize='12px'>
          <ChevronRightIcon  fontSize='20px' color='#03a9f4' mr='0.80rem' />David Hemp to leave Pak Women job</Button>
        <Button _hover={{background: "#9ed1f9"}} color='black' w='100%' justifyContent='left' backgroundColor='white' border='1px solid white' fontSize='12px' >
          <ChevronRightIcon  fontSize='20px' color='#03a9f4' mr='0.80rem' />Root bats for Stokes on and off field</Button>
        <Button _hover={{background: "#9ed1f9"}} color='black' w='100%' justifyContent='left' backgroundColor='white' border='1px solid white' fontSize='12px' >
          <ChevronRightIcon  fontSize='20px' color='#03a9f4' mr='0.80rem' />Muzarabani back for Australia ODIs</Button>
        <Button _hover={{background: "#9ed1f9"}} color='black' w='100%' justifyContent='left'backgroundColor='white'  border='1px solid white' fontSize='12px' >
          <ChevronRightIcon  fontSize='20px' color='#03a9f4' mr='0.80rem' />Buzz: The bhangra after the win</Button>
      </Box>
      <Box border='1px solid grey' borderRadius='15px'>
        <Box borderBottom='1px solid grey'>
          <Image w='90%'  borderRadius='15px' m='1rem auto 0 auto'src='https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_640,q_50/lsci/db/PICTURES/CMS/51100/51162.3.jpg'/>
          <Text fontWeight='600'fontSize='14px' >On This Day: India's first Test win in England</Text>
        </Box>
        <Box borderBottom='1px solid grey'>
          <Image w='90%'  borderRadius='15px' m='1rem auto 0 auto'src='https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_640,q_50/lsci/db/PICTURES/CMS/344600/344603.png' />
          <Text fontWeight='600'fontSize='14px' >Quote Unquote: who's saying what?</Text>
        </Box>
        <Box borderBottom='1px solid grey'>
          <Image w='90%'  borderRadius='15px' m='1rem auto 0 auto'src='https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_640,q_50/lsci/db/PICTURES/CMS/342200/342284.6.jpg'/>
          <Text fontWeight='600'fontSize='14px' >Photo feature: helmets</Text>
        </Box>
        <Box borderBottom='1px solid grey'>
          <Image w='90%'  borderRadius='15px' m='1rem auto 0 auto'src='https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_640,q_50/lsci/db/PICTURES/CMS/344500/344554.6.jpg' />
          <Text fontWeight='600'fontSize='14px' >The latest cricket photos</Text>
        </Box>
        <Box borderBottom='1px solid grey'>
          <Image w='90%'  borderRadius='15px' m='1rem auto 0 auto'src='https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_640,q_50/lsci/db/PICTURES/CMS/151100/151163.5.jpg'  />
          <Text fontWeight='600'fontSize='14px' >The 'real value' of wickets: can anyone match McGrath?</Text>
        </Box>
        <Box borderBottom='1px solid grey'>
          <Image w='90%'  borderRadius='15px' m='1rem auto 0 auto'src='https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_640,q_50/lsci/db/PICTURES/CMS/336000/336034.6.jpg' />
          <Text fontWeight='600'fontSize='14px' >Who does it best in women's cricket?</Text>
        </Box>
        <Box borderBottom='1px solid grey'>
          <Image w='90%'  borderRadius='15px' m='1rem auto 0 auto'src='https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_640,q_50/lsci/db/PICTURES/CMS/340500/340544.6.jpg' />
          <Text fontWeight='600'fontSize='14px' >Photo feature: Stairs in cricket</Text>
        </Box>
        <Box borderBottom='1px solid grey'>
          <Image w='90%'  borderRadius='15px' m='1rem auto 0 auto'src='https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_640,q_50/lsci/db/PICTURES/CMS/318700/318789.jpg' />
          <Text fontWeight='600'fontSize='14px' >Records index: most runs, most wickets, and a lot more</Text>
        </Box>
        <Box borderBottom='1px solid grey'>
          <Image w='90%'  borderRadius='15px' m='1rem auto 0 auto'src='https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_640,q_50/lsci/db/PICTURES/CMS/340200/340228.6.jpg'/>
          <Text fontWeight='600'fontSize='14px' >Temba Bavuma: 'I understand I have the influence to make things better around me'</Text>
        </Box>
        <Box borderBottom='1px solid grey'>
          <Image w='90%'  borderRadius='15px' m='1rem auto 0 auto'src='https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_640,q_50/lsci/db/PICTURES/CMS/339900/339937.6.jpg' />
          <Text fontWeight='600'fontSize='14px' >Rankings: Who's leading in every format</Text>
        </Box>
        <Box>
          <Image w='90%'  borderRadius='15px' m='1rem auto 0 auto'src='https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_640,q_50/lsci/db/PICTURES/CMS/222300/222305.11.jpg'/>
          <Text fontWeight='600'fontSize='14px' >Taufel: 'Can't solve odd grey area by replacing with technology'</Text>
        </Box>
      </Box>
      {/* </div> */}
    </Box>
    // </div>
  )
}
export default RightPartH