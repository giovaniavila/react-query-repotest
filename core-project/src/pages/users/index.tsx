import { Grid, Box, List, ListItem, Heading, Text } from "@chakra-ui/react";
import Sidebar from "../../components/sidebar";
import { useUsers } from "../../queries/useUsers";

const UserPage = () => {
  const { data } = useUsers();

  return (
    <Grid gridTemplateColumns=".2fr 1fr" h="100vh">
      <Sidebar />
      <Box>
        <List spacing={3} m="1rem 0 0 1rem">
          {data?.map((data) => (
            <ListItem key={data.id}>
              <Heading as="h1">{data.name}</Heading>
              <Text as="h2">{data.email}</Text>
            </ListItem>
          ))}
        </List>
      </Box>
    </Grid>
  );
};

export default UserPage;
