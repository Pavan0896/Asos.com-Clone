import {
  Box,
  Card,
  CardBody,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import FontSize from "../Chakra Components/FontSize";

const MyOrder = () => {
  let checkout = JSON.parse(localStorage.getItem("checkout")) || [];
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "My Orders | ASOS";
  }, []);
  return (
    <Box mt={20} mb={800}>
      <Heading textAlign={"center"}>My Orders</Heading>
      <Box
        display={"grid"}
        mt={10}
        gridTemplateColumns={{
          sm: "repeat(2,1fr)",
          md: "repeat(3,1fr)",
          lg: "repeat(4,1fr)",
        }}
        m={5}
        sx={{
          "@media screen and (max-width: 767px)": {
            gridTemplateColumns: "repeat(2,1fr)",
          },
        }}
        gap={5}
        mb={5}
      >
        {checkout.length > 0 ? (
          checkout.map((e, i) => (
            <Card key={i} mt={3}>
              <CardBody>
                <Image
                  src={e.image}
                  alt="product images"
                  borderRadius="lg"
                  m={"auto"}
                />
                <Stack mt="6" spacing="3">
                  <Heading size="md" m={"auto"} fontSize={FontSize}>
                    {e.title}
                  </Heading>
                </Stack>
              </CardBody>
            </Card>
          ))
        ) : (
          <Box textAlign={"center"}>
            <Text fontWeight={300}>No items</Text>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default React.memo(MyOrder);
