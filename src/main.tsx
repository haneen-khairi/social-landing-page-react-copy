import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "react-router-dom";
import router from "./routs.tsx";
import theme from "./theme.ts";
import "./style.css";
import { I18nextProvider } from 'react-i18next';

import i18n from './i18n';
const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n}>
      <ChakraProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
        </QueryClientProvider>
      </ChakraProvider>
    </I18nextProvider>
  </React.StrictMode>
);
