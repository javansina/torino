"use client";
import { getCookie } from "@/app/api/api";
import { useGetUserProfile } from "@/core/services/queries";
import { setCookie } from "@/core/utils/cookie";
import { useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";
import useSWR, { mutate } from "swr";
const fetcher = (url) => axios.get(url);
export default function OtherAccounts({
  setIsOtherAccountNumber,
  isOtherAccountNumber,
  setIsOpen,
}) {
  const { data, isLoading, error } = useSWR(
    isOtherAccountNumber ? "/api/authenticate-token/accounts-number" : null,
    fetcher,
  );
  const { data: currentAccountphone } = useGetUserProfile();
  console.log(currentAccountphone);

  console.log(data);
  useEffect(() => {
    mutate("/api/authenticate-token/accounts-number");
  }, [isOtherAccountNumber]);

  const queryClient = useQueryClient();

  const switchAccountHandler = (phoneNumber, token) => {
    const currentAccountAccessToken = getCookie("accessToken");
    const currentAccountRefreshToken = getCookie("refreshToken");
    axios
      .post("/api/switch-account", {
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ phoneNumber }),
      })
      .then(() =>
        axios.post("/api/authenticate-token", {
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            phoneNumber: currentAccountphone?.data?.mobile,
            accessToken: currentAccountAccessToken,
            refreshToken: currentAccountRefreshToken,
            days: 30,
          }),
        }),
      );

    setCookie("accessToken", token[0]);
    setCookie("refreshToken", token[1]);
    const queryKeys = ["user-profile", "user-transactions", "user-tours"];

    queryKeys.forEach((key) => {
      queryClient.invalidateQueries({ queryKey: [key] });
    });
    setIsOtherAccountNumber(false);
  };
  return (
    <div
      className={`down ${isOtherAccountNumber ? "profile-down-active" : "profile-down-hidden"} w-[167px] transition-all delay-75 child:transition-colors xs:w-[200px] lg:w-[246px]`}
    >
      <div className="flex h-10 items-center gap-x-3 border-b px-5 hover:cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="size-5"
        >
          <path d="M7 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM14.5 9a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5ZM1.615 16.428a1.224 1.224 0 0 1-.569-1.175 6.002 6.002 0 0 1 11.908 0c.058.467-.172.92-.57 1.174A9.953 9.953 0 0 1 7 18a9.953 9.953 0 0 1-5.385-1.572ZM14.5 16h-.106c.07-.297.088-.611.048-.933a7.47 7.47 0 0 0-1.588-3.755 4.502 4.502 0 0 1 5.874 2.636.818.818 0 0 1-.36.98A7.465 7.465 0 0 1 14.5 16Z" />
        </svg>

        <span className="w-fit font-VazirRegular text-[12px] font-medium text-myGreen-300 md:text-[14px] lg:text-[16px]">
          دیگر حساب های کاربری
        </span>
      </div>
      {data?.data.map((item) => (
        <div
          key={Math.random() * 1437625}
          onClick={() => switchAccountHandler(item.phoneNumber, item.token)}
          className="flex h-10 items-center gap-x-3 rounded-t-[13px] border-b px-5 hover:cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="mr-1 size-5"
          >
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-5.5-2.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0ZM10 12a5.99 5.99 0 0 0-4.793 2.39A6.483 6.483 0 0 0 10 16.5a6.483 6.483 0 0 0 4.793-2.11A5.99 5.99 0 0 0 10 12Z"
              clipRule="evenodd"
            />
          </svg>
          <span className="w-fit font-VazirDigitRegular text-[12px] tracking-wide text-myGreen-300 md:text-[14px] lg:text-[16px]">
            {item.phoneNumber}
          </span>
        </div>
      ))}
      {(!data?.data || data?.data?.length < 3) && (
        <div className="flex flex-col items-center gap-y-3 rounded-b-[10px] bg-background py-3">
          {!data?.data && (
            <span className="mx-auto w-fit pl-3 font-VazirDigit text-[10px] font-medium text-myGreen-300 md:text-[12px] lg:text-[14px]">
              حساب کاربری دیگری ندارید
            </span>
          )}
          <button
            onClick={() => {
              setIsOtherAccountNumber((i) => !i);
              setIsOpen(true);
            }}
            className="mx-auto flex w-fit items-center gap-x-2 rounded-[10px] bg-myGreen-300 px-2 py-1 font-VazirDigit text-[12px] font-medium text-background md:text-[14px] lg:text-[16px]"
          >
            افزودن
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-6"
            >
              <path d="M5.25 6.375a4.125 4.125 0 1 1 8.25 0 4.125 4.125 0 0 1-8.25 0ZM2.25 19.125a7.125 7.125 0 0 1 14.25 0v.003l-.001.119a.75.75 0 0 1-.363.63 13.067 13.067 0 0 1-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 0 1-.364-.63l-.001-.122ZM18.75 7.5a.75.75 0 0 0-1.5 0v2.25H15a.75.75 0 0 0 0 1.5h2.25v2.25a.75.75 0 0 0 1.5 0v-2.25H21a.75.75 0 0 0 0-1.5h-2.25V7.5Z" />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
}
