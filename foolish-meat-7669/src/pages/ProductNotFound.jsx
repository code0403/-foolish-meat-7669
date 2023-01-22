import React from 'react';
import Navbar from "../components/Navbar";
import { Box, Image,Text, Button} from '@chakra-ui/react';
import { Divider } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import PreFooter from '../HomePageComponent/PreFooter';
import Footer from '../HomePageComponent/Footer';

function ProductNotFound() {
  return (
    <>
      <Navbar/>

      <Box width="100%" height="400px" border="0px solid black" display="flex" justifyContent="center" alignItems="center">
        <Box width="400px" height="350px" border="0px solid black" margin="auto">
           <Image src="images/analysis.png" boxSize='300px' objectFit='cover' />
        </Box>
        <Box width="500px" height="350px" border="0px solid black" margin="auto">
            <Text fontFamily="sans-serif" fontSize="3xl" textAlign="left">Sorry! Couldn’t find the product you were looking for!!</Text>

          <Divider width= "400px" marginTop="40px" marginLeft="50px" borderWidth= '2px' borderStyle= "solid" borderRadius= "10" borderColor= "orange.500"/>
        <Box>
            <Link><Text color="orange.400" textAlign="left"  marginTop="40px"fontFamily="sans-serif" fontSize="md" >Search Across Paytm Mall</Text></Link>
        </Box>

        <Box marginTop="40px" display="flex" alignItems="flex-start">
            <Link to="/"><Button bg="none" border="1px solid orange" color="orange.500" _hover={"bg:none"}>Continue Shopping</Button></Link>
        </Box>
        </Box>
        
      </Box>

      <PreFooter />
      <Footer />

        
    </>
  )
}

export default ProductNotFound;