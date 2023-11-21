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
import { FaHeart } from "react-icons/fa";
import { FaChildReaching } from "react-icons/fa6";

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
          {/* <VStack
            spacing="12px"
            align="stretch"
            w="100%"
            fontFamily="Readex Pro"
            color="white"
          > */}
          <VStack
            spacing="20px"
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
              سنبدأ العمل بمجرد أن يبدي 10 مليون عربي اهتمامهم كن منهم وابدي
              اهتمامك الآن
            </Text>
            <VStack>
              <FaHeart color="red" size="30px" />
              <Text textAlign="center" fontSize="24px" fontWeight="700">
                عدد المهتمين
              </Text>
            </VStack>

            <Text fontSize="50px" color="#5AA48A">
              {Number(5000).toLocaleString()}
            </Text>

            <HStack justifyContent="center" w="100%">
              <Button bg="#FFD21C" rounded="full" _hover={{ bg: "#D1AE21" }}>
                ابدي اهتمامك
              </Button>
            </HStack>
          </VStack>
          <Center height="350px" display={{ base: "none", lg: "flex" }}>
            <Divider
              orientation="vertical"
              borderColor="primary"
              borderWidth="5px"
              h="350px"
            />
          </Center>
          <Center height="350px" display={{ base: "flex", lg: "none" }}>
            <Divider borderColor="primary" borderWidth="5px" />
          </Center>

          <VStack
            spacing="20px"
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
              سنبدأ العمل بمجرد أن يبدي 10 مليون عربي اهتمامهم كن منهم وابدي
              اهتمامك الآن
            </Text>
            <VStack>
              <FaChildReaching color="#1DA6FF" size="30px" />
              <Text textAlign="center" fontSize="24px" fontWeight="700">
                عدد المتطوعين
              </Text>
            </VStack>

            <Text fontSize="50px" color="#5AA48A">
              {Number(5000).toLocaleString()}
            </Text>

            <HStack justifyContent="center" w="100%">
              <Button
                bg="#FFD21C"
                rounded="full"
                _hover={{ bg: "#D1AE21" }}
                onClick={() => onVOpen()}
              >
                تطوع الآن
              </Button>
            </HStack>
          </VStack>
          {/* </VStack> */}
        </HStack>
      </Box>
    </>
  );
};

export default Header;
