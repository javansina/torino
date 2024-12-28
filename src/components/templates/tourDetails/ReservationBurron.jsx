"use client";
import { useGetUserProfile } from "@/core/services/queries";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useLogin } from "../authForm";
import { usePutTourInBasket } from "@/core/services/mutations";
import toast from "react-hot-toast";

export default function ReservationButton({ id, tourExpired, pricee }) {
  const { isLogin, setIsOpen } = useLogin();
  const router = useRouter();
  const { mutate } = usePutTourInBasket();
  const reservationHandler = () => {
    if (tourExpired < 0) return;

    if (!isLogin) {
      toast.error("ابتدا باید وارد حساب کاربری خود شوید");
      setIsOpen(true);
      return;
    }
    try {
      mutate(
        { id },
        {
          onSuccess: (data) => {
            toast.success(data?.data?.message);
          },

          onError: () => console.log("error"),
        },
      );
    } catch {
      return;
    }

    router.push("/checkout");
  };
  return (
    <>
      <div
        onClick={reservationHandler}
        className={`${tourExpired < 0 ? "cursor-not-allowed bg-myGray-130" : "bg-myGreen-200"} h-fit w-fit rounded-[10px] px-[30px] py-1 font-VazirDigitRegular text-[20px] text-background xs:py-2 lg:px-[45px] lg:text-[24px]`}
      >
        رزرو و خرید
      </div>
      <div>
        <span className="font-VazirDigitRegular text-[24px] font-medium text-myBlue-100 lg:text-[28px]">
          {pricee}
        </span>
        <span className="font-VazirDigitThin text-[10px] md:text-[14px]">
          تومان
        </span>
      </div>
    </>
  );
}
