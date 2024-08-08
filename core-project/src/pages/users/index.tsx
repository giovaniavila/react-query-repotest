import {
  Grid,
  Box,
  List,
  ListItem,
  Heading,
  Text,
  Flex,
  useDisclosure,
} from "@chakra-ui/react";
import Sidebar from "../../components/sidebar";
import { useUsers } from "../../queries/useUsers";
import { ButtonCard } from "../../components/Button";
import { useDeleteUser } from "../../mutations/users";
import { Spinner } from "@chakra-ui/react";
import { EditUserModal } from "./modals/editUserModal";
import { useState } from "react";

const UserPage = () => {
  const { data } = useUsers();
  const { mutate: deleteUser, isPending } = useDeleteUser();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedUserId, setSelectedUserId] = useState<number | null>(null);

  const handleEditClick = (userId: number) => {
    setSelectedUserId(userId);
    onOpen();
  };
  
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
                  onClick={() => user.id != null && handleEditClick(user.id)}
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
      <EditUserModal isOpen={isOpen} onClose={onClose} userId={selectedUserId}/>
    </Grid>
  );
};

export default UserPage;
