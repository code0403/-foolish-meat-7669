import React from 'react';
import {Link} from "react-router-dom";
import { useDisclosure, Button, Text } from '@chakra-ui/react';
import { Menu, MenuButton, MenuList,MenuItem, } from '@chakra-ui/react'
import { HamburgerIcon, ChevronDownIcon } from '@chakra-ui/icons';
import { Drawer, DrawerBody, DrawerFooter, DrawerHeader, DrawerOverlay, DrawerContent,  
          DrawerCloseButton, Box, Image } from '@chakra-ui/react';

  

function SideMenu() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
    return (
    <>
    <Button ref={btnRef} colorScheme='white' onClick={onOpen} bg="none" color="blackAlpha.900">
    <HamburgerIcon boxSize="30px" color="red.500" /> <Text as="span" marginLeft="10px">Shop By Category</Text>
    </Button>
    <Drawer
      isOpen={isOpen}
      placement='left'
      onClose={onClose}
      finalFocusRef={btnRef}
    >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>
        <Link to="/"><Box border="0px solid black" width="100%" height="100px" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
               <Image width="150px" height="100px" border="0px solid black" src="/images/Smart Online Logo.jpg"></Image>
         </Box></Link>
        </DrawerHeader>

        <DrawerBody>
          <Menu>
           <MenuButton as={Button} bg="none" rightIcon={<ChevronDownIcon />}>Gift Cards</MenuButton>
            <MenuList>
             <MenuItem>Fashion</MenuItem>
             <MenuItem>Jewellary</MenuItem>
             <MenuItem>Grocery</MenuItem>
             <MenuItem>Home Decor</MenuItem>
             <MenuItem>Furniture</MenuItem>
             <MenuItem>Electronics</MenuItem>
             <MenuItem>Entertainment</MenuItem>
             <MenuItem>Beauty</MenuItem>
             <MenuItem>Health & Fitness</MenuItem>
             <MenuItem>Travel & Holidays</MenuItem>
            </MenuList>
          </Menu>
        </DrawerBody>

        <Box display="flex" justifyContent="space-around" alignItems="center">
            <Link to="/register">Register</Link>
            <Link to="/login">Login</Link>
            <Link to="/cart">Cart</Link>
          </Box>

        <DrawerFooter>
          
          <Box><Button variant='outline' mr={3} onClick={onClose}>Close</Button></Box>
          
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  </>
  )
}

export default SideMenu;