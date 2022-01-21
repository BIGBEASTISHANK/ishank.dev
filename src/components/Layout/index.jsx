// Importing Stuffs
import Navbar from "../Navbar";
import Footer from "../Footer";
import Head from "next/head";
import { Box } from "@chakra-ui/react";

export default function Layout({ children }) {
  // Returning Html
  return (
    <>
      <Box
        alignItems={"center"}
        m={"auto"}
        mt={"20px"}
        mb={"20px"}
        maxW={"810px"}
      >
        {/* Head Tag to put Title and meta tags */}
        <Head>
          {/* common meta data */}
          <meta charSet="UTF-8" />

          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

          <meta property="og:locale" content="en_IN" />

          <meta
            property="og:viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta property="og:type" content="portfolio" />

          <meta property="og:author" content="BIG BEAST ISHANK" />

          <meta property="og:image" content="/favicon.ico" />

          {/* Each for different page */}
          <meta
            property="og:description"
            content="This me Ishank. This is my portfolio wesite, I post blogs and you can see my projects over here."
          />

          <meta
            property="og:keywords"
            content="Portfolio, Projects, Blogs, HTML, CSS, Python, C#, JavaScript, Next js"
          />

          {/* Title */}
          <title>BIG BEAST ISHANK</title>
        </Head>

        {/* Navbar Component */}
        <Navbar />

        {/* Main Body */}
        <Box
          className={"main-content"}
          ml={"30px"}
          mt={{ md: "0", sm: "20px" }}
          mr={"30px"}
        >
          {/* Body Of every page */}
          {children}
        </Box>

        {/* Footer */}
        <Box
          className={"footer"}
          ml={"30px"}
          mt={{ md: "0", sm: "20px" }}
          mr={"30px"}
        >
          <Footer />
        </Box>
      </Box>
    </>
  );
}
