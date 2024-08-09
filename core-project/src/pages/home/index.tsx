import React, { useState } from "react";
import {
  Grid,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Heading,
  Box,
  Flex,
} from "@chakra-ui/react";
import Sidebar from "../../components/sidebar";
import { Button } from "../../components/Button";
import { useCreateUser } from "../../mutations/users";
import { UserProps } from "../../interface/users";

const handleSubmit = (
  event: React.FormEvent,
  name: string,
  email: string,
  mutate: (user: UserProps) => void,
) => {
  event.preventDefault();
  const newUser = { name, email };
  mutate(newUser);
};

const Home = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const { mutate } = useCreateUser();

  return (
    <Grid gridTemplateColumns=".15fr 1fr" h="100vh">
      <Sidebar />
      <Stack
        as="form"
        spacing={2}
        w="60vw"
        placeSelf="start center"
        mt="2rem"
        boxShadow="rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;"
        borderRadius="8px"
        p="2rem"
        onSubmit={(e) => handleSubmit(e, name, email, mutate)}
      >
        <FormControl>
          <Flex alignItems="baseline" mb="2rem">
            <Box
              width="12px"
              height="12px"
              borderRadius="50%"
              backgroundColor="yellow.500"
              mr="8px"
              display="inline-flex"
              alignItems="baseline"
            ></Box>
            <Heading>Add User</Heading>
          </Flex>
          <FormLabel>Name</FormLabel>
          <Input
            type="text"
            backgroundColor="gray.50"
            value={name}
            onChange={(e) => setName(e.target.value)}
            focusBorderColor="yellow.500"
          />
        </FormControl>
        <FormControl mt="1rem">
          <FormLabel>Email</FormLabel>
          <Input
            type="email"
            backgroundColor="gray.50"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            focusBorderColor="yellow.500"
          />
        </FormControl>
        <Button type="submit" text="enviar" bgcolor="black.50" mt="3rem" />
      </Stack>
    </Grid>
  );
};

export default Home;
