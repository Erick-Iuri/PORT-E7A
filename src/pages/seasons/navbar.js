
/* chakra content */
import {
  Button,
  Flex,
  Text,
  Img
} from "@chakra-ui/react"; /* */
import Link from "next/link";


/* React */
import React from "react"; /*  */

/* Switch from chakra */
import { Switch } from '@chakra-ui/react'


export default function Navbar() {
    return (
      <>
        <Flex
        w="100%"
        justify={"space-between"}
        fontSize="25px" color="white">

          {/* Primeiro menu nav bar */}

          <Flex 
          justify={"center"} 
          align={"center"}>
            <Flex>Erick Aniello</Flex>

            <Link target="_blank" href={"https://github.com/Erick-Iuri"}> 
            <Img 
            m="10px"
            w="20px" 
            h="20px" src="/assets/Github.png"/></Link>

            <Link target="_blank" href={"https://www.linkedin.com/in/erick-aniello-49953b163/"}> 
            <Img 
            w="20px" 
            h="20px" src="/assets/Linkeding.png"/></Link>

          </Flex>

          {/* Segundo menu nav bar */}

          <Flex
          display={{md:"flex", base:"none"}}
          borderRadius={"5px"}
          pl="10px" pr="10px" pt="8px" pb="8px"
          bgColor="#141414"
          fontSize={"20px"}>

            <Flex
            _hover={{
              bgColor:"#1C1C1C",
              transition:"0.3s"
            }}
            cursor={"pointer"}
            fontWeight={"bold"}
            align={"center"}
            h="40px"
            borderRadius={"5px"}
            bgColor={"black"}
            pr="22px" pl="22px">
              Work
            </Flex>

            <Flex 
            ml="5px"
            _hover={{
              bgColor:"#1C1C1C",
              transition:"0.3s"
            }}
            cursor={"pointer"}
            fontWeight={"bold"}
            align={"center"}
            h="40px"
            borderRadius={"2px"}
            pr="22px" pl="22px"
            >
              About
            </Flex>

          </Flex>
         
        </Flex>
      </>
    )
  }