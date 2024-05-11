import React, { useEffect, useState } from "react";
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
import { Link } from "react-router-dom";
import FontSize from "../Chakra Components/FontSize";

const Cart = () => {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let checkout = JSON.parse(localStorage.getItem("checkout")) || [];
  const [state, setState] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Shopping Bag | ASOS";
  }, []);

  const addToCheckout = () => {
    checkout.push(...cart);
    localStorage.setItem("checkout", JSON.stringify(checkout));
    localStorage.setItem("cart", JSON.stringify([]));
    setState(state + 1);
  };

  function ToastStatusExample({ index }) {
    const toast = useToast();
    const statuses = ["error"];
    const removeItem = () => {
      cart.splice(index, 1);
      localStorage.setItem("cart", JSON.stringify(cart));
      setState(state + 1);
    };

    return (
      <Wrap m={"auto"}>
        {statuses.map((status, i) => (
          <WrapItem key={i}>
            <Button
              fontSize={FontSize}
              onClick={() => {
                toast({
                  title: `Item removed`,
                  status: status,
                  isClosable: true,
                });
                removeItem();
              }}
            >
              Remove
            </Button>
          </WrapItem>
        ))}
      </Wrap>
    );
  }
  return (
    <Box
      display={"flex"}
      justifyContent={"space-between"}
      mt={20}
      w="100%"
      mb={800}
    >
      <Box
        display={"grid"}
        gridTemplateColumns={{
          sm: "repeat(2,1fr)",
          md: "repeat(2,1fr)",
          lg: "repeat(2,1fr)",
        }}
        mr={{ md: "3%" }}
        sx={{
          "@media screen and (max-width: 767px)": {
            gridTemplateColumns: "repeat(2,1fr)",
            mr: "3%",
          },
        }}
      >
        {cart.length > 0 ? (
          cart.map((e, i) => (
            <Card maxW="lg" key={i}>
              <CardBody>
                <Image
                  src={e.image}
                  alt="product images"
                  borderRadius="lg"
                  m={"auto"}
                  w="60%"
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
          <Box fontSize={FontSize}>No items in Cart.</Box>
        )}
      </Box>
      <Box
        mr={{ md: "3%", lg: "5%" }}
        sx={{
          "@media screen and (max-width: 767px)": {
            mr: "3%",
          },
        }}
      >
        <Heading fontSize={FontSize}>
          Total items in bag : {cart.length}
        </Heading>
        <Link to="/checkout">
          <Button
            onClick={addToCheckout}
            isDisabled={cart.length == 0}
            fontSize={FontSize}
          >
            Checkout
          </Button>
        </Link>
      </Box>
    </Box>
  );
};

export default React.memo(Cart);
