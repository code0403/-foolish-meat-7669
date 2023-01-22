import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../HomePageComponent/Footer";
import PreFooter from "../HomePageComponent/PreFooter";
import {Box, Text} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { ChevronRightIcon } from '@chakra-ui/icons';



function Orders(){

    return (
       <>
            <Navbar />
            
            <Box width="100%" height="600px" bg="gray.50" display="flex" justifyContent="space-around" >
                <Box width="900px" height="500px" bg="white"  border="1px solid black" marginTop="80px">

                </Box>

                <Link to="/product">
                    <Box width="400px" height="60px" border="1px solid black" marginTop="150px" bg="white" borderRadius="10px" display="flex" justifyContent="space-around" alignItems="center" >
                      <Text fontSize="18px">Top Sellings on @home</Text> 
                      <ChevronRightIcon  boxSize={8}/>
                    </Box>
                </Link>

            </Box>



            <PreFooter />
            <Footer />
       </>
    )
}

export default Orders;