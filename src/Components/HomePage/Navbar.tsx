import { Box, HStack, Select, Spacer, Text } from "@chakra-ui/react";
// import { BrandLogo } from "../../assets/icons";
import { Link } from "react-router-dom";

const Navbar = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
    }
  };
  const changeLanguage = (language: string) => {
    // Implement language change logic here
    // You can use a state management solution or other mechanisms
    console.log(`Language changed to ${language}`);
  };
  return (
    <HStack
      p="24px 40px 24px 40px"
      borderBottom="1px solid #0000001F"
      spacing="24px"
      flexWrap="wrap"
      justifyContent={{ base: "center", lg: "flex-start" }}
    >
      {/* <BrandLogo /> */}
      <Text
        as={Link}
        to="/"
        fontSize="30px"
        fontFamily="Alexandria"
        fontWeight="600"
      >
        البوصلة
      </Text>
      <HStack
        spacing="32px"
        fontFamily="Readex Pro"
        fontSize="17px"
        fontWeight="400"
      >
        <Text
          borderBottom="3px solid transparent"
          _hover={{ color: "primary", borderColor: "primary" }}
          cursor="pointer"
          transition="0.3s"
          lineHeight="2"
          onClick={() => scrollToSection("about")}
        >
          <Link to="/">عن الإستطلاع</Link>
        </Text>
        <Text
          borderBottom="3px solid transparent"
          _hover={{ color: "primary", borderColor: "primary" }}
          cursor="pointer"
          transition="0.3s"
          lineHeight="2"
          onClick={() => scrollToSection("goals")}
        >
          <Link to="/">أهداف الإستطلاع</Link>
        </Text>
        <Text
          borderBottom="3px solid transparent"
          _hover={{ color: "primary", borderColor: "primary" }}
          cursor="pointer"
          transition="0.3s"
          lineHeight="2"
          onClick={() => scrollToSection("sponsors")}
        >
          <Link to="/">الداعمون الإعلاميون</Link>
        </Text>
        <Text
          borderBottom="3px solid transparent"
          _hover={{ color: "primary", borderColor: "primary" }}
          cursor="pointer"
          transition="0.3s"
          lineHeight="2"
          onClick={() => scrollToSection("sponsors")}
        >
          <Link to="/statistics">الإحصائيات</Link>
        </Text>
        
      </HStack>
      <Spacer />

      {/* Mulit Language Setup */}
      <Box dir="ltr">
      <Text
      ml={1} mr={1}
          as="button"
          onClick={() => changeLanguage("arabic")}
          borderBottom="3px solid transparent"
          _hover={{ color: "primary", borderColor: "primary" }}
          cursor="pointer"
          transition="0.3s"
          lineHeight="2"
        >
          العربية
        </Text>
        <Text
        ml={1} mr={1}
          as="button"
          onClick={() => changeLanguage("english")}
          borderBottom="3px solid transparent"
          _hover={{ color: "primary", borderColor: "primary" }}
          cursor="pointer"
          transition="0.3s"
          lineHeight="2"
        >
          English
        </Text>
        <Text
        ml={1} mr={1}
          as="button"
          onClick={() => changeLanguage("spanish")}
          borderBottom="3px solid transparent"
          _hover={{ color: "primary", borderColor: "primary" }}
          cursor="pointer"
          transition="0.3s"
          lineHeight="2"
        >
          Español
        </Text>
        <Text
          ml={1} mr={1}
          as="button"
          onClick={() => changeLanguage("french")}
          borderBottom="3px solid transparent"
          _hover={{ color: "primary", borderColor: "primary" }}
          cursor="pointer"
          transition="0.3s"
          lineHeight="2"
        >
          Français
        </Text>
      </Box>
      {/* Mulit Language Setup */}
    </HStack>
  );
};

export default Navbar;
