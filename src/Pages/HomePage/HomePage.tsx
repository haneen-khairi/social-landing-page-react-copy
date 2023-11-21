import { VStack } from "@chakra-ui/react";
import Navbar from "../../Components/HomePage/Navbar";
import Hero from "../../Components/HomePage/Hero";

const HomePage = () => {
  return (
    <VStack align="stretch" dir="rtl">
      <Navbar />
      <Hero />
    </VStack>
  );
};

export default HomePage;
