import {
  Flex,
  FormControl,
  Input,
  FormLabel,
  Checkbox,
  Link,
} from "@chakra-ui/react";
import { Button } from "../../components/Button";

export function LoginForm() {
  return (
        <Flex flexDirection="column" gap="20px" pt="1.5rem" >
          <FormControl>
            <FormLabel htmlFor="userName">Name</FormLabel>
            <Input
              type="text"
              h="3.125rem"
              fontSize="0.875rem"
              id="userName"
              color="gray.400"
              focusBorderColor="yellow.500"
            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="password">Password</FormLabel>
            <Input
              type="password"
              h="3.125rem"
              fontSize="0.875rem"
              id="password"
              placeholder="Enter your password"
              focusBorderColor="yellow.500"
            />
          </FormControl>
          <Flex justifyContent="space-between" marginTop="0.8125rem">
            <Checkbox defaultChecked colorScheme="yellow" size="sm">
              Do you want to save the password?
            </Checkbox>
            <Link fontWeight="600" color="red.400" fontSize="0.8125rem">
              Forgot the password?
            </Link>
          </Flex>
          <Button text="Login" h="3.125rem" bgColor="black.50"/>
        </Flex>
  );
}
