import React from 'react';
import Navbar from "../components/Navbar";
import PreFooter from "../HomePageComponent/PreFooter";
import Footer from "../HomePageComponent/Footer";
import { useState, useEffect } from 'react';
import {Box,Text,Button, Divider, Image,Input} from "@chakra-ui/react";
import { Menu,MenuButton,MenuList,MenuItem } from '@chakra-ui/react';
import {ChevronDownIcon, ChevronUpIcon,ChevronLeftIcon} from "@chakra-ui/icons";
import { Grid, GridItem } from '@chakra-ui/react';
import {
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
} from '@chakra-ui/react';
import {FaRupeeSign} from "react-icons/fa";
import { Link } from 'react-router-dom';




function Product() {
  const[data, setData] = useState([]);
  const[noItems, setNoItems] = useState(null);
 
  
  useEffect(()=>{
  
       async function getData () {
    
      try {
        let res = await fetch(`http://localhost:8080/data`)
        let data = await res.json();
        console.log(data.category);
        setData(data.home);
        setNoItems(data.home.length);
      } catch (error) {
        console.log(error);
      }
    
     }
    
     getData();

  },[]);

 console.log(data);

  return (
    <div>
      <Navbar />
      <Box width="100%" height="auto" bg="gray.50"  display="flex" justifyContent="space-around">
         <Box width="350px" height="400px" border="1px solid black" marginTop="80px" bg="white">
          <Text textAlign={'left'} marginLeft="20px" fontSize='18px' marginTop='20px'> <ChevronLeftIcon />Deals For You</Text>
          <Text textAlign={'left'} marginLeft="50px" fontSize={'16px'}>Miscellanous</Text>

          <Divider marginTop={'40px'} colorScheme="gray" width={'300px'} marginLeft='20px' />

          <Text textAlign={'left'} marginLeft="20px" marginTop={'30px'} fontSize={'24px'} fontWeight="bold">Price</Text>
          <Box marginLeft='40px' marginRight="40px">
          <RangeSlider  defaultValue={[1000, 150000]}>
              <RangeSliderTrack bg='red.100'>
               <RangeSliderFilledTrack bg='tomato' />
              </RangeSliderTrack>
              <RangeSliderThumb boxSize={4} index={0}>
               <Box color='tomato' as={FaRupeeSign} />
              </RangeSliderThumb>
              <RangeSliderThumb boxSize={4} index={1}>
                <Box color='tomato' as={FaRupeeSign} />
              </RangeSliderThumb>
            </RangeSlider>
          </Box>  

            <Box display='flex' justifyContent= "space-around" alignItems="center" >
              <Input  type='number' placeholder='1000' width="100px"  marginTop="20px" />
              <Text marginTop="20px">To</Text>
              <Input  type='number' placeholder='150000' width="100px" marginTop="20px"/>
            </Box>

            <Divider marginTop={'40px'} colorScheme="gray" width={'300px'} marginLeft='20px' />
         </Box>



        <Box width="950px"  border="0px solid black" marginTop="80px" bg="white">
               
          <Box display="flex" justifyContent="space-around" alignItems="center" marginTop="30px" zIndex="100" position="sticky">
            <Text fontSize="2xl" fontFamily="sans-serif" fontWeight="500" >@Home - {noItems}</Text>
            <Menu>
              {({ isOpen }) => (
             <>
                <MenuButton isActive={isOpen} as={Button} rightIcon={isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />} width="200px" bg="none" border="1px solid black" _hover={{bg:"none"}}>
                   Sort By Popular</MenuButton>
                <MenuList>
                  <MenuItem color="red.500">New</MenuItem>
                  <MenuItem>Popular</MenuItem>
                  <MenuItem>Low to High Price</MenuItem>
                  <MenuItem>High to Low Price</MenuItem>
                </MenuList>
              </>
              )}
            </Menu>
          </Box>

          <Divider marginTop="20px" />
          
          <Box position="relative">
            <Grid templateColumns='repeat(4, 1fr)' gap={6} >
            {
                data.map((el) => (
                  <Link to="/orders"><GridItem key={el.itemId}>
                    <Image  src={el.imgUrl}/>
                    <Text textAlign={'left'} marginLeft="20px">{el.name}</Text>
                    <Text textAlign={'left'}  marginLeft="20px">{el.price}</Text>
                  </GridItem></Link>
                ))
               }
            </Grid>
          </Box>
                
      </Box>
      </Box>
      
      <PreFooter />
      <Footer />
    </div>
  )
}

export default Product;