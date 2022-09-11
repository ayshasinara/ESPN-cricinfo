import {Container,Link, SimpleGrid,Stack,Text} from '@chakra-ui/react';

const ListHeader = ({ children }) => {
return (
<Text fontWeight={'700'} fontSize={'lg'} mb={2}>{children}</Text>)};

export default function Footer() {
return (
<Container as={Stack} maxW={'7xl'} py={10} marginTop={100} >
          <SimpleGrid columns={{ base: 1, sm: 2, md: 4,lg:5 }} width="95%" margin="auto" border="1px solid #dfdfe1" shadow={"lg"}  borderRadius="15px" padding="1rem" spacing={8}>
           
           
            <Stack align={'flex-start'}>
              <ListHeader>Key Series</ListHeader>
              <line style={{border:'0.2px solid #dfdfe1' ,width:'150px'}}></line>
              <Link>Asia Cup QLF</Link>
              <Link>Asia Cup</Link>
              <Link>England v South Africa</Link>
              <Link>Australia v Zimbabwe</Link>
              <Link>The Hundred (M)</Link>
              <Link>The Hundred (W)</Link>
              <Link>County Div1</Link>
              <Link>County Div2</Link>
              <Link>6lXTY (M)</Link>
              <Link>6lXTY (W)</Link>
              <Link>Women's Championship</Link>
              <Link>World Test Championship</Link>
              <Link>World Cup Super League</Link>
              </Stack>
            
            
            <Stack align={'flex-start'}>
              <ListHeader>Quick Links</ListHeader>
              <line style={{border:'0.2px solid #dfdfe1' ,width:'150px'}}></line>
              <Link>T20 Time Out</Link>
              <Link>T20 Time Out Hindi</Link>
              <Link>ICC Rankings</Link>
              <Link>Fantasy Pick</Link>
              <Link>Haan Ya Naa</Link>
            </Stack>
          
          
            <Stack align={'flex-start'}>
              <ListHeader>ESPNcrickinfo</ListHeader>
              <line style={{border:'0.2px solid #dfdfe1' ,width:'150px'}}></line>
              <Link>Android App</Link>
              <Link>iOS App</Link>
            </Stack>
           
           
            <Stack align={'flex-start'}>
              <ListHeader>Follow ESPNcrickinfo</ListHeader>
              <line style={{border:'0.2px solid #dfdfe1' ,width:'150px'}}></line>
              <Link>Instagram</Link>
              <Link>Twitter</Link>
              <Link>Facebook</Link>
             <Link>YouTube</Link>
            </Stack> 
         
         
            <Stack align={'flex-start'}>
              <ListHeader> ESPN Sites</ListHeader>
              <line style={{border:'0.2px solid #dfdfe1' ,width:'150px'}}></line>
              <Link>The Cricket Month</Link>
              <Link>ESPN</Link>
            </Stack> 
          </SimpleGrid>
        </Container>
    );
  }