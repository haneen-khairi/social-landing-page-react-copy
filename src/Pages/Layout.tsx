import { VStack } from "@chakra-ui/react";
import Navbar from "../Components/HomePage/Navbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <VStack align="stretch" dir="rtl">
      <Navbar />
      <Outlet />
    </VStack>
  );
};

export default Layout;
