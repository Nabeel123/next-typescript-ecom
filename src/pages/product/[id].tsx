import React from 'react'
import { useRouter } from 'next/router'
import { Image, useQuerySubscription } from 'react-datocms'
import { SINGLE_PRODUCT } from '../../graphqlAPI'
import { InfoList, Layout } from '../../components'
import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  List,
  Spinner,
} from '@chakra-ui/react'
import { IProduct } from 'types'
import { addToCart } from '../../utils'
import { useCartActions } from '../../store'

const SingleProduct = () => {
  const { query } = useRouter()
  const { id } = query
  const { dispatch, createAddToCartToast } = useCartActions()
  const { data, error } = useQuerySubscription<{ product: IProduct }>({
    query: SINGLE_PRODUCT,
    token: process.env.NEXT_PUBLIC_DATOCMS_API_TOKEN as string,
    variables: { id },
  })

  return (
    <Layout
      isWithNavbar
      title={data ? data.product.name : error ? 'Error' : 'Loading...'}
    >
      {!data && !error && (
        <Center height="400px">
          <Spinner />
        </Center>
      )}
      {data && (
        <Flex
          alignItems="center"
          justifyContent="center"
          width="100%"
          maxWidth="1200px"
          margin="auto"
          flexWrap="wrap"
        >
          <Image data={data.product.mainImage.responsiveImage} />
          <Box maxWidth="700px" fontSize="20px" margin="50px" w="60%">
            <List spacing={3}>
              <InfoList item={data.product} />
            </List>
            <Button
              onClick={() => {
                dispatch(addToCart(data.product))
                createAddToCartToast()
              }}
              colorScheme="red"
              marginTop="20px"
            >
              Add product to the cart
            </Button>
          </Box>
        </Flex>
      )}
      {!data && error && (
        <Center>
          <Heading color="red.500">There is no such product</Heading>
        </Center>
      )}
    </Layout>
  )
}

export default SingleProduct
