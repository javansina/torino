import Banner from "@/components/templates/homePage/Banner";
import Main from "@/components/templates/homePage/Main";
import SearchFrom from "@/components/templates/homePage/Search";
import Tours from "@/components/templates/homePage/Tours";
import { CardsSkeleton } from "@/components/templates/skeletons";

import { Suspense } from "react";

export default async function Home(props) {
  const query = await props.searchParams;

  return (
    <>
      <Banner />
      <SearchFrom />
      <Suspense fallback={<CardsSkeleton />}>
        <Tours query={query} />
      </Suspense>
      <Main />
    </>
  );
}
