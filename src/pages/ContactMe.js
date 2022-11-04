import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Heading,
  Input,
  Stack,
  Text,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";

const ContactMe = () => {
  const name = "Austin";
  const [error, setError] = useState({
    email: false,
    first_name: false,
    last_name: false,
    message: false,
    terms: false,
  });
  const [data, setData] = useState({
    email: "",
    first_name: "",
    last_name: "",
    message: "",
    terms: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
  };

  const handleChange = (e) => {
    let name = e.target.id;
    let value = e.target.value;

    const currentInput = {
      [name]: value,
    };

    const updatedInput = {
      ...data,
      ...currentInput,
    };

    setData(updatedInput);
  };
  return (
    <Box
      w={{ lg: "1216px" }}
      display={"flex"}
      justifyContent="center"
      alignItems={"center"}
      minH={{ base: "700px", md: "620px" }}
    >
      <VStack maxW={"720px"} spacing={8} h="-webkit-fit-content">
        <VStack spacing={1} align="flex-start" w="100%">
          <Heading
            fontWeight={600}
            fontSize={["30px", "36px"]}
            lineHeight={["35px", "44px"]}
            color="#101828"
          >
            Contact Me
          </Heading>

          <Text
            fontWeight={400}
            fontSize={["14px", "20px"]}
            lineHeight={["22px", "30px"]}
            color="#475467"
          >
            Hi there, contact me to ask me about anything you have in mind.
          </Text>
        </VStack>

        <VStack as="form" spacing={6} w="100%" onSubmit={handleSubmit}>
          <Stack direction={["column", "row"]} w="100%" spacing={5}>
            <FormControl>
              <FormLabel color="#344054">First name</FormLabel>
              <Input
                type="text"
                id="first_name"
                placeholder="Enter your first name"
                size={["sm", "md", "lg"]}
                variant="unstyled"
                border={"1px solid #D0D5DD"}
                boxShadow="0px 1px 2px rgba(16, 24, 40, 0.05)"
                borderRadius={"8px"}
                _focus={{
                  border: "1px solid #84CAFF",
                  boxShadow: "0px 1px 2px rgba(16, 24, 40, 0.05)",
                }}
                onChange={handleChange}
              />
              <FormHelperText>Please enter first name</FormHelperText>
            </FormControl>
            <FormControl>
              <FormLabel color="#344054">Last name</FormLabel>
              <Input
                type="text"
                id="last_name"
                size={["sm", "md", "lg"]}
                placeholder="Enter your last name"
                variant="unstyled"
                border={"1px solid #D0D5DD"}
                boxShadow="0px 1px 2px rgba(16, 24, 40, 0.05)"
                borderRadius={"8px"}
                _focus={{
                  border: "1px solid #84CAFF",
                  boxShadow: "0px 1px 2px rgba(16, 24, 40, 0.05)",
                }}
                onChange={handleChange}
              />
              <FormHelperText>Please enter last name</FormHelperText>
            </FormControl>
          </Stack>
          <FormControl>
            <FormLabel color="#344054">Email</FormLabel>
            <Input
              type="email"
              id="email"
              size={["sm", "md", "lg"]}
              placeholder="yourname@email.com"
              variant="unstyled"
              border={"1px solid #D0D5DD"}
              boxShadow="0px 1px 2px rgba(16, 24, 40, 0.05)"
              borderRadius={"8px"}
              _focus={{
                border: "1px solid #84CAFF",
                boxShadow: "0px 1px 2px rgba(16, 24, 40, 0.05)",
              }}
              onChange={handleChange}
            />
            <FormHelperText>Please enter your email.</FormHelperText>
          </FormControl>
          <FormControl>
            <FormLabel color="#344054">Message</FormLabel>
            <Textarea
              // isInvalid
              type="text"
              id="message"
              resize={"none"}
              size={["sm", "md", "lg"]}
              placeholder="Send me a message and I'll reply as soon as possible..."
              variant="unstyled"
              border={"1px solid #D0D5DD"}
              boxShadow="0px 1px 2px rgba(16, 24, 40, 0.05)"
              borderRadius={"8px"}
              _focus={{
                border: "1px solid #84CAFF",
                boxShadow: "0px 1px 2px rgba(16, 24, 40, 0.05)",
              }}
              _invalid={{
                border: " 1px solid #F89687",
              }}
              onChange={handleChange}
            />
            {/* <FormHelperText>Enter message here</FormHelperText> */}
            <FormErrorMessage>Error</FormErrorMessage>
          </FormControl>
          <Box w="100%">
            <Checkbox
              size={["sm", "md", "lg"]}
              spacing="1rem"
              onChange={handleChange}
              id="terms"
            >
              You agree to providing your data to {name} who may contact you.
            </Checkbox>
          </Box>
          <Button
            id="btn__submit"
            variant={"unstyled"}
            display="flex"
            justifyContent={"center"}
            alignItems="center"
            mt={4}
            py={6}
            w="100%"
            type="submit"
            bg={"#1570EF"}
            color="#fff"
            _disabled={{
              boxShadow: "0px 1px 2px rgba(16, 24, 40, 0.05);",
              bg: "#B2DDFF",
            }}
            _focus={{
              bg: "#1570EF",
              border: " 1px solid #1570EF",
              boxShadow:
                "0px 1px 2px rgba(16, 24, 40, 0.05), 0px 0px 0px 4px #D1E9FF",
            }}
            _hover={{
              bg: "#175CD3",
            }}
          >
            Send message
          </Button>
        </VStack>
      </VStack>
    </Box>
  );
};

export default ContactMe;
