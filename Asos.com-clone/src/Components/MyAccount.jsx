import { Box, Heading, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import FontSize from "../Chakra Components/FontSize";

const accountDetails = JSON.parse(localStorage.getItem("userDetails")) || [];

const MyAccount = () => {
  const address = JSON.parse(localStorage.getItem("userAddress")) || [];
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "My Account | ASOS";
  }, []);
  return (
    <Box mt={20} mb={800}>
      <Heading textAlign={"center"} fontSize={FontSize}>
        My Account
      </Heading>
      <Box m="10%" mb={150} mt={10}>
        <Heading fontSize={FontSize}>
          User Name :
          <span style={{ fontWeight: "600" }}> {accountDetails.name}</span>{" "}
        </Heading>
        <Text fontSize={FontSize}>
          <span style={{ fontWeight: "600" }}>Email :</span>{" "}
          {accountDetails.email}
        </Text>
        {address != [] ? (
          <>
            <Text fontSize={FontSize}>
              <span style={{ fontWeight: "600" }}>Shipping Address :</span>
              {address.street}
              <br /> {address.city}
              <br /> {address.state} <br /> {address.pin}
            </Text>
            <Text fontSize={FontSize}>
              <span style={{ fontWeight: "600" }}>Landmark :</span>{" "}
              {address.landmark}
            </Text>
          </>
        ) : null}
      </Box>
    </Box>
  );
};

export default React.memo(MyAccount);
