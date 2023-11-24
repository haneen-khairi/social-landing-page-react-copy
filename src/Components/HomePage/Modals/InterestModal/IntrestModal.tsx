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
  Alert,
  AlertIcon,
  Icon,
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
import { useState } from "react";
import { FaFacebook, FaTwitter, FaCopy } from "react-icons/fa"; // Import icons from react-icons library

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
    requestIntrest.mutateAsync(values).then(() => {
      onIOpen();
      reset();
      onClose();
    });
  };
  const [copySuccess, setCopySuccess] = useState(false);

  const shareOnFacebook = () => {
    // Implement Facebook sharing logic here
    // You may use the Facebook SDK or create a custom sharing URL
    console.log("Share on Facebook:", currentURL);
  };

  const shareOnTwitter = () => {
    // Implement Twitter sharing logic here
    // You may use the Twitter API or create a custom sharing URL
    console.log("Share on Twitter:", currentURL);
  };
  const copyToClipboard = () => {
    navigator.clipboard.writeText(
      "انا مهتم بإطلاق منظومة تواصل اجتماعي عربي نحو صوت عربي حر شارك. شارك بالإستطلاع الآن www.albusalah.com أبدي اهتمامك"
    );
    setCopySuccess(true);

    // Hide the message after 3 seconds (adjust as needed)
    setTimeout(() => {
      setCopySuccess(false);
    }, 3000);
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
                سيتم اعلامك حين اكتمال العدد المطلوب يمكنك العودة لهذه الصفحة في
                اي وقت للاطلاع على اخر المستجدات
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
                <Text fontFamily="Readex Pro" fontWeight="500" fontSize="16px">
                  إغلاق
                </Text>
                <BsArrowLeft />
              </HStack>
            </Button>
            <Text
              mt={4}
              fontFamily="Readex Pro"
              fontSize="16px"
              fontWeight="400"
              textAlign="center"
              color="#374151"
            >
              <HStack
                borderTop="1px solid #0000001F"
                spacing={{ base: "12px", lg: "20px" }}
                flexWrap="wrap"
                justifyContent={{ base: "center", lg: "center" }}
                pt={5}
                mb={-5}
              >
                <Text as="button" onClick={copyToClipboard}>
                  <Icon
                    as={FaFacebook}
                    color="green"
                    pb={1}
                    _hover={{ color: "primary", borderColor: "primary" }}
                    borderBottom="3px solid transparent"
                    onClick={shareOnFacebook}
                    cursor="pointer"
                    boxSize="24px"
                  />
                </Text>
                <Text as="button" onClick={copyToClipboard}>
                  <Icon
                    as={FaTwitter}
                    color="green"
                    pb={1}
                    _hover={{ color: "primary", borderColor: "primary" }}
                    borderBottom="3px solid transparent"
                    onClick={shareOnTwitter}
                    cursor="pointer"
                    boxSize="24px"
                  />
                </Text>
                <Text as="button" onClick={copyToClipboard}>
                  <Icon
                    pb={1}
                    borderBottom="3px solid transparent"
                    _hover={{ color: "primary", borderColor: "primary" }}
                    cursor="pointer"
                    transition="0.3s"
                    color="green"
                    as={FaCopy}
                    boxSize="24px"
                  />
                </Text>
              </HStack>
            </Text>
            {copySuccess && (
              <Alert
                status="success"
                variant="subtle"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                textAlign="center"
                color="green"
              >
                <AlertIcon boxSize="4" />
                انا مهتم بإطلاق منظومة تواصل اجتماعي عربي نحو صوت عربي حر شارك.
                شارك بالإستطلاع الآن www.albusalah.com أبدي اهتمامك
              </Alert>
            )}
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
