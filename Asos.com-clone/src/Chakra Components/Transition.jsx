import {
  AlertDialog,
  AlertDialogCloseButton,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import { useRef } from "react";
import FontSize from "./FontSize";

function TransitionExample({ disabled }) {
  let userAddress = JSON.parse(localStorage.getItem("userAddress")) || {};
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = useRef();

  const handleClick = () => {
    if (
      disabled.street == "" ||
      disabled.city == "" ||
      disabled.state == "" ||
      disabled.landmark == "" ||
      disabled.pin == ""
    ) {
      return;
    } else {
      userAddress = disabled;
      localStorage.setItem("userAddress", JSON.stringify(userAddress));
    }
  };

  return (
    <>
      <Button
        fontSize={FontSize()}
        size={{}}
        padding={3}
        onClick={() => {
          onOpen();
          handleClick();
        }}
        isDisabled={
          disabled.street == "" ||
          disabled.city == "" ||
          disabled.state == "" ||
          disabled.landmark == "" ||
          disabled.pin == ""
        }
      >
        Checkout
      </Button>
      <AlertDialog
        motionPreset="slideInBottom"
        leastDestructiveRef={cancelRef}
        onClose={onClose}
        isOpen={isOpen}
        isCentered
      >
        <AlertDialogOverlay />
        <AlertDialogContent>
          <AlertDialogHeader>Order placed successfully!</AlertDialogHeader>
          <AlertDialogCloseButton />
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}

export default TransitionExample;
