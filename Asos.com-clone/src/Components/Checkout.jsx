import {
  Box,
  Heading,
  Input,
  Radio,
  RadioGroup,
  Stack,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import TransitionExample from "../Chakra Components/Transition";
import FontSize from "../Chakra Components/FontSize";

const Checkout = () => {
  let [address, setAddress] = useState({
    street: "",
    city: "",
    state: "",
    landmark: "",
    pin: "",
  });

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Checkout | ASOS";
  }, []);

  const handleInput = (e) => {
    let { name, value } = e.target;
    setAddress({ ...address, [name]: value });
  };

  function RadioExample() {
    const [value, setValue] = React.useState("0");

    return (
      <RadioGroup onChange={setValue} value={value}>
        <Stack direction="column">
          <Radio value="1" size={{ sm: "lg", md: "md", lg: "md" }}>
            UPI
          </Radio>
          <Radio value="2" size={{ sm: "md", md: "md", lg: "md" }}>
            Credit/Debit Card
          </Radio>
          <Radio value="3" size={{ sm: "md", md: "md", lg: "md" }}>
            QR Code
          </Radio>
          <Radio value="4" size={{ sm: "md", md: "md", lg: "md" }}>
            Pay on Delivery
          </Radio>
        </Stack>
      </RadioGroup>
    );
  }

  return (
    <Box mt={20} mb={600}>
      <Box
        display={"flex"}
        justifyContent={"space-evenly"}
        alignItems={"flex-start"}
        sx={{
          "@media screen and (max-width: 767px)": {
            justifyContent: "space-evenly",
            gap: "3%",
          },
        }}
      >
        <Box>
          <Heading textAlign={"center"} fontSize={FontSize}>
            Enter Shipping Address
          </Heading>
          <Input
            placeholder="Enter Street Name"
            mt={2}
            mb={2}
            w={400}
            size={{ sm: "sm", md: "md", lg: "md" }}
            sx={{
              "@media screen and (max-width: 767px)": {
                size: "xs",
                width: "90%",
                fontSize: "8px",
              },
            }}
            name="street"
            onInput={handleInput}
            required
          />
          <br />
          <Input
            placeholder="Enter City"
            mt={2}
            mb={2}
            w={400}
            size={{ sm: "sm", md: "md", lg: "md" }}
            sx={{
              "@media screen and (max-width: 767px)": {
                size: "xs",
                width: "90%",
                fontSize: "8px",
              },
            }}
            name="city"
            onInput={handleInput}
            required
          />
          <br />
          <Input
            placeholder="Enter State"
            mt={2}
            mb={2}
            w={400}
            size={{ sm: "sm", md: "md", lg: "md" }}
            sx={{
              "@media screen and (max-width: 767px)": {
                size: "xs",
                width: "90%",
                fontSize: "8px",
              },
            }}
            name="state"
            onInput={handleInput}
            required
          />
          <br />
          <Input
            placeholder="Enter Landmark"
            mt={2}
            mb={2}
            w={400}
            size={{ sm: "sm", md: "md", lg: "md" }}
            sx={{
              "@media screen and (max-width: 767px)": {
                size: "xs",
                width: "90%",
                fontSize: "8px",
              },
            }}
            name="landmark"
            onInput={handleInput}
            required
          />
          <br />
          <Input
            placeholder="Enter pincode"
            mt={2}
            mb={2}
            w={400}
            size={{ sm: "sm", md: "md", lg: "md" }}
            sx={{
              "@media screen and (max-width: 767px)": {
                size: "xs",
                width: "90%",
                fontSize: "8px",
              },
            }}
            name="pin"
            onInput={handleInput}
            required
          />
        </Box>
        <Box
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          justifyContent={"start"}
          mb={2}
          mr={20}
        >
          <Heading fontSize={FontSize}>Enter Payment Methods</Heading>
          <RadioExample />
        </Box>
      </Box>
      <Box w={100} m={"auto"} mt={39} mb={2}>
        <TransitionExample disabled={address} />
      </Box>
    </Box>
  );
};

export default React.memo(Checkout);
