"use client";

import useSWR from "swr";
import axios from "axios";
import toast from "react-hot-toast";

import { PurchaseDetailsSkeleton } from "../skeletons";

const fetcher = (url) => axios.get(url);

export default function PurchaseDetails({ isEmptyBasket, setIsEmptyBasket }) {
  const { data, isLoading, error } = useSWR("api/basket", fetcher);

  if (isLoading) {
    return <PurchaseDetailsSkeleton />;
  } else if (data?.data?.message === "EMPTY-BASKET") {
    if (!isEmptyBasket) {
      toast.error("سبد خرید شما خالیست!\nابتدا باید یک تور را رزرو کنید!");
      setIsEmptyBasket(true);
    }
  } else if (error) {
    return (
      <div className="flex flex-wrap items-start justify-start gap-x-2 pb-6 pt-3 leading-5">
        <span className="pb-8 pt-6 font-VazirMedium text-[17px] tracking-[0.02em] text-myRed-100">
          مشکلی پیش امد ،
        </span>
        <span className="py-6 font-VazirMedium text-[17px] tracking-[0.02em] text-myGray-320">
          بعدا دوباره امتحان کنید !
        </span>
      </div>
    );
  }

  return (
    <>
      {isEmptyBasket ? (
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
      ) : (
        <>
          <div className="dashed-border-checkout border-t-none flex items-center justify-between pb-8 pt-6 leading-5 lg:pb-12">
            <span className="font-VazirMedium text-[24px]">
              {data?.data?.title}
            </span>
            <div className="flex gap-x-2 child:font-VazirDigitRegular child:text-myGray-300">
              <span>{data?.data?.travelTime} روز</span>
              <span>و</span>
              <span>{data?.data?.travelTime - 1} شب</span>
            </div>
          </div>

          <div className="flex h-fit items-center justify-between py-6">
            <span className="font-VazirRegular text-myGray-400">
              قیمت نهایی
            </span>
            <div className="flex items-center gap-x-1">
              <span className="font-VazirDigitRegular text-[24px] text-myBlue-100">
                {data?.data?.price}
              </span>
              <span className="font-VazirThin text-sm">تومان</span>
            </div>
          </div>
        </>
      )}
    </>
  );
}
