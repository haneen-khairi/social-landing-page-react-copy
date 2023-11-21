import {
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Text,
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
          <MdGroups size="40px" />
          <Text fontFamily="Readex Pro" fontSize="20px" fontWeight="600">
            أرغب بالتطوع
          </Text>
          <Text
            fontFamily="Readex Pro"
            fontSize="16px"
            fontWeight="400"
            textAlign="center"
            color="#374151"
          >
            هذه المبادرة لكل من يجد لديه القدرة على المساهمة في تطويرها بشكل
            تطوعي كل حسب تخصصة
          </Text>
          <form>
            <VStack align="stretch" w="100%">
              <FormControl>
                <FormLabel>Email address</FormLabel>
                <Input type="email" />
              </FormControl>
            </VStack>
          </form>
        </VStack>
      </ModalContent>
    </Modal>
  );
}

export default VolunteerModal;
