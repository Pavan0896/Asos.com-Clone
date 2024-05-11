import React, { useEffect } from "react";
import { Box, Heading, Image, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import ProductLoop from "./ProductLoop";
import { womenData, womenNew_in } from "../../db";
import FontSize from "../Chakra Components/FontSize";

const Women = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Women's Clothes | Shop for Women's Fashion | ASOS";
  }, []);

  let details = JSON.parse(localStorage.getItem("productDetails")) || {};

  const handleClick = (e) => {
    details = e;
    localStorage.setItem("details", JSON.stringify(details));
  };
  return (
    <Box w="100%" mt={20}>
      <Link to="/womenproducts">
        <Box pos={"relative"}>
          <Image
            src="https://content.asos-media.com/-/media/homepages/ww/2024/may/02/homepage/ww/ww_global_hamptons_moment_1258x500.jpg"
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
            Summer in the Hamptons
          </Heading>
        </Box>
      </Link>
      <Box
        display={"grid"}
        mt={10}
        gridTemplateColumns={{
          sm: "repeat(2,1fr)",
          md: "repeat(4,1fr)",
          lg: "repeat(4,1fr)",
        }}
        sx={{
          "@media screen and (max-width: 767px)": {
            gridTemplateColumns: "repeat(2,1fr)",
          },
        }}
      >
        {womenData.map((e, i) => (
          <Link key={i} to={`/${e.title}`} onClick={() => handleClick(e)}>
            <ProductLoop e={e} i={i} />
          </Link>
        ))}
      </Box>
      <Link to="/womenproducts">
        <Box bgColor={"#F799BA"} textAlign={"center"} padding={25} mt={10}>
          <Heading fontSize={FontSize}>UPTO 30% OFF SUNSHINE STAPLES</Heading>
          <Text fontSize={FontSize}>
            Limited time only. Selected styles marked down on site.
          </Text>
        </Box>
      </Link>

      <Box
        display={"grid"}
        mt={10}
        gridTemplateColumns={{
          sm: "repeat(2,1fr)",
          md: "repeat(4,1fr)",
          lg: "repeat(4,1fr)",
        }}
        sx={{
          "@media screen and (max-width: 767px)": {
            gridTemplateColumns: "repeat(2,1fr)",
          },
        }}
      >
        {womenNew_in.map((e, i) => (
          <Link key={i} to={`/${e.title}`} onClick={() => handleClick(e)}>
            <ProductLoop e={e} i={i} />
          </Link>
        ))}
      </Box>
      <a href="https://www.asos.com/payments-and-deliveries/delivery/">
        <div id="gradientBox">
          <Box textAlign={"center"} cursor={"pointer"}>
            <Heading fontSize={FontSize}>
              Notifications on your orders and returns <br />
              App-solutely!
            </Heading>
          </Box>
        </div>
      </a>
    </Box>
  );
};

export default React.memo(Women);
