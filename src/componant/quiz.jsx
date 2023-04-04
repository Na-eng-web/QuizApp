import React, { useState } from "react";
import problem from "../problem";
import { Box, Button, Grid, GridItem, Heading, Text } from "@chakra-ui/react";
import CountdownTimer from "./CountDownTImer";

const Quiz = ({ user, setScore, Score, setScreen }) => {
  const [problemNumber, setproblemNumber] = useState(0);
  const [color, setcolor] = useState(null);

  const Time = new Date().getTime() + 120000;

  return (
    <Box display={"flex"} justifyContent={"center"} p={"10"}>
      <Grid
        boxShadow={"2xl"}
        templateColumns="repeat(6, 1fr)"
        w={"60%"}
        fontFamily={"cursive"}
      >
        <GridItem p={"4"} colSpan={5} bg={"#F6F1F1"}>
          <Heading size={"2xl"}>Hello {user.Name}</Heading>
        </GridItem>
        <GridItem
          p={"5"}
          colSpan={1}
          bg={"#F6F1F1"}
          border={" 1px"}
          textAlign={"Center"}
          alignContent={"center"}
        >
          {<CountdownTimer setScreen={setScreen} targetDate={Time} />}
        </GridItem>

        <GridItem p={"4"} w="100%" bg="blue.500" colSpan={6}>
          <Text as="b" fontSize="4xl">
            {"Q" +
              problem[problemNumber].Number +
              ". " +
              problem[problemNumber].problem}
          </Text>
        </GridItem>

        <GridItem
          display={"flex"}
          justifyContent={"space-evenly"}
          bg="blue.500"
          colSpan={6}
          flexWrap={"wrap"}
          w={"100%"}
        >
          {problem[problemNumber].opction.map((e, index) => (
            <Text
              cursor={"pointer"}
              bg={color === index ? "green.300" : "whiteAlpha.600"}
              w={"40%"}
              m={2}
              p={4}
              textAlign={"Center"}
              borderRadius={"10px"}
              _hover={{ bg: "whiteAlpha.700" }}
              _active={{ bg: "whiteAlpha.900" }}
              onClick={() => {
                if (e === problem[problemNumber].ans) {
                  setScore(Score + 10);
                }
                setcolor(index);
              }}
              key={index}
            >
              {e}
            </Text>
          ))}
        </GridItem>

        <GridItem
          p={"4"}
          display={"flex"}
          justifyContent={"center"}
          w="100%"
          bg="blue.500"
          colSpan={6}
        >
          <Button
            w={"10%"}
            onClick={() => {
              problemNumber < 4
                ? setproblemNumber(problemNumber + 1)
                : setScreen(2);
              setcolor("");
            }}
          >
            {problemNumber < 4 ? "Next" : "Submit"}
          </Button>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default Quiz;
