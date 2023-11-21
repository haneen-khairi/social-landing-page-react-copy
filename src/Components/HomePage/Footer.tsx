import { Box, Text } from "@chakra-ui/react";
import { EntreviableLogo } from "../../assets/icons";

const Footer = () => {
  return (
    <Box
      bg="#F2F2F2"
      mt="80px"
      p="56px"
      display="flex"
      flexDir="column"
      alignItems="center"
    >
      <EntreviableLogo />
      <Text fontWeight="700" fontSize="32px" fontFamily="Alexandria" mt="48px">
        التعريف بالمنصة الرقمية لريادة الأعمال
      </Text>
      <Text
        fontSize="20px"
        fontWeight="400"
        fontFamily="Readex Pro"
        mt="24px"
        w="760px"
        lineHeight="44px"
        textAlign="center"
      >
        شركة متخصصة في مجال تقديم الخدمات الاستشارية والتعليمية وتطوير الأعمال
        في مجال ريادة الأعمال (EntreViable) ، وهي منصة رقمية متخصصة في مجال
        تطوير ريادة الأعمال لتمكين رواد الأعمال الناطقين باللغة العربية على
        اختلاف مواقعهم، وتمتلك خبرة واسعة في مجال ريادة الأعمال وتطويـــر
        القدرات المعرفية لـــرواد الأعمال من خلال محتوى رقمي متميز. وقد تم إطلاق
        هذه المنصة من مدينة أوكسفورد البريطانية بتاريخ 24-10-2022 وسجل فيها
        لغاية الآن حوالي 200,000 رائد أعمال عربي من أكثر من 100 دولة حول العالم.
        ويرأس مجلس إدارتها معالي الدكتور معن القطامين.
      </Text>
    </Box>
  );
};

export default Footer;
