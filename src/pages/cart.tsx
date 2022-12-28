import { Box, Button, Center, Flex, Heading, Spinner } from '@chakra-ui/react'
import { Layout, CartSingleProduct, NoProducts, InfoPanel } from '../components'
import { useCartActions, useCartState } from '../store'
import { addToCart, removeFromCart } from '../utils'
import React from 'react'
import { Product } from 'types'
import { useToast } from '@chakra-ui/react'


const CartPage: React.FC = (): JSX.Element => {
  const { cartValue, products, quantity } = useCartState()
  const { dispatch } = useCartActions()
  const toast = useToast()
  const [initialRenderComplete, setInitialRenderComplete] = React.useState(false);
  
  const checkoutAlertToast = () => {
    toast({
      title: 'Warning Checkout',
      description: 'End of flow Checkout',
      status: 'warning',
      duration: 2500,
      isClosable: true,
    })
  }
  
  React.useEffect(() => {
		// Updating a state causes a re-render
		setInitialRenderComplete(true);
	}, []);
	
	
	if (!initialRenderComplete) {
		return <> 
		<Center height="400px">
      <Spinner />
    </Center>
  </>;
	} else {
	
    return (
      <>
       <Layout title="Cart" isWithNavbar={true}>
         <Box w="100%" margin="30px auto" padding="30px">
           <Heading as="h1" textAlign="center" color="red.900" mb="30px">
             Your cart
           </Heading>
           {products && products.length !== 0 ? (
             <Flex flexDirection="column" margin="auto">
               <Flex
                 w="100%"
                 flexDirection="column"
                 margin="10px auto"
                 maxWidth="1200px"
               >
                 <Heading as="h4" fontSize="20">
                   All products in your cart:
                 </Heading>
                 {products.map((prod) => (
                   <CartSingleProduct
                     key={prod.id}
                     product={prod}
                     handleRemoveFromCart={(product: Product) =>
                       dispatch(removeFromCart(product))
                     }
                     handleAddToCart={(product: Product) => {
                       dispatch(addToCart(product))
                     }}
                   />
                 ))}
               </Flex>
               <InfoPanel quantity={quantity} cartValue={cartValue} />
               <Button
                 w="fit-content"
                 alignSelf="center"
                 size="lg"
                 mt="20px"
                 colorScheme="red"
                 onClick={() => checkoutAlertToast() }
               >
                 Checkout
               </Button>
             </Flex>
           ) : (
             <NoProducts />
           )}
         </Box>
       </Layout>
      
     </> 
     
      )
      
	}

}

export default CartPage
