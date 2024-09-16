import React from "react";

import { ChakraProvider } from "@chakra-ui/react";
// import { theme } from "../styles/theme";

import { extendTheme } from '@chakra-ui/react'


const theme = extendTheme({
  fonts: {
    heading: `'Oswald', sans-serif`,
    body: `'Oswald', sans-serif`,
  },
})


export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <title>Erick Aniello</title>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
