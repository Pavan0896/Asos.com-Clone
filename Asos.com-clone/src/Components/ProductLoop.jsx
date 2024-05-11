import { Card, CardBody, Heading, Image, Stack, Text } from "@chakra-ui/react";
import React from "react";
import FontSize from "../Chakra Components/FontSize";

const ProductLoop = ({ e, i }) => {
  return (
    <Card key={i} textAlign={"center"} w="100%">
      <CardBody>
        <Image src={e.image} alt="product images" borderRadius="lg" w="100%" />
        <Stack mt="6" spacing="3">
          <Heading fontSize={FontSize} m={"auto"}>
            {e.title}
          </Heading>
          <Text fontSize={FontSize}>{e.type}</Text>
          <Text fontSize={FontSize}>${e.price}</Text>
        </Stack>
      </CardBody>
    </Card>
  );
};

export default React.memo(ProductLoop);
