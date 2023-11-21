import { HStack, Text } from "@chakra-ui/react";
import { BrandLogo } from "../../assets/icons";
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
  return (
    <HStack
      p="24px 40px 24px 40px"
      borderBottom="1px solid #0000001F"
      spacing="56px"
    >
      <BrandLogo />
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
        >
          <Link to="#" onClick={() => scrollToSection("about")}>
            عن المبادرة
          </Link>
        </Text>
        <Text
          borderBottom="3px solid transparent"
          _hover={{ color: "primary", borderColor: "primary" }}
          cursor="pointer"
          transition="0.3s"
          lineHeight="2"
        >
          <Link to="#" onClick={() => scrollToSection("goals")}>
            أهداف المبادرة
          </Link>
        </Text>
      </HStack>
    </HStack>
  );
};

export default Navbar;
