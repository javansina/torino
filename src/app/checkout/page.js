import Form from "@/components/templates/checkout/Form";
import PurchaseDetailsProvider from "@/components/templates/checkout/PurchaseDetailsProvider";
import { PurchaseDetailsSkeleton } from "@/components/templates/skeletons";
import { Suspense } from "react";

export default async function CheckoutPage() {
  return (
    <div className="min-h-[90vh] pb-[35px] pt-[90px] xs:bg-myGray-110">
      <div className="container">
        <Form>
          <Suspense fallback={<PurchaseDetailsSkeleton />}>
            <PurchaseDetailsProvider />
          </Suspense>
        </Form>
      </div>
    </div>
  );
}
