import { Box, Heading } from '@chakra-ui/layout'
import React from 'react'

const Footer = () => {
  return (
    <Box w="100%" p="50px" bg='tomato' marginTop="50px">
      <Heading fontSize={22} color="white" fontWeight="500" textAlign="center">
        Created in 2022 by Nabeel Francis
      </Heading>
    </Box>
  )
}

export default Footer
