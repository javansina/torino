"use client";

import { useGetUserTransactions } from "@/core/services/queries";
import { separate } from "@/core/utils/helper/detailsFormatter";

export default function UserTransactions() {
  const { data, isPending, isError } = useGetUserTransactions();

  const timeFormatter = (time) => {
    const formatter = new Intl.DateTimeFormat("fa-IR", {
      timeZone: "Asia/Tehran",
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    });

    const iranDate = formatter.format(new Date(time));
    return iranDate.split(",").join(" - ");
  };

  return (
    <>
      {data?.data?.length > 0 ? (
        <div className="rounded-xl border">
          <div className="grid grid-cols-12 items-center rounded-t-[10px] bg-myGray-120 p-3">
            <div className="col-span-5 font-VazirRegular text-xs text-myGray-320 xl:col-span-4">
              تاریخ و ساعت
            </div>
            <div className="col-span-4 mb-1.5 text-myGray-320 xl:col-span-3">
              <span className="font-VazirRegular text-xs">مبلغ</span>
              <span className="mr-0.5 text-[10px]">&#40;تومان&#41;</span>
            </div>
            <div className="col-span-4 hidden font-VazirRegular text-xs text-myGray-320 xl:col-span-3 xl:block">
              نوع تراکنش
            </div>
            <div className="col-span-3 text-left font-VazirRegular text-xs text-myGray-320 STxsC:text-right xl:col-span-2">
              شماره سفارش
            </div>
          </div>
          {data?.data?.map((item) => (
            <div key={item.id} className="grid grid-cols-12 px-3 py-[14px]">
              <div className="col-span-5 mt-1 font-VazirDigitThin text-[9px] tracking-wide text-black md:text-[16px] xl:col-span-4">
                {timeFormatter(item.createdAt)}
              </div>
              <div className="col-span-4 font-VazirDigitThin text-[14px] text-black md:text-[16px] xl:col-span-3">
                {separate(item.amount)}
              </div>
              <div className="col-span-4 hidden font-VazirDigitThin text-xs text-black md:text-[16px] xl:col-span-3 xl:block">
                خرید تور گردشگری
              </div>
              <div className="col-span-3 text-left font-VazirDigitThin text-[13px] text-black STxsC:text-right md:text-[16px] xl:col-span-2">
                12054902
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex h-32 w-full items-center justify-center">
          <h1 className="font-VazirMedium text-[15px] text-myRed-100/80 mdC:text-lg mdC:font-medium">
            هیچ تراکنش انجام نشده است !
          </h1>
        </div>
      )}
    </>
  );
}
