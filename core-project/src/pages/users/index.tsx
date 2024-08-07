import {
  Grid,
  Box,
  List,
  ListItem,
  Heading,
  Text,
  Flex,
} from "@chakra-ui/react";
import Sidebar from "../../components/sidebar";
import { useUsers } from "../../queries/useUsers";
import { ButtonCard } from "../../components/Button";

const UserPage = () => {
  const { data } = useUsers();

  return (
    <Grid gridTemplateColumns=".2fr 1fr" h="100vh">
      <Sidebar />
      <Box
        overflowY="auto"
        maxH="80vh"
        maxW="75vw"
        p="1rem"
        sx="scrollbarStyle"
        m="2rem 2rem "
      >
        <List spacing={3} >
          {data?.map((data) => (
            <ListItem
              key={data.id}
              boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;"
              p="1rem"
              borderRadius="8px"
              h="15.625rem"
            >
              <Flex gap="10px">
                <ButtonCard text="edit" bgColor="blue.800" textColor="gray.200"/>
                <ButtonCard text="delete"  bgColor="red.400"/>
              </Flex>
              <Flex flexDir="column" mt="1.25rem" gap=".5rem">
                <Heading as="h1">{data.name}</Heading>
                <Text as="h2">{data.email}</Text>
              </Flex>
              <Text mt="2rem" color="gray.500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, sequi.</Text>
            </ListItem>
          ))}
        </List>
      </Box>
    </Grid>
  );
};

export default UserPage;
