import {
  Box,
  Flex,
  Image,
  VStack,
  Link as ChakraLink,
  Text,
  Circle,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { mylinks } from "../data/mylinks";

const LinkTree = () => {
  return (
    <Box w="100%" py={8}>
      <VStack w="100%" spacing={7}>
        {/* profile-container */}

        <Box
          pos="relative"
          w="100%"
          display={"flex"}
          flexDir="column"
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Circle
            size={"40px"}
            position={"absolute"}
            border="1px dashed #d0d5dd"
            top="-20px"
            right={20}
            display={{ base: "none", md: "flex" }}
          >
            <Image
              src="./link-tree-type/images/shareicon.png"
              alt="share-desktop"
              w="25px"
            />
          </Circle>
          <Circle
            size={"40px"}
            position={"absolute"}
            border="1px dashed #d0d5dd"
            top="-20px"
            right={0}
            display={{ base: "flex", md: "none" }}
          >
            <Image
              src="./link-tree-type/images/shareicon2.png"
              alt="share-mobile"
              w="25px"
            />
          </Circle>
          <Image
            src="https://images.unsplash.com/photo-1580477667995-2b94f01c9516?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            alt="profile-pic"
            id="profile_img"
            boxSize="88px"
            objectFit="cover"
            borderRadius="full"
          />
          <Text
            id="twitter"
            fontWeight={700}
            fontSize="20px"
            color={"#101828"}
            lineHeight="30px"
            my="8px"
          >
            Austin Mula
          </Text>
          <Text id="slack" display="none">
            Austin Mula
          </Text>
        </Box>

        {/* Links container */}

        <Box w="100%" px={[2, 2, 1]}>
          {mylinks.map((linkitem) => (
            <ChakraLink
              id={linkitem.id}
              key={linkitem.id}
              href={linkitem.link}
              isExternal
              display="flex"
              alignItems="center"
              justifyContent="center"
              py="24px"
              bg="#eaecf0"
              mt="8px"
              borderRadius="8px"
              color={"#101828"}
              fontWeight={500}
              _hover={{ textDecoration: "none" }}
            >
              {linkitem.text}
            </ChakraLink>
          ))}

          <ChakraLink
            as={Link}
            to="contact"
            id="contact"
            display="flex"
            alignItems="center"
            justifyContent="center"
            py="24px"
            bg="#eaecf0"
            mt="8px"
            borderRadius="8px"
            color={"#101828"}
            fontWeight={500}
            textDecoration="none"
            _hover={{ textDecoration: "none" }}
          >
            Contact Me
          </ChakraLink>
        </Box>

        {/* Socials Container */}
        <Flex gap={4}>
          <ChakraLink href="https://slack.com/" isExternal>
            <Image
              src="./link-tree-type/images/slack.png"
              alt="slack-socials"
            />
          </ChakraLink>
          <ChakraLink href="https://github.com/austinmula/" isExternal>
            <Image
              src="./link-tree-type/images/github.png"
              alt="github-socials"
            />
          </ChakraLink>
        </Flex>
      </VStack>
    </Box>
  );
};

export default LinkTree;
