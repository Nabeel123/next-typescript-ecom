import { InfoIcon } from '@chakra-ui/icons'
import { ListItem, ListIcon } from '@chakra-ui/react'
import React from 'react'
import { StructuredText } from 'react-datocms'
import { IProduct } from 'types'

interface Props {
  item: IProduct
}



const InfoList: React.FC<Props> = ({ item }): JSX.Element => {
  const { description, price, name } = item
  
  return (
 
    <>
      <ListItem>
        Product name: <b>{name}</b>
      </ListItem>
      
      <ListItem textAlign="justify">
        <ListIcon as={InfoIcon} color="facebook.500" />
        
        About: { description && <StructuredText data={description} /> }
      </ListItem>
      
      
      <ListItem textAlign="justify">
        Price: <b>{price}$</b>
      </ListItem>
    </>
  )
}

export default InfoList
