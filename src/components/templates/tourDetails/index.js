import Details from "./Details";
import { serverFetch } from "@/core/services/http";

export default async function Tour({ tourId }) {
  const data = await serverFetch(`tour/${tourId}`, null, "no-store");

  return <Details data={data} />;
}
