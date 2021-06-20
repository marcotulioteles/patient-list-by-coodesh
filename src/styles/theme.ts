import { extendTheme } from '@chakra-ui/react'
import { createBreakpoints } from '@chakra-ui/theme-tools'

export const theme = extendTheme({
  fonts: {
    heading: 'Poppins',
    body: 'Poppins'
  },
  styles: {
    global: {
      html: {
        width: "100vw",
        height: "100vh"
      },
      body: {
        width: "100vw",
        height: "100vh",
        background: "white",
        color: "gray.900"
      },
      a: {
        textDecoration: "none",
        cursor: "pointer"
      }
    }
  }
})