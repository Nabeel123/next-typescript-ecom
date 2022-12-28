import { Flex,FormControl, FormLabel, Input, Wrap, Heading, Center, Spinner, Button } from '@chakra-ui/react'
import { Layout } from 'components'
import SingleProduct from 'components/SingleProduct'
import { ALL_PRODUCTS, request } from 'graphqlAPI'
import React, { useCallback, useEffect, useState } from 'react'
import { IProduct } from 'types'
import { useCartActions } from '../store'
import { addToCart } from '../utils'

  
  const All: React.FC<any> = (): JSX.Element => {
    const [productItems, setProductItem] = useState<{ allProducts: IProduct[] } | null>(null)
    const [name, setName] = useState('')
    const [loading, setLoading] = useState(true)
    const { dispatch, createAddToCartToast } = useCartActions()
    const [skip, setSkip] = useState(0)
    
    const fetchProductItems = useCallback(async () => {
      const data = await request<{ allProducts: IProduct[] }>({
        query: ALL_PRODUCTS,
        variables: { name, skip: skip * 3 },
      })
      setProductItem(data)
      setLoading(false)
    }, [name, skip])
  
    useEffect(() => {

      const id = setTimeout(() => fetchProductItems(), 400)
  
      return () => {
        clearTimeout(id)
      }
    }, [name, fetchProductItems])
  
    useEffect(() => {
      setSkip(0)
    }, [name])
    
    
    return (
     <>
      <Layout title="All products" isWithNavbar>
      <Flex
        w="60%"
        justify="space-between"
        alignItems="center"
        margin="auto"
        flexWrap="wrap"
      >
        <FormControl p="6px 0" id="search" w="300px">
          <FormLabel>Search</FormLabel>
          <Input
            name="search"
            as={Input}
            type="text"
            placeholder="Search for a product"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </FormControl>
       
      </Flex>
      {!loading ? (
        <Wrap
          w="80%"
          maxW="1200px"
          margin="100px auto"
          spacing="50px"
          justify="center"
        >
          {productItems?.allProducts.length !== 0 ? (
            productItems?.allProducts.map((el) => (
              <SingleProduct
                product={el}
                key={el.id}
                handleClick={(product: IProduct) => {
                  dispatch(addToCart(product))
                  createAddToCartToast()
                }}
              />
            ))
          ) : (
            <Heading fontSize="26px">No Products</Heading>
          )}
        </Wrap>
      ) : (
        <Center height="400px">
          <Spinner />
        </Center>
      )}
      
      {productItems && productItems?.allProducts.length === 3 && !loading && (
        <Button
          colorScheme="red"
          onClick={() => setSkip((prev) => prev + 1)}
          w="fit-content"
          margin="auto"
        >
          Next page
        </Button>
      )}
      
    </Layout>
     </>
    )
  }
  
  export default All
  