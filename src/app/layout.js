import localFont from "next/font/local";
import "./globals.css";
import TanstackQueryProvider from "@/components/partials/provider/TanstackQueryProvider";
import { Toaster } from "react-hot-toast";

import AuthForm from "@/components/templates/authForm";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const Vazir = localFont({
  src: "./fonts/Vazir-Variable.woff2",
  variable: "--font-Vazir",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body
        className={`${Vazir.variable} flex min-h-screen flex-col justify-between bg-background`}
      >
        <TanstackQueryProvider>
          <AuthForm>{children}</AuthForm>
          <ReactQueryDevtools />
        </TanstackQueryProvider>
        <Toaster />
      </body>
    </html>
  );
}
