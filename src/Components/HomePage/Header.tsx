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
        <HStack w="100%" display="flex" alignItems="center" justifyContent="space-between">
          <HStack justifyContent="center" w="33%">
            <Button
              bg="#194430 "
              rounded="full"
              color="white"
              _hover={{ opacity: "0.8" }}
              fontSize="20px"
              p="20px 50px 26px"
              onClick={() => onIOpen()}
            >
              مهتم
            </Button>
          </HStack>
          <Box textAlign="center" >
            <Text
              fontFamily="Alexandria"
              fontSize="15px"
              fontWeight="600"
              mb="10px"
            >
              باقي على الإستطلاع
            </Text>
            <HStack dir="ltr">
              <Box textAlign="center">
                <Box
                  bg="primary"
                  p="4"
                  rounded="5px"
                  color="white"
                  fontWeight="700"
                >
                  {days}
                </Box>
                <Text fontFamily="Alexandria">يوم</Text>
              </Box>
              <Text fontSize="20px" pb="4">
                :
              </Text>
              <Box textAlign="center">
                <Box
                  bg="primary"
                  p="4"
                  rounded="5px"
                  color="white"
                  fontWeight="700"
                >
                  {hours}
                </Box>
                <Text fontFamily="Alexandria">ساعة</Text>
              </Box>
              <Text fontSize="20px" pb="4">
                :
              </Text>
              <Box textAlign="center">
                <Box
                  bg="primary"
                  p="4"
                  rounded="5px"
                  color="white"
                  fontWeight="700"
                >
                  {minutes}
                </Box>
                <Text fontFamily="Alexandria">دقيقة</Text>
              </Box>
              {/* <Text fontSize="20px" pb="4">
              :
            </Text> */}
              <Box textAlign="center">
                {/* <Box
                bg="primary"
                p="4"
                rounded="5px"
                color="white"
                fontWeight="700"
              >
                {seconds}
              </Box>
              <Text fontFamily="Alexandria">ثانية</Text> */}
              </Box>
            </HStack>
          </Box>
          <HStack justifyContent="center" w="33%" >
            <Button
              bg="#194430 "
              color="white"
              rounded="full"
              _hover={{ opacity: "0.8" }}
              onClick={() => onVOpen()}
              fontSize="20px"
              p="20px 50px 26px"
            >
              تطوع الآن
            </Button>
          </HStack>
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
          <VStack
            spacing="30px"
            align="stretch"
            p="16px"
            rounded="8px"
            textAlign="center"
          >
            <Box>
              <Text
                fontSize="18px"
                fontWeight="400"
                w={{ base: "100%", lg: "428px" }}
                textAlign="center"
              >
                سينتهي استطلاع الرأي بعد ثلاثين يوماً من اليوم. شارك في
                الاستطلاع وابدي اهتمامك الآن
              </Text>
              <Text> كن منهم وابدي اهتمامك الآن</Text>
            </Box>

            <Text textAlign="center" fontSize="24px" fontWeight="700">
              عدد المهتمين
            </Text>

            {!isLoading && (
              <Text fontSize="50px" color="#5AA48A">
                {
                  data?.interest_count
                  // .toString()
                  // .padStart(8, "0")
                  // .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                }
              </Text>
            )}
            {isLoading && (
              <Box mx="auto">
                <CircularProgress isIndeterminate color="#5AA48A" />
              </Box>
            )}


          </VStack>

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
          >
            <VideoPlayer name="intro" thumbnail={HeroImage} url="" />
          </Box>
          {/* 
          <Center height="350px" display={{ base: "none", lg: "flex" }}>
            <Divider
              orientation="vertical"
              borderColor="primary"
              borderWidth="3px"
              h="350px"
              rounded="full"
            />
          </Center>
          <Center w="100%" display={{ base: "flex", lg: "none" }}>
            <Divider borderColor="primary" borderWidth="3px" rounded="full" />
          </Center> */}

          <VStack
            spacing="40px"
            align="stretch"
            p="16px"
            rounded="8px"
            textAlign="center"
          >
            <Text
              fontSize="18px"
              fontWeight="400"
              w={{ base: "100%", lg: "428px" }}
              textAlign="center"
            >
              هل أنت على استعداد للتطوع في حال تقرر إنشاء منظومة تواصل اجتماعي
              عربي؟
            </Text>

            <Text textAlign="center" fontSize="24px" fontWeight="700">
              عدد المتطوعين
            </Text>

            {!isLoading && (
              <Text fontSize="50px" color="#5AA48A">
                {
                  data?.volunteer_count
                  // .toString()
                  // .padStart(5, "0")
                  // .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                }
              </Text>
            )}
            {isLoading && (
              <Box mx="auto">
                <CircularProgress isIndeterminate color="#5AA48A" />
              </Box>
            )}


          </VStack>
        </HStack>
      </Box>
    </>
  );
};

export default Header;
