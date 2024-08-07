import {
  Box,
  Button as ChakraButton,
  ButtonProps as ChakraButtonProps,
  Link as ChakraLink,
  Flex,
  Image,
} from "@chakra-ui/react";
import { ReactNode } from "react";
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

interface ButtonCardProps extends ChakraButtonProps{
  text: ReactNode,
  bgColor: string,
  textColor?: string,
  onClick?: () => void
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

export const ButtonCard = ({text, bgColor, textColor, onClick}: ButtonCardProps) => {
  return (
    <ChakraButton bgColor={bgColor} color={textColor} onClick={onClick} _hover={{filter: "brightness(0.8)"}}>
      {text}
    </ChakraButton>
  )
}
