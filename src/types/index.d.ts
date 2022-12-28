export interface ResponsiveImage {
    src: string
    srcSet: string
    webpSrcSet: string
    sizes: string
    width: number
    height: number
    aspectRatio: number
    base64: string
  }
  
export interface Image {
    responsiveImage: ResponsiveImage
  }

export interface IContent{
  value : any
}

export interface IAbout{
  content : IContent
  image: Image
}
  
  export interface IProduct {
    id: string
    price: number
    name: string
    mainImage: Image
    description: string
  }
  
  
  export type Product = {
    id: string
    price: number
    name: string
    mainImage: Image
    quantity: number
  }
  
  type InitalProduct = {
    id: string
    price: number
    name: string
    mainImage: Image
  }
  
  
  export type AboutPage = {
    title: string
    page : IAbout
  }
  