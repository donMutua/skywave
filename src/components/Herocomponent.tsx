import {
  Badge,
  Box,
  Button,
  Heading,
  HStack,
  Img,
  Stack,
  Text,
  useColorModeValue as mode,
} from "@chakra-ui/react";
import * as React from "react";

export const HeroComponent = () => {
  return (
    <Box
      as="section"
      bg={mode("gray.50", "gray.800")}
      pb="24"
      pos="relative"
      px={{
        base: "6",
        lg: "12",
      }}
    >
      <Box maxW="7xl" mx="auto">
        <Box
          maxW={{
            lg: "md",
            xl: "xl",
          }}
          pt={{
            base: "20",
            lg: "40",
          }}
          pb={{
            base: "16",
            lg: "24",
          }}
        >
          <Heading
            as="h1"
            size="3xl"
            lineHeight="1"
            fontWeight="extrabold"
            letterSpacing="tight"
          >
            Let us help you recruit the best{" "}
            <Box
              as="mark"
              color={mode("blue.500", "blue.300")}
              bg="transparent"
            >
              talent for your business
            </Box>
          </Heading>
          <Text
            mt={4}
            fontSize="xl"
            fontWeight="medium"
            color={mode("gray.600", "gray.400")}
          >
            We carry out talent acquisition on behalf of our client ensuring
            that the client gets the best persons to fill the positions they
            intend to fill
          </Text>
          <Stack
            direction={{
              base: "column",
              sm: "row",
            }}
            spacing="4"
            mt="8"
          >
            <Button
              size="lg"
              colorScheme="blue"
              height="14"
              px="8"
              fontSize="md"
            >
              Talk to Us
            </Button>
          </Stack>
        </Box>
      </Box>
      <Box
        pos={{
          lg: "absolute",
        }}
        insetY={{
          lg: "0",
        }}
        insetEnd={{
          lg: "0",
        }}
        bg="gray.50"
        w={{
          base: "full",
          lg: "50%",
        }}
        height={{
          base: "96",
          lg: "full",
        }}
        sx={{
          clipPath: {
            lg: "polygon(8% 0%, 100% 0%, 100% 100%, 0% 100%)",
          },
        }}
      >
        <Img
          height="100%"
          width="100%"
          objectFit="cover"
          src="https://images.unsplash.com/photo-1556379069-7c1b1b8990b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2906&q=80"
          alt="Lady working"
        />
      </Box>
    </Box>
  );
};
