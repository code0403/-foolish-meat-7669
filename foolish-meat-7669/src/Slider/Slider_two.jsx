import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Image } from '@chakra-ui/react';
import { Text, Box } from '@chakra-ui/react'
import React from 'react';
import { Link } from 'react-router-dom';



function SliderTwo() {
    
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
            url:"https://assetscdn1.paytm.com/images/catalog/view_item/498530/1610537092744.png?imwidth=140&impolicy=hq",
            name:"Iconics",
        },
        {
            url:"https://assetscdn1.paytm.com/images/catalog/view_item/498114/1610537113386.jpg?imwidth=140&impolicy=hq",
            name:"Raymonds",
        },
        {
            url:"https://assetscdn1.paytm.com/images/catalog/view_item/498115/1610537339349.jpg?imwidth=140&impolicy=hq",
            name:"Jockey",
        },
        {
            url:"https://assetscdn1.paytm.com/images/catalog/view_item/498256/1620736733672.jpg?imwidth=140&impolicy=hq",
            name:"Vera Moda",
        },
        {
            url:"https://assetscdn1.paytm.com/images/catalog/view_item/498129/1613028463583.png?imwidth=140&impolicy=hq",
            name:"Beverly Hills Polo Club",
        },
        {
            url:"https://assetscdn1.paytm.com/images/catalog/view_item/498127/1610537689405.png?imwidth=140&impolicy=hq",
            name:"Madame",
        },
        {
            url:"https://assetscdn1.paytm.com/images/catalog/view_item/710419/1610542731323.jpg?imwidth=140&impolicy=hq",
            name:"Peter England",
        },
        {
            url:"https://assetscdn1.paytm.com/images/catalog/view_item/710420/1610543135214.jpg?imwidth=140&impolicy=hq",
            name:"Van Heusen",
        },
        {
            url:"https://assetscdn1.paytm.com/images/catalog/view_item/498111/1610543084890.jpg?imwidth=140&impolicy=hq",
            name:"Louis Phillipe",
        },
        {
            url:"https://assetscdn1.paytm.com/images/catalog/view_item/710421/1610543158966.jpg?imwidth=140&impolicy=hq",
            name:"Planet Fashion",
        },
        {
            url:"https://assetscdn1.paytm.com/images/catalog/view_item/498105/1610535869042.png?imwidth=140&impolicy=hq",
            name:"109F",
        },
        {
            url:"https://assetscdn1.paytm.com/images/catalog/view_item/498118/1610535851387.png?imwidth=140&impolicy=hq",
            name:"Aurelia",
        },
        {
            url:"https://assetscdn1.paytm.com/images/catalog/view_item/994263/1643711210390.jpg?imwidth=140&impolicy=hq",
            name:"American Eagle",
        },
        {
            url:"https://assetscdn1.paytm.com/images/catalog/view_item/994264/1643711069857.jpg?imwidth=140&impolicy=hq",
            name:"Selected Homme",
        },
        {
            url:"https://assetscdn1.paytm.com/images/catalog/view_item/994265/1643711263391.jpg?imwidth=140&impolicy=hq",
            name:"Manyavar",
        },
        {
            url:"https://assetscdn1.paytm.com/images/catalog/view_item/994266/1643711205459.jpg?imwidth=140&impolicy=hq",
            name:"La Senza",
        },
        {
            url:"https://assetscdn1.paytm.com/images/catalog/view_item/994267/1643711489659.jpg?imwidth=140&impolicy=hq",
            name:"major Brands",
        },
        {
            url:"https://assetscdn1.paytm.com/images/catalog/view_item/994278/1643712435320.jpg?imwidth=140&impolicy=hq",
            name:"Taneria",
        },
        {
            url:"https://assetscdn1.paytm.com/images/catalog/view_item/994279/1643712364578.jpg?imwidth=140&impolicy=hq",
            name:"Spykar",
        },
        {
            url:"https://assetscdn1.paytm.com/images/catalog/view_item/994288/1643713188868.jpg?imwidth=140&impolicy=hq",
            name:"Zimave",
        },
        {
            url:"https://assetscdn1.paytm.com/images/catalog/view_item/994298/1643713113821.jpg?imwidth=140&impolicy=hq",
            name:"TailorMan",
        },
        {
            url:"https://assetscdn1.paytm.com/images/catalog/view_item/994348/1643715968772.jpg?imwidth=140&impolicy=hq",
            name:"Disrupt",
        },
        {
            url:"https://assetscdn1.paytm.com/images/catalog/view_item/994350/1643716033149.jpg?imwidth=140&impolicy=hq",
            name:"Simon Carter",
        },
        {
            url:"https://assetscdn1.paytm.com/images/catalog/view_item/498081/1583915454539.jpg?imwidth=140&impolicy=hq",
            name:"BIBA",
        },
        {
            url:"https://assetscdn1.paytm.com/images/catalog/view_item/994138/1643692870440.jpg?imwidth=140&impolicy=hq",
            name:"Allen Solly",
        }

      ]



  return (
    <>
       <Box style={{marginTop:"30px", marginLeft:"30px", marginRight:"30px"}}>
    <Carousel responsive={responsive}>
        {
            sliderImages.map((el,index) => {
                return <Link to="/prodnt" key={index+1}><Box display="flex" flexDirection="column" alignItems="center" _hover={{color:"red"}}>
                    <Image src={el.url} boxSize='100px' borderRadius='full' border="1px solid gray"  />
                    <Text>{el.name}</Text>
                    </Box></Link> 
              })
        }
   </Carousel>;
   </Box>
    </>
    
  )
}

export default SliderTwo