import React from 'react';
import {Box,Text, Heading} from "@chakra-ui/react";
import { SimpleGrid } from '@chakra-ui/react';
import { Icon } from '@chakra-ui/react';
import { FaRegHeart,FaShieldAlt,FaShoppingBag } from "react-icons/fa";
import {MdStars} from "react-icons/md";
import PreFooter from './PreFooter';

function Faq() {
  return (
    <div>
        <Text marginTop="20px" align="left" marginLeft="20px" fontSize='16px' fontWeight="700" lineHeight="40px">Paytm Mall - India's Leading Online Shopping Experience, Brought to You by Paytm</Text>

        <Text align="left" marginLeft="20px" fontSize="sm" marginTop="10px" noOfLines={[1, 2,]}>Online shopping with Paytm Mall is quick, convenient and trouble-free. You can shop for the desired product right from the comfort of your home and get them delivered straight to your doorstep.</Text>
      
        <Text align="left" marginLeft="20px" fontSize="sm" marginTop="10px" noOfLines={[1, 2, 3]}>Browse Paytm Mall and get access to over 65 million products ranging from smartphones, tablets to laptops, sarees, kurtas & kurtis to t-shirts, sneakers, sport shoes to sandals, earrings, watches to fitness bands, chimneys, cookware to gas stoves, dairy products, baby products to makeup kits and many more.</Text>
        

        <Text marginTop="20px" align="left" marginLeft="20px" fontSize='16px' fontWeight="700" lineHeight="40px">What are we offering on Paytmmall.com?</Text>
        <Text align="left" marginLeft="20px" fontSize="sm" marginTop="10px" noOfLines={[1, 2, 3]}>Paytm Mall strives hard to make your online shopping a more pleasant and cost-effective experience by providing the top quality products at the best price rates in India. Our collection of products consist of electronic appliances, clothes, grocery, home and kitchen products, backpacks, automobiles, books and stationery, to name a few.</Text>
        <Text align="left" marginLeft="20px" fontSize="sm" marginTop="10px" noOfLines={[1, 2, 3]}>The super value bazaar offers an extensive range of grocery products like daily food staples, ready to cook food, high on nutrition food, beauty, make-up, personal care, health, baby care products and many more. Also take a look at the latest Automobile section that consists of cars, bikes, scooters, sports bikes, accessories, riding gear and automotive care.</Text>
        <Text align="left" marginLeft="20px" fontSize="sm" marginTop="10px" noOfLines={[1, 2,]}>Shop by categories, check out all the available deals, limited period offers, cashback offers, seasonal sales, and there is so much more to make your online shopping experience enjoyable & gratifying!</Text>

        <Text marginTop="20px" align="left" marginLeft="20px" fontSize='16px' fontWeight="700" lineHeight="40px">Benefits of shopping on Paytmmall.com</Text>
        
        <Box display="flex" alignItems="center">
        <Heading as='h6' size='xs' align= "left" marginLeft="20px">User-Friendly: </Heading>
        <Text align="left" marginLeft="10px" fontSize="sm" noOfLines={[1, 2,]}>Leading online shopping experience in India which is simple and faster to load. Shop on the go and get the products delivered in just a few easy clicks.</Text>
        </Box>

        <Box display="flex" alignItems="center"  marginTop="20px">
        <Heading as='h6' size='xs' align= "left" marginLeft="20px">Safe & Secure Shopping:  </Heading>
        <Text align="left" marginLeft="10px" fontSize="sm" noOfLines={[1, 2,]}> You need not worry about your account credentials or personal details.</Text>
        </Box>
      

        <Box display="flex" alignItems="center"  marginTop="20px">
        <Heading as='h6' size='xs' align= "left" marginLeft="20px">Check Out Closely:  </Heading>
        <Text align="left" marginLeft="10px" fontSize="sm" noOfLines={[1, 2,]}>View products of your choice in detail with clear images and thorough descriptions before buying.</Text>
        </Box>


        <Box display="flex" alignItems="center"  marginTop="20px">
        <Heading as='h6' size='xs' align= "left" marginLeft="20px">Multiple Payment Options: </Heading>
        <Text align="left" marginLeft="10px" fontSize="sm" noOfLines={[1, 2,]}>Choose a payment option of your choice i.e. Credit/Debit Cards, Netbanking and UPI.</Text>
        </Box>

        <Box display="flex" alignItems="center" marginTop="20px">
        <Heading as='h6' size='xs' align= "left" marginLeft="20px">Paytm Postpaid Services:  </Heading>
        <Text align="left" marginLeft="10px" fontSize="sm" noOfLines={[1, 2,]}> Now, you can buy today and pay next month with Paytm-ICICI Bank Postpaid.</Text>
        </Box>


        <Box display="flex" alignItems="center" marginTop="20px">
        <Heading as='h6' size='xs' align= "left" marginLeft="20px">Order History:  </Heading>
        <Text align="left" marginLeft="10px" fontSize="sm" noOfLines={[1, 2,]}>All your orders show up at one place, you can track them or repeat them with ease.</Text>
        </Box>


        <Box display="flex" alignItems="center" marginTop="20px">
        <Heading as='h6' size='xs' align= "left" marginLeft="20px">24x7 Customer Care: </Heading>
        <Text align="left" marginLeft="10px" fontSize="sm" noOfLines={[1, 2,]}> For all your queries and concerns regarding your shopping orders, head over to paytmmall.com/care or call us at 01204606060 anytime</Text>
        </Box>

        <Text align="left" marginLeft="20px" fontSize="sm" marginTop="10px" noOfLines={[1, 2, 3]}>The products paired with amazing deals are a topping on the cake that no one would want to miss. Paytm Mall World Store offers access to imported products ranging from beauty and personal care, watches, jewellery and so much more that too at exclusive price rates.</Text>
        <Text align="left" marginLeft="20px" fontSize="sm" marginTop="10px" noOfLines={[1, 2]}>The products paired with amazing deals are a topping on the cake that no one would want to miss. Paytm Mall World Store offers access to imported products ranging from beauty and personal care, watches, jewellery and so much more that too at exclusive price rates.</Text>


    <Box marginTop="40px" margin="20px">
    <SimpleGrid columns={{base: "1", md: "2", lg:"4"}} spacing={5}>
        <Box border="0px solid black" height={{base:"200px", md:"180px", lg:"150px" }} bg="gray.50">
            <Icon as={FaRegHeart} boxSize={6} marginTop="10px" color="blackAlpha.600" />
            <Text fontSize='sm' marginTop="10px" color="blackAlpha.800">24x7 Help</Text>
            <Text fontSize='sm' marginTop="10px" color="blackAlpha.800">Need Help? Click Here. You can also talk to us on 0120 4606060 to resolve your query.</Text>
        </Box>
        <Box border="0px solid black" height={{base:"200px", md:"180px", lg:"150px" }} bg="gray.50">
            <Icon as={FaShieldAlt} boxSize={6} marginTop="10px" color="blackAlpha.600" />
            <Text fontSize='sm' marginTop="10px" color="blackAlpha.800">Paytm Trust</Text>
            <Text fontSize='sm' marginTop="10px" color="blackAlpha.800">Your money is yours! All refunds come with no question asked guarantee.</Text>
        </Box>
        <Box border="0px solid black" height={{base:"200px", md:"180px", lg:"150px" }} bg="gray.50">
            <Icon as={MdStars} boxSize={6} marginTop="10px" color="blackAlpha.600"/>
            <Text fontSize='sm' marginTop="10px" color="blackAlpha.800">100% Assurance</Text>
            <Text fontSize='sm' marginTop="10px" color="blackAlpha.800">At Paytm, we provide 100% assurance. If you have any issue, your money is immediately refunded. Sit back and enjoy your shopping.</Text>
        </Box>
        <Box border="0px solid black" height={{base:"250px", md:"180px", lg:"150px" }} bg="gray.50">
            <Icon as={FaShoppingBag} boxSize={6} marginTop="10px" color="blackAlpha.600"/>
            <Text fontSize='sm' marginTop="10px"  color="blackAlpha.800">Paytm Mall Promise</Text>
            <Text fontSize='sm' marginTop="10px"  color="blackAlpha.800">Products with this tag are quality checked, and shipped the same day from certified warehouses. So you get the right product, faster.</Text>
        </Box>
    </SimpleGrid>
    </Box>

    <PreFooter />
    </div>

  )
}

export default Faq