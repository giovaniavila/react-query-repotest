import {
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
  userId: number | null; // Ajuste para número ou null
}

export const EditUserModal = ({ isOpen, onClose }: EditUserModalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Edit User</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <FormControl>
            <FormLabel>Name</FormLabel>
            <Input
              type="text"
              backgroundColor="gray.50"
            />
          </FormControl>
          <FormControl>
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              backgroundColor="gray.50"
            />
          </FormControl>
        </ModalBody>

        <ModalFooter>
          <Button onClick={onClose} variant="ghost" colorScheme="red">
            Exit
          </Button>
          <Button variant="ghost" colorScheme="blue">
            Save
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
