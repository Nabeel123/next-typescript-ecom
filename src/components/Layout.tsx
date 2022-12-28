import { ChakraProvider, Flex } from '@chakra-ui/react'
import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
interface LayoutProps {
  title: string
  isWithNavbar?: boolean
  children: any
}

const Layout: React.FC<LayoutProps> = ({
  children,
  isWithNavbar = false,
}) => {
  return (
    <>
    <ChakraProvider>
    <Flex
        w="100%"
        flexDirection={isWithNavbar ? 'column' : 'row'}
        minHeight="100vh"
        justifyContent="space-between"
      >
        {isWithNavbar && <Navbar />}
        {children}
        {isWithNavbar && <Footer />}
      </Flex>
    </ChakraProvider>
    </>
  )
}

export default Layout
