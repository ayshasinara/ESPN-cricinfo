import React from 'react'
import {
    AccordionItem,
    Accordion,
    AccordionButton,
    AccordionIcon,
    AccordionPanel,
    Box,
    Heading
    } from "@chakra-ui/react"

import { LsInning } from './LsInning';
import { WfInning } from './WfInning';

export const AccordianTask = () => {
  return (
    <div>
        <Accordion defaultIndex={[0]}   allowMultiple>
  <AccordionItem>
    <h2>
      <AccordionButton border="1px" borderColor="lightgray" borderRadius="5px" p = "12px 14px">
      <AccordionIcon />
        <Box flex='1' textAlign='left' ml="8px">
         <Heading fontSize="12px">LONDON SPIRIT (MEN) INNINGS <span style={{fontSize:"12px", color:"gray"}}>(100 ball maximum)</span></Heading>
        </Box>
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
        <LsInning/>
    </AccordionPanel>
  </AccordionItem>
  <AccordionItem mt="15px">
    <h2>
      <AccordionButton border="1px" borderColor="lightgray" borderRadius="5px" p = "12px 14px">
      <AccordionIcon />
        <Box flex='1' textAlign='left' ml="8px">
         <Heading fontSize="12px">WELSH FIRE (MEN) INNINGS <span style={{fontSize:"12px", color:"gray"}}>(Target: 157 runs from 100 balls)</span></Heading>
        </Box>
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
        <WfInning />
    </AccordionPanel>
  </AccordionItem>
</Accordion>
    </div>
  )
}
