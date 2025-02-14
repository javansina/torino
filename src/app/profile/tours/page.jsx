"use client";

import {
  fleetVehicles,
  monthNomToFa,
  separate,
} from "@/core/utils/helper/detailsFormatter";
import { useGetUserTours } from "@/core/services/queries";

export default function UserTours() {
  const { data, isError, isPending } = useGetUserTours();

  if (!isPending && isError)
    return (
      <div className="flex h-32 w-full items-center justify-center">
        <h1 className="font-VazirMedium text-[15px] text-myRed-100/80 mdC:text-lg mdC:font-medium">
          خطایی رخ داد ، مجددا امتحان کنید !
        </h1>
      </div>
    );

  return (
    <>
      {data?.data?.length > 0 ? (
        <div className="flex flex-col gap-y-3 md:rounded-xl md:border md:p-4">
          {data?.data.map((i) => {
            const start = monthNomToFa(new Date(i.startDate));
            const end = monthNomToFa(new Date(i.endDate));
            return (
              <div
                key={i.id}
                className="relative flex flex-col gap-y-3 rounded-[10px] border p-4 xs:p-6"
              >
                {new Date(i.startDate) < new Date() &&
                  new Date(i.endDate) > new Date() && (
                    <span className="absolute left-4 top-4 rounded-full bg-myGreen-100 px-2 py-1 font-VazirRegular text-[10px] text-myGreen-200">
                      در حال برگزاری
                    </span>
                  )}
                {new Date(i.endDate) < new Date() && (
                  <span className="absolute left-4 top-4 rounded-full bg-myRed-100/10 px-2 py-1 font-VazirRegular text-[10px] text-myRed-100">
                    به اتمام رسیده
                  </span>
                )}
                {new Date(i.startDate) > new Date() && (
                  <span className="absolute left-4 top-4 rounded-full bg-myYellow-100/10 px-2 py-1 font-VazirRegular text-[10px] text-myYellow-100">
                    در پیش رو
                  </span>
                )}
                <div className="mt-6 flex justify-between xs:mt-5 mdC:mt-0">
                  <div className="-mr-1 mb-1 flex w-1/2 items-center gap-x-2">
                    <div className="relative h-5 w-5 xs:h-6 xs:w-6">
                      <svg
                        viewBox="0 0 18 19"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M13.875 9.5C13.875 6.8075 11.6925 4.625 9 4.625C6.3075 4.625 4.125 6.8075 4.125 9.5"
                          stroke="#282828"
                          strokeOpacity="0.9"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M3.74249 4.24249L3.64499 4.14499M14.2575 4.24249L14.355 4.14499L14.2575 4.24249ZM9 2.05999V2V2.05999ZM1.56001 9.5H1.5H1.56001ZM16.5 9.5H16.44H16.5Z"
                          stroke="#282828"
                          strokeOpacity="0.9"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M3 11.75H15"
                          stroke="#282828"
                          strokeOpacity="0.9"
                          strokeMiterlimit="10"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M4.5 14H13.5"
                          stroke="#282828"
                          strokeOpacity="0.9"
                          strokeMiterlimit="10"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M6.75 16.25H11.25"
                          stroke="#282828"
                          strokeOpacity="0.9"
                          strokeMiterlimit="10"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <span className="font-VazirRegular text-xs lg:text-sm xl:text-base">
                      {i.title}
                    </span>
                  </div>
                  <div className="flex w-1/2 items-center gap-x-2">
                    <img
                      className="size-4 xs:size-5"
                      src={fleetVehicles[i.fleetVehicle].iconSrc}
                      alt={fleetVehicles[i.fleetVehicle].name}
                    />
                    <span className="font-VazirRegular text-xs lg:text-sm xl:text-base">
                      سفر با {fleetVehicles[i.fleetVehicle].name}
                    </span>
                  </div>
                </div>
                <div className="flex flex-col xl:flex-row">
                  <div className="mt-1 flex w-full items-center justify-between xl:w-1/2">
                    <div className="flex w-1/2 gap-x-1 font-VazirRegular text-sm font-semibold tracking-wide lg:text-base lg:tracking-wider">
                      <span>{i.origin.faName}</span>
                      <span>به</span>
                      <span>{i.destination.faName}</span>
                    </div>
                    <div className="flex w-1/2 items-center gap-x-1 font-VazirRegular text-xs text-black/60 lg:text-sm">
                      <span className="mb-1 text-xl font-bold">.</span>
                      <span>{start[1]}</span>
                      <span>{start[0]}</span>
                    </div>
                  </div>
                  <div className="flex w-full items-center justify-between xl:w-1/2">
                    <div className="mt-1 flex w-1/2 font-VazirRegular text-sm font-semibold tracking-wide lg:text-base lg:tracking-wider">
                      <span>تاریخ برگشت</span>
                    </div>
                    <div className="flex w-1/2 items-center gap-x-1 font-VazirRegular text-xs text-black/60 lg:text-sm">
                      <span className="mb-1 text-xl font-bold">.</span>
                      <span>{end[1]}</span>
                      <span>{end[0]}</span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col justify-between gap-y-2 border-t pt-4 STxsC:flex-row STxsC:divide-x STxsC:divide-x-reverse">
                  <div className="flex items-center justify-between gap-x-1 STxsC:w-1/2 STxsC:pl-2 xsB:pl-6">
                    <span className="w-fit text-[10px] text-black/50 mdC:text-xs mdC:font-medium">
                      شماره تور
                    </span>
                    <span className="mt-1.5 font-VazirDigit text-xs font-medium mdC:text-sm">
                      102095404
                    </span>
                  </div>
                  <div className="flex items-center justify-between gap-x-1 STxsC:w-1/2 STxsC:pr-2 xsB:pr-6">
                    <span className="w-fit text-[10px] text-black/50 mdC:text-xs mdC:font-medium">
                      مبلغ پرداخت شده
                    </span>
                    <div className="flex gap-x-1">
                      <span className="mt-1 font-VazirDigit text-xs font-medium mdC:text-sm">
                        {separate(i.price)}
                      </span>
                      <span className="mt-1.5 text-[8px] font-light">
                        تومان
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="flex h-32 w-full items-center justify-center">
          <h1 className="font-VazirMedium text-[15px] text-myRed-100/80 mdC:text-lg mdC:font-medium">
            هیچ تور خریداری نکرده اید !
          </h1>
        </div>
      )}
    </>
  );
}
