import { Box, Button, HStack, Image, Text, VStack } from "@chakra-ui/react";
import HeroImage from "../../assets/hero.png";
import ProgressComp from "../ProgressComp";
import { Group, Person } from "../../assets/icons";
const Header = () => {
  return (
    <Box mt="30px" px="40px">
      <HStack>
        <Image src={HeroImage} maxWidth="674px" maxH="590px" />
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
            <Text fontSize="18px" fontWeight="600" w="428px">
              سنبدأ العمل بمجرد أن يبدي 10 مليون عربي اهتمامهم كن منهم وابدي
              اهتمامك الآن
            </Text>
            <ProgressComp title="عدد المهتمين" value="11000" range="1000000" />
            <HStack justifyContent="space-between" w="100%">
              <Person />
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
            <Text fontSize="18px" fontWeight="600" w="428px">
              هذه المبادرة لكل من يجد لديه القدرة على المساهمة في تطويرها بشكل
              تطوعي كل حسب تخصصة
            </Text>
            <ProgressComp title="عدد المتطوعين" value="567" range="1000" />
            <HStack justifyContent="space-between" w="100%">
              <Group />
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
