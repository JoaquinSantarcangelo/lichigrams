import "../sass/base.sass";
import "../sass/Testimonios.sass";
import "../sass/Card.sass";
import "../sass/Form.sass";
import "../sass/Copyright.sass";
import "../sass/MediaQueries.sass";
import "render-smooth-image-react/build/style.css";
import { ChakraProvider } from "@chakra-ui/react";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />{" "}
    </ChakraProvider>
  );
}

export default MyApp;
