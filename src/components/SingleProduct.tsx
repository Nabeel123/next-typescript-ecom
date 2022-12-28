import { WrapItem, Heading, Flex, Button, Spacer, Text, ButtonGroup, Card, CardBody, CardFooter, Divider, Stack } from '@chakra-ui/react'
import { Image, StructuredText } from 'react-datocms'
import React from 'react'
import { IProduct } from 'types'
import Link from 'next/link'


const SingleProduct = ({
  product,
  handleClick,
}: {
  product: IProduct
  handleClick: (product: IProduct) => void
}) => {
  return (
    <>
     <WrapItem
      key={product.id}
      w="300px"
      height="600px"
      borderRadius="8px"
      display="flex"
      flexDir="column"
      alignItems="center"
      padding="10px"
    >

    <Card  maxW='sm'>
      <CardBody>
      <Image data={product.mainImage.responsiveImage} className="border-radius-card"/>
        <Stack mt='6' spacing='3'>
          <Heading size='md'>{product.name}</Heading>
          <Text color='blue.700' fontSize='2xl' fontWeight='semibold'>
            {product.price}$
          </Text>
        </Stack>
      </CardBody>

      <CardFooter>
        <ButtonGroup spacing='2'>
          <Button variant='solid' colorScheme='red' onClick={() => handleClick(product)}>
            Buy now
          </Button>
          <Link href={`/product/${product.id}`}>
            <Button variant='ghost' colorScheme='blue'>
              See Details
            </Button>
          </Link>
          <Spacer />
        </ButtonGroup>
      </CardFooter>
    </Card>

    </WrapItem>

    </>
  )
}

export default SingleProduct
