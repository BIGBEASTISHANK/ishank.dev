// Importing Stuffs
import { getSortedPostsData } from "../../lib/posts";
import NextLink from "next/link";
import Date from "../../components/date";
import { Box, Heading, Text, Skeleton, Link } from "@chakra-ui/react";
import Head from "next/head";

export default function Blog({ allPostsData }) {
  // Returning Html
  return (
    <>
      <Head>
        <meta
          property="og:description"
          name="description"
          content="This is a blog page, you can see daily post over here and learn new stuffs!"
        />

        <meta
          property="og:keywords"
          name="keywords"
          content="articles, blog, news, up-to-date"
        />

        <title>Blog | BIG BEAST ISHANK</title>
      </Head>

      <Box className="blog">
        {/* Blog Heading */}
        <Heading
          fontSize={{ lg: "6xl", md: "5xl", sm: "39px", base: "25px" }}
          fontWeight="700"
          textAlign={"center"}
          mb={{ lg: "20px", md: "15px" }}
        >
          <Text className="heading">My Blog</Text>
        </Heading>

        <Box
          className="content"
          fontSize={{
            xl: "25px",
            lg: "20px",
            md: "18px",
            sm: "16px",
            base: "13px",
          }}
          fontWeight="700"
          textAlign={"justify"}
        >
          {/* Something about blog */}
          <Text>
            I write my blogs over here so everyone can learn new things and be
            up-to-date about concurrent topics. You can see all the posts by
            just clicking on the title of the blog. I hope you enjoy it.
          </Text>
        </Box>

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

        {/* Blog Frontmatter data */}
        {allPostsData.map(({ id, date, title, description }) => (
          <ul key={id}>
            <li>
              <Box
                mb={50}
                className="posts"
                bg={"rgba( 0, 0, 0, 0.15 )"}
                p={"10px"}
                borderRadius={"25px"}
              >
                {/* Blog TItle */}
                <Heading
                  fontSize={{ lg: "3xl", md: "2xl", sm: "24px", base: "16px" }}
                  fontWeight="700"
                  mb={{ lg: "10px", base: "5px" }}
                  mt={"15px"}
                >
                  <Text className="title" textAlign={"justify"}>
                    <Link href={`/blog/${id}`}>
                      <NextLink href={`/blog/${id}`} cursor={"pointer"}>
                        {title}
                      </NextLink>
                    </Link>
                  </Text>
                </Heading>

                {/* Blog Description */}
                <Text
                  className="description"
                  fontSize={{
                    xl: "20px",
                    md: "17px",
                    sm: "16px",
                    base: "11px",
                  }}
                  fontWeight="700"
                  mb={{ lg: "15px", base: "10px" }}
                  textAlign={"justify"}
                >
                  {description}
                </Text>

                {/* Date on which blog is posted */}
                <Text
                  textAlign={"justify"}
                  className="date"
                  fontSize={{
                    xl: "19px",
                    md: "16px",
                    sm: "15px",
                    base: "10px",
                  }}
                >
                  <Date dateString={date} />
                </Text>
              </Box>
            </li>
          </ul>
        ))}
      </Box>
    </>
  );
}

// Function to get posts data
export async function getStaticProps() {
  // Getting posts data
  const allPostsData = getSortedPostsData();

  // Returning posts data
  return {
    props: {
      allPostsData,
    },
  };
}
