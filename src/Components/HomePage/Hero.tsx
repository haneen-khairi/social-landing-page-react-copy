import { Box, Text, VStack } from "@chakra-ui/react";
import ChartImage from "../../assets/chart.png";

const Hero = () => {
  return (
    <Box
      bgImage={`url(${ChartImage})`}
      bgSize="contain"
      bgClip="content-box"
      bgPosition="center"
      bgRepeat="no-repeat"
      h="40vh"
      px="50px"
      display="flex"
      justifyContent="center"
      alignItems="center"
      fontFamily="Alexandria"
      mt="40px"
    >
      <VStack spacing="40px">
        <Text fontSize="18px" fontWeight="700" fontFamily="Readex Pro">
          مرحبا بكم في لحظة فارقة في تاريخ أمتنا العربية
        </Text>
        <Text
          fontSize="32px"
          fontWeight="700"
          w="595px"
          textAlign="center"
          lineHeight="51.2px"
        >
          حان الوقت ليكون للعرب صوتٌ حرٌ سنبدأ العمل بمجرد أن يبدي{" "}
          <Text color="#5AA48A" display="inline-block" fontSize="40px">
            10
          </Text>{" "}
          مليون عربي اهتمامهم كن منهم وابدي اهتمامك الآن
        </Text>
      </VStack>
    </Box>
  );
};

export default Hero;
