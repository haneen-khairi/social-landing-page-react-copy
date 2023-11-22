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
  //   useToast,
} from "@chakra-ui/react";
import { MdGroups } from "react-icons/md";
import { BsArrowLeft } from "react-icons/bs";
import { useGetWorkFields, useRequestVolunteer } from "../../../hooks/useCore";
import MultiSelectArea from "../../MultiSelectArea/MultiSelectArea";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import ErrorText from "../../ErrorText";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}
type Option = {
  id: number;
  name: string;
};
type Inputs = {
  name: string;
  email: string;
  phone_number: string;
  field_of_work: number[];
  volunteer_hours: string;
  years_of_experience: string;
  error?: string | undefined;
};

const schema = yup
  .object()
  .shape({
    name: yup.string().required("هذا الحقل إجباري"),
    email: yup.string().required("هذا الحقل إجباري"),
    phone_number: yup.string().required("هذا الحقل إجباري"),
    field_of_work: yup.array().required("هذا الحقل إجباري"),
    volunteer_hours: yup.string().required("هذا الحقل إجباري"),
    years_of_experience: yup.string().required("هذا الحقل إجباري"),
    error: yup.string(),
  })
  .required();
function VolunteerModal({ isOpen, onClose }: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    reset,
  } = useForm({
    defaultValues: {},
    resolver: yupResolver<Inputs>(schema),
    mode: "onTouched",
    reValidateMode: "onSubmit",
  });
  const { data } = useGetWorkFields();
  const requestVolunteer = useRequestVolunteer();

  const toast = useToast();
  const onSubmit = (values: Inputs) => {
    requestVolunteer
      .mutateAsync({
        email: values.email,
        name: values.name,
        field_of_work: values.field_of_work,
        phone_number: values.phone_number,
        volunteer_hours: Number(values.volunteer_hours),
        years_of_experience: Number(values.years_of_experience),
      })
      .then(() => {
        toast({
          title: "شكراً لك",
          description:
            "في حال الوصول الى العدد المنشود من المهتمين بإطلاق منظومة تواصل إجتماعي عربي قد يتم الاستعانة بعدد من المتطوعين لبناء هذه المنظومة، وحينها سيتم التواصل معك.",
          status: "success",
          duration: 5000,
          isClosable: true,
          position: "bottom-right",
        });
        reset();
        onClose();
      });
  };

  const handleSelectChange = (selected: Option[]) => {
    const arrayOfIds = selected.map((obj) => obj.id);
    setValue("field_of_work", arrayOfIds as never);
  };
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
                    رقم الهاتف
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
                    {...register("phone_number")}
                    pattern="[0-9+]*"
                    onInput={(e) => {
                      const input = e.target as HTMLInputElement;
                      input.value = input.value.replace(/[^0-9+]/g, "");
                    }}
                    dir="ltr"
                    textAlign="right"
                  />
                  {errors && errors.phone_number && (
                    <ErrorText>{errors.phone_number.message} </ErrorText>
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
                    طبيعة العمل
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
                    {...register("years_of_experience")}
                  />
                  {errors && errors.years_of_experience && (
                    <ErrorText>{errors.years_of_experience.message} </ErrorText>
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
                    عدد الساعات التطوعية للمشروع
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
                    {...register("volunteer_hours")}
                  />
                  {errors && errors.volunteer_hours && (
                    <ErrorText>{errors.volunteer_hours.message} </ErrorText>
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

export default VolunteerModal;
