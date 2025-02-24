"use client";
import { formatDate, monthNomToFa } from "@/core/utils/helper/detailsFormatter";
import OutsideClickHandler from "@/core/utils/helper/OutsideClickHandler";
import Image from "next/image";
import { personalInfo } from "@/core/schema";
import { yupResolver } from "@hookform/resolvers/yup";
import { Calendar, CalendarProvider } from "zaman";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useState } from "react";

export default function UserInfoForm() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(personalInfo),
  });
  const [calendarValue, setCalendarValue] = useState(new Date());
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
    console.log(value);

    // setCalendarValue(monthNomToFa(value)[1]);
    // setValue("birthDate", formatDate(value));
    // setDateSelecting(false);
  };

  const genderHandler = (v, g) => {
    setValue("gender", v);
    setGender([false, g]);
  };
  return (
    <form
      onSubmit={handleSubmit(submitHandler)}
      className="flex min-w-full flex-col gap-x-[30px] lg:flex-row"
    >
      <div className="w-full rounded-[10px] border bg-background p-4">
        <div className="mb-[17px] flex items-center gap-x-3">
          <div className="relative h-6 w-6">
            <Image src={"/images/profile (2).svg"} alt="prof" fill={true} />
          </div>
          <span className="font-VazirRegular text-[24px]">مشخصات مسافر</span>
        </div>
        <div className="relative grid grid-cols-12 gap-6">
          <input
            className="col-span-12 line-clamp-1 rounded-lg border border-black/25 px-2 py-1.5 leading-10 xs:col-span-6 md:col-span-4"
            {...register("fullName")}
            placeholder="نام و نام خانوادگی"
            type="text"
          />
          {!!errors?.fullName && <span>{errors?.fullName?.message}</span>}

          <input
            className="no-spin col-span-12 line-clamp-1 rounded-lg border border-black/25 px-2 py-1.5 leading-10 xs:col-span-6 md:col-span-4"
            {...register("nationalCode")}
            placeholder="کد ملی"
            type="number"
          />
          {!!errors?.nationalCode && (
            <span>{errors?.nationalCode?.message}</span>
          )}
          <div className="relative col-span-12 rounded-lg border border-black/25 leading-10 xs:col-span-6 md:col-span-4">
            <input
              type="text"
              {...register("birthDate")}
              value={calendarValue}
              placeholder="تاریخ تولد"
              autoComplete="off"
              readOnly
              onFocus={() => setDateSelecting(true)}
              className="no-spin col-span-12 line-clamp-1 w-full rounded-lg px-2 py-1.5 leading-10 xs:col-span-6 md:col-span-4"
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
            {!!errors?.birthDate && <span>{errors?.birthDate?.message}</span>}
          </div>

          <div className="relative col-span-12 rounded-lg border border-black/25 leading-10 xs:col-span-6 md:col-span-4">
            <input
              type="text"
              {...register("gender")}
              value={gender[1]}
              placeholder="جنسیت"
              autoComplete="off"
              readOnly
              onFocus={() => setGender((i) => [true, i[1]])}
              className="no-spin col-span-12 line-clamp-1 w-full rounded-lg px-2 py-1.5 leading-10 xs:col-span-6 md:col-span-4"
            />
            {gender[0] && (
              <OutsideClickHandler
                onOutsideClick={() => setGender((i) => [false, i[1]])}
                className={
                  "header-shadow absolute right-0 top-[60px] flex w-full flex-col divide-y rounded-lg border border-black/25 bg-background px-1"
                }
              >
                <div
                  onClick={() => genderHandler("female", "زن")}
                  className="px-2 py-2"
                >
                  زن
                </div>
                <div
                  onClick={() => genderHandler("male", "مرد")}
                  className="px-2 py-2"
                >
                  مرد
                </div>
              </OutsideClickHandler>
            )}
            {!!errors?.gender && <span>{errors?.gender?.message}</span>}
          </div>
        </div>
      </div>
    </form>
  );
}
