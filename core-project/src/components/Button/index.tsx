import {
  Box,
  Button as ChakraButton,
  ButtonProps as ChakraButtonProps,
  Link as ChakraLink,
  Flex,
  Image,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

interface ButtonProps extends ChakraButtonProps {
  text: string;
  bgcolor: string;
}

interface ButtonLinkProps {
  href: string;
  buttonName: string;
  image?: string;
}

interface ButtonCardProps {
  text: string,
  bgColor: string,
  textColor?: string,
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
      _hover={{ filter: "brightness(0.8)", transition: ".3s" }}
    >
      <Flex alignItems="center" gap="10px">
        <Image src={image} />
        {buttonName}
      </Flex>
    </Box>
  );
};

export const ButtonCard = ({text, bgColor, textColor}: ButtonCardProps) => {
  return (
    <ChakraButton bgColor={bgColor} color={textColor} _hover={{filter: "brightness(0.8)"}}>
      {text}
    </ChakraButton>
  )
}
