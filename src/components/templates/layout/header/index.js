"use client";

import Image from "next/image";
import LoginButton from "./LoginButton";
import NavBarM from "./NavBar";
import { useEffect, useState } from "react";

import { getOtherAccountsCookies, setCookie } from "@/core/utils/cookie";

import ModalContainer from "@/components/partials/container/ModalContainer";
import SendOTPForm from "../../authProvider/SendOTPForm";
import CheckOTPForm from "../../authProvider/CheckOTPForm";
import { useQueryClient } from "@tanstack/react-query";

import { useGetUserProfile } from "@/core/services/queries";
import OutsideClickHandler from "@/core/utils/helper/OutsideClickHandler";
import Link from "next/link";
import OtherAccounts from "./OtherAccounts";

export default function Header({ isLogin, setIsLogin, setIsOpen, isOpen }) {
  const queryClient = useQueryClient();
  const { data } = useGetUserProfile();

  const [step, setStep] = useState(1);
  const [mobile, setMobile] = useState("");
  const [isExpired, setIsExpired] = useState(false);
  const [isClient, setIsIsClient] = useState(false);
  const [sideNav, setSideNav] = useState(false);
  const [dropDown, setDropDown] = useState(false);
  const [isOtherAccountNumber, setIsOtherAccountNumber] = useState(false);

  useEffect(() => {
    setIsIsClient(true);
  }, []);

  const logOutHandler = () => {
    setCookie("accessToken", "", 0);
    setCookie("refreshToken", "", 0);
    queryClient.invalidateQueries({ queryKey: ["user-profile"] });
    setIsLogin(false);
  };
  const handleOutsideClick = () => {
    setIsOtherAccountNumber(false);
    setDropDown(false);
  };
  // const a = async () => {
  //   const moz = getOtherAccountsCookies("otherAcountsToken");
  //   const m = await JSON.parse(moz);
  //   // ; refreshToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjFkY2YyMDg2LWI2ODktNDZmOS1iNWRjLTdkYmFmY2VkODFlMyIsIm1vYmlsZSI6IjA5ODk4OTg5ODk4IiwiaWF0IjoxNzQwMDA4NTI1LCJleHAiOjE3NDA2MTMzMjV9.q7NnprzOQfPKlqofn5BanY3AwHi_WmmZyGtNWdccUv8; accessToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjFkY2YyMDg2LWI2ODktNDZmOS1iNWRjLTdkYmFmY2VkODFlMyIsIm1vYmlsZSI6IjA5ODk4OTg5ODk4IiwiaWF0IjoxNzQwMTA5NDAyLCJleHAiOjE3NDAxMTMwMDJ9.pjXmmgZzu5un2bZ1xfQuNXwkCnKm1WHY8567r7iSsxE
  //   console.log(m);
  // };
  // a();

  return (
    <>
      <header className="prevent-select header-shadow fixed left-0 right-0 top-0 z-30 h-[64px] w-full bg-background py-2.5 font-VazirMedium md:h-[65px] md:py-[15px] lg:h-[74px]">
        <div className="container flex h-[45px] items-center justify-between md:h-[35px] lg:h-[44px]">
          <div className="flex items-center justify-between">
            <span className="relative hidden h-[35px] w-[130px] md:inline-block lg:h-[44px] lg:w-[164px]">
              <Image
                fill={true}
                src="/images/Torino-Logo.svg"
                alt="torino logo"
              />
            </span>
            <button className="md:hidden" onClick={() => setSideNav(true)}>
              <Image
                width={24}
                height={24}
                src="/images/hamburgerMenu.svg"
                alt="Menu"
              />
            </button>
            <NavBarM sideNav={sideNav} />
          </div>
          <div className="lg:mr-[40px] xl:mr-[84px]">
            {isClient && isLogin ? (
              <div className="relative delay-150">
                <div
                  onClick={() => setDropDown(true)}
                  className="flex items-center gap-x-1 rounded-xl p-2 text-myGreen-200 hover:cursor-pointer hover:bg-myGreen-90"
                >
                  <div className="relative h-[14px] w-[14px] xs:h-5 xs:w-5 md:h-6 md:w-6">
                    <Image
                      fill={true}
                      src="/images/profile.svg"
                      alt="profile"
                    />
                  </div>

                  <span className="border-myGreen-200/30 px-1.5 py-0.5 font-VazirDigitBold text-[14px] font-medium xs:text-[18px] md:text-[18px]">
                    {data?.data?.mobile}
                  </span>

                  <div
                    className={`down ${!dropDown && "arrow-down"} relative h-[14px] w-[14px] xs:h-5 xs:w-5 md:h-6 md:w-6`}
                  >
                    <Image
                      fill={true}
                      src="/images/arrow-down (1).svg"
                      alt="profile"
                    />
                  </div>
                </div>

                <OutsideClickHandler onOutsideClick={handleOutsideClick}>
                  <div
                    className={`header-top-shadow down ${dropDown ? "profile-down-active" : "profile-down-hidden"} absolute -left-[5%] top-8 w-[167px] divide-y rounded-2xl bg-background transition-all delay-75 child:transition-colors xs:top-10 xs:w-[200px] md:top-10 mdC:top-10 lg:-left-[20%] lg:w-[246px]`}
                  >
                    <div
                      onClick={() => setIsOtherAccountNumber((i) => !i)}
                      className="flex h-11 items-center justify-between gap-x-3 rounded-t-[11px] bg-myGray-105/80 px-3 hover:cursor-pointer"
                    >
                      <div className="flex gap-x-3">
                        <div className="w-fit rounded-full bg-myGray-140 p-0.5 md:p-1">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="h-4 w-4"
                          >
                            <path
                              fillRule="evenodd"
                              d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        <span className="w-fit font-VazirDigit text-[14px] font-medium text-myGreen-300 md:text-[16px] lg:text-[18px]">
                          {!!data?.data?.fullName
                            ? `${data.data.fullName}`
                            : data?.data?.mobile}
                        </span>
                      </div>
                      <div
                        className={`down ${!isOtherAccountNumber && "arrow-down"} text-black/50`}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="size-5"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    </div>
                    <OtherAccounts
                      setIsOtherAccountNumber={setIsOtherAccountNumber}
                      isOtherAccountNumber={isOtherAccountNumber}
                      setIsOpen={setIsOpen}
                    />
                    <Link
                      href={"/profile"}
                      onClick={() => setDropDown(false)}
                      className="relative flex h-[35px] items-center gap-x-2 pr-3 hover:bg-myGray-110 lg:h-[45px]"
                    >
                      <div className="relative h-4 w-4 md:h-5 md:w-5">
                        <Image
                          fill={true}
                          src="/images/profile (1).svg"
                          alt="profile"
                        />
                      </div>
                      <span className="text-[12px] text-myGray-410 lg:text-[14px]">
                        اطلاعات حساب کاربری
                      </span>
                    </Link>
                    <div className="flex h-[35px] items-center gap-x-2 rounded-b-[15px] pb-1.5 pr-3 hover:bg-myGray-110 lg:h-[45px]">
                      <div className="relative mt-1 h-4 w-4 md:h-5 md:w-5">
                        <Image
                          fill={true}
                          src="/images/logout.svg"
                          alt="profile"
                        />
                      </div>
                      <span
                        className="text-[12px] text-myRed-100 lg:text-[14px]"
                        onClick={logOutHandler}
                      >
                        خروج از حساب کاربری
                      </span>
                    </div>
                  </div>
                </OutsideClickHandler>
              </div>
            ) : (
              <LoginButton setIsOpen={setIsOpen} />
            )}
          </div>
        </div>

        {sideNav && (
          <div
            className={`fixed bottom-0 top-0 min-h-screen w-full overflow-y-auto bg-black/20 px-4 pt-5 transition-all duration-500`}
            onClick={(e) => {
              if (e.target.nodeName === "DIV") {
                setSideNav(false);
              }
            }}
          >
            <span className="absolute right-0 top-0 z-50 flex min-h-screen w-1/2 flex-col rounded-l-xl bg-background pr-4 xsB:w-1/3 md:hidden">
              <span className="flex w-full justify-end">
                <span onClick={() => setSideNav(false)} className="w-fit p-4">
                  <Image
                    width={24}
                    height={24}
                    src="/images/mobile-navbar/x-mark.svg"
                    alt="torino logo"
                  />
                </span>
              </span>
              <NavBarM sideNav={sideNav} />
            </span>
          </div>
        )}
      </header>
      {step === 1 && (
        <ModalContainer setIsOpen={setIsOpen} isOpen={isOpen}>
          <SendOTPForm
            mobile={mobile}
            setMobile={setMobile}
            setStep={setStep}
            setIsOpen={setIsOpen}
          />
        </ModalContainer>
      )}
      {step === 2 && (
        <ModalContainer setIsOpen={setIsOpen} isOpen={isOpen}>
          <CheckOTPForm
            mobile={mobile}
            setStep={setStep}
            setIsOpen={setIsOpen}
            isExpired={isExpired}
            setIsExpired={setIsExpired}
            setIsLogin={setIsLogin}
            isLogin={isLogin}
          />
        </ModalContainer>
      )}
    </>
  );
}
