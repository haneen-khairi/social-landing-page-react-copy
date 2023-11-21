import {
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  VStack,
  //   useToast,
} from "@chakra-ui/react";
import { MdGroups } from "react-icons/md";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}
function VolunteerModal({ isOpen, onClose }: Props) {
  //   const toast = useToast();

  return (
    <Modal blockScrollOnMount={true} isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />

      <ModalContent
        rounded="6px"
        dir="ltr"
        maxW="448px"
        fontFamily="Noto Kufi Arabic"
      >
        <ModalCloseButton position="absolute" left="8px" top="8px" />

        <VStack px="40px" py="40px" align="center" dir="rtl">
          <MdGroups size="25px" />
          <form></form>
        </VStack>
      </ModalContent>
    </Modal>
  );
}

export default VolunteerModal;
