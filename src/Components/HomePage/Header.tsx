import { Box, Button, HStack, Text, VStack } from "@chakra-ui/react";
import HeroImage from "../../assets/hero.png";
import ProgressComp from "../ProgressComp";
import { FaHeart } from "react-icons/fa";
import { MdGroups } from "react-icons/md";
import VideoPlayer from "../VideoPlayer";

const Header = () => {
  return (
    <Box mt="30px" px={{ base: "20px", lg: "40px" }}>
      <HStack flexDir={{ base: "column", lg: "row" }}>
        <Box
          bg="black"
          w="100%"
          h={{ base: "300px", lg: "590px" }}
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
        {/* <Image
          src={HeroImage}
          maxWidth={{ base: "100%", lg: "674px" }}
          maxH="590px"
        /> */}
        <VStack
          spacing="12px"
          align="stretch"
          w="100%"
          fontFamily="Readex Pro"
          color="white"
        >
          <VStack
            spacing="40px"
            align="stretch"
            bg="secondary"
            p="16px"
            rounded="8px"
          >
            <Text
              fontSize="18px"
              fontWeight="400"
              w={{ base: "100%", lg: "428px" }}
            >
              سنبدأ العمل بمجرد أن يبدي 10 مليون عربي اهتمامهم كن منهم وابدي
              اهتمامك الآن
            </Text>
            <ProgressComp
              title="عدد المهتمين"
              value="5000"
              range="1000000"
              icon={<FaHeart />}
            />
            <HStack justifyContent="flex-end" w="100%">
              <Button
                color="#FFD21C"
                borderColor="#FFD21C"
                variant="outline"
                rounded="full"
                _hover={{
                  bg: "#FFD21C",
                  color: "secondary",
                  borderColor: "secondary",
                }}
              >
                ابدي اهتمامك
              </Button>
            </HStack>
          </VStack>
          <VStack
            spacing="40px"
            align="stretch"
            bg="#5F2020"
            p="16px"
            rounded="8px"
          >
            <Text
              fontSize="18px"
              fontWeight="400"
              w={{ base: "100%", lg: "428px" }}
            >
              هذه المبادرة لكل من يجد لديه القدرة على المساهمة في تطويرها بشكل
              تطوعي كل حسب تخصصة
            </Text>
            <ProgressComp
              title="عدد المتطوعين"
              value="567"
              range="1000"
              icon={<MdGroups size="25px" />}
            />
            <HStack justifyContent="flex-end" w="100%">
              <Button
                color="#88CEFF"
                borderColor="#88CEFF"
                variant="outline"
                rounded="full"
                _hover={{
                  bg: "#88CEFF",
                  color: "secondary",
                  borderColor: "secondary",
                }}
              >
                تطوع الآن
              </Button>
            </HStack>
          </VStack>
        </VStack>
      </HStack>
    </Box>
  );
};

export default Header;
