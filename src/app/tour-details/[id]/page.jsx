import { Suspense } from "react";

import { TourDetailsSkeleton } from "@/components/templates/skeletons";
import Tour from "@/components/templates/tourDetails";

export default async function TourDetails(props) {
  const tourId = await props.params.id;

  return (
    <Suspense fallback={<TourDetailsSkeleton />}>
      <Tour tourId={tourId} />
    </Suspense>
  );
}
