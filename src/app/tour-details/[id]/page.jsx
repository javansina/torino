import { TourDetailsSkeleton } from "@/components/templates/skeletons";
import Tour from "@/components/templates/tourDetails";
import Details from "@/components/templates/tourDetails/Details";
import { serverFetch } from "@/core/services/http";
import { Suspense } from "react";

export default async function TourDetails(props) {
  const tourId = await props.params.id;

  return (
    <Suspense fallback={<TourDetailsSkeleton />}>
      <Tour tourId={tourId} />
    </Suspense>
  );
}
