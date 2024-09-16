/* chakra content */
import {
    Button,
    Flex,
    Img,
    Text,
    Box
} from "@chakra-ui/react" /* */


import React from "react"

export default function S01() {
    return (
        <>
        {/* Main Container */}
        <Flex>

            <Flex 
            direction={"column"}>
                <Flex fontWeight="bold" fontSize={"40px"} color={"white"}>Product Designer / UX/UI Designer</Flex>
                <Flex fontWeight={"bold"} fontFamily="oswald" fontSize={"25px"} color={"#737373"}>I also code a little.</Flex>
            </Flex>

            <Flex>
                
            </Flex>
        </Flex>
        </>
    )
}