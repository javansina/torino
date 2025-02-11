"use client";

import { Calendar, CalendarProvider } from "zaman";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { formatDate, monthNomToFa } from "@/core/utils/helper/detailsFormatter";
import OutsideClickHandler from "@/core/utils/helper/OutsideClickHandler";
import { usePostOrder } from "@/core/services/mutations";
import { yupResolver } from "@hookform/resolvers/yup";
import PurchaseDetails from "./PurchaseDetails";
import { personalInfo } from "@/core/schema";

export default function Form({
  whereIam: {
    isProfile,
    isCheckout,
    data: { title, setIsEditingPersonalInfo = null },
  },
}) {
  const {
    register,
    handleSubmit,
    setValue,
    trigger,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(personalInfo),
  });
  const [gender, setGender] = useState("");
  const [genderDropDown, setGenderDropDown] = useState(false);
  const [isEmptyBasket, setIsEmptyBasket] = useState(false);
  const [dateSelecting, setDateSelecting] = useState(false);
  const [calendarValue, setCalendarValue] = useState("");

  const { mutate } = usePostOrder();

  const router = useRouter();

  const submitHandler = (form) => {
    mutate(
      { ...form },
      {
        onError: (err) => toast.error(err.message),
        onSuccess: () => toast.success("تور با موفقیت خریداری شد!"),
      },
    );
    router.replace("/profile/tours");
  };

  const dateChangeHandler = (e) => {
    const value = new Date(e.value);
    setCalendarValue(monthNomToFa(value)[0]);
    setValue("birthDate", formatDate(value));
    setDateSelecting(false);
    trigger("birthDate");
  };

  const genderHandler = (v, g) => {
    setValue("gender", v);
    setGenderDropDown(false);
    setGender(g);
    trigger("gender");
  };

  return (
    <form
      onSubmit={handleSubmit(submitHandler)}
      className={`flex min-w-full gap-x-[30px] ${isCheckout && "lg:flex-row"} flex-col`}
    >
      <div
        className={`w-full rounded-[10px] ${isCheckout && "border px-6 pb-9 pt-6"} bg-background`}
      >
        <div className="mb-[17px] flex items-center gap-x-3">
          {isCheckout && (
            <div className="relative h-6 w-6">
              <Image src={"/images/profile (2).svg"} alt="prof" fill={true} />
            </div>
          )}
          <span
            className={
              isCheckout
                ? "font-VazirRegular text-[24px]"
                : "font-VazirDigitRegular tracking-wide xsB:text-lg"
            }
          >
            {title}
          </span>
        </div>
        <div className="grid grid-cols-12 gap-x-6">
          <div className="relative col-span-12 xs:col-span-6">
            <input
              className="line-clamp-1 w-full rounded-lg border border-black/25 px-2 py-1.5 font-VazirDigitRegular leading-10 placeholder:font-VazirDigitRegular"
              {...register("fullName")}
              placeholder="نام و نام خانوادگی"
              type="text"
            />

            <div className="min-h-9 w-full">
              {!!errors?.fullName && (
                <p className="pr-2 pt-1 font-VazirDigitThin text-myRed-100">
                  {errors?.fullName?.message}
                </p>
              )}
            </div>
          </div>
          <div className="relative col-span-12 xs:col-span-6">
            <input
              className="no-spin line-clamp-1 w-full rounded-lg border border-black/25 px-2 py-1.5 font-VazirDigitRegular leading-10 placeholder:font-VazirDigitRegular"
              {...register("nationalCode")}
              placeholder="کد ملی"
              type="number"
            />
            <div className="min-h-9 w-full">
              {!!errors?.nationalCode && (
                <p className="pr-2 pt-1 font-VazirDigitThin text-myRed-100">
                  {errors?.nationalCode?.message}
                </p>
              )}
            </div>
          </div>
          <div className="relative col-span-12 xs:col-span-6">
            <input
              type="text"
              {...register("birthDate")}
              value={calendarValue}
              placeholder="تاریخ تولد"
              autoComplete="off"
              readOnly
              onClick={() => setDateSelecting(true)}
              className="no-spin col-span-12 line-clamp-1 w-full rounded-lg border border-black/25 px-2 py-1.5 font-VazirDigitRegular leading-10 placeholder:font-VazirDigitRegular xs:col-span-6"
            />
            {dateSelecting && (
              <OutsideClickHandler
                onOutsideClick={() => setDateSelecting(false)}
                className={"absolute top-[60px] z-10"}
              >
                <CalendarProvider
                  round="x1"
                  accentColor={"#28A745"}
                  locale="fa"
                  direction={"rtl"}
                >
                  <Calendar
                    accentColor="#aD9062"
                    defaultValue={new Date()}
                    onChange={dateChangeHandler}
                  />
                </CalendarProvider>
              </OutsideClickHandler>
            )}
            <div className="min-h-9 w-full">
              {!!errors?.birthDate && (
                <p className="pr-2 pt-1 font-VazirDigitThin text-myRed-100">
                  {errors?.birthDate?.message}
                </p>
              )}
            </div>
          </div>
          <div className="relative col-span-12 xs:col-span-6">
            <input
              type="text"
              {...register("gender")}
              placeholder="جنسیت"
              autoComplete="off"
              value={gender}
              readOnly
              onClick={() => setGenderDropDown(true)}
              className="no-spin col-span-12 line-clamp-1 w-full rounded-lg border border-black/25 px-2 py-1.5 font-VazirDigitRegular leading-10 placeholder:font-VazirDigitRegular xs:col-span-6 md:col-span-4"
            />
            {genderDropDown && (
              <OutsideClickHandler
                onOutsideClick={() => setGenderDropDown(false)}
                className={
                  "header-shadow absolute right-0 top-[60px] flex w-full flex-col divide-y rounded-lg border border-black/25 bg-background px-1"
                }
              >
                <div
                  onClick={() => genderHandler("female", "زن")}
                  className="px-2 py-2 font-VazirDigitRegular"
                >
                  زن
                </div>
                <div
                  onClick={() => genderHandler("male", "مرد")}
                  className="px-2 py-2 font-VazirDigitRegular"
                >
                  مرد
                </div>
              </OutsideClickHandler>
            )}
            <div className="min-h-9 w-full">
              {!!errors?.gender && (
                <p className="pr-2 pt-1 font-VazirDigitThin text-myRed-100">
                  {errors?.gender?.message}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
      {isCheckout && (
        <div className="my-[30px] flex min-w-[320px] flex-col justify-between rounded-[10px] border bg-background p-6 lg:my-0">
          <PurchaseDetails
            isEmptyBasket={isEmptyBasket}
            setIsEmptyBasket={setIsEmptyBasket}
          />
          <SubmitButton isEmptyBasket={isEmptyBasket} />
        </div>
      )}
      {isProfile && (
        <>
          <div className="flex gap-x-7 lg:justify-end">
            <button className="w-full rounded-lg bg-myGreen-200 py-2.5 text-center font-VazirRegular text-[18px] text-background lg:w-[140px]">
              تایید
            </button>
            <button
              onClick={() => setIsEditingPersonalInfo(false)}
              className="w-full rounded-lg border-2 border-myGreen-200 bg-background py-2.5 text-center font-VazirRegular text-[18px] text-myGreen-200 lg:w-[140px]"
            >
              انصراف
            </button>
          </div>
        </>
      )}
    </form>
  );
}

function SubmitButton({ isEmptyBasket }) {
  return (
    <>
      {isEmptyBasket ? (
        <Link
          href={"/"}
          className="w-full rounded-[10px] bg-myRed-100/60 py-3 text-center font-VazirMedium tracking-wider text-background"
        >
          بازگشت به صفحه اصلی
        </Link>
      ) : (
        <button
          type="submit"
          className="w-full rounded-[10px] bg-myGreen-200 py-3 font-VazirMedium tracking-wide text-background"
        >
          ثبت و خرید نهایی
        </button>
      )}
    </>
  );
}
