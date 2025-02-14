"use client";

import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useEffect } from "react";

import { yupResolver } from "@hookform/resolvers/yup";
import { bankAcountSchema } from "@/core/schema";
import { usePutUserData } from "@/core/services/mutations";

export default function BankAccountForm({
  payment,
  setIsEditingBankAccount,
  title,
}) {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(bankAcountSchema),
  });

  const { mutate } = usePutUserData();

  useEffect(() => {
    if (!!payment?.shaba_code) {
      setValue("shaba_code", payment?.shaba_code);
    }
    if (!!payment?.debitCard_code) {
      setValue("debitCard_code", payment?.debitCard_code);
    }
    if (!!payment?.accountIdentifier) {
      setValue("accountIdentifier", payment?.accountIdentifier);
    }
  }, []);

  const submitBankInfoHandler = (form) => {
    if (
      form.shaba_code !== payment?.shaba_code ||
      form.debitCard_code !== payment?.debitCard_code ||
      form.accountIdentifier !== payment?.accountIdentifier
    ) {
      mutate(
        { payment: form },
        {
          onSuccess: () => toast.success("تور با موفقیت خریداری شد!"),
          onError: (err) => {
            toast.error(err.message);
            return;
          },
        },
      );
    }

    setIsEditingBankAccount(false);
  };

  return (
    <form
      onSubmit={handleSubmit(submitBankInfoHandler)}
      className={`flex min-w-full flex-col gap-x-[30px] lg:flex-row`}
    >
      <div className={`w-full rounded-[10px]`}>
        <div className="mb-[17px] flex items-center gap-x-3">
          <span className="font-VazirRegular text-[14px] xs:text-[16px]">
            {title}
          </span>
        </div>
        <div className="grid grid-cols-12 gap-x-6">
          <div className="relative col-span-12 xsC:col-span-6">
            <input
              className="no-spin line-clamp-1 w-full rounded-lg border border-black/25 px-2 py-1.5 font-VazirDigitRegular leading-7 placeholder:font-VazirDigitRegular"
              {...register("shaba_code")}
              placeholder="شماره شبا"
              type="number"
            />
            <div className="min-h-9 w-full">
              {!!errors?.shaba_code && (
                <p className="pr-2 pt-1 font-VazirDigitThin text-myRed-100">
                  {errors?.shaba_code?.message}
                </p>
              )}
            </div>
          </div>
          <div className="relative col-span-12 xsC:col-span-6">
            <input
              className="no-spin line-clamp-1 w-full rounded-lg border border-black/25 px-2 py-1.5 font-VazirDigitRegular leading-7 placeholder:font-VazirDigitRegular"
              {...register("debitCard_code")}
              placeholder="شماره کارت"
              type="number"
            />
            <div className="min-h-9 w-full">
              {!!errors?.debitCard_code && (
                <p className="pr-2 pt-1 font-VazirDigitThin text-myRed-100">
                  {errors?.debitCard_code?.message}
                </p>
              )}
            </div>
          </div>
          <div className="relative col-span-12 xsC:col-span-6">
            <input
              className="no-spin line-clamp-1 w-full rounded-lg border border-black/25 px-2 py-1.5 font-VazirDigitRegular leading-7 placeholder:font-VazirDigitRegular"
              {...register("accountIdentifier")}
              placeholder="شماره حساب"
              type="number"
            />
            <div className="min-h-9 w-full">
              {!!errors?.accountIdentifier && (
                <p className="pr-2 pt-1 font-VazirDigitThin text-myRed-100">
                  {errors?.accountIdentifier?.message}
                </p>
              )}
            </div>
          </div>
        </div>
        <div className="flex gap-x-7 lg:justify-end">
          <button
            type="submit"
            className="w-full rounded-lg bg-myGreen-200 py-2.5 text-center font-VazirRegular text-[18px] text-background lg:w-[140px]"
          >
            تایید
          </button>
          <button
            onClick={() => setIsEditingBankAccount(false)}
            className="w-full rounded-lg border-2 border-myGreen-200 bg-background py-2.5 text-center font-VazirRegular text-[18px] text-myGreen-200 lg:w-[140px]"
          >
            انصراف
          </button>
        </div>
      </div>
    </form>
  );
}
