import React, {useState} from 'react'
import { Layout } from 'components'
import {  Spinner, Heading, Button, Flex, Stack } from '@chakra-ui/react'

const Home: React.FC = (): JSX.Element => {

  return (
  <>

  <Layout title="Home" isWithNavbar={true}>
      <Flex padding="10px" flexDir="column">

          <div className='mt-5'>
            <Heading as="h2" textAlign="center">
              Home
            </Heading>
          </div>
          <div>
          <p className='feature-component'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            At inventore illum suscipit quibusdam facere ab quidem repudiandae eaque, 
            possimus et cupiditate officia? Omnis sint minus voluptatem ducimus fuga veritatis aperiam.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            At inventore illum suscipit quibusdam facere ab quidem repudiandae eaque, 
            possimus et cupiditate officia? Omnis sint minus voluptatem ducimus fuga veritatis aperiam.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            At inventore illum suscipit quibusdam facere ab quidem repudiandae eaque, 
            possimus et cupiditate officia? Omnis sint minus voluptatem ducimus fuga veritatis aperiam.
            </p>

          </div>
      </Flex>
    </Layout>
  </>
  )
}

export default Home