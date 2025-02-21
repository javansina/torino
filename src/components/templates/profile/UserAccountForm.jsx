"use client";

import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";

import { email } from "@/core/schema";
import { yupResolver } from "@hookform/resolvers/yup";
import { usePutUserData } from "@/core/services/mutations";
import toast from "react-hot-toast";

export default function UserAccountForm({ data, setIsEditingEmail }) {
  const [userEmail, setUserEmail] = useState("");

  useEffect(() => {
    if (!!data?.email) {
      setUserEmail(data.email);
      setValue("email", data.email);
    }
  }, []);

  const {
    register,
    handleSubmit,
    setValue,
    trigger,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(email),
  });
  const { mutate } = usePutUserData();

  const submitHandler = (form) => {
    if (data?.email !== form.email) {
      mutate(
        { ...form },
        {
          onSuccess: () => {
            toast.success("تغییرات با موفقیت ذخیره شد!");
            setIsEditingEmail(false);
          },
          onError: (err) => toast.error(err.message),
        },
      );
    }
  };
  return (
    <form
      onSubmit={handleSubmit(submitHandler)}
      className="flex w-full flex-wrap items-start justify-start gap-4 xs:justify-between lg:max-w-[350px]"
    >
      <div className="relative w-full xs:max-w-[260px] lg:max-w-[240px]">
        <input
          type="text"
          {...register("email")}
          value={userEmail}
          onChange={(e) => {
            setValue("email", e.target.value);
            setUserEmail(e.target.value);
            trigger("email");
          }}
          placeholder="آدرس ایمیل"
          className={`ltr line-clamp-1 w-full rounded-lg px-2 text-[14px] leading-10 tracking-wide ${!!errors?.email ? "border outline-myRed-100/70" : "border border-neutral-500/40 outline-neutral-500/20"} `}
        />
        <div className="absolute -bottom-5 left-0">
          {!!errors?.email && (
            <p className="mr-2 w-fit rounded-2xl px-1 font-VazirDigitThin text-xs text-myRed-100">
              {errors?.email?.message}
            </p>
          )}
        </div>
      </div>

      <button
        type="submit"
        className="w-full max-w-[90px] rounded-lg bg-myGreen-200 py-2 font-VazirRegular text-background hover:bg-myGreen-200/90"
      >
        تایید
      </button>
    </form>
  );
}
