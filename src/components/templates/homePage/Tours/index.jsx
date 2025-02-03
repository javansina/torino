import { serverFetch } from "@/core/services/http";
import Cards from "./Cards";

export default async function Tours({ query }) {
  const data = await serverFetch("tour", query, "no-store");
  return <Cards data={data} />;
}
