import { Box, Button, HStack, Image, Text, VStack } from "@chakra-ui/react";
import HeroImage from "../../assets/hero.png";
import ProgressComp from "../ProgressComp";
import { FaHeart } from "react-icons/fa";
import { MdGroups } from "react-icons/md";

const Header = () => {
  return (
    <Box mt="30px" px={{ base: "20px", lg: "40px" }}>
      <HStack flexDir={{ base: "column", lg: "row" }}>
        <Image
          src={HeroImage}
          maxWidth={{ base: "100%", lg: "674px" }}
          maxH="590px"
        />
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
                color="white"
                variant="outline"
                rounded="full"
                _hover={{
                  bg: "white",
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
                color="white"
                variant="outline"
                rounded="full"
                _hover={{
                  bg: "white",
                  color: "#5F2020",
                  borderColor: "#5F2020",
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
