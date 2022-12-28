import { Box, Button, Flex, Heading, Link, MenuItem, Spinner, Stack, Text, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import NextLink from 'next/link'
import { useCartState } from '../store'
import NextImage from 'next/image'

const Navbar = () => {

  const { quantity } = useCartState()
  
  return (
   <>
   
   <Flex
      justifyContent="center"
      alignItems="center"
      h="fit-content"
      p="20px"
      w="100%"
      maxWidth="1200px"
      margin="0 auto 50px auto"
      flexWrap="wrap"
    >
      <Flex alignItems="center" color="red.600">
        <Heading as="h3">
        
        <Link href={"/"}>
          <Text
          bgGradient='linear(to-l, #7928CA, #FF0080)'
                bgClip='text'
                fontSize='1xl'
                fontWeight='extrabold'
  >
            Nabeel Shop
          </Text>
        </Link>
          
        </Heading>
      </Flex>
      <Flex
        alignItems="center"
        flexWrap="wrap"
        justifyContent="center"
        padding="10px"
      >
      <Box
        display={"block"}
        flexBasis={{ base: "100%", md: "auto" }}
      >
      <Stack
        spacing={8}
        align="center"
        justify={["center", "space-between", "flex-end", "flex-end"]}
        direction={["column", "row", "row", "row"]}
        pt={[4, 4, 0, 0]}
      >
        <Link href={"/"}>
          <Text display="block">
            Home
          </Text>
        </Link>
        
        <Link href={"/about"}>
          <Text display="block">
            About
          </Text>
        </Link>
        
        <Link href={"/all"}>
          <Text display="block">
            All Products
          </Text>
        </Link>
        
          <Link href="/cart" p="0 10px" fontSize={20} display="flex" alignItems="center">
            <NextImage src="/cart.svg" alt="cart" width={30} height={30} />
            <Text ml="15px">Items in cart: {quantity}</Text>
          </Link>
        
        
        </Stack>
      </Box>
      
      </Flex>
      </Flex>
   
   </>
  )
}

export default Navbar
