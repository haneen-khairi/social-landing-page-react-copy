import { HStack, Text } from "@chakra-ui/react";
import { BrandLogo } from "../../assets/icons";

const Navbar = () => {
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
        <Text>عن المبادرة</Text>
        <Text>أهداف المشروع</Text>
      </HStack>
    </HStack>
  );
};

export default Navbar;
