
import { useState } from 'react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { Flex, Box, FormControl, FormLabel, Input, InputGroup,  HStack, InputRightElement, Stack,
         Button, Heading, Text, useColorModeValue, } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import TopNav from '../components/TopNav';
import { Navigate } from 'react-router-dom';

function Register(){

    const [showPassword, setShowPassword] = useState(false);
    const [firstName, setfirstName] = useState("");
    const [lastName, setlastName] = useState("");
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");

    const userDetails = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password
    }

    const handleRegister = () => {
      console.log(userDetails);
      
      alert("Registerion succesful");

      <Navigate  to="/login" />
      
    }

    return (
        <>
        <TopNav />

        <Flex minH={'100vh'} align='center' justify='center' bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize='4xl' textAlign='center'>Register</Heading>
            <Text fontSize={'lg'} color={'gray.600'}>
              to enjoy all of our cool features ✌️
            </Text>
          </Stack>
          <Box rounded={'lg'} bg={useColorModeValue('white', 'gray.700')} boxShadow={'lg'} p={8}>

            <Stack spacing={4}>
              <HStack>
                <Box>
                  <FormControl id="firstName" isRequired>
                    <FormLabel>First Name</FormLabel>
                    <Input type="text" value={firstName} onChange={(e) => {
                      console.log(e.target.value);
                      setfirstName(e.target.value)}}/>
                  </FormControl>
                </Box>
                <Box>
                  <FormControl id="lastName">
                    <FormLabel>Last Name</FormLabel>
                    <Input type="text" value={lastName} onChange={(e) => {
                      console.log(e.target.value);
                      setlastName(e.target.value)}}/>
                  </FormControl>
                </Box>
              </HStack>
              <FormControl id="email" isRequired>
                <FormLabel>Email address</FormLabel>
                <Input type="email" value={email} onChange={(e) => {
                  console.log(e.target.value);
                  setemail(e.target.value)}}/>
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input type={showPassword ? 'text' : 'password'} value={password} onChange={(e) => {
                    console.log(e.target.value);
                    setpassword(e.target.value)}}/>
                  <InputRightElement h={'full'}>
                    <Button
                      variant={'ghost'}
                      onClick={() =>
                        setShowPassword((showPassword) => !showPassword)
                      }>
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <Stack spacing={10} pt={2}>
                <Button loadingText="Submitting" size="lg"  bg={'blue.400'} color={'white'}  _hover={{ bg: 'blue.500',}} onClick={handleRegister}>Register</Button>
              </Stack>
              <Stack pt={6}>
                <Text align={'center'}>
                  Already a user? <Link to="/login"><Text color={'blue.400'}>Login</Text></Link>
                </Text>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
        </>
    )
};

export default Register;