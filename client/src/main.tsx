import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

import { RouterProvider } from "react-router-dom";
import { Routes } from "./routes/Routes";

const queryClient = new QueryClient();

import { I18nextProvider } from "react-i18next";
import i18next from "i18next";

import global_es from "./translation/es/global.json";
import global_en from "./translation/en/global.json";

i18next.init({
  interpolation: { escapeValue: false },
  lng: "es",
  resources: {
    es: {
      global: global_es,
    },
    en: {
      global: global_en,
    },
  },
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <I18nextProvider i18n={i18next}>
        <RouterProvider router={Routes} />
      </I18nextProvider>
      {/* <ReactQueryDevtools/> */}
    </QueryClientProvider>
  </StrictMode>
);
