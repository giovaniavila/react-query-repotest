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
import { useDeleteUser } from "../../mutations/users";
import { Spinner } from '@chakra-ui/react'

const UserPage = () => {
  const { data } = useUsers();
  const { mutate: deleteUser, isPending } = useDeleteUser();

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
        <List spacing={3}>
          {data?.map((user) => (
            <ListItem
              key={user.id}
              boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;"
              p="1rem"
              borderRadius="8px"
              h="15.625rem"
            >
              <Flex gap="10px">
                <ButtonCard
                  text="edit"
                  bgColor="blue.800"
                  textColor="gray.200"
                />
                <ButtonCard
                  text={isPending ? <Spinner size="sm" /> : "delete"}
                  bgColor="red.400"
                  onClick={() => user.id != null && deleteUser(user.id)}
                />
              </Flex>
              <Flex flexDir="column" mt="1.25rem" gap=".5rem">
                <Heading as="h1">{user.name}</Heading>
                <Text as="h2">{user.email}</Text>
              </Flex>
              <Text mt="2rem" color="gray.500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque,
                sequi.
              </Text>
            </ListItem>
          ))}
        </List>
      </Box>
    </Grid>
  );
};

export default UserPage;
