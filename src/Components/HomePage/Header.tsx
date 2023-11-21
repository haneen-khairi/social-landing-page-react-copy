import {
  Box,
  Button,
  Center,
  Divider,
  HStack,
  Text,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import HeroImage from "../../assets/hero.png";

import VideoPlayer from "../VideoPlayer";
import VolunteerModal from "./Modals/VolunteerModal";

const Header = () => {
  const {
    isOpen: isVOpen,
    onOpen: onVOpen,
    onClose: onVClose,
  } = useDisclosure();
  return (
    <>
      <VolunteerModal isOpen={isVOpen} onClose={onVClose} />
      <Box mt="30px" px={{ base: "20px", lg: "40px" }}>
        <HStack
          flexDir={{ base: "column", lg: "row" }}
          spacing="12px"
          align="stretch"
          w="100%"
          fontFamily="Readex Pro"
          color="black"
        >
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
                سنبدأ العمل بمجرد أن يبدي 23 مليون عربي (5% من عدد سكان العالم
                العربي) اهتمامهم.
              </Text>
              <Text> كن منهم وابدي اهتمامك الآن</Text>
            </Box>

            <Text textAlign="center" fontSize="24px" fontWeight="700">
              عدد المهتمين
            </Text>

            <Text fontSize="50px" color="#5AA48A">
              {Number(5000).toLocaleString()}
            </Text>

            <HStack justifyContent="center" w="100%">
              <Button
                bg="#FFB326"
                rounded="full"
                color="white"
                _hover={{ bg: "#D99921" }}
              >
                مهتم
              </Button>
            </HStack>
          </VStack>
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
          </Center>

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
              هذه المبادرة لكل من يجد لديه القدرة على المساهمة في تطويرها بشكل
              تطوعي كل حسب تخصصة
            </Text>

            <Text textAlign="center" fontSize="24px" fontWeight="700">
              عدد المتطوعين
            </Text>

            <Text fontSize="50px" color="#5AA48A">
              {Number(567).toLocaleString()}
            </Text>

            <HStack justifyContent="center" w="100%">
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
        </HStack>
      </Box>
    </>
  );
};

export default Header;
