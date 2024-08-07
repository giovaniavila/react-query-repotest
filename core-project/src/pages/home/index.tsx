import React, { useState } from "react";
import { Grid, FormControl, FormLabel, Input, Stack } from "@chakra-ui/react";
import Sidebar from "../../components/sidebar";
import { Button } from "../../components/Button";
import { useCreateUser } from "../../mutations/users";
import { UserProps } from "../../interface/users";

const handleSubmit = (
  event: React.FormEvent,
  name: string,
  email: string,
  mutate: (user: UserProps) => void
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
    <Grid gridTemplateColumns=".2fr 1fr" h="100vh">
      <Sidebar />
      <Stack
        as="form"
        spacing={2}
        w="50vw"
        placeSelf="start center"
        mt="2rem"
        onSubmit={(e) => handleSubmit(e, name, email, mutate)}
      >
        <FormControl>
          <FormLabel>Name</FormLabel>
          <Input
            type="text"
            backgroundColor="gray.50"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Email</FormLabel>
          <Input
            type="email"
            backgroundColor="gray.50"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormControl>
        <Button type="submit" text="enviar" bgcolor="#121e30" />
      </Stack>
    </Grid>
  );
};

export default Home;
