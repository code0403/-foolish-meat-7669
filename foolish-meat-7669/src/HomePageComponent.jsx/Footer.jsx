import React from 'react';
import {Box, Heading} from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'

function Footer() {
  return (
    <>
    <Box bg="orange.100" height="500px">
      <Heading as='h5' size='sm' textAlign="left" marginLeft="30px" paddingTop="30px">From Electronics, Fashion to Cars: Buy Everything Online from the Convenience of Your Home from Paytm Mall</Heading>
      
      <Box>
     
      <Tabs>
  <TabList display="flex" justifyContent="space-around">
    <Tab>One</Tab> 
    <Tab>Two</Tab>
    <Tab>Three</Tab>
  </TabList>

  <TabPanels>
    <TabPanel>
      <p>one!</p>
    </TabPanel>
    <TabPanel>
      <p>two!</p>
    </TabPanel>
    <TabPanel>
      <p>three!</p>
    </TabPanel>
  </TabPanels>
</Tabs>


     


      </Box>
    </Box>

    </>
  )
}

export default Footer