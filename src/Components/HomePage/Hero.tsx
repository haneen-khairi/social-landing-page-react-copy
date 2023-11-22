import {
  Box,
  Button,
  HStack,
  Text,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import ChartImage from "../../assets/chart.png";
import VolunteerModal from "./Modals/VolunteerModal/VolunteerModal";
import IntrestModal from "./Modals/InterestModal/IntrestModal";

const Hero = () => {
  const {
    isOpen: isVOpen,
    onOpen: onVOpen,
    onClose: onVClose,
  } = useDisclosure();
  const {
    isOpen: isIOpen,
    onOpen: onIOpen,
    onClose: onIClose,
  } = useDisclosure();
  return (
    <>
      <VolunteerModal isOpen={isVOpen} onClose={onVClose} />
      <IntrestModal isOpen={isIOpen} onClose={onIClose} />
      <Box
        bgImage={`url(${ChartImage})`}
        bgSize="contain"
        bgClip="content-box"
        bgPosition="center"
        bgRepeat="no-repeat"
        px="50px"
        display="flex"
        justifyContent="center"
        alignItems="center"
        fontFamily="Alexandria"
      >
        <VStack spacing="40px" py="40px">
          <Text
            fontSize="18px"
            fontWeight="700"
            fontFamily="Readex Pro"
            textAlign="center"
          >
            مرحبا بكم في لحظة فارقة في تاريخ أمتنا العربية
          </Text>
          <Text
            fontSize="30px"
            fontWeight="700"
            w={{ base: "100%", lg: "500px" }}
            textAlign="center"
            lineHeight="51.2px"
          >
            حان الوقت ليكون للعرب صوتٌ حرٌ

          </Text>
          <Text color="#5AA48A" fontSize="40px" fontWeight="700">
            كن منهم وابدي اهتمامك الآن
          </Text>
          <HStack justifyContent="center" w="100%" spacing="15px">
            <Button
              bg="#FFB326"
              rounded="full"
              color="white"
              _hover={{ bg: "#D99921" }}
              onClick={() => onIOpen()}
            >
              مهتم
            </Button>
            <Button
              bg="#FFB326"
              color="white"
              rounded="full"
              _hover={{ bg: "#D99921" }}
              onClick={() => onVOpen()}
            >
              تطوع الآن
            </Button>
          </HStack>
        </VStack>
      </Box>
    </>
  );
};

export default Hero;
