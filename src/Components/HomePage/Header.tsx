import {
  Box,
  Button,
  // Center,
  CircularProgress,
  // Divider,
  HStack,
  Text,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import HeroImage from "../../assets/hero.png";
import { ArrowBackIcon } from '@chakra-ui/icons';
import VideoPlayer from "../VideoPlayer";
import VolunteerModal from "./Modals/VolunteerModal/VolunteerModal";
import { useGetStatistics } from "../../hooks/useCore";
import IntrestModal from "./Modals/InterestModal/IntrestModal";
import Countdown from "react-countdown";

interface CountdownRendererProps {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  completed: boolean;
}

const Header = () => {
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
  const targetDate = new Date("December 24, 2023 23:59:59");
  const renderer: React.FC<CountdownRendererProps> = ({
    days,
    hours,
    minutes,
    // seconds,
    completed,
  }) => {
    if (completed) {
      // Render something when the countdown is complete
      return <span>اكتمل الاستطلاع</span>;
    } else {
      // Render the countdown components
      return (
        <HStack w="100%" display="flex" className="wrap-responsive" alignItems="center" justifyContent="center" gap={5}>
          <Box className="d-flex-center" justifyContent="center" w={{ sm: "100%", md: "100%" }} h="100%" >
            <VStack
              className="box-styles"
              spacing="30px"
              align="stretch"
              p="16px"
              rounded="8px"
              textAlign="center"
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              
            >
              <Box className="d-flex-center" justifyContent="center" w="100%">
                <Button
                  bgGradient='linear(to-l, #194430, #194564)'
                  rounded="full"
                  color="white"
                  _hover={{ boxShadow: "1px 1px 10px #000" }}
                  fontSize="29px"
                  p="30px"
                  onClick={() => onIOpen()}
                  rightIcon={<ArrowBackIcon />}
                  className="button-width"
                >
                  مهتم
                </Button>
              </Box>
              <Box>
                <Text
                  fontSize="29px"
                  fontWeight="800"
                  w={{ base: "100%", lg: "428px" }}
                  textAlign="center"
                >
                  سينتهي استطلاع الرأي بعد ثلاثين يوماً.
                  <br />
                  شارك في
                  الاستطلاع وابدي اهتمامك الآن
                </Text>
              </Box>

              <Text textAlign="center" fontSize="30px" fontWeight="700">
                عدد المهتمين
              </Text>

              {!isLoading && (
                <Text fontSize="70px" fontWeight={700} color="#5AA48A">
                  {
                    data?.interest_count
                  }
                </Text>
              )}
              {isLoading && (
                <Box mx="auto">
                  <CircularProgress isIndeterminate color="#5AA48A" />
                </Box>
              )}


            </VStack>
          </Box>
          <Box className="d-flex-center" textAlign="center" justifyContent="center" w={{ sm: "100%", md: "100%" }} >
            <Text
              fontFamily="Alexandria"
              fontSize="15px"
              fontWeight="600"
              mb="10px"
            >
              باقي على الإستطلاع
            </Text>
            <HStack dir="ltr" display="flex" justifyContent="space-between" >
              <Box textAlign="center">
                <Box
                  bg="primary"
                  p="2"
                  ml={2}
                  mr={2}
                  rounded="5px"
                  color="white"
                  fontWeight="700"
                  fontSize={30}
                  w="80px"
                >
                  {days}
                </Box>
                <Text fontFamily="Alexandria">يوم</Text>
              </Box>
              <Text fontSize="20px"  ml={2}
                  mr={2} pb="4">
                :
              </Text>
              <Box textAlign="center">
                <Box
                  bg="primary"
                  p="2"
                  ml={2}
                  mr={2}
                  fontSize={30}
                  rounded="5px"
                  color="white"
                  fontWeight="700"
                  w="80px"
                >
                  {hours}
                </Box>
                <Text fontFamily="Alexandria">ساعة</Text>
              </Box>
              <Text fontSize="20px" ml={2}
                  mr={2} pb="4">
                :
              </Text>
              <Box textAlign="center">
                <Box
                  bg="primary"
                  p="2"
                  ml={2}
                  mr={2}
                  fontSize={30}
                  rounded="5px"
                  w="80px"
                  color="white"
                  fontWeight="700"
                >
                  {minutes}
                </Box>
                <Text fontFamily="Alexandria">دقيقة</Text>
              </Box>
            </HStack>
            <Box
              bg="black"
              w="100%"
              h={{ base: "300px", lg: "350px" }}
              position="relative"
              rounded="8px"
              display="flex"
              justifyContent="center"
              alignItems="center"
              _hover={{
                ".circle": { bg: "primary", transition: "0.3s" },
                ".icon": { color: "white", transition: "0.3s" },
              }}
              transition="0.3s"
              cursor="pointer"
              mt={4}
            >

              <VideoPlayer name="intro" thumbnail={HeroImage} url="" />
            </Box>
          </Box>
          <Box className="d-flex-center" justifyContent="center" w={{ sm: "100%", md: "100%" }} >
            <VStack
              spacing="40px"
              align="stretch"
              p="16px"
              rounded="8px"
              display="flex"
              flexDirection="column"
              textAlign="center"
              alignItems="center"
              justifyContent="center"
              className="box-styles2"
            >
              <Box className="d-flex-center" justifyContent="center" w="100%">
                <Button
                  bgGradient='linear(to-l, #194430, #194564)'
                  className="button-width"
                  color="white"
                  rounded="full"
                  _hover={{ boxShadow: "1px 1px 10px #000" }}
                  onClick={() => onVOpen()}
                  fontSize="29px"
                  p="30px"
                  rightIcon={<ArrowBackIcon />}
                >
                  تطوع الآن
                </Button>
              </Box>
              <Text
                fontSize="29px"
                fontWeight="800"
                w={{ base: "100%", lg: "428px" }}
                textAlign="center"
              >
                هل أنت على استعداد للتطوع في حال تقرر إنشاء منظومة تواصل اجتماعي
                عربي؟
              </Text>

              <Text textAlign="center" fontSize="30px" fontWeight="700">
                عدد المتطوعين
              </Text>

              {!isLoading && (
                <Text fontSize="70px" fontWeight={700} color="#5AA48A">
                  {
                    data?.volunteer_count
                  }
                </Text>
              )}
              {isLoading && (
                <Box mx="auto">
                  <CircularProgress isIndeterminate color="#5AA48A" />
                </Box>
              )}


            </VStack>
          </Box>
        </HStack>
      );
    }
  };

  const { data, isLoading } = useGetStatistics();
  return (
    <>
      <VolunteerModal isOpen={isVOpen} onClose={onVClose} />
      <IntrestModal isOpen={isIOpen} onClose={onIClose} />

      <Box mt="30px" px={{ base: "20px", lg: "40px" }}>

        <VStack mb="24px">
          <Countdown date={targetDate} renderer={renderer} />
        </VStack>
        <HStack
          flexDir={{ base: "column", lg: "row" }}
          spacing="12px"
          align="stretch"
          w="100%"
          fontFamily="Readex Pro"
          color="black"
        >






        </HStack>
      </Box>
    </>
  );
};

export default Header;
