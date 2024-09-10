import {
  Button,
  Flex,
  Text,
} from "@chakra-ui/react";

import React from "react";

/* this is the Navbar */
import Navbar from "./seasons/navbar";

/* this is the S01 import */
import S01 from "./seasons/season01";

export default function Index() {
  return (
   <> 
    <Flex 
    w="100%"
    h="100vh" 
    minH={"100vh"} bg="black"
    direction={"column"}>

      <Flex p="30px" bg="black">
        <Navbar />
      </Flex>

      <Flex>
        <S01 />
      </Flex>
    
    </Flex>
      
   </>
  );
}
