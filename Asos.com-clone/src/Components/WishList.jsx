import {
  Box,
  Button,
  Card,
  CardBody,
  Heading,
  Image,
  Stack,
  Text,
  Wrap,
  WrapItem,
  useToast,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import FontSize from "../Chakra Components/FontSize";

const WishList = () => {
  let list = JSON.parse(localStorage.getItem("wishlist")) || [];
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  const [state, setState] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Saved Items | ASOS";
  }, []);

  function ToastStatusExample({ element, index }) {
    const toast = useToast();
    const statuses = ["error", "success"];
    const removeItem = () => {
      list.splice(index, 1);
      localStorage.setItem("wishlist", JSON.stringify(list));
      setState(state + 1);
    };

    const addToCart = () => {
      cart.push(element);
      localStorage.setItem("cart", JSON.stringify(cart));
      list.splice(index, 1);
      localStorage.setItem("wishlist", JSON.stringify(list));
      setState(state + 1);
    };

    return (
      <Wrap>
        {statuses.map((status, i) => (
          <WrapItem key={i}>
            <Button
              ml={20}
              fontSize={FontSize}
              sx={{
                "@media screen and (max-width: 767px)": {
                  ml: "10%",
                },
              }}
              onClick={() => {
                toast({
                  title:
                    status == "error" ? `Item removed` : `Item added to cart`,
                  status: status,
                  isClosable: true,
                });
                status == "error" ? removeItem() : addToCart();
              }}
            >
              {status == "error" ? "Remove" : "Add to Cart"}
            </Button>
          </WrapItem>
        ))}
      </Wrap>
    );
  }

  return (
    <Box
      mt={20}
      mb={800}
      display={"grid"}
      gridTemplateColumns={{
        sm: "repeat(2,1fr)",
        md: "repeat(2,1fr)",
        lg: "repeat(2,1fr)",
      }}
      sx={{
        "@media screen and (max-width: 767px)": {
          gridTemplateColumns: "repeat(2,1fr)",
        },
      }}
    >
      {list.length > 0 ? (
        list.map((e, i) => (
          <Card maxW="lg" key={i}>
            <CardBody>
              <Image
                src={e.image}
                alt="product images"
                borderRadius="lg"
                m={"auto"}
                w="80%"
              />
              <Stack mt="6" spacing="3">
                <Heading size="md" m={"auto"} fontSize={FontSize}>
                  {e.title}
                </Heading>
                <Text m={"auto"} fontSize={FontSize}>
                  {e.type}
                </Text>
              </Stack>
            </CardBody>
            <ToastStatusExample element={e} index={i} />
          </Card>
        ))
      ) : (
        <Box textAlign={"center"} mb={346} fontSize={FontSize}>
          No items in Wishlist.
        </Box>
      )}
    </Box>
  );
};

export default React.memo(WishList);
