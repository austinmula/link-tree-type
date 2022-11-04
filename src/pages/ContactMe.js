import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormHelperText,
  FormLabel,
  HStack,
  Input,
  Text,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import React from "react";

const ContactMe = () => {
  return (
    <Box px={[4, 2]}>
      <VStack my={7} maxW={"720px"} align="flex-start">
        <Text
          fontWeight={600}
          fontSize="36px"
          lineHeight={"44px"}
          color="#101828"
        >
          Contact Me
        </Text>

        <Text
          fontWeight={400}
          fontSize="20px"
          lineHeight={"30px"}
          color="#475467"
        >
          Hi there, contact me to ask me about anything you have in mind.
        </Text>

        <VStack as="form" spacing={6}>
          <FormControl>
            <FormLabel>First name</FormLabel>
            <Input
              type="text"
              id="first_name"
              placeholder="Enter your first name"
              size="lg"
            />
            {/* <FormHelperText>We'll never share your text.</FormHelperText> */}
          </FormControl>
          <FormControl>
            <FormLabel>Last name</FormLabel>
            <Input
              type="text"
              id="last_name"
              size="lg"
              placeholder="Enter your last name"
            />
            {/* <FormHelperText>We'll never share your text.</FormHelperText> */}
          </FormControl>
          <FormControl>
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              id="first_name"
              size="lg"
              placeholder="yourname@email.com"
            />
            {/* <FormHelperText>We'll never share your email.</FormHelperText> */}
          </FormControl>
          <FormControl>
            <FormLabel>Message</FormLabel>
            <Textarea
              type="text"
              id="message"
              resize={"none"}
              size="lg"
              placeholder="Send me a message and I'll reply as soon as possible..."
            />
            {/* <FormHelperText>We'll never share your text.</FormHelperText> */}
          </FormControl>
          <Box>
            <Checkbox size="lg" defaultChecked spacing="1rem">
              You agree to providing your data to Austin who may contact you.
            </Checkbox>
          </Box>
          <Button
            id="btn__submit"
            mt={4}
            w="100%"
            // colorScheme="teal"
            // isLoading={props.isSubmitting}
            type="submit"
          >
            Send message
          </Button>
        </VStack>
      </VStack>
    </Box>
  );
};

export default ContactMe;
