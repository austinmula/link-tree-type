import { Box, Flex, Image } from "@chakra-ui/react";
import React from "react";

function Footer() {
  return (
    <Box
      as="footer"
      mt={"auto"}
      height={["full", "160px"]}
      display={"flex"}
      alignItems="center"
      justifyContent="center"
    >
      <Flex
        w="full"
        maxW="1280px"
        h={["auto", "64px"]}
        justifyContent="space-between"
        flexDir={["column", "row"]}
        py={[5, 3]}
        px={2}
        gap={[4, 1]}
        borderTop="1px solid #eaecf0"
      >
        <Box height={["24px", "full"]}>
          <Image src="./images/Zuri.Internship_Logo.png" alt="zuri-logo" />
        </Box>

        <Box>
          <p id="footer_text">HNG Internship 9 Frontend Task</p>
        </Box>
        <Box height={["24px", "full"]}>
          <Image src="./images/I4G.png" alt="I4G" />
        </Box>
      </Flex>
    </Box>
  );
}

export default Footer;
