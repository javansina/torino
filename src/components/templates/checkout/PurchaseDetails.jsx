"use client";

import detailsFormatter from "@/core/utils/helper/detailsFormatter";
import { useEffect } from "react";

import toast from "react-hot-toast";

export default function PurchaseDetails({ data, setIsEmptyBasket }) {
  useEffect(() => {
    if (data.message === "سبد خرید شما خالی است") {
      toast.error("سبد خرید شما خالیست!\nابتدا باید یک تور را رزرو کنید!");
      setIsEmptyBasket(true);
    }
  }, []);

  if (data.message === "سبد خرید شما خالی است") {
    return (
      <>
        <div className="flex flex-wrap items-start justify-start gap-x-2 pb-6 pt-3 leading-5">
          <span className="pb-8 pt-6 font-VazirMedium text-[17px] tracking-[0.02em] text-myGray-320">
            محصولی در سبد خرید وجود ندارد .
          </span>
          <span className="py-6 font-VazirMedium text-[17px] tracking-[0.02em] text-myGray-320">
            لطفا ابتدا یک محصول رزرو کنید !
          </span>
        </div>
      </>
    );
  }

  const { travelTime, pricee } = detailsFormatter({ data });
  return (
    <>
      <div className="dashed-border-checkout border-t-none flex items-center justify-between pb-8 pt-6 leading-5">
        <span className="font-VazirMedium text-[24px]">{data.title}</span>
        <div className="flex gap-x-2 child:font-VazirDigitRegular child:text-myGray-300">
          <span>{travelTime} روز</span>
          <span>و</span>
          <span>{travelTime - 1} شب</span>
        </div>
      </div>

      <div className="flex h-fit items-center justify-between py-6">
        <span className="font-VazirRegular text-myGray-400">قیمت نهایی</span>
        <div className="flex items-center gap-x-1">
          <span className="font-VazirDigitRegular text-[24px] text-myBlue-100">
            {pricee}
          </span>
          <span className="font-VazirThin text-sm">تومان</span>
        </div>
      </div>
    </>
  );
}
