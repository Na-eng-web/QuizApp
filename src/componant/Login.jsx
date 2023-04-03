import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  ListItem,
  OrderedList,
} from "@chakra-ui/react";
import React from "react";
import { useForm } from "react-hook-form";

const Login = ({ user, setUser, setScreen }) => {
  const { register, handleSubmit } = useForm();
  return (
    <>
      <Flex width="full" align="center" justifyContent="center">
        <Box
          fontFamily={"cursive"}
          bg={"#F6F1F1"}
          color={"#000000"}
          boxShadow={"dark-lg"}
          m={"10"}
          border={"5"}
          p={"5"}
          borderRadius={"xl"}
        >
          <Box align={"center"}>
            <Heading>Enter Your Details:</Heading>
          </Box>
          <Box mt={"5"}>
            <form
              onSubmit={handleSubmit((data) => (setUser(data), setScreen(1)))}
            >
              <FormControl isRequired>
                <FormLabel>Name</FormLabel>
                <Input
                  {...register("Name", { required: true })}
                  type="text"
                  placeholder="Name"
                />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Email</FormLabel>
                <Input
                  {...register("Email", { required: true })}
                  type="email"
                  placeholder="Email"
                />
              </FormControl>
              <Box mt={"4"}>
                <Heading color={"red.400"} size={"md"} textAlign={"left"}>
                  Instruction
                </Heading>
                <OrderedList>
                  <ListItem size={"sm"}>
                    Total Number of Question is 5.
                  </ListItem>
                  <ListItem size={"sm"}>Time will be 2 min.</ListItem>
                  <ListItem size={"sm"}>Each question has 10 mark.</ListItem>
                  <ListItem size={"sm"}>No negative marking.</ListItem>
                </OrderedList>
              </Box>
              <FormControl id="basic">
                <Button
                  _hover={{ background: "#146C94" }}
                  width={"full"}
                  mt={"4"}
                  type="Submit"
                  borderRadius={"20"}
                >
                  Submit
                </Button>
              </FormControl>
            </form>
          </Box>
        </Box>
      </Flex>
    </>
  );
};

export default Login;
