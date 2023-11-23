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
  useDisclosure,
} from "@chakra-ui/react";
import { MdEmojiPeople, MdGroups } from "react-icons/md";
import { BsArrowLeft } from "react-icons/bs";
import { useGetCountries, useRequestIntrest } from "../../../../hooks/useCore";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import ErrorText from "../../../ErrorText";
import IntrestInputs from "./IntrestInputs";
import IntrestSchema from "./IntrestSchema";
import MultiSelectArea from "../../../MultiSelectArea/MultiSelectArea";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}



function IntrestModal({ isOpen, onClose }: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    reset,
  } = useForm({
    defaultValues: {},
    resolver: yupResolver<IntrestInputs>(IntrestSchema),
    mode: "onTouched",
    reValidateMode: "onSubmit",
  });

  const { data } = useGetCountries();

  const handleSelectChange = (selected: { name: string; id: number }) => {
    // const arrayOfIds = selected.map((obj) => obj.id);
    console.log(selected.id, "selected.id");
    setValue("country", selected.id as never);
  };

  const {
    isOpen: isIOpen,
    onOpen: onIOpen,
    onClose: onIClose,
  } = useDisclosure();

  const requestIntrest = useRequestIntrest();

  const onSubmit = (values: IntrestInputs) => {
    requestIntrest
      .mutateAsync({
        email: values.email,
        name: values.name,
        country: values.country,
      })
      .then(() => {
        onIOpen();
        reset();
        onClose();
      });
  };

  return (
    <>
      <Modal blockScrollOnMount={true} isOpen={isIOpen} onClose={onIClose}>
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
                شكرا لاهتمامك
              </Text>
              <Text
                fontFamily="Readex Pro"
                fontSize="16px"
                fontWeight="400"
                textAlign="center"
                color="#374151"
              >

                سيتم اعلامك حين اكتمال العدد المطلوب يمكنك العودة لهذه الصفحة في اي وقت للاطلاع على اخر المستجدات
              </Text>
            </VStack>

            <Button
              rounded="full"
              h="48px"
              bgGradient="linear(to-r, #282828, #205F45)"
              _hover={{
                bgGradient: "linear(to-r, #282828, #205F45)",
              }}
              color="white"
              type="button"
              mt="30px"
              onClick={() => onIClose()}
            >
              <HStack justifyContent="space-between" w="100%">
                <Text
                  fontFamily="Readex Pro"
                  fontWeight="500"
                  fontSize="16px"
                >
                  إغلاق
                </Text>
                <BsArrowLeft />
              </HStack>
            </Button>

          </VStack>

        </ModalContent>
      </Modal>

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
                <VStack align="stretch" w="100%">
                  <FormControl w="100%">
                    <FormLabel
                      fontFamily="Readex Pro"
                      fontSize="14px"
                      fontWeight="400"
                      mb="12px"
                      color="#374151"
                    >
                      الدولة
                    </FormLabel>

                    <MultiSelectArea
                      option={data ? data?.data : []}
                      inputName="countries"
                      placeholder="اختر دولة"
                      onChange={(e) => handleSelectChange(e)}
                      isMulti={false}
                    />
                    {errors && errors.country && (
                      <ErrorText>{errors.country.message} </ErrorText>
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
    </>
  );
}

export default IntrestModal;
