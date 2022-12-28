import React, {useState} from 'react'
import { Layout } from 'components'
import {  Spinner, Heading, Button, Flex, Stack } from '@chakra-ui/react'
import { ABOUT_CONTENT } from 'graphqlAPI'
import { useQuerySubscription, StructuredText,Image } from 'react-datocms'
import { AboutPage } from 'types'

const About: React.FC = (): JSX.Element => {
  const { data } = useQuerySubscription<{ page: any, aboutPageContent: AboutPage[] }>({
    query: ABOUT_CONTENT,
    token: process.env.NEXT_PUBLIC_DATOCMS_API_TOKEN as string,
  })

  return (
  <>

  <Layout title="About" isWithNavbar={true}>
      <Flex padding="50px" flexDir="column">


        { data ? (
          <div>
            <Heading as="h2" textAlign="center">
              {data.page.title}
            </Heading>
             
              {data.page.mainImage && (
                <Stack direction='row'>
                <Image style={{ height: 'auto', width:'100%', margin:'0 auto' }} data={data.page.mainImage.responsiveImage} />
              </Stack>
              )}
                          
            <div className='about-section'>
              <StructuredText data={data.page.content} />
            </div>
        
          </div>
          ) : (
          <Spinner m="0 10px" />
        )
        }
        
      </Flex>
    </Layout>
  </>
  )
}

export default About