"use client";
import Image from "next/image";

import Options from "./Options";
import detailsFormatter from "@/core/utils/helper/detailsFormatter";

import ReservationButton from "./ReservationBurron";

export default function Details({ data }) {
  const { id, image, title, availableSeats, insurance, origin } = data?.data;
  const {
    originCity,
    tourExpired,
    date,
    dateBack,
    travelTime,
    fleetVehicle,
    monthNomToFa,
    pricee,
  } = detailsFormatter(data);

  console.log(id);

  return (
    <main className="container pb-10">
      <div className="rounded-[10px] bg-background xs:border xs:p-4">
        <div className="flex flex-col">
          <div className="relative flex flex-col xs:flex-row-reverse xs:justify-between md:flex-row md:justify-start">
            <div
              className={`relative aspect-66/100 w-full rounded-xl xsC:max-w-[330px] smB:max-w-[360px] md:max-w-none lg:max-w-[397px]`}
            >
              <Image
                fill={true}
                src={image}
                style={{ borderRadius: "14px" }}
                alt={title}
              />
            </div>
            <div className="p-2 xs:w-[220px] md:flex md:w-full md:flex-col md:justify-between md:pr-6">
              <div className="flex items-center justify-between xs:flex-col xs:items-start xs:gap-y-2 md:flex-row md:items-center mdC:gap-y-4 lg:flex-col lg:items-start">
                <span className="font-VazirBold text-[24px] font-bold">
                  {title}
                </span>
                <div className="flex gap-x-1 font-VazirDigitRegular text-myGray-410 child:xs:text-[14px] child:xsC:text-[17px] md:mt-2">
                  {tourExpired < 0 ? (
                    <span className="text-myRed-100">تور منقضی شده است!</span>
                  ) : (
                    <>
                      <span className="font-VazirDigitRegular">
                        {travelTime} روز
                      </span>
                      <span>و</span>
                      <span className="font-VazirDigitRegular">
                        {travelTime - 1} شب
                      </span>
                    </>
                  )}
                </div>
              </div>
              <div className="my-5 flex max-w-[320px] justify-between text-myGray-210 xs:flex-col xs:items-start xs:gap-y-2 md:max-w-none lg:max-w-[424px] lg:flex-row">
                <div className="flex items-center gap-x-2 text-[13px] xsC:text-[16px]">
                  <div className="relative mt-0.5 h-[14px] w-[14px] xsC:h-5 xsC:w-5">
                    <Image
                      fill={true}
                      src={"/images/tour-details/user-tick.svg"}
                      alt="moz"
                    />
                  </div>
                  <span className="font-VazirDigitRegular">
                    تورلیدر از مبدا
                  </span>
                </div>
                <div className="flex items-center gap-x-2 text-[13px] xsC:text-[16px]">
                  <div className="relative mt-0.5 h-[14px] w-[14px] xsC:h-5 xsC:w-5">
                    <Image
                      fill={true}
                      src={"/images/tour-details/map.svg"}
                      alt="moz"
                    />
                  </div>
                  <span className="font-VazirDigitRegular">برنامه سفر</span>
                </div>
                <div className="flex items-center gap-x-2 text-[13px] xsC:text-[16px]">
                  <div className="relative mt-0.5 h-[14px] w-[14px] xsC:h-5 xsC:w-5">
                    <Image
                      fill={true}
                      src={"/images/tour-details/medal-star.svg"}
                      alt="moz"
                    />
                  </div>
                  <span className="font-VazirDigitRegular">تضمین کیفیت</span>
                </div>
              </div>
              <div className="my-8 hidden w-full justify-between md:my-0 md:flex md:flex-row-reverse">
                <ReservationButton
                  id={id}
                  tourExpired={tourExpired}
                  pricee={pricee}
                />
              </div>
            </div>
          </div>

          <div className="mt-4">
            <Options
              origin={origin}
              originCity={originCity}
              monthNomToFa={monthNomToFa}
              date={date}
              dateBack={dateBack}
              fleetVehicle={fleetVehicle}
              availableSeats={availableSeats}
              insurance={insurance}
            />
            <div className="my-8 flex justify-between md:hidden">
              <ReservationButton
                id={id}
                tourExpired={tourExpired}
                pricee={pricee}
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
