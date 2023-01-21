import React from 'react'
import {Image,Box, Text} from "@chakra-ui/react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function HomeandFurnishing() {
  
  const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};



const sliderImages = [

  {
    url:"https://assetscdn1.paytm.com/images/catalog/view_item/498479/1613247367528.png?imwidth=414&impolicy=hq",
    name:"Big Bazaar"
  },
  {
    url:"https://assetscdn1.paytm.com/images/catalog/view_item/498482/1620737072141.png?imwidth=414&impolicy=hq",
    name:"Urban Ladder"
  },
  {
    url:"https://assetscdn1.paytm.com/images/catalog/view_item/498480/1620737097910.jpg?imwidth=414&impolicy=hq",
    name:"@home"
  },
  {
    url:"https://assetscdn1.paytm.com/images/catalog/view_item/498484/1610566898069.jpg?imwidth=414&impolicy=hq",
    name:"More"
  },
  {
    url:"https://assetscdn1.paytm.com/images/catalog/view_item/498485/1620737113562.png?imwidth=414&impolicy=hq",
    name:"Home Center"
  },
  {
    url:"https://assetscdn1.paytm.com/images/catalog/view_item/498490/1610567023040.png?imwidth=414&impolicy=hq",
    name:"Prestige"
  },
  {
    url:"https://assetscdn1.paytm.com/images/catalog/view_item/498486/1610567208285.png?imwidth=414&impolicy=hq",
    name:"RatnaDeep"
  },
  {
    url:"https://assetscdn1.paytm.com/images/catalog/view_item/498480/1620737097910.jpg?imwidth=414&impolicy=hq",
    name:"Urban Ladder"
  },
    
 ]

 const sliderImagesJewel = [

   {
     url: "https://assetscdn1.paytm.com/images/catalog/view_item/711188/1613028659969.png?imwidth=414&impolicy=hq",
     name:"Kalyan | Get 20% CashBack"
   },
   {
    url: "https://assetscdn1.paytm.com/images/catalog/view_item/711194/1620745874093.jpg?imwidth=414&impolicy=hq",
    name:"Jewelfina"
  },
  {
    url: "https://assetscdn1.paytm.com/images/catalog/view_item/711199/1613028660058.jpg?imwidth=414&impolicy=hq",
    name:"Tanshiq"
  },
  {
    url: "https://assetscdn1.paytm.com/images/catalog/view_item/711200/1620745456365.jpg?imwidth=414&impolicy=hq",
    name:"Up to 60% OFF"
  },
 ]

  return (
    <>
    <Box><Text marginTop="30px" fontFamily="sans-serif" fontSize="30px" fontWeight="600"> Grocery & Home Furnishing</Text></Box>
    <Box>
      <Carousel responsive={responsive}>
         {
           sliderImages.map((el) => {
            return <Box display="flex" flexDirection="column" alignItems="center" boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px">
                <Image src={el.url} w={"300px"} h={"400px"} marginTop="30px"/>
                <Text fontFamily="sans-serif" fontStyle="normal" fontWeight="700" fontSize="22px" color="gray.900" marginTop="10px">{el.name}</Text>
                </Box> 
          })
         }
    </Carousel>;
    </Box>

    <Box p={1} bg="tomato" margin="auto" w="200px" marginTop="30px" borderRadius="50px"></Box>

    <Box><Text marginTop="30px" fontFamily="sans-serif" fontSize="30px" fontWeight="600">Jewellery Brands</Text></Box>
    <Box>
      <Carousel responsive={responsive}>
         {
           sliderImagesJewel.map((el) => {
            return <Box  display="flex" flexDirection="column" alignItems="center" boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px">
                <Box w={"300px"} h={"450px"} border="0px solid black">
                <Image src={el.url} w={"300px"} h={"400px"} marginTop="30px"/></Box>
                <Text fontFamily="sans-serif" fontStyle="normal" fontWeight="700" fontSize="22px" color="gray.900" marginTop="10px">{el.name}</Text>
                </Box> 
          })
         }
      </Carousel>
    </Box>

    <Box p={1} bg="tomato" margin="auto" w="200px" marginTop="30px" borderRadius="50px"></Box>

    <Box p={2} bg="gray.200" margin="auto" marginTop="30px"></Box>



  </>
    )
  
}

export default HomeandFurnishing;