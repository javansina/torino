"use client";

import { email } from "@/core/schema";
import { yupResolver } from "@hookform/resolvers/yup";
import { setConfig } from "next/config";
import Image from "next/image";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";

export default function UserAccountForm({ data }) {
  const [isEditing, setIsEditing] = useState(false);
  const [userEmail, setUserEmail] = useState("-");
  const inputRef = useRef(null);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(email),
  });

  const submitHandler = (form) => {
    console.log(form);
    setValue("email", form.email);
  };
  return (
    <form
      onSubmit={handleSubmit(submitHandler)}
      className="flex flex-col gap-y-7 rounded-[10px] border border-myGray-130 p-4 font-VazirDigitRegular"
    >
      <span className="font-VazirMedium text-[16px]">اطلاعات حساب کاربری</span>
      <div className="flex w-full justify-between">
        <span className="font-VazirThin text-[14px]">شماره موبایل</span>
        <span className="font-VazirDigitRegular">{data?.data?.mobile}</span>
      </div>
      <div>
        <span>ایمیل</span>
        <input
          type="text"
          {...register("email")}
          value={data?.data?.email || userEmail}
          placeholder="تاریخ تولد"
          autoComplete="off"
          readOnly={!isEditing}
          ref={inputRef}
          className={`${!isEditing ? "border-none focus:outline-none" : "border border-neutral-500 outline-neutral-500"} no-spin col-span-12 line-clamp-1 w-full rounded-lg px-2 py-1.5 leading-10 xs:col-span-6 md:col-span-4`}
        />
        <span>{data?.data?.email || "-"}</span>
        <div
          onClick={() => {
            setIsEditing(true);
            inputRef.current.focus();
          }}
        >
          <div className="relative h-4 w-4">
            <Image fill={true} src={"/images/edit-2.svg"} alt={"editIcon"} />
          </div>
          <span>افزودن</span>
        </div>
      </div>
      <button
        type="submit"
        className="w-full rounded-[10px] bg-myGreen-200 py-3 text-background"
      >
        ثبت و خرید نهایی
      </button>
    </form>
  );
}
