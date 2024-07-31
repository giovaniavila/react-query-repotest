import {
  Grid,
  FormControl,
  FormLabel,
  Input,
  Stack,
} from "@chakra-ui/react";
import Sidebar from "../../components/sidebar";
import { Button } from "../../components/Button";


const Home = () => {
  return (
    <Grid gridTemplateColumns=".2fr 1fr" h="100vh">
      <Sidebar />
      <Stack spacing={2} w="50vw" placeSelf="start center" mt="2rem">
        <FormControl>
          <FormLabel>Name</FormLabel>
          <Input type="text" backgroundColor="gray.50" />
        </FormControl>
        <FormControl>
          <FormLabel>Email</FormLabel>
          <Input type="email" backgroundColor="gray.50" />
        </FormControl>
        <Button type="submit" text="enviar"/>
      </Stack>
    </Grid>
  );
};

export default Home;
