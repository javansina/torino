"use client";

import Image from "next/image";
import { DatePicker } from "zaman";
import queryString from "query-string";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";

import useQuery from "@/core/hooks/query";
import { flattenObject } from "@/core/utils/helper/helper";
import { dateToIso } from "@/core/utils/helper/detailsFormatter";
import OutsideClickHandler from "@/core/utils/helper/OutsideClickHandler";

export default function SearchFrom() {
  const router = useRouter();
  const { getQuery } = useQuery();

  const { register, handleSubmit, control, reset, setValue } = useForm();

  const [originDropDown, setOriginDropDown] = useState(false);
  const [destinationDropDown, setDestinationDropDown] = useState(false);
  const [isSelecting, setIsSelecting] = useState(false);
  const [origin, setOrigin] = useState("مبدا");
  const [destination, setDestination] = useState("مقصد");

  useEffect(() => {
    const originId = getQuery("originId");
    const destinationId = getQuery("destinationId");
    if (originId && destinationId) {
      const o = originCity.find((i) => i.id === +originId);
      setOrigin(o.origin);
      const d = destinationCity.find((i) => i.id === +destinationId);
      setDestination(d.destination);
      reset({ originId: o.origin, destinationId: d.destination });
    }
  }, []);

  const submitHandler = (form) => {
    const { originId, destinationId, date } = form;

    if (form.date === "تاریخ") {
      delete form.date;
    }

    if (form.originId === "مبدا") {
      delete form.originId;
    } else {
      const o = originCity.find((i) => i.origin === originId);
      form.originId = o.id;
    }

    if (form.destinationId === "مقصد") {
      delete form.destinationId;
    } else {
      const d = destinationCity.find((i) => i.destination === destinationId);
      form.destinationId = d.id;
    }

    const query = queryString.stringify(flattenObject(form));
    router.push(`/?${query}`, { scroll: false });
  };
  const originCity = [
    { id: 2, origin: "سنندج" },
    { id: 7, origin: "مازندران" },
    { id: 4, origin: "اصفحان" },
    { id: 1, origin: "تهران" },
  ];

  const destinationCity = [
    { id: 9, destination: "ایتالیا" },
    { id: 7, destination: "مازندران" },
    { id: 5, destination: "سلیمانیه" },
    { id: 6, destination: "هولیر" },
    { id: 3, destination: "مادرید" },
  ];

  const originHandler = (originId, originName) => {
    setValue("originId", originName);
    setOrigin(originName);
    setOriginDropDown(false);
  };
  const destinationHandler = (destinationId, destinationName) => {
    setValue("destinationId", destinationName);
    setDestination(destinationName);
    setDestinationDropDown(false);
  };
  return (
    <>
      <section className="prevent-select container">
        <div className="mb-[84px] mt-4">
          <div className="mx-auto mb-[10px] flex w-fit flex-col items-center gap-x-0.5 font-VazirRegular text-[16px] font-semibold tracking-tight text-myGray-310 STxsA:flex-row STxsC:gap-x-1 STxsC:tracking-wide md:mb-[20px] md:gap-x-2 md:text-[22px] lg:mb-[28px] xl:text-[28px]">
            <span className="text-myGreen-200">تورینو</span>
            <h2>برگزار کننده بهترین تور های داخلی و خارجی</h2>
          </div>

          <form
            onSubmit={handleSubmit(submitHandler)}
            className="mx-auto flex max-w-[974px] flex-col items-center justify-between gap-y-3 border-black/15 p-[10px] md:flex-row md:rounded-[20px] md:border"
          >
            <div className="grid w-full grid-cols-12 gap-x-2 md:w-1/2 md:justify-between">
              <div
                // onClick={(e) => {
                //   if (e.target.id === "option") return;
                //   setOriginDropDown(true);
                //   setDestinationDropDown(false);
                // }}
                className="relative col-span-6 flex items-center justify-center rounded-xl border border-black/15 font-VazirRegular text-[16px] font-normal text-black/50 md:justify-start md:border-l md:border-none md:p-0"
              >
                <div className="absolute right-[25%] top-4 md:right-4 md:top-5">
                  <div className="relative h-[18px] w-[18px] md:h-[20px] md:w-[20px]">
                    <Image
                      src={"/images/location.svg"}
                      fill={true}
                      alt={"da"}
                    />
                  </div>
                </div>
                <input
                  type="text"
                  {...register("originId")}
                  value={origin}
                  autoComplete="off"
                  readOnly
                  onFocus={() => setOriginDropDown(true)}
                  className="w-full rounded-xl py-[14px] pr-[40%] text-start outline-none hover:cursor-pointer md:ml-2 md:h-14 md:w-full md:rounded-l-none md:border-l md:py-4 md:pr-12"
                />
                {originDropDown && (
                  <OutsideClickHandler
                    onOutsideClick={() => setOriginDropDown(false)}
                    className={
                      "border-black/33 absolute top-full z-10 mt-1 max-h-[200px] w-full rounded-t-[11px] border bg-background md:-right-[10px] md:top-[67px]"
                    }
                  >
                    <div className="w-full rounded-t-[11px] bg-myGray-100 p-2">
                      پر تردد
                    </div>
                    <div className="border-black/33 border-black/12 absolute top-full z-10 flex max-h-[200px] w-full flex-col overflow-hidden overflow-y-scroll rounded-b-[11px] border bg-background scrollbar-webkit child:border-b">
                      {originCity.map((item) => (
                        <div
                          id="option"
                          key={item.id}
                          onClick={() => originHandler(item.id, item.origin)}
                          className="flex w-full items-center gap-x-2 p-4 text-[14px] font-normal text-myGray-410 hover:cursor-pointer hover:bg-myGreen-90"
                        >
                          <div className="relative h-5 w-5 child:text-myGray-410">
                            <Image
                              fill={true}
                              src={"/images/black location.svg"}
                              alt="loc"
                            />
                          </div>
                          {item.origin}
                        </div>
                      ))}
                    </div>
                  </OutsideClickHandler>
                )}
              </div>
              <div
                // onClick={(e) => {
                //   if (e.target.id === "option") return;
                //   setDestinationDropDown(true);
                //   setOriginDropDown(false);
                // }}
                className="relative col-span-6 flex items-center justify-center gap-x-2 rounded-xl border border-black/15 font-VazirRegular text-[16px] font-normal text-black/50 md:justify-start md:border-none md:p-0"
              >
                <div className="absolute right-[25%] top-4 md:right-4 md:top-5">
                  <div className="relative h-[18px] w-[18px] md:h-[20px] md:w-[20px]">
                    <Image
                      src={"/images/global-search.svg"}
                      fill={true}
                      alt={"da"}
                    />
                  </div>
                </div>
                <input
                  type="text"
                  {...register("destinationId")}
                  value={destination}
                  autoComplete="off"
                  readOnly
                  onFocus={() => setDestinationDropDown(true)}
                  className="w-full rounded-xl py-[14px] pr-[40%] text-start outline-none hover:cursor-pointer md:ml-2 md:h-14 md:w-full md:rounded-l-none md:border-l md:py-4 md:pr-12"
                />
                {destinationDropDown && (
                  <OutsideClickHandler
                    onOutsideClick={() => setDestinationDropDown(false)}
                    className={
                      "border-black/33 absolute top-full z-10 mt-1 max-h-[200px] w-full rounded-t-[11px] border bg-background md:-right-3 md:top-[67px]"
                    }
                  >
                    <div className="w-full rounded-t-[11px] bg-myGray-100 p-2">
                      مقصد های موجود
                    </div>
                    <div className="border-black/33 border-black/12 absolute top-full z-10 flex max-h-[200px] w-full flex-col overflow-hidden overflow-y-scroll rounded-b-[11px] border bg-background scrollbar-webkit child:border-b">
                      {destinationCity.map((item) => (
                        <div
                          key={item.id}
                          onClick={() =>
                            destinationHandler(item.id, item.destination)
                          }
                          className="flex w-full items-center gap-x-2 p-4 text-[14px] font-normal text-myGray-410 hover:cursor-pointer hover:bg-myGreen-90"
                        >
                          <div className="relative h-5 w-5 child:text-myGray-410">
                            <Image
                              fill={true}
                              src={"/images/black location.svg"}
                              alt="loc"
                            />
                          </div>
                          {item.destination}
                        </div>
                      ))}
                    </div>
                  </OutsideClickHandler>
                )}
              </div>
            </div>
            <div className="relative flex w-full items-center justify-start gap-x-2 rounded-xl border border-black/15 pr-3 font-VazirRegular text-[16px] font-normal text-black/50 md:w-1/4 md:justify-start md:border-none md:p-0">
              <div className="">
                <div className="relative h-[18px] w-[18px] md:h-[20px] md:w-[20px]">
                  <Image src={"/images/calendar.svg"} fill={true} alt={"da"} />
                </div>
              </div>

              <Controller
                control={control}
                name="date"
                render={({ field: { onChange } }) => (
                  <DatePicker
                    round="x2"
                    inputClass={`${isSelecting && "w-full text-center"} w-fit rounded-xl py-[14px] outline-none md:ml-2 md:h-14 md:w-full md:rounded-l-none md:border-l md:py-4 text-start`}
                    inputAttributes={{ placeholder: "تاریخ" }}
                    accentColor="#28A745"
                    onChange={(e) => {
                      onChange({
                        startDate: dateToIso(e.from),
                        endDate: dateToIso(e.to),
                      });
                      setIsSelecting(true);
                    }}
                    range
                  />
                )}
              />
            </div>

            <input
              type="submit"
              className="min-w-full rounded-2xl bg-myGreen-200 px-14 py-4 font-VazirRegular text-[24px] font-normal leading-5 tracking-wider text-white delay-100 hover:cursor-pointer hover:bg-myGreen-200/90 md:min-w-fit"
              value="جستجو"
            />
          </form>
        </div>
      </section>
    </>
  );
}
