
import React from 'react';
import {Box, Image} from "@chakra-ui/react";
import {Link} from "react-router-dom";

function TopNav() {
  return (
    <>
       <Box border="0px solid black" width="100%" height="100px" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
               <Box bg='gray.300' w='100%' p={4}  marginTop="none" ></Box>
               <Link to="/"><Image width="130px" height="80px" border="0px solid black" src="/images/Smart Online Logo.jpg"></Image></Link>
         </Box>
    </>
  )
}

export default TopNav