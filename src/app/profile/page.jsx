"use client";

import UserInfoForm from "@/components/templates/checkout/UserInfoForm";
import { usePutUserData } from "@/core/services/mutations";
import { useGetUserProfile } from "@/core/services/queries";
import Image from "next/image";
import { useState } from "react";

export default function UserAccountPage() {
  const { data } = useGetUserProfile();
  console.log(data);

  return (
    <>
      <div>
        <span>اطلاعات کاربری</span>
        <div>
          <div className="flex w-full justify-between">
            <span>شماره موبایل</span>
            <span>{data?.data?.mobile}</span>
          </div>
          <div>
            <input type="email" />
            <input type="submit" />
          </div>
        </div>
      </div>

      <section>
        <div>
          <span>اطلاعات شخصی</span>
          <div>
            <div className="relative h-4 w-4">
              <Image fill={true} src={"/images/edit-2.svg"} alt={"editIcon"} />
            </div>
            <span>ویرایش اطلاعات</span>
          </div>
        </div>
      </section>
    </>
  );
}
