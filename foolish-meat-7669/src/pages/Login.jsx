import { Flex, Box, FormControl, FormLabel, Input, Checkbox, Stack, Button, Heading, Text, useColorModeValue } from '@chakra-ui/react';
import { Link } from "react-router-dom";
import TopNav from '../components/TopNav';




    function Login(){

    
      
        
        return (
        <>
        <TopNav />
          <Flex minH={'100vh'} align={'center'} justify={'center'} bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'}>Login to your account</Heading>
            <Text fontSize={'lg'} color={'gray.600'}>
              to enjoy all of our cool <Link color={'blue.400'}>features</Link> ✌️
            </Text>
          </Stack>
          <Box rounded={'lg'} bg={useColorModeValue('white', 'gray.700')} boxShadow={'lg'} p={8}>

            <Stack spacing={4}>
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input type="email" />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input type="password" />
              </FormControl>
              <Stack spacing={10}>

                <Stack direction={{ base: 'column', sm: 'row' }} align={'start'} justify={'space-between'}>
                  <Checkbox>Remember me</Checkbox>
                  <Link color={'blue.400'}>Forgot password?</Link>
                </Stack>

                <Button bg='blue.400' color='white' _hover={{ bg: 'blue.500',}}> Login </Button>
              </Stack>

              <Stack pt={6}>
                <Text align={'center'}> New member? <Link to="/register"><Text color="blue.500">Register</Text></Link></Text>
              </Stack>

            </Stack>
          </Box>
        </Stack>
      </Flex>

        </>
    )
}

export default Login;



  






  

  
  