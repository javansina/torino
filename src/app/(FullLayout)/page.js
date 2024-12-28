import Banner from "@/components/templates/homePage/Banner";
import Main from "@/components/templates/homePage/Main";
import SearchFrom from "@/components/templates/homePage/Search";
import Tours from "@/components/templates/homePage/Tours";

import { serverFetch } from "@/core/services/http";

export default async function Home({ searchParams }) {
  const data = await serverFetch("tour", searchParams, "no-store");

  return (
    <>
      <Banner />
      <SearchFrom />
      <Tours data={data} />
      <Main />
    </>
  );
}
