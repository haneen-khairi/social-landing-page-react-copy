import { VStack } from "@chakra-ui/react";
import Navbar from "../../Components/HomePage/Navbar";
import Header from "../../Components/HomePage/Header";
import Hero from "../../Components/HomePage/Hero";
import About from "../../Components/HomePage/About";

const HomePage = () => {
  return (
    <VStack align="stretch" dir="rtl">
      <Navbar />
      <Header />
      <Hero />
      <About />
    </VStack>
  );
};

export default HomePage;
