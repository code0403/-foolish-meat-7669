import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Image,Box, Text } from '@chakra-ui/react';


function SliderThree() {
    
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 15,
          slidesToSlide: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 8,
          slidesToSlide: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 5,
          slidesToSlide: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 2,
          slidesToSlide: 1
        }
      };

      const sliderImages = [

        {
            url:"https://assetscdn1.paytm.com/images/catalog/view_item/995524/1643867277967.jpg?imwidth=140&impolicy=hq",
            name:"Bata"
        },
        {
            url:"https://assetscdn1.paytm.com/images/catalog/view_item/995525/1643867496758.jpg?imwidth=140&impolicy=hq",
            name:"Nike"
        },
        {
            url:"https://assetscdn1.paytm.com/images/catalog/view_item/995526/1643867362885.png?imwidth=140&impolicy=hq",
            name:"Puma"
        },
        {
            url:"https://assetscdn1.paytm.com/images/catalog/view_item/995527/1643867532232.jpg?imwidth=140&impolicy=hq",
            name:"Khadims"
        },
        {
            url:"https://assetscdn1.paytm.com/images/catalog/view_item/995528/1643867625370.jpg?imwidth=140&impolicy=hq",
            name:"Red Chief"
        },
        {
            url:"https://assetscdn1.paytm.com/images/catalog/view_item/710655/1643866806024.jpg?imwidth=140&impolicy=hq",
            name:"Speedo"
        },
        {
            url:"https://assetscdn1.paytm.com/images/catalog/view_item/995529/1643867506442.jpg?imwidth=140&impolicy=hq",
            name:"Sports Station"
        },
        {
            url:"https://assetscdn1.paytm.com/images/catalog/view_item/995530/1643867664954.jpg?imwidth=140&impolicy=hq",
            name:"Woodland"
        },
        {
            url:"https://assetscdn1.paytm.com/images/catalog/view_item/710654/1643866837835.jpg?imwidth=140&impolicy=hq",
            name:"Metro Shoes"
        },
        {
            url:"https://assetscdn1.paytm.com/images/catalog/view_item/710657/1613028563419.jpg?imwidth=140&impolicy=hq",
            name:"Mochi"
        },
        {
            url:"https://assetscdn1.paytm.com/images/catalog/view_item/995531/1643867698366.jpg?imwidth=140&impolicy=hq",
            name:"Lotto"
        },
        {
            url:"https://assetscdn1.paytm.com/images/catalog/view_item/995533/1643867991105.jpg?imwidth=140&impolicy=hq",
            name:"Reliance Shoes"
        },
        {
            url:"https://assetscdn1.paytm.com/images/catalog/view_item/995534/1643868084258.jpg?imwidth=140&impolicy=hq",
            name:"Steve Madden"
        },
        {
            url:"https://assetscdn1.paytm.com/images/catalog/view_item/995532/1643867743019.jpg?imwidth=140&impolicy=hq",
            name:"Regal"
        },
        {
            url:"https://assetscdn1.paytm.com/images/catalog/view_item/710661/1613028718597.jpg?imwidth=140&impolicy=hq",
            name:"Call it Spring"
        },
        {
            url:"https://assetscdn1.paytm.com/images/catalog/view_item/710662/1613028739303.jpg?imwidth=140&impolicy=hq",
            name:"C & K"
        },
        {
            url:"https://assetscdn1.paytm.com/images/catalog/view_item/995524/1643867277967.jpg?imwidth=140&impolicy=hq",
            name:"Bata"
        },
        {
            url:"https://assetscdn1.paytm.com/images/catalog/view_item/995525/1643867496758.jpg?imwidth=140&impolicy=hq",
            name:"Nike"
        },
        {
            url:"https://assetscdn1.paytm.com/images/catalog/view_item/995526/1643867362885.png?imwidth=140&impolicy=hq",
            name:"Puma"
        },
        {
            url:"https://assetscdn1.paytm.com/images/catalog/view_item/995527/1643867532232.jpg?imwidth=140&impolicy=hq",
            name:"Khadims"
        },
        {
            url:"https://assetscdn1.paytm.com/images/catalog/view_item/995528/1643867625370.jpg?imwidth=140&impolicy=hq",
            name:"Red Chief"
        },
        {
            url:"https://assetscdn1.paytm.com/images/catalog/view_item/995534/1643868084258.jpg?imwidth=140&impolicy=hq",
            name:"Steve Madden"
        },
        {
            url:"https://assetscdn1.paytm.com/images/catalog/view_item/995532/1643867743019.jpg?imwidth=140&impolicy=hq",
            name:"Regal"
        },
        {
            url:"https://assetscdn1.paytm.com/images/catalog/view_item/710661/1613028718597.jpg?imwidth=140&impolicy=hq",
            name:"Call it Spring"
        },
        {
            url:"https://assetscdn1.paytm.com/images/catalog/view_item/710662/1613028739303.jpg?imwidth=140&impolicy=hq",
            name:"C & K"
        },
        
      ]



  return (
    <>
    <Box style={{marginTop:"30px", marginLeft:"30px", marginRight:"30px"}}>
    <Carousel responsive={responsive}>
        {
            sliderImages.map((el) => {
                return <Box display="flex" flexDirection="column" alignItems="center" >
                    <Image src={el.url} boxSize='100px' borderRadius='full' />
                    <Text>{el.name}</Text>
                    </Box> 
              })
        }
   </Carousel>;
   </Box>
    </> 
  )
}

export default SliderThree