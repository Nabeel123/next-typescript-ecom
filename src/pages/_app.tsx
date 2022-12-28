import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { CartCtx } from 'store'
import GlobalStyle from 'commons/style/global-style';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    <GlobalStyle />
      <ChakraProvider>
        <CartCtx>
          <Component {...pageProps} />
        </CartCtx>
      </ChakraProvider>
    </>
  )
}
