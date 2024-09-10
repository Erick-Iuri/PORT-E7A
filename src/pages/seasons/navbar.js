
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

          <Flex>

            <Flex>
              <Switch></Switch>
            </Flex>

          </Flex>
         
        </Flex>
      </>
    )
  }