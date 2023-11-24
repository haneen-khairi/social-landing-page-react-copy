import {
  Box,
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
  Alert, AlertIcon
} from "@chakra-ui/react";
import { MdGroups } from "react-icons/md";
import { BsArrowLeft } from "react-icons/bs";
import {
  useGetCountries,
  useGetWorkFields,
  useRequestVolunteer,
} from "../../../../hooks/useCore";
import MultiSelectArea from "../../../MultiSelectArea/MultiSelectArea";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import ErrorText from "../../../ErrorText";
import VolunteerInputs from "./VolunteerInputs";
import VolunteerSchema from "./VolunteerSchema";
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

type Option = {
  id: number;
  name: string;
};

function VolunteerModal({ isOpen, onClose }: Props) {
  const {
    isOpen: isVOpen,
    onOpen: onVOpen,
    onClose: onVClose,
  } = useDisclosure();
  const { t } = useTranslation();
  const {
    isOpen: isTermsOpen,
    onOpen: onTermsOpen,
    onClose: onTermsClose,
  } = useDisclosure();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    reset,
  } = useForm({
    defaultValues: {},
    resolver: yupResolver<VolunteerInputs>(VolunteerSchema),
    mode: "onTouched",
    reValidateMode: "onSubmit",
  });
  const { data } = useGetWorkFields();
  const { data: dataCountries } = useGetCountries();

  const requestVolunteer = useRequestVolunteer();

  const onSubmit = (values: VolunteerInputs) => {
    requestVolunteer
      .mutateAsync(values)
      .then(() => {
        onVOpen();
        reset();
        onClose();
      });
  };

  const handleSelectChange = (selected: Option[]) => {
    const arrayOfIds = selected.map((obj) => obj.id);
    setValue("field_of_work", arrayOfIds as never);
  };
  const [copySuccess, setCopySuccess] = useState(false);
  const translatedText = t('intrest.text6');
  const copyToClipboard = () => {
    navigator.clipboard.writeText(translatedText);
    setCopySuccess(true);
    setTimeout(() => {
      setCopySuccess(false);
    }, 3000);
  };
  const handleSelectCountryChange = (selected: { name: string; id: number }) => {
    console.log(selected.id, "selected.id");
    setValue("country", selected.id as never);
  };
  return (
    <>
      <Modal blockScrollOnMount={true} isOpen={isVOpen} onClose={onVClose}>
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
              {t('volunteer.text2')}
              </Text>
              <Text
                fontFamily="Readex Pro"
                fontSize="16px"
                fontWeight="400"
                textAlign="center"
                color="#374151"
              >
                       {t('volunteer.text3')}
              
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
              onClick={() => onVClose()}
            >
              <HStack justifyContent="space-between" w="100%">
                <Text
                  fontFamily="Readex Pro"
                  fontWeight="500"
                  fontSize="16px"
                >
                           {t('volunteer.text4')}
 
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
              <Text
                as="button"
                onClick={copyToClipboard}
                borderBottom="3px solid transparent"
                _hover={{ color: "primary", borderColor: "primary" }}
                cursor="pointer"
                transition="0.3s"
                lineHeight="2"
                color="green"
              >
         {t('volunteer.text5')} 
              </Text>
            </Text>
          </VStack>
          {/* Copy Success Message */}
          {copySuccess && (
            <Alert status="success" variant="solid">
              <AlertIcon />
              {t('volunteer.text6')} 
            </Alert>
          )}
        </ModalContent>
      </Modal>

      <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
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
              <MdGroups size="40px" />
              <Text fontFamily="Readex Pro" fontSize="20px" fontWeight="600">
              {t('volunteer.text8')} 
              </Text>
              <Text
                fontFamily="Readex Pro"
                fontSize="16px"
                fontWeight="400"
                textAlign="center"
                color="#374151"
              >
                    {t('volunteer.text7')} 
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
                              {t('intrest.text2')} 
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
                       {t('intrest.text4')}  
                    </FormLabel>

                    <MultiSelectArea
                      option={dataCountries ? dataCountries?.data : []}
                      inputName="country"
                      placeholder="اختر دولة"
                      onChange={(e) => handleSelectCountryChange(e)}
                      isMulti={false}
                    />
                    {errors && errors.country && (
                      <ErrorText>{errors.country.message} </ErrorText>
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
                 {t('intrest.text3')}  
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
                       {t('volunteer.text9')}  
                      
                    </FormLabel>

                    <MultiSelectArea
                      option={data ? data : []}
                      inputName="ss"
                      placeholder=""
                      onChange={(e) => handleSelectChange(e)}
                      isMulti={true}
                    />
                    {errors && errors.field_of_work && (
                      <ErrorText>{errors.field_of_work.message} </ErrorText>
                    )}
                  </FormControl>
                </VStack>

                <VStack align="stretch" w="100%">
                  <Box onClick={() => onTermsOpen()}
                    color="#205F45"
                    fontFamily="Readex Pro"
                    fontWeight="500"
                    fontSize="16px"
                    cursor="pointer"
                  >
                        {t('volunteer.text10')}  
                    
                  </Box>
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
                  {t('intrest.text5')}  
                    </Text>
                    <BsArrowLeft />
                  </HStack>
                </Button>
              </VStack>
            </form>
          </VStack>
        </ModalContent>
      </Modal>


      {/* model terms */}
      <Modal blockScrollOnMount={false} isOpen={isTermsOpen} onClose={onTermsClose}>
        <ModalOverlay />

        <ModalContent
          rounded="6px"
          dir="ltr"
          maxW="900px"
          fontFamily="Noto Kufi Arabic"
        >
          <ModalCloseButton position="absolute" left="8px" top="8px" />

          <VStack px="40px" py="40px" align="stretch" dir="rtl">
            <VStack>
              {/* <MdGroups size="40px" /> */}
              <Text fontFamily="Readex Pro" fontSize="20px" fontWeight="600">
            {t('volunteer.text10')}   
              </Text>
              <Text
                fontFamily="Readex Pro"
                fontSize="16px"
                fontWeight="400"
                textAlign="center"
                color="#374151"
              >
              {t('volunteer.text11')}
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
              onClick={() => onTermsClose()}
            >
              <HStack justifyContent="space-between" w="100%">
                <Text
                  fontFamily="Readex Pro"
                  fontWeight="500"
                  fontSize="16px"
                >
                {t('volunteer.text4')}
                </Text>
                <BsArrowLeft />
              </HStack>
            </Button>

          </VStack>

        </ModalContent>
      </Modal>
      {/* model terms */}

    </>
  );
}

export default VolunteerModal;
