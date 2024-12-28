"use client";

import Image from "next/image";

import Slider from "./Slider";

export default function Main() {
  return (
    <>
      <section className="container mb-[90px]">
        <div className="mt-[82px] rounded-[10px] border border-black/25 md:flex">
          <div className="prevent-select relative flex h-[128px] w-full flex-col rounded-t-[10px] bg-myGreen-200 p-3 pb-[52px] STxsD:p-6 md:h-[251px] md:rounded-b-[10px] md:pr-10 md:pt-16 xl:pr-[57px] xl:pt-9">
            <div className="absolute bottom-0 left-0">
              <div className="relative h-[156px] w-[195px] STxsD:ml-5 md:h-[225px] md:w-[308px]">
                <Image
                  fill={true}
                  src={
                    "/images/professional-cartoon-man-talking-phone-icon-illustration_1151483-70336-removebg-preview 1.svg"
                  }
                  alt="خرید تلفنی"
                />
              </div>
            </div>
            <span className="font-VazirBlack tracking-[0.04rem] text-background STxsB:text-[22px] mdC:text-[34px] lgB:text-[40px] xl:text-[48px]">
              خرید تلفنی از
              <span className="mr-1 text-myGreen-300">تورینو</span>
            </span>
            <span className="mt-2 font-VazirRegular text-[13px] tracking-tight text-background STxsA:text-[15px] STxsB:tracking-[0.04em] STxsD:mt-2 mdC:text-[20px] lgB:text-[27px] xl:text-[32px]">
              به هرکجا که میخواهید!
            </span>
          </div>
          <div className="flex items-center justify-between px-3 py-3 STxsA:px-7 md:h-[251px] md:w-[320px] md:flex-col md:justify-center md:gap-y-3">
            <div className="flex gap-x-1 STxsA:gap-x-2">
              <span className="font-VazirDigitBold STxsA:text-[20px] mdC:text-[24px] xl:text-[28px]">
                021-1840
              </span>
              <div className="prevent-select relative mt-1 h-4 w-4 STxsA:h-5 STxsA:w-5 mdC:mt-[6px] xl:mt-2 xl:h-6 xl:w-6">
                <Image
                  fill={true}
                  src={"/images/call.svg"}
                  alt={"باما تماس بگیرید"}
                />
              </div>
            </div>
            <button className="prevent-select rounded-[9px] bg-myGreen-300 px-7 py-2 text-background lg:px-[41px]">
              اطلاعات بیشتر
            </button>
          </div>
        </div>
      </section>
      <section className="prevent-select container">
        <div className="mb-8 flex flex-col items-end gap-x-36 md:flex-row mdC:items-start xl:items-center">
          <div className="mb-11 flex w-full lg:w-1/2">
            <div>
              <div className="flex gap-x-2 md:gap-x-[15px]">
                <div className="relative h-[38px] w-[34px] md:h-[68px] md:w-[59px]">
                  <Image fill src={"/images/Polygon 1.svg"} alt="?" />
                  <span className="absolute right-2.5 top-0 font-VazirBold text-[30px] text-background md:right-5 md:top-1 md:text-[45px]">
                    ؟
                  </span>
                </div>
                <div className="mb-[29px] flex gap-x-2 font-VazirBlack text-[24px] md:gap-x-[15px] md:text-[40px]">
                  <span className="text-myGray-410">چرا</span>
                  <span className="text-myGreen-200">تورینو</span>
                  <span className="text-myGray-410 md:text-[45px]">؟</span>
                </div>
              </div>
              <h3 className="mb-4 font-VazirMedium text-[24px] font-medium">
                تور طبیعت گردی و تاریخی
              </h3>
              <p className="w-fit text-justify font-VazirRegular font-normal tracking-[0.03em] text-myGray-320 md:pl-5 mdC:pl-0 lgB:text-[20px] xl:leading-[44px]">
                اگر دوست داشته باشید که یک جاذبه طبیعی را از نزدیک ببینید و در
                دل طبیعت چادر بزنید یا در یک اقامتگاه بوم گردی اتاق بگیرید، باید
                تورهای طبیعت‌گردی را خریداری کنید. اما اگر بخواهید از جاذبه‌های
                گردشگری و آثار تاریخی یک مقصد خاص بازدید کنید، می‌توانید تورهای
                فرهنگی و تاریخی را خریداری کنید.
              </p>
            </div>
          </div>
          <Slider />
        </div>
      </section>
    </>
  );
}
