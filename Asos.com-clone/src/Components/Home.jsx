import React, { useEffect } from "react";
import { Box, Heading, Image, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import FontSize from "../Chakra Components/FontSize";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Welcome to ASOS!";
  }, []);
  return (
    <Box w="100%" p={4} fontSize={{ sm: "sm", md: "md", lg: "lg" }} mt={20}>
      <Box w="80%" m={"auto"}>
        <Heading
          textAlign={"center"}
          fontSize={{ sm: "md", md: "lg", lg: "30px" }}
          fontFamily={"Montserrat"}
        >
          Welcome to ASOS!
        </Heading>
        <Text fontFamily={"Roboto"} fontSize={FontSize} textAlign={"center"}>
          Discover a diverse range of men's and women's products tailored to
          your style. From fashion-forward apparel to accessories and more.
          Enjoy seamless shopping and elevate your wardrobe today!
        </Text>
      </Box>
      <Link to="/menproducts">
        <Box pos={"relative"} mt={5} mb={5}>
          <Image
            src="https://content.asos-media.com/-/media/homepages/mw/2024/may/02/homepage/mw/mw_global_retro_terrace_moment_1258x500.jpg"
            alt="Procucts"
            margin={"auto"}
          />
          <Heading
            pos={"absolute"}
            bottom={{ sm: "15%", md: "15%", lg: "15%" }}
            left={{ sm: "35%", md: "40%", lg: "45%" }}
            sx={{
              "@media screen and (max-width: 767px)": {
                bottom: "10%",
                left: "35%",
              },
            }}
            fontWeight={800}
            fontSize={FontSize}
          >
            Shop retro terrace
          </Heading>
        </Box>
      </Link>
      <Link to="/womenproducts">
        <Box pos={"relative"} mt={5} mb={5}>
          <Image
            src="https://content.asos-media.com/-/media/homepages/ww/2024/may/02/homepage/ww/ww_global_hamptons_moment_1258x500.jpg"
            alt="Procucts"
            margin={"auto"}
          />
          <Heading
            pos={"absolute"}
            bottom={{ md: "15%", lg: "15%" }}
            left={{ md: "40%", lg: "45%" }}
            sx={{
              "@media screen and (max-width: 767px)": {
                bottom: "10%",
                left: "35%",
              },
            }}
            fontWeight={800}
            fontSize={FontSize}
          >
            Summer in the Hamptons
          </Heading>
        </Box>
      </Link>
    </Box>
  );
};

export default React.memo(Home);
