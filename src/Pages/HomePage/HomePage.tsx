import { VStack } from "@chakra-ui/react";
import Navbar from "../../Components/HomePage/Navbar";
import Header from "../../Components/HomePage/Header";
import Hero from "../../Components/HomePage/Hero";
import About from "../../Components/HomePage/About";
import Goals from "../../Components/HomePage/Goals";
import Footer from "../../Components/HomePage/Footer";
import Sponsors from "../../Components/HomePage/Sponsors";
import Reels from "../../Components/HomePage/Reels";

const HomePage = () => {
  return (
    <VStack align="stretch" dir="rtl">
      <Navbar />
      <Header />
      <Reels />
      <Hero />
      <About />
      <Goals />
      <Sponsors />
      <Footer />
    </VStack>
  );
};

export default HomePage;
