import Head from 'next/head'
import { AppProps } from "next/app"
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '../styles/theme'
import { PatientsProvider } from '../contexts/PatientsContext'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Pharma Inc</title>
      </Head>
      <ChakraProvider theme={theme}>
        <PatientsProvider>
          <Component {...pageProps} />
        </PatientsProvider>
      </ChakraProvider>
    </>
  )
}

export default MyApp
