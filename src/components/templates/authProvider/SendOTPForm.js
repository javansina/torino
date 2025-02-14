"use client";

import toast from "react-hot-toast";

import { useSendOtp } from "@/core/services/mutations";
import { isValidMobile } from "@/core/utils/validation";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

function SendOTPForm({ mobile, setMobile, setStep, setIsOpen }) {
  const { isPending, mutate } = useSendOtp();
  const [isClient, setIsClient] = useState(false);
  const router = useRouter();
  const path = usePathname();

  useEffect(() => {
    setIsClient(true);
  }, []);

  const sendOtpHandler = (event) => {
    event.preventDefault();

    if (isPending) return;
    if (!isValidMobile(mobile)) {
      toast.error("شماره معتبر وارد کنید!");
      return;
    }

    mutate(
      { mobile },
      {
        onSuccess: (data) => {
          toast.success(data?.data?.message);
          toast(data?.data?.code);
          setStep(2);
        },
        onError: (error) => {
          console.log(error);
        },
      },
    );
  };
  const closeHandler = () => {
    if (path === "/checkout") {
      setIsOpen(false);
      router.back();
      return;
    }
    if (
      path === "/profile" ||
      path === "/profile/tours" ||
      path === "/profile/transactions"
    ) {
      setIsOpen(false);
      router.push("/");
      return;
    }
    setIsOpen(false);
  };
  if (!isClient) return null;
  return (
    <div className="relative flex min-w-[358px] flex-col rounded-[20px] bg-white p-10 pt-[60px] shadow-[0_4px_4px_-0px_rgba(0,0,0,0.25)] lg:min-w-[450px]">
      <div onClick={closeHandler} className="absolute right-5 top-5">
        <img
          className="size-6"
          src="/images/mobile-navbar/x-mark.svg"
          alt="x"
        />
      </div>

      <h4 className="mb-9 text-center font-VazirLight text-[28px] font-semibold text-myGray-410">
        ورود به تورینو
      </h4>
      <form
        className="flex flex-1 flex-col justify-end"
        onSubmit={sendOtpHandler}
      >
        <label className="mb-[10px] font-VazirThin text-[16px] tracking-[0.03em]">
          شماره موبایل خود را وارد کنید
        </label>
        <input
          type="text"
          placeholder="09123456789"
          className="ltr mb-10 rounded-md border border-[#00000037] px-2 py-[15px] text-right font-VazirDigitThin placeholder:leading-6"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
        />
        <button
          className="h-[54px] w-full rounded-md bg-myGreen-200 text-lg font-medium text-white hover:bg-myGreen-200/90"
          type="submit"
        >
          ارسال کد تایید
        </button>
      </form>
    </div>
  );
}

export default SendOTPForm;
