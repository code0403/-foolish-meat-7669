import React from 'react';
import {Box, Heading,Button} from "@chakra-ui/react";
import { Menu, MenuButton, MenuList, MenuItem,} from '@chakra-ui/react'
import {ChevronDownIcon} from "@chakra-ui/icons";
import { Link } from 'react-router-dom';
  


function Footer() {
  return (
    <>
    <Box  height="350px">
      <Heading as='h5' size='sm' textAlign="left" marginLeft="30px" paddingTop="30px">From Electronics, Fashion to Cars: Buy Everything Online from the Convenience of Your Home from Paytm Mall</Heading>
      
      <Box marginTop="40px" display="flex" justifyContent="space-around" alignItems="center">

        <Menu>
          <MenuButton bg='whiteAlpha.100' as={Button} rightIcon={<ChevronDownIcon />}>Electronics</MenuButton>
          <MenuList>
            <MenuItem>LapTop</MenuItem>
            <MenuItem>Hair Dryer</MenuItem>
            <MenuItem>Memory Cards</MenuItem>
           <MenuItem>Pendrives</MenuItem>
           <MenuItem><Link>See more</Link></MenuItem>
          </MenuList>
        </Menu>

        <Menu>
          <MenuButton as={Button} bg='whiteAlpha.100' rightIcon={<ChevronDownIcon />}>Mobile</MenuButton>
          <MenuList>
          <MenuItem>mobile Store</MenuItem>
            <MenuItem>Mobiles</MenuItem>
            <MenuItem>SmartPhones</MenuItem>
           <MenuItem>Tablets</MenuItem>
           <MenuItem><Link>See more</Link></MenuItem>
          </MenuList>
        </Menu>

        <Menu>
          <MenuButton bg='whiteAlpha.100' as={Button} rightIcon={<ChevronDownIcon />}>Car & Bike</MenuButton>
          <MenuList>
            <MenuItem>Cars</MenuItem>
            <MenuItem>Bikes</MenuItem>
            <MenuItem>Car Insurance</MenuItem>
           <MenuItem>Bike Insurance</MenuItem>
           <MenuItem><Link>See more</Link></MenuItem>
          </MenuList>
        </Menu>

        <Menu>
          <MenuButton bg='whiteAlpha.100' as={Button} rightIcon={<ChevronDownIcon />}>Super Market</MenuButton>
          <MenuList>
            <MenuItem>Home supplies</MenuItem>
            <MenuItem>Health Drinks</MenuItem>
            <MenuItem>Hair Oils</MenuItem>
           <MenuItem>Pet Supplies</MenuItem>
           <MenuItem><Link>See More</Link></MenuItem>
          </MenuList>
        </Menu>

        <Menu>
          <MenuButton bg='whiteAlpha.100' as={Button} rightIcon={<ChevronDownIcon />}>Women Fashion</MenuButton>
          <MenuList>
            <MenuItem>Sarees Online</MenuItem>
            <MenuItem>Dress Materials</MenuItem>
            <MenuItem>HandBags</MenuItem>
           <MenuItem>Jwellery</MenuItem>
           <MenuItem><Link>See More</Link></MenuItem>
          </MenuList>
        </Menu>

      </Box>

      <Box marginTop="40px" display="flex" justifyContent="space-around" alignItems="center">

        <Menu>
          <MenuButton bg='whiteAlpha.100' as={Button} rightIcon={<ChevronDownIcon />}>Men' Fashion</MenuButton>
          <MenuList>
            <MenuItem>Jeans</MenuItem>
            <MenuItem>Shirts</MenuItem>
            <MenuItem>Trousers</MenuItem>
           <MenuItem>Men's Accessories</MenuItem>
           <MenuItem><Link>See More</Link></MenuItem>
          </MenuList>
        </Menu>

        <Menu>
          <MenuButton bg='whiteAlpha.100' as={Button} rightIcon={<ChevronDownIcon />}>Home & Kitchen</MenuButton>
          <MenuList>
            <MenuItem>Gas Stoves</MenuItem>
            <MenuItem>Towles</MenuItem>
            <MenuItem>Bed Sheets</MenuItem>
           <MenuItem>Wall Clocks</MenuItem>
           <MenuItem><Link>See More</Link></MenuItem>
          </MenuList>
        </Menu>

        <Menu>
          <MenuButton bg='whiteAlpha.100' as={Button} rightIcon={<ChevronDownIcon />}>Baby, Kids & Toys</MenuButton>
          <MenuList>
            <MenuItem>Teaddy Bears</MenuItem>
            <MenuItem>Dolls</MenuItem>
            <MenuItem>Kids Clothing</MenuItem>
           <MenuItem>Kids Accessories</MenuItem>
           <MenuItem><Link>See More</Link></MenuItem>
          </MenuList>
        </Menu>

        <Menu>
          <MenuButton bg='whiteAlpha.100' as={Button} rightIcon={<ChevronDownIcon />}>Car & Bike Accessories</MenuButton>
          <MenuList>
            <MenuItem>Bike Lights</MenuItem>
            <MenuItem>Stickers</MenuItem>
            <MenuItem>Covers</MenuItem>
           <MenuItem>Helmets</MenuItem>
           <MenuItem><Link>See More</Link></MenuItem>
          </MenuList>
        </Menu>

        <Menu>
          <MenuButton bg='whiteAlpha.100' as={Button} rightIcon={<ChevronDownIcon />}>Sports & Fitness</MenuButton>
          <MenuList>
            <MenuItem>Tread mills</MenuItem>
            <MenuItem>Weighing Scales</MenuItem>
            <MenuItem>Massagers</MenuItem>
           <MenuItem>Gym Equipments</MenuItem>
           <MenuItem><Link>See More</Link></MenuItem>
          </MenuList>
        </Menu>

      </Box>

      <Box marginTop="40px" marginLeft="40px" display="flex" alignItems="center">

        <Menu>
          <MenuButton bg='whiteAlpha.100' as={Button} rightIcon={<ChevronDownIcon />}>Stationery</MenuButton>
          <MenuList>
            <MenuItem>NoteBooks</MenuItem>
            <MenuItem>Cards</MenuItem>
            <MenuItem>Pens And Colors</MenuItem>
           <MenuItem>Office Supplies</MenuItem>
           <MenuItem><Link>See More</Link></MenuItem>
          </MenuList>
        </Menu>

        <Menu>
          <MenuButton bg='whiteAlpha.100' marginLeft="90px" as={Button} rightIcon={<ChevronDownIcon />}>Travels</MenuButton>
          <MenuList>
            <MenuItem>FastTag</MenuItem>
            <MenuItem>Bags</MenuItem>
            <MenuItem>Brief Case</MenuItem>
           <MenuItem>School Bags</MenuItem>
           <MenuItem><Link>See More</Link></MenuItem>
          </MenuList>
        </Menu>
      </Box>  
    </Box>

    </>
  )
}

export default Footer