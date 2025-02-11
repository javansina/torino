"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import Header from "../layout/header";
import Footer from "../layout/footer";
import { getCookie } from "@/core/utils/cookie";
import { usePathname } from "next/navigation";
import { getNewTokens } from "@/app/api/api";

const LoginContext = createContext({ isLogin: false, isOpen: false });

export const useLogin = () => {
  return useContext(LoginContext);
};

function AuthForm({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  const [isLogin, setIsLogin] = useState(false);

  const path = usePathname();

  useEffect(() => {
    const cookie = getCookie("accessToken");

    if (!isLogin) {
      if (cookie) {
        setIsLogin(true);
      } else if (
        path === "/profile" ||
        path === "/profile/tours" ||
        path === "/profile/transactions" ||
        path === "/checkout"
      ) {
        setIsLogin(false);
        setIsOpen(true);
      }
    }
  }, [isLogin, path]);
  const value = useMemo(
    () => ({ isLogin, setIsLogin, isOpen, setIsOpen }),
    [isLogin, isOpen],
  );
  return (
    <>
      <Header
        setIsLogin={setIsLogin}
        setIsOpen={setIsOpen}
        isOpen={isOpen}
        isLogin={isLogin}
      />
      <main className="min-h-main">
        <LoginContext.Provider value={value}>{children}</LoginContext.Provider>
      </main>
      <Footer />
    </>
  );
}

export default AuthForm;
