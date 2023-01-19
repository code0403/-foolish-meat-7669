import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Image,Box, Text } from '@chakra-ui/react';
import React from 'react'

function SliderOne() {
    
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
            url:"https://assetscdn1.paytm.com/images/catalog/view_item/710342/1620736738312.jpg?imwidth=140&impolicy=hq",
            name:"Central"
        },
        {
            url:"https://assetscdn1.paytm.com/images/catalog/view_item/498074/1613028372599.jpg?imwidth=140&impolicy=hq",
            name:"Pantaloons"
        },
        {
            url:"https://assetscdn1.paytm.com/images/catalog/view_item/498091/1620736830834.png?imwidth=140&impolicy=hq",
            name:"U.S  POLO ASSIN."
        },
        {
            url:"https://assetscdn1.paytm.com/images/catalog/view_item/994845/1643780245028.png?imwidth=140&impolicy=hq",
            name:"Brand Factory"
        },
        {
            url:"https://assetscdn1.paytm.com/images/catalog/view_item/498086/1610536486321.jpg?imwidth=140&impolicy=hq",
            name:"Levis"
        },
        {
            url:"https://assetscdn1.paytm.com/images/catalog/view_item/498239/1620736478260.jpg?imwidth=140&impolicy=hq",
            name:"Only"
        },
        {
            url:"https://assetscdn1.paytm.com/images/catalog/view_item/498254/1610536539307.jpg?imwidth=140&impolicy=hq",
            name:"United Colors of Benetton"
        },
        {
            url:"https://assetscdn1.paytm.com/images/catalog/view_item/498081/1583915454539.jpg?imwidth=140&impolicy=hq",
            name:"BIBA"
        },
        {
            url:"https://assetscdn1.paytm.com/images/catalog/view_item/994846/1643780303875.jpg?imwidth=140&impolicy=hq",
            name:"Bewakoof.com"
        },
        {
            url:"https://assetscdn1.paytm.com/images/catalog/view_item/498075/1593586492547.jpg?imwidth=140&impolicy=hq",
            name:"Myntra"
        },
        {
            url:"https://assetscdn1.paytm.com/images/catalog/view_item/994132/1643692700179.png?imwidth=140&impolicy=hq",
            name:"V Mart"
        },
        {
            url:"https://assetscdn1.paytm.com/images/catalog/view_item/994133/1643692702063.jpg?imwidth=140&impolicy=hq",
            name:"WestSide"
        },
        {
            url:"https://assetscdn1.paytm.com/images/catalog/view_item/994135/1643692758763.jpg?imwidth=140&impolicy=hq",
            name:"Jack & Jones"
        },
        {
            url:"https://assetscdn1.paytm.com/images/catalog/view_item/994137/1643692795789.jpg?imwidth=140&impolicy=hq",
            name:"Fab India"
        },
        {
            url:"https://assetscdn1.paytm.com/images/catalog/view_item/994138/1643692870440.jpg?imwidth=140&impolicy=hq",
            name:"Allen Solly"
        },
        {
            url:"https://assetscdn1.paytm.com/images/catalog/view_item/994847/1643780584196.png?imwidth=140&impolicy=hq",
            name:"fbb"
        },
        {
            url:"https://assetscdn1.paytm.com/images/catalog/view_item/994140/1643692915157.jpg?imwidth=140&impolicy=hq",
            name:"Indian Terrain"
        },
        {
            url:"https://assetscdn1.paytm.com/images/catalog/view_item/994848/1643780625232.png?imwidth=140&impolicy=hq",
            name:"TRENDS"
        },
        {
            url:"https://assetscdn1.paytm.com/images/catalog/view_item/994848/1643780625232.png?imwidth=140&impolicy=hq",
            name:"Trends"
        },
        {
            url:"https://assetscdn1.paytm.com/images/catalog/view_item/994852/1643780584093.jpg?imwidth=140&impolicy=hq",
            name:"Jockey"
        },
        {
            url:"https://assetscdn1.paytm.com/images/catalog/view_item/994849/1643780709215.jpg?imwidth=140&impolicy=hq",
            name:"Decathlon"
        },
        {
            url:"https://assetscdn1.paytm.com/images/catalog/view_item/994153/1643696199128.jpg?imwidth=140&impolicy=hq",
            name:"Pretty Screts"
        },
        {
            url:"https://assetscdn1.paytm.com/images/catalog/view_item/994154/1643696257591.jpg?imwidth=140&impolicy=hq",
            name:"The Collective"
        },
        {
            url:"https://assetscdn1.paytm.com/images/catalog/view_item/994154/1643696257591.jpg?imwidth=140&impolicy=hq",
            name:"The Collective"
        },
        {
            url:"https://assetscdn1.paytm.com/images/catalog/view_item/994155/1643696297881.jpg?imwidth=140&impolicy=hq",
            name:"W"
        }
        
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

export default SliderOne;