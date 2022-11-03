import { Box, Center } from "@chakra-ui/react";
import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <Center>
      <Box
        maxW={"1440px"}
        w={["100%", "100%", "1440px"]}
        minHeight={"100vh"}
        display="flex"
        flexDir={"column"}
      >
        {/* main content */}
        <Center as="main" flexGrow={1} px={2}>
          <Center w="100%" minH="100%" maxW="1152px">
            <Outlet />
          </Center>
        </Center>
        <Footer />
      </Box>
    </Center>
  );
};

export default MainLayout;
