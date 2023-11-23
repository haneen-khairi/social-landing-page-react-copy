import { Box, HStack, Spacer, Text } from "@chakra-ui/react";
// import { BrandLogo } from "../../assets/icons";
import { Link } from "react-router-dom";
import Countdown from "react-countdown";

interface CountdownRendererProps {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  completed: boolean;
}

const Navbar = () => {
  const targetDate = new Date("December 24, 2023 23:59:59");
  const renderer: React.FC<CountdownRendererProps> = ({ days, completed }) => {
    if (completed) {
      // Render something when the countdown is complete
      return <span>اكتمل الاستطلاع</span>;
    } else {
      // Render the countdown components
      return (
        <Box px="3" bg="#FFBD38" rounded="20px" color="white">
          <Text fontFamily="Alexandria" fontSize="18px">
            باقي على الإستطلاع{" "}
            <Text as="span" color="#A538FF" fontSize="35px">
              {days}
            </Text>{" "}
            يوم
          </Text>
        </Box>
      );
    }
  };
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
      spacing="24px"
      flexWrap="wrap"
      justifyContent={{ base: "center", lg: "flex-start" }}
    >
      {/* <BrandLogo /> */}
      <Text fontSize="30px" fontFamily="Alexandria" fontWeight="600">
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
          <Link to="#">عن الإستطلاع</Link>
        </Text>
        <Text
          borderBottom="3px solid transparent"
          _hover={{ color: "primary", borderColor: "primary" }}
          cursor="pointer"
          transition="0.3s"
          lineHeight="2"
          onClick={() => scrollToSection("goals")}
        >
          <Link to="#">أهداف الإستطلاع</Link>
        </Text>
        <Text
          borderBottom="3px solid transparent"
          _hover={{ color: "primary", borderColor: "primary" }}
          cursor="pointer"
          transition="0.3s"
          lineHeight="2"
          onClick={() => scrollToSection("sponsors")}
        >
          <Link to="#">الداعمون الإعلاميون</Link>
        </Text>
      </HStack>
      <Spacer />
      <Countdown date={targetDate} renderer={renderer} />
    </HStack>
  );
};

export default Navbar;
