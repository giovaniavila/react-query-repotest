import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";

interface EditUserModalProps {
  isOpen: boolean;
  onClose: () => void;
  userId: number | null;
}

export const EditUserModal = ({ isOpen, onClose }: EditUserModalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader
          as="h1"
          fontSize="1.5rem"
          fontWeight="bold"
          display="flex"
          alignItems="baseline"
        >
          <Box
            width="12px"
            height="12px"
            borderRadius="50%"
            backgroundColor="yellow.500"
            mr="8px"
            display="inline-flex"
            alignItems="baseline"
          />
          Edit user
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <FormControl>
            <FormLabel>Name</FormLabel>
            <Input
              type="text"
              backgroundColor="gray.50"
              focusBorderColor="yellow.500"
            />
          </FormControl>
          <FormControl m="15px 0px 25px 0px">
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              backgroundColor="gray.50"
              focusBorderColor="yellow.500"
            />
          </FormControl>
        </ModalBody>
        <ModalFooter>
          <Button
            onClick={onClose}
            variant="ghost"
            textColor="red.400"
            mr="1.25rem"
          >
            Cancel
          </Button>
          <Button variant="ghost" bgColor="black.50" color="white">
            Save
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
