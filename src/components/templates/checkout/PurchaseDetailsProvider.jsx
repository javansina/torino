import { serverFetch } from "@/core/services/http";
import PurchaseDetails from "./PurchaseDetails";
import { PurchaseDetailsSkeleton } from "../skeletons";

export default async function PurchaseDetailsProvider({
  token,
  isLogin,
  setIsEmptyBasket,
}) {
  const data = await serverFetch("basket", null, "no-store", token);

  if (!data || !isLogin) return <h1>مشکلی پیش امد !</h1>;

  return <PurchaseDetails data={data} setIsEmptyBasket={setIsEmptyBasket} />;
}
