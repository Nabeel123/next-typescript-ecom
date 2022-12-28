export const ALL_PRODUCTS = `
query AllProducts($skip: IntType, $name: String!) {
    allProducts(skip: $skip, first: 3, filter: {name: {matches: {pattern: $name}} }){
        name
        price
        id
        description {
          value
        }
        mainImage {
          responsiveImage {
                  src
                  srcSet
                  webpSrcSet
                  sizes
                  width
                  height
                  aspectRatio
                  base64
          }
        }
      }
}
`

export const ABOUT_CONTENT = `
query {
    page {
        title
         content{
           value
         }
         mainImage {
            responsiveImage (imgixParams: { fit: crop, w: 600, h: 500, auto: format }) {
                src
                srcSet
                webpSrcSet
                sizes
                width
                height
                aspectRatio
                base64
              }
          }
       }
}
`

export const SINGLE_PRODUCT = `
    query SingleProduct($id: ItemId){
        product(filter: {id: {eq : $id }}) {
            id
            price
            name
            description {
              value
            }
    
            mainImage {
                responsiveImage (imgixParams: { fit: fill, w: 400, h: 500, auto: format }) {
                  src
                  srcSet
                  webpSrcSet
                  sizes
                  width
                  height
                  aspectRatio
                  base64
                }
            }
        }
    }
`
