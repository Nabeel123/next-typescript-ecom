import { Flex, Heading, IconButton, Text, Image } from '@chakra-ui/react'
import React from 'react'
import { Product } from 'types'
import { AddIcon, MinusIcon } from '@chakra-ui/icons'
interface Props {
  product: Product
  handleAddToCart: (prod: Product) => void
  handleRemoveFromCart: (prod: Product) => void
}

const CartSingleProduct: React.FC<Props> = ({
  product,
  handleAddToCart,
  handleRemoveFromCart,
}) => {

  return (
    <Flex
      justify="space-between"
      alignItems="center"
      p="25px"
      borderColor="red.800"
      borderWidth="2px"
      borderStyle="solid"
      borderRadius="8px"
      marginTop="15px"
      flexWrap="wrap"
    >
      <Image
        src={product.mainImage.responsiveImage.src}
        width="125px"
        height="200px"
      />
      <Heading as="h5" fontSize="20px" w="150px">
        {product.name}
      </Heading>
      
      <Flex as="h5" fontSize="20px" flexDirection="column" w="220px">
        <Text fontSize="20px">
          Single product price: <b>{product.price} $ </b>
        </Text>
        <Text fontSize="20px">
          Total: <b>{product.price * product.quantity} $ </b>
        </Text>
      </Flex>
      <Flex w="120px" justify="space-between" alignItems="center">
        <IconButton
          aria-label="Add"
          icon={<MinusIcon />}
          onClick={() => handleRemoveFromCart(product)}
        />
        <Text fontSize="22px">{product.quantity}</Text>
        <IconButton
          aria-label="Add"
          icon={<AddIcon />}
          onClick={() => handleAddToCart(product)}
        />
      </Flex>
    </Flex>
  )
}

export default CartSingleProduct
