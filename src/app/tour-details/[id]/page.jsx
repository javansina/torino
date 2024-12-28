"use client";

import Details from "@/components/templates/tourDetails/Details";
import { useGetTourById } from "@/core/services/queries";
import { usePathname } from "next/navigation";

export default function TourDetails() {
  const path = usePathname().split("/");
  const { data, isPending } = useGetTourById(path[2]);

  if (isPending) return <h1 className="mt-[100px]">loading</h1>;
  return (
    <div className="pt-[90px] xs:bg-myGray-110">
      <Details data={data} />
    </div>
  );
}
