"use client";

import { useEffect, useState } from "react";
import OtpInput from "react18-input-otp";

import { useCheckOtp } from "@/core/services/mutations";
import CountdownTimer from "./CountdownTimer";

import toast from "react-hot-toast";
import { useSendOtp } from "@/core/services/mutations";

import { usePathname, useRouter } from "next/navigation";

function CheckOTPForm({
  mobile,
  setStep,
  setIsOpen,
  isExpired,
  setIsExpired,
  setIsLogin,
}) {
  const [code, setCode] = useState("");
  const [isClient, setIsClient] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsClient(true);
  }, []);

  const { isPending, mutate } = useCheckOtp();
  const path = usePathname();

  const checkOtpHandler = (event) => {
    event.preventDefault();

    if (isPending) return;

    mutate(
      { mobile, code },
      {
        onSuccess: () => {
          setIsOpen(false);
          setStep(1);
          setIsLogin(true);
          toast.success("ورود موفق !");
        },
        onError: (error) => {
          console.log(error);
        },
      },
    );
  };

  const { isPending: tryAgain, mutate: tryAgainMutate } = useSendOtp();

  const sendOtpHandler = () => {
    if (tryAgain) return;
    tryAgainMutate(
      { mobile },
      {
        onSuccess: (data) => {
          toast.success(data?.data?.message);
          toast(data?.data?.code);
          setIsExpired(false);
        },
        onError: (error) => {
          console.log(error);
        },
      },
    );
  };

  const changeHandler = (otp) => {
    setCode(otp);
  };
  const closeHandler = () => {
    if (path === "/checkout") {
      setIsOpen(false);
      router.back();
      return;
    }
    setIsOpen(false);
  };
  if (!isClient) return null;
  return (
    <div className="relative flex min-w-[358px] flex-col rounded-[20px] bg-white p-10 shadow-[0_4px_4px_-0px_rgba(0,0,0,0.25)]">
      <div onClick={closeHandler} className="absolute right-5 top-5">
        <img
          className="size-6"
          src="/images/mobile-navbar/x-mark.svg"
          alt="x"
        />
      </div>

      <span onClick={() => setStep(1)} className="absolute left-5 top-5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="size-6"
        >
          <path
            fillRule="evenodd"
            d="M17 10a.75.75 0 0 1-.75.75H5.612l4.158 3.96a.75.75 0 1 1-1.04 1.08l-5.5-5.25a.75.75 0 0 1 0-1.08l5.5-5.25a.75.75 0 1 1 1.04 1.08L5.612 9.25H16.25A.75.75 0 0 1 17 10Z"
            clipRule="evenodd"
          />
        </svg>
      </span>
      <form
        className="flex flex-1 flex-col items-center justify-end gap-y-2"
        onSubmit={checkOtpHandler}
      >
        <h4 className="mt-5 text-center text-[25px] font-semibold md:text-[28px]">
          کد تایید را وارد کنید
        </h4>
        <label className="font-VazirRegular">
          کد تایید به شماره{" "}
          <span className="font-VazirDigitRegular">{mobile}</span> ارسال شد
        </label>
        <div className="ltr flex gap-x-3">
          <OtpInput
            value={code}
            onChange={changeHandler}
            numInputs={6}
            inputStyle={{
              display: "flex",
              gap: "12px",
              border: "1px solid silver",
              borderRadius: "5px",
              width: "49px",
              height: "45px",
              margin: "6px",
            }}
          />
        </div>
        <div className="flex items-center">
          {!isExpired ? (
            <CountdownTimer setIsExpired={setIsExpired} />
          ) : (
            <span
              onClick={sendOtpHandler}
              className="cursor-pointer text-blue-600 hover:text-myBlue-100"
            >
              ارسال مجدد کد
            </span>
          )}
        </div>
        <button
          className="mt-[19px] h-[54px] w-full rounded-md bg-[#28A745] text-lg font-medium text-white hover:bg-myGreen-200/90"
          type="submit"
        >
          ورود به تورینو
        </button>
      </form>
    </div>
  );
}

export default CheckOTPForm;
