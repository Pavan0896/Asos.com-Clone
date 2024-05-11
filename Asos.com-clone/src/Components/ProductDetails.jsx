import {
  Box,
  Button,
  Heading,
  Image,
  Stack,
  Text,
  Wrap,
  WrapItem,
  useToast,
} from "@chakra-ui/react";
import React from "react";
import { useEffect } from "react";
import FontSize from "../Chakra Components/FontSize";

const ProductDetails = () => {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
  let productDetails = JSON.parse(localStorage.getItem("details")) || {};

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  function ToastStatusExample({ ele }) {
    const toast = useToast();
    const statuses = ["success"];

    const addToWishlist = () => {
      wishlist.push(productDetails);
      localStorage.setItem("wishlist", JSON.stringify(wishlist));
    };

    const addToCart = () => {
      cart.push(productDetails);
      localStorage.setItem("cart", JSON.stringify(cart));
    };

    return (
      <Wrap>
        {statuses.map((status, i) => (
          <WrapItem key={i}>
            <Button
              mr={2}
              ml={2}
              fontSize={FontSize}
              onClick={() => {
                toast({
                  title: `Item added to ${ele}`,
                  status: status,
                  isClosable: true,
                });
                ele == "Wishlist" ? addToWishlist() : addToCart();
              }}
            >
              Add to {ele}
            </Button>
          </WrapItem>
        ))}
      </Wrap>
    );
  }

  return (
    <Box mt={20} mb={500}>
      <Box
        display={"flex"}
        justifyContent={"center"}
        gap={20}
        sx={{
          "@media screen and (max-width: 767px)": {
            gap: "5%",
          },
        }}
      >
        <Image
          src={productDetails.image}
          alt="product images"
          borderRadius="lg"
          maxW="sm"
          sx={{
            "@media screen and (max-width: 767px)": {
              w: "30%",
            },
          }}
        />
        {productDetails.image2 ? (
          <Image
            src={productDetails.image2}
            alt="product images"
            borderRadius="lg"
            maxW="sm"
            sx={{
              "@media screen and (max-width: 767px)": {
                w: "30%",
              },
            }}
          />
        ) : null}
      </Box>
      <Stack mt="6" spacing="3">
        <Heading size="md" m={"auto"} fontSize={FontSize}>
          {productDetails.title}
        </Heading>
        <Text m={"auto"} fontSize={FontSize}>
          {productDetails.type}
        </Text>
        <Text m={"auto"} fontSize={FontSize}>
          ${productDetails.price}
        </Text>
      </Stack>
      <Box display={"flex"} justifyContent={"center"} mt={3}>
        <ToastStatusExample ele={"Wishlist"} />
        <ToastStatusExample ele={"Cart"} />
      </Box>
    </Box>
  );
};

export default React.memo(ProductDetails);
