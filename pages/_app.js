import "../sass/base.sass";
import "../sass/Testimonios.sass";
import "../sass/Card.sass";
import "../sass/Form.sass";
import "../sass/Copyright.sass";
import "../sass/MediaQueries.sass";
import "render-smooth-image-react/build/style.css";

import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";

const colors = {
  brand: {
    100: "#6e3ea1",
    200: "#8b5ebb",
    300: "#e6d7f7",
  },
};

const theme = extendTheme({ colors });

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />{" "}
    </ChakraProvider>
  );
}

export default MyApp;
