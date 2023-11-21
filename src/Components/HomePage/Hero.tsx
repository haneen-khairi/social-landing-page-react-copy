import { Box, Button, HStack, Text, VStack } from "@chakra-ui/react";
import ChartImage from "../../assets/chart.png";

const Hero = () => {
  return (
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
          fontSize="32px"
          fontWeight="700"
          w={{ base: "100%", lg: "595px" }}
          textAlign="center"
          lineHeight="51.2px"
        >
          حان الوقت ليكون للعرب صوتٌ حرٌ سنبدأ العمل بمجرد أن يبدي{" "}
          <Text
            as="span"
            color="#5AA48A"
            display="inline-block"
            fontSize="40px"
          >
            23
          </Text>{" "}
          مليون عربي اهتمامهم.
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
          >
            ابدي اهتمامك
          </Button>
          <Button
            bg="#FFB326"
            color="white"
            rounded="full"
            _hover={{ bg: "#D99921" }}
          >
            تطوع الآن
          </Button>
        </HStack>
      </VStack>
    </Box>
  );
};

export default Hero;
