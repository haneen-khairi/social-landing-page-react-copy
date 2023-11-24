import { Box, Text } from "@chakra-ui/react";
import SectionTitle from "../SectionTitle";
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();
  return (
    <>
    <Box
      bg="#F2F2F2"
      mt="80px"
      p="56px"
      display="flex"
      flexDir="column"
      alignItems="center"
    >
      <SectionTitle title={t('footer.title')} />
      <Text
        fontSize="20px"
        fontWeight="400"
        fontFamily="Readex Pro"
        w={{ base: "100%", lg: "760px" }}
        lineHeight="44px"
        textAlign="center"
      >
      {t('footer.text')}
      </Text>
    </Box>
    <Text> All Right Reserved © 2023 </Text>
    </>
  );
};

export default Footer;
