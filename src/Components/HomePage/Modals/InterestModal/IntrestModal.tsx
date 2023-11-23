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
  useToast,
} from "@chakra-ui/react";
import { MdEmojiPeople } from "react-icons/md";
import { BsArrowLeft } from "react-icons/bs";
import { useRequestIntrest } from "../../../../hooks/useCore";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import ErrorText from "../../../ErrorText";
import IntrestInputs from "./IntrestInputs";
import IntrestSchema from "./IntrestSchema";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

function IntrestModal({ isOpen, onClose }: Props) {
  const requestIntrest = useRequestIntrest();
  const toast = useToast();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {},
    resolver: yupResolver<IntrestInputs>(IntrestSchema),
    mode: "onTouched",
    reValidateMode: "onSubmit",
  });

  const onSubmit = (values: IntrestInputs) => {
    requestIntrest
      .mutateAsync({
        email: values.email,
        name: values.name,
      })
      .then(() => {
        toast({
          title: "شكرا لاهتمامك",
          description:
            "سيتم اعلامك حين اكتمال العدد المطلوب يمكنك العودة لهذه الصفحة في اي وقت للاطلاع على اخر المستجدات",
          status: "success",
          duration: 5000,
          isClosable: true,
          position: "bottom-right",
        });
        reset();
        onClose();
      });
  };

  return (
    <Modal blockScrollOnMount={true} isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />

      <ModalContent
        rounded="30px"
        dir="ltr"
        maxW="448px"
        fontFamily="Noto Kufi Arabic"
      >
        <ModalCloseButton
          position="absolute"
          left="20px"
          top="20px"
          rounded="full"
        />

        <VStack px="40px" py="40px" align="stretch" dir="rtl">
          <VStack>
            <MdEmojiPeople size="40px" />
            <Text fontFamily="Readex Pro" fontSize="20px" fontWeight="600">
              أبدي إهتمامك
            </Text>
            {/* <Text
              fontFamily="Readex Pro"
              fontSize="16px"
              fontWeight="400"
              textAlign="center"
              color="#374151"
            >
              هذه المبادرة لكل من يجد لديه القدرة على المساهمة في تطويرها بشكل
              تطوعي كل حسب تخصصة
            </Text> */}
          </VStack>

          <form onSubmit={handleSubmit(onSubmit)}>
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
                    type="text"
                    w="100%"
                    rounded="full"
                    h="48px"
                    borderColor="#E2E8F0"
                    _focus={{
                      boxShadow: "none",
                      outline: "none",
                      borderColor: "#E2E8F0",
                    }}
                    {...register("name")}
                  />
                  {errors && errors.name && (
                    <ErrorText>{errors.name.message} </ErrorText>
                  )}
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
                    type="text"
                    w="100%"
                    rounded="full"
                    h="48px"
                    borderColor="#E2E8F0"
                    _focus={{
                      boxShadow: "none",
                      outline: "none",
                      borderColor: "#E2E8F0",
                    }}
                    {...register("email")}
                  />
                  {errors && errors.email && (
                    <ErrorText>{errors.email.message} </ErrorText>
                  )}
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
                type="submit"
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

export default IntrestModal;
