import { Box, HStack, Text, VStack } from "@chakra-ui/react";
import SectionTitle from "../SectionTitle";
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();
  return (
    <Box
      p={{ base: "20px", lg: "80px" }}
      id="about"
      textAlign={{ base: "center", lg: "right" }}
    >
      <SectionTitle title={t('about.title')} />
      <HStack
        mt="40px"
        fontSize="22px"
        fontFamily="Readex Pro"
        fontWeight="400"
        spacing="40px"
        lineHeight="48.4px"
        alignItems="stretch"
        flexDir={{ base: "column", lg: "row" }}
      >
        <VStack align="stretch" flex="1">
          <Text>
          {t('about.paragraph1')}
            
          </Text>
          <Text>
          {t('about.paragraph2')}
          </Text>
          <Text>
          {t('about.paragraph3')}
          </Text>
        </VStack>
        <VStack>

          <Box display="block" bg="#ddd" h="98%" w="1px" />
        </VStack>
        <VStack align="stretch" flex="1">
          <Text>
          {t('about.paragraph4')}
          </Text>
          <Text>
          {t('about.paragraph5')}
          </Text>
        </VStack>
      </HStack>
      <Text
        fontSize="22px"
        fontWeight="400"
        fontFamily="Readex Pro"
        mt="40px"
        lineHeight="48.4px"
        border="1px solid #5AA48A"
        p="5"
        rounded="10px"
      >
      {t('about.paragraph6')}
      </Text>
    </Box >
  );
};

export default About;
