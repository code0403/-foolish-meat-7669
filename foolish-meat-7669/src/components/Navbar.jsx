import {Link} from "react-router-dom";
import {  Box, Input,InputGroup,InputRightElement} from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons';
import { Icon } from '@chakra-ui/react'
import { MdAssignment,MdOutlineSentimentVerySatisfied,MdShoppingCart } from 'react-icons/md';
import  SideDrawer  from '../sidemenu/SideDrawer';
import TopNav from "./TopNav";




function Navbar(){
   
    return (
        <>
         {/* <Box border="0px solid black" width="100%" height="100px" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
               <Box bg='gray.300' w='100%' p={4}  marginTop="none" ></Box>
               <Link to="/"><Image width="130px" height="80px" border="0px solid black" src="/images/Smart Online Logo.jpg"></Image></Link>
         </Box> */}
         <TopNav />


         <Box border="0px solid black" width="100%" height="100px" display="flex" justifyContent="space-around" alignItems="center" position="sticky" zIndex="20">


            <Box border="1px solid red" width="190px" height="40px" display="flex" justifyContent="space-around" alignItems="center">
                <SideDrawer/>
                </Box>

                {/* <HamburgerIcon boxSize="30px" color="red.500" />Shop By Category */}
             
             <Box>
             <InputGroup>
             <Input width="700px" height="40px" placeholder="Searchg For a Brand, Product or a Category"></Input>
             <InputRightElement pointerEvents="none" children={<SearchIcon color='green.500' />} />
             </InputGroup>
             </Box>
            


            <Link to="/orders">
                <Box border="0px solid red" width="120px" height="40px" display="flex" justifyContent="space-around" alignItems="center">
                 <Icon as={MdAssignment} boxSize="30px" color="red.500" />My Orders
                </Box>
            </Link>



            <Link to="/cart">
                <Box border="0px solid red" width="120px" height="40px" display="flex" justifyContent="space-around" alignItems="center">
                    <Icon  as={MdShoppingCart} boxSize="30px" color="red.500"/>My Cart
                </Box>
            </Link>


            <Link to="/login">
              <Box border="0px solid red" width="150px" height="40px" display="flex" justifyContent="space-around" alignItems="center">
                <Icon  as={MdOutlineSentimentVerySatisfied} boxSize="30px" color="red.500" />Login/SignUp
                
              </Box>
            </Link>


         </Box>
         </> 
    )
}

export default Navbar;