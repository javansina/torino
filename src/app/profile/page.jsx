"use client";

import Form from "@/components/templates/checkout/Form";
import UserAccountForm from "@/components/templates/profile/UserAccountForm";
import { useGetUserProfile } from "@/core/services/queries";
import Image from "next/image";
import { useState } from "react";

export default function UserAccountPage() {
  const [isEditingEmail, setIsEditingEmail] = useState(false);
  const [isEditingPersonalInfo, setIsEditingPersonalInfo] = useState(false);
  const { data, isLoding, isError } = useGetUserProfile();

  return (
    <>
      <section className="flex flex-col gap-y-5">
        <div className="flex flex-col gap-y-7 rounded-[10px] border border-black/20 p-5 pt-6">
          <span className="px-2 font-VazirRegular text-[16px]">
            اطلاعات حساب کاربری
          </span>
          <div className="flex flex-row flex-wrap justify-between gap-y-3">
            <div className="flex w-full justify-between px-2 lg:max-w-[230px] xl:max-w-[320px]">
              <span className="font-VazirThin text-[14px] xsB:text-lg">
                شماره موبایل
              </span>
              <span className="font-VazirDigitRegular tracking-wide xsB:text-lg">
                {data?.data?.mobile}
              </span>
            </div>
            {isEditingEmail ? (
              <UserAccountForm
                data={data}
                setIsEditingEmail={setIsEditingEmail}
              />
            ) : (
              <>
                <div className="flex w-full flex-wrap items-start justify-between lg:max-w-[370px]">
                  <div className="flex w-full items-start justify-between gap-x-2 px-2">
                    <span className="w-1/3 pb-1 font-VazirThin text-[14px] xsB:text-lg">
                      آدرس ایمیل
                    </span>
                    <div
                      className={`flex flex-wrap-reverse ${data?.data?.email ? "flex-row" : "flex-row-reverse"} items-start justify-end gap-4`}
                    >
                      <button
                        onClick={() => setIsEditingEmail(true)}
                        className={`ml-0.5 flex items-center justify-end gap-2 font-VazirRegular text-[14px] font-thin tracking-wide text-myBlue-100 xsB:text-lg`}
                      >
                        <Image
                          src={"/images/edit-2.svg"}
                          width={16}
                          height={16}
                          alt="تورینو"
                        />
                        <span>افزودن</span>
                      </button>
                      <span className="font-VazirRegular text-sm xsB:text-lg">
                        {data?.data?.email ? data?.data?.email : "----"}
                      </span>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
        <div className="flex flex-col gap-y-7 rounded-[10px] border border-black/20 p-6 pt-6">
          {isEditingPersonalInfo ? (
            <Form
              whereIam={{
                isProfile: true,
                isCheckout: false,
                data: {
                  title: "ویرایش اطلاعات شخصی",
                  setIsEditingPersonalInfo,
                },
              }}
            />
          ) : (
            <>
              <div className="flex w-full justify-between">
                <span className="px-2 font-VazirRegular text-[16px]">
                  اطلاعات حساب کاربری
                </span>
                <button
                  onClick={() => setIsEditingPersonalInfo(true)}
                  className={`ml-0.5 flex items-center justify-end gap-2 font-VazirRegular text-[14px] font-thin tracking-wide text-myBlue-100 xsB:text-lg`}
                >
                  <Image
                    src={"/images/edit-2.svg"}
                    width={16}
                    height={16}
                    alt="تورینو"
                  />
                  <span>ویرایش اطلاعات</span>
                </button>
              </div>
              <div className="grid grid-cols-12 gap-x-4">
                <div className="relative col-span-12 lg:col-span-6">
                  <div className="flex w-full justify-between">
                    <span className="max-w-1/3 pb-1 font-VazirThin text-[14px] xsB:text-lg">
                      نام و نام خانوادگی
                    </span>
                    <span className="w-1/2 font-VazirRegular text-sm xsB:text-base">
                      {data?.data?.fullName}
                    </span>
                  </div>
                </div>
                <div className="relative col-span-12 lg:col-span-6">
                  <div className="flex w-full justify-between">
                    <span className="max-w-1/3 pb-1 font-VazirThin text-[14px] xsB:text-lg">
                      کدملی
                    </span>
                    <span className="w-1/2 font-VazirDigitRegular text-sm xsB:text-lg">
                      {data?.data?.nationalCode}
                    </span>
                  </div>
                </div>
                <div className="relative col-span-12 lg:col-span-6">
                  <div className="flex w-full justify-between">
                    <span className="max-w-1/3 pb-1 font-VazirThin text-[14px] xsB:text-lg">
                      جنسیت
                    </span>
                    <span className="w-1/2 font-VazirRegular text-sm xsB:text-lg">
                      {data?.data?.gender === "male" ? "مرد" : "زن"}
                    </span>
                  </div>
                </div>
                <div className="relative col-span-12 lg:col-span-6">
                  <div className="flex w-full justify-between">
                    <span className="max-w-1/3 pb-1 font-VazirThin text-[14px] xsB:text-lg">
                      تاریخ تولد
                    </span>
                    <span className="w-1/2 font-VazirDigitRegular text-sm tracking-wide xsB:text-lg">
                      56534/453/34
                    </span>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </section>
    </>
  );
}
