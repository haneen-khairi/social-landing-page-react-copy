import { Box, Text } from "@chakra-ui/react";
import SectionTitle from "../SectionTitle";

const Footer = () => {
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
      <SectionTitle title="عن البوصلة" />
      <Text
        fontSize="20px"
        fontWeight="400"
        fontFamily="Readex Pro"
        w={{ base: "100%", lg: "760px" }}
        lineHeight="44px"
        textAlign="center"
      >
        موقع تم انشاؤه لاستطلاع رأي المهتمين بإطلاق منظومة تواصل اجتماعي إعلامي
        عربي في ضوء ما يتعرض له صناع المحتوى، في العالم العربي والعالم الحر، من
        تحيز واضح وظالم ضد محتواهم وصفحاتهم الداعمة للحق والعدالة والمساواة
        وحقوق الإنسان من قبل مواقع تواصل عالمية.
      </Text>
    </Box>
    <Text> All Right Reserved © 2023 </Text>
    </>
  );
};

export default Footer;
