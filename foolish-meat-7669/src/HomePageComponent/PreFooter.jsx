import React from 'react';
import {Link} from "react-router-dom";
import {Box, Text, Divider } from "@chakra-ui/react";
import { Icon } from '@chakra-ui/react';
import { FaApple,FaAndroid, FaWindows, FaTwitter,FaInstagram,FaFacebookF,FaYoutube, FaCcVisa, FaCcMastercard } from "react-icons/fa";


function PreFooter() {
  return (
    <>
       <Box p={4} bg="gray.200" margin="auto" marginTop="50px"></Box>

        <Text align="left" marginLeft="20px" fontSize="sm" marginTop="10px" noOfLines={[1, 2]}>Cashback would be added as Paytm Cash, which is One97 Communications Ltd loyalty program. It can be used to pay for goods & services sold by merchants that accept ‘Pay with Paytm’</Text>

       <Box p={2} bg="gray.200" margin="auto" marginTop="10px"></Box>

     <Box p={4} bg="gray.300" margin="auto" display="flex" justifyContent="space-around" alignItems="center">
        <Box border="0px solid black" width= "900px" display={{md:"flex", lg:"flex"}} justifyContent="space-between" alignItems="center">
           <Link> <Text fontSize="sm" fontWeight="500" color="orange.500">About Us  </Text></Link>
            <Link><Text fontSize="sm"fontWeight="500" color="orange.500">Partner with us</Text></Link>
            <Link><Text fontSize="sm" fontWeight="500" color="orange.500">Terms & Conditions</Text></Link>
            <Link><Text fontSize="sm" fontWeight="500" color="orange.500">Blog</Text></Link>
            <Link><Text fontSize="sm" fontWeight="500" color="orange.500">Media</Text></Link>
            <Link><Text fontSize="sm" fontWeight="500" color="orange.500">Help 24x7</Text></Link>
            <Link><Text fontSize="sm" fontWeight="500" color="orange.500">Grievance policy</Text></Link>
            <Link><Text fontSize="sm" fontWeight="500" color="orange.500">Bug bounty</Text></Link>
            <Link><Text fontSize="sm" fontWeight="500" color="orange.500">Return/Cancellation policy</Text></Link>
        </Box>

        <Box border="0px solid black" width= "250px" height={{base:"80px" , md:"40px" ,lg:"40px"}} display={{md:"flex", lg:"flex"}}   justifyContent="space-between" alignItems="center">
           <Link><Icon as={FaApple} boxSize={5} color="orange.500"/></Link>
           <Link><Icon as={FaAndroid} boxSize={5} color="orange.500"/></Link>
           <Link><Icon as={FaWindows} boxSize={5} color="orange.500"/></Link>

           <Divider orientation='vertical'  h={8} color="orange.500" />

           <Link><Icon as={FaTwitter} boxSize={5} color="orange.500"/></Link>
           <Link><Icon as={FaInstagram} boxSize={5} color="orange.500"/></Link>
           <Link><Icon as={FaFacebookF} boxSize={5} color="orange.500"/></Link>
           <Link><Icon as={FaYoutube} boxSize={5} color="orange.500"/></Link>
        </Box>
      </Box>

        <Box display="flex" justifyContent="space-between" alignItems="center" marginTop="20px">
            <Box width="100px"display="flex" justifyContent="space-around" alignItems="center" marginLeft="30px">
              <Icon as={FaCcVisa} boxSize={6} />
              <Icon as={FaCcMastercard} boxSize={6} />
            </Box>
           <Box width="300px"  display="flex" justifyContent="space-around" alignItems="center">
             <Box border="1px solid gray" width="100px" height="50px"><Text fontSize="sm">Become A Seller</Text></Box>
              <Box border="1px solid gray" width="150px" height="50px"><Text fontSize="sm">Paytm Wallet Payment Services</Text></Box>
            </Box>
        </Box>

        <Box p={2} bg="gray.200" margin="auto" marginTop="20px"></Box>
    </>
  )
}

export default PreFooter;