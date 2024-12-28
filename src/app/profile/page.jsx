"use client";

import UserAccountForm from "@/components/templates/profile/UserAccountForm";
import { useGetUserProfile } from "@/core/services/queries";
import Image from "next/image";

export default function UserAccountPage() {
  const { data } = useGetUserProfile();

  return (
    <>
      <UserAccountForm data={data} />

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
