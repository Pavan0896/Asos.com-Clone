import { Box, Heading, Input, Button } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import useForm from "./FormValidtion";
import { useDispatch } from "react-redux";
import { authAction } from "../Store/actions";
import FontSize from "../Chakra Components/FontSize";

const SignIn = () => {
  const isAuth = JSON.parse(localStorage.getItem("authenticated")) || false;
  const [state, setState] = useState(0);
  const { form, handleChange, display, active } = useForm({
    name: "",
    email: "",
    password: "",
    confirmPassword: false,
  });

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Sign-in | ASOS";
  }, []);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    localStorage.setItem("userDetails", JSON.stringify(form));
    localStorage.setItem("authenticated", JSON.stringify(true));
    setState(state + 1);
    dispatch(authAction(true));
  };

  const handleLogout = () => {
    localStorage.setItem("authenticated", JSON.stringify(false));
    setState(state + 1);
    dispatch(authAction(false));
  };

  return (
    <Box mt={20} mb={500}>
    <h3 style={{textAlign:"center"}}>Please Log In to Continue</h3>
      {!isAuth ? (
        <Box w="85%" m={"auto"}>
          <form onSubmit={handleSubmit}>
            <label>Name</label>
            <br />
            <Input
              type="text"
              placeholder="Enter Name"
              name="name"
              size={{ sm: "sm", md: "md", lg: "md" }}
              sx={{
                "@media screen and (max-width: 767px)": {
                  size: "xs",
                  width: "90%",
                  fontSize: "8px",
                },
              }}
              onChange={handleChange}
              mb={2}
              mt={2}
            />
            <br />
            <label>Email</label>
            <br />
            <Input
              type="text"
              placeholder="Enter email"
              name="email"
              size={{ sm: "sm", md: "md", lg: "md" }}
              sx={{
                "@media screen and (max-width: 767px)": {
                  size: "xs",
                  width: "90%",
                  fontSize: "8px",
                },
              }}
              onInput={handleChange}
              mb={2}
              mt={2}
            />
            <label>Password</label>
            <Input
              type="text"
              placeholder="Enter Password"
              name="password"
              size={{ sm: "sm", md: "md", lg: "md" }}
              sx={{
                "@media screen and (max-width: 767px)": {
                  size: "xs",
                  width: "90%",
                  fontSize: "8px",
                },
              }}
              onInput={handleChange}
              mb={2}
              mt={2}
            />
            <label>Confirm Password</label>
            <Input
              type="password"
              placeholder="Confirm Password"
              name="confirmPassword"
              size={{ sm: "sm", md: "md", lg: "md" }}
              sx={{
                "@media screen and (max-width: 767px)": {
                  size: "xs",
                  width: "90%",
                  fontSize: "8px",
                },
              }}
              onInput={handleChange}
              mb={2}
              mt={2}
            />
            <Input
              type="submit"
              disabled={active || form.confirmPassword == false}
              mb={2}
              mt={2}
              size={{ sm: "sm", md: "md", lg: "md" }}
              sx={{
                "@media screen and (max-width: 767px)": {
                  size: "xs",
                  width: "90%",
                  fontSize: "8px",
                },
              }}
            />
          </form>
          <Box m={"auto"} fontSize={FontSize}>
            {display}
          </Box>
        </Box>
      ) : (
        <Box textAlign={"center"} mb={200} mt={20}>
          <Heading fontSize={FontSize}>Login Successful</Heading>
          <Button fontSize={FontSize} size={{}} p={2} onClick={handleLogout}>
            Logout
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default SignIn;
