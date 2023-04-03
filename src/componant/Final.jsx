import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import Style from "./Final.module.css";

const Final = ({ Score }) => {
  return (
    <Flex justifyContent={"center"} alignItems={"center"}>
      <Box p={5} className={Style.final} position={"relative"} color={"white"}>
        <Text zIndex={2}> Your Final score is</Text>
        <Text zIndex={2}>{Score}</Text>
      </Box>
    </Flex>
  );
};

export default Final;
