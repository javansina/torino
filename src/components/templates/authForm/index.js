"use client";

import { createContext, useContext, useEffect, useState } from "react";
import Header from "../layout/header";
import Footer from "../layout/footer";
import { getCookie } from "@/core/utils/cookie";
import { usePathname } from "next/navigation";
import { getNewTokens } from "@/app/api/api";

const LoginContext = createContext();

export const useLogin = () => {
  return useContext(LoginContext);
};

function AuthForm({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  const [isLogin, setIsLogin] = useState(() => {
    const cookie = getCookie("accessToken");
    if (cookie) {
      return true;
    } else {
      return false;
    }
  });

  const path = usePathname();

  useEffect(() => {
    const cookie = getCookie("accessToken");
    if (!isLogin) {
      const refreshToken = getNewTokens();
      console.log(refreshToken);

      if (cookie) {
        setIsLogin(true);
      } else if (path === "/tourism-services" || path === "/checkout") {
        setIsOpen(true);
      }
    }
  }, [isLogin, path]);

  return (
    <>
      <Header
        setIsLogin={setIsLogin}
        setIsOpen={setIsOpen}
        isOpen={isOpen}
        isLogin={isLogin}
      />
      <main className="min-h-main">
        <LoginContext.Provider
          value={{ isLogin, setIsLogin, isOpen, setIsOpen }}
        >
          {children}
        </LoginContext.Provider>
      </main>
      <Footer />
    </>
  );
}

export default AuthForm;
