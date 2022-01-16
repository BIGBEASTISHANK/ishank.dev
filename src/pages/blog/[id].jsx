import { getAllPostIds, getPostData } from "../../lib/posts";
import Head from "next/head";
import Date from "../../components/date";
import NextLink from "next/link";
import { Box, Button, Heading, Text, Skeleton, Link } from "@chakra-ui/react";

export default function Post({ postData }) {
  return (
    <>
      <Box className="blogpost">
        <Head>
          <title>{postData.title} | BIG BEAST ISHANK</title>
        </Head>

        <Heading
          className="title"
          fontSize={{ lg: "4xl", md: "3xl", sm: "28px", base: "18px" }}
          fontWeight="700"
          mb={{ lg: "10px", base: "5px" }}
          mt={"25px"}
        >
          <a>{postData.title}</a>
        </Heading>

        <Text
          className="description"
          fontSize={{
            xl: "23px",
            lg: "18px",
            md: "16px",
            sm: "14px",
            base: "11px",
          }}
          fontWeight="700"
          mb={{ lg: "15px", base: "10px" }}
        >
          {postData.description}
        </Text>

        <Text
          className="head-footer"
          fontSize={{
            xl: "19px",
            lg: "14px",
            md: "12px",
            sm: "10px",
            base: "7px",
          }}
          mb={{ lg: "15px", base: "10px" }}
        >
          <Link href="https://github.com/bigbeastishank" isExternal>
            {postData.author}
          </Link>{" "}
          / <Date dateString={postData.date} /> / {postData.read_time} read
        </Text>

        <Skeleton
          startColor="pink.500"
          endColor="orange.500"
          ml={"-30px"}
          mr={"-30px"}
          w={"810"}
          h={"2px"}
          mb={6}
          mt={6}
        />

        <Box className="content" mb={5}>
          <Box dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </Box>

        {/* For Mobile and above */}
        <NextLink href="/blog">
          <Button
            d={{ base: "none", sm: "flex" }}
            size={"lg"}
            className="gb-btn"
            _hover={"none"}
            mt={16}
            borderRadius="full"
          >
            Go Back
          </Button>
        </NextLink>

        {/* For small mobile */}
        <NextLink href="/blog">
          <Button
            d={{ base: "flex", sm: "none" }}
            size={"md"}
            className="gb-btn"
            _hover={"none"}
            mt={16}
            borderRadius="full"
          >
            Go Back
          </Button>
        </NextLink>
      </Box>
    </>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  // Add the "await" keyword like this:
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}
