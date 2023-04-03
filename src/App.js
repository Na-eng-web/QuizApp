import React, { useState } from "react";
import Login from "./componant/Login";
import Quiz from "./componant/quiz";
import Final from "./componant/Final";
import { Box } from "@chakra-ui/react";

const App = () => {
  const [user, setUser] = useState("");
  const [screen, setScreen] = useState(0);
  const [Score, setScore] = useState(0);

  return (
    <>
      <Box h={"100vh"} bg={"#146C94"}>
        {screen === 0 && (
          <Login user={user} setUser={setUser} setScreen={setScreen} />
        )}
        {screen === 1 && (
          <Quiz
            user={user}
            setScore={setScore}
            Score={Score}
            setScreen={setScreen}
          />
        )}
        {screen === 2 && <Final Score={Score} />}
      </Box>
    </>
  );
};

export default App;
