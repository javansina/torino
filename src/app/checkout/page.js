"use server";
import Form from "@/components/templates/checkout/Form";
import { serverFetch } from "@/core/services/http";
import { cookies } from "next/headers";

export default async function CheckoutPage() {
  const cookieStore = cookies();
  const token = cookieStore.get("accessToken")?.value;

  const data = await serverFetch("basket", null, "no-store", token);

  return (
    <div className="min-h-[90vh] pb-[35px] pt-[90px] xs:bg-myGray-110">
      <div className="container">
        <Form data={data} />
      </div>
    </div>
  );
}
