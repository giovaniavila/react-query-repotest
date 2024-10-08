import {
  Box,
  Button as ChakraButton,
  ButtonProps as ChakraButtonProps,
  Link as ChakraLink,
  Flex,
  Image,
  Text,
} from "@chakra-ui/react";
import { ReactNode } from "react";
import { Link as RouterLink } from "react-router-dom";

interface ButtonProps extends ChakraButtonProps {
  text: string;
  bgcolor?: string;
}

interface ButtonLinkProps {
  href: string;
  buttonName: string;
  image?: string;
}

interface ButtonCardProps extends ChakraButtonProps {
  text: ReactNode;
  onClick?: () => void;
}

export const Button = ({ text, bgcolor, ...rest }: ButtonProps) => {
  return (
    <ChakraButton
      marginTop="5px"
      borderRadius="5px"
      backgroundColor={bgcolor}
      color="white"
      {...rest}
      _hover={{ filter: "brightness(0.8)", transition: ".3s" }}
    >
      {text}
    </ChakraButton>
  );
};

export const ButtonLink = ({
  href,
  buttonName,
  image,
  ...rest
}: ButtonLinkProps) => {
  return (
    <Box
      as={RouterLink}
      to={href}
      {...rest}
      backgroundColor="transparent"
      color="text.default"
      fontWeight="500"
    >
      <Flex alignItems="center" gap="10px">
        <Image src={image} />
        <Text
          position="relative"
          _before={{
            content: '""',
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "0%",
            height: "2px",
            backgroundColor: "yellow.500",
            transition: "width 0.3s ease-in-out",
          }}
          _hover={{
            _before: {
              width: "100%",
            },
          }}
        >
          {buttonName}
        </Text>
      </Flex>
    </Box>
  );
};

export const ButtonCard = ({ text, onClick, ...rest }: ButtonCardProps) => {
  return (
    <ChakraButton
      onClick={onClick}
      {...rest}
      _hover={{ filter: "brightness(0.8)" }}
    >
      {text}
    </ChakraButton>
  );
};
