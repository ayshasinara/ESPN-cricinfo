import React from 'react'
import{Box} from "@chakra-ui/react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
 TableContainer,
} from '@chakra-ui/react'

const Scoredescription = () => {
  return (<div >
 <div className="Main">
<Box>
<Box border='1 px solid #dfdfe1' borderRadius='lg' w='90%' margin={"auto"}  marginTop={""}  backgroundColor="white">
<TableContainer>
<Table variant='' colorScheme='teal'>
<Thead>
<Tr>
 <Th fontSize={"1xl"} borderBottom="1px">INTERNATIONAL TOUR</Th>

</Tr>
</Thead>
 <Tbody>
      <Tr>
      <Td color={"Highlight"}>New Zealand tour of Australia, Sep 2022</Td>
       </Tr>
      <Tr>
      <Td color={"Highlight"}>India Women tour of England, Sep 2022</Td>
     </Tr>
      <Tr>
      <Td color={"Highlight"}>England tour of Pakistan, Sep 2022</Td>
      </Tr>
      <Tr>
      <Td color={"Highlight"}>Australia tour of India, Sep 2022</Td>
    </Tr>
      <Tr>
      <Td color={"Highlight"}>South Africa tour of India, Sep 2022</Td>
      </Tr>
      <Tr>
      <Td color={"Highlight"}>New Zealand T20I Tri-Series, Oct 2022</Td>
      </Tr>
      <Tr>
      <Td color={"Highlight"}>West Indies tour of Australia, Oct 2022</Td>
      </Tr>
      <Tr>
      <Td color={"Highlight"}>England tour of Australia, Oct 2022</Td>
    </Tr>
      <Tr>
      <Td color={"Highlight"}>India tour of New Zealand, Nov 2022</Td>
      </Tr>
      <Tr>
      <Td color={"Highlight"}>South Africa tour of Australia, Dec 2022</Td>
      </Tr>
      <Tr>
      <Td color={"Highlight"}>Bangladesh Women tour of New Zealand, Dec 2022</Td>
      </Tr>
      <Tr>
      <Td color={"Highlight"}>England tour of New Zealand, Feb 2023</Td>
      </Tr>
      <Tr>
      <Td color={"Highlight"}>Sri Lanka tour of New Zealand, Mar 2023</Td>
      </Tr>
    </Tbody>
    <Tfoot>
    </Tfoot>
  </Table>
</TableContainer>
</Box>
</Box>

 </div>
</div>
  )
}
export default Scoredescription