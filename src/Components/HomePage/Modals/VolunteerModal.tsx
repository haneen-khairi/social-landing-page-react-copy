import {
  Button,
  FormControl,
  FormLabel,
  HStack,
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
import { BsArrowLeft } from "react-icons/bs";
import { useGetWorkFields } from "../../../hooks/useCore";
import MultiSelectArea from "../../MultiSelectArea/MultiSelectArea";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}
function VolunteerModal({ isOpen, onClose }: Props) {
  const { data } = useGetWorkFields();
  console.log(data);
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

        <VStack px="40px" py="40px" align="stretch" dir="rtl">
          <VStack>
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
          </VStack>

          <form>
            <VStack align="stretch" spacing="24px">
              <VStack align="stretch" w="100%">
                <FormControl w="100%">
                  <FormLabel
                    fontFamily="Readex Pro"
                    fontSize="14px"
                    fontWeight="400"
                    mb="12px"
                    color="#374151"
                  >
                    الإسم
                  </FormLabel>
                  <Input
                    type="email"
                    w="100%"
                    rounded="full"
                    h="48px"
                    borderColor="#E2E8F0"
                    _focus={{
                      boxShadow: "none",
                      outline: "none",
                      borderColor: "#E2E8F0",
                    }}
                  />
                </FormControl>
              </VStack>
              <VStack align="stretch" w="100%">
                <FormControl w="100%">
                  <FormLabel
                    fontFamily="Readex Pro"
                    fontSize="14px"
                    fontWeight="400"
                    mb="12px"
                    color="#374151"
                  >
                    البريد الإلكتروني
                  </FormLabel>
                  <Input
                    type="email"
                    w="100%"
                    rounded="full"
                    h="48px"
                    borderColor="#E2E8F0"
                    _focus={{
                      boxShadow: "none",
                      outline: "none",
                      borderColor: "#E2E8F0",
                    }}
                  />
                </FormControl>
              </VStack>
              <VStack align="stretch" w="100%">
                <FormControl w="100%">
                  <FormLabel
                    fontFamily="Readex Pro"
                    fontSize="14px"
                    fontWeight="400"
                    mb="12px"
                    color="#374151"
                  >
                    طبيعة العمل
                  </FormLabel>

                  <MultiSelectArea
                    option={data ? data : []}
                    inputName="ss"
                    placeholder=""
                    onChange={() => {}}
                    isMulti={true}
                  />
                </FormControl>
              </VStack>
              <VStack align="stretch" w="100%">
                <FormControl w="100%">
                  <FormLabel
                    fontFamily="Readex Pro"
                    fontSize="14px"
                    fontWeight="400"
                    mb="12px"
                    color="#374151"
                  >
                    عدد سنوات الخبرة
                  </FormLabel>
                  <Input
                    type="email"
                    w="100%"
                    rounded="full"
                    h="48px"
                    borderColor="#E2E8F0"
                    _focus={{
                      boxShadow: "none",
                      outline: "none",
                      borderColor: "#E2E8F0",
                    }}
                  />
                </FormControl>
              </VStack>
              <VStack align="stretch" w="100%">
                <FormControl w="100%">
                  <FormLabel
                    fontFamily="Readex Pro"
                    fontSize="14px"
                    fontWeight="400"
                    mb="12px"
                    color="#374151"
                  >
                    عدد الساعات التطوعية للمشروع
                  </FormLabel>
                  <Input
                    type="email"
                    w="100%"
                    rounded="full"
                    h="48px"
                    borderColor="#E2E8F0"
                    _focus={{
                      boxShadow: "none",
                      outline: "none",
                      borderColor: "#E2E8F0",
                    }}
                  />
                </FormControl>
              </VStack>
              <Button
                rounded="full"
                h="48px"
                bgGradient="linear(to-r, #282828, #205F45)"
                _hover={{
                  bgGradient: "linear(to-r, #282828, #205F45)",
                }}
                color="white"
              >
                <HStack justifyContent="space-between" w="100%">
                  <Text
                    fontFamily="Readex Pro"
                    fontWeight="500"
                    fontSize="16px"
                  >
                    إرسال
                  </Text>
                  <BsArrowLeft />
                </HStack>
              </Button>
            </VStack>
          </form>
        </VStack>
      </ModalContent>
    </Modal>
  );
}

export default VolunteerModal;
