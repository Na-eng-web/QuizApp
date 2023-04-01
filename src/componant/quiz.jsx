import React, { useEffect, useState } from "react";
import problem from "../problem";
import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Heading,
  Text,
} from "@chakra-ui/react";

const Quiz = ({ user, setScore, Score, setScreen }) => {
  const [time, setTime] = useState(0);
  const [problemNumber, setproblemNumber] = useState(0);
  useEffect(() => {
    let a = setInterval(() => {
      setTime((time) => time + 1);
    }, 1000);
  }, []);

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>welcome {user.Name}</div>
        <div>{time}</div>
      </div>
      <h1>Problem</h1>
      <p>problem No={problem[problemNumber].Number}</p>
      <p>{problem[problemNumber].problem}</p>
      <li>
        {problem[problemNumber].opction.map((e, index) => (
          <h4
            onClick={() => {
              if (e === problem[problemNumber].ans) {
                setScore(Score + 10);
              }
            }}
            key={index}
          >
            {e}
          </h4>
        ))}
      </li>

      <Grid templateColumns="repeat(6, 1fr)" gap={1} width="full" p={"10"}>
        <GridItem p={"4"} bg="blue.500" colSpan={5}>
          <Heading size={"2xl"}>Hello {user.Name}</Heading>
        </GridItem>
        <GridItem p={"4"} colSpan={1} bg="blue.500">
          {time}
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
          flexGrow={4}
          bg="blue.500"
          colSpan={6}
        >
          {problem[problemNumber].opction.map((e, index) => (
            <Text
              width={"100%"}
              bg={"white"}
              onClick={() => {
                if (e === problem[problemNumber].ans) {
                  setScore(Score + 10);
                }
              }}
              key={index}
            >
              {e}
            </Text>
          ))}
        </GridItem>

        {/* <GridItem h="10" bg="blue.500" colSpan={2} />
        <GridItem h="10" bg="blue.500" colSpan={2} />
        <GridItem h="10" bg="blue.500" colSpan={1} />

        <GridItem h="10" bg="blue.500" colSpan={1} />
        <GridItem h="10" bg="blue.500" colSpan={2} />
        <GridItem h="10" bg="blue.500" colSpan={2} />
        <GridItem h="10" bg="blue.500" colSpan={1} /> */}

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
            }}
          >
            {problemNumber < 4 ? "Next" : "Submit"}
          </Button>
        </GridItem>
      </Grid>
    </div>
  );
};

export default Quiz;
