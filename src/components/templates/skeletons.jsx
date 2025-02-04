const shimmer =
  "before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent";

export function CardSkeleton() {
  return (
    <div
      className={`${shimmer} relative col-span-12 flex flex-col overflow-hidden rounded-xl shadow-sm xsB:col-span-6 md:col-span-4 xl:col-span-3`}
    >
      <div className="h-[159px] w-full bg-gray-100"></div>
      <div className="flex flex-col gap-y-[6px] rounded-b-[12px] bg-gray-50 p-2">
        <span className="my-2 h-[20px] w-[50%] rounded-md bg-gray-200 shadow-sm"></span>
        <span className="my-1 h-[16px] w-[90%] rounded-md bg-gray-200 shadow-sm"></span>
        <span className="my-1 h-[16px] w-[70%] rounded-md bg-gray-200 shadow-sm"></span>
        <div className="flex items-center justify-between border-t">
          <span className="mt-[6px] h-[35px] w-[90px] rounded-[7px] bg-gray-200 shadow-sm"></span>
          <span className="mt-[6px] h-[20px] w-[90px] rounded-[5px] bg-gray-200 shadow-sm"></span>
        </div>
      </div>
    </div>
  );
}

export function CardsSkeleton() {
  return (
    <section className="container">
      <div className="mb-9">
        <span className="text-[32px]">همه تور ها</span>
      </div>
      <div className="grid grid-cols-12 gap-x-[25px] gap-y-[30px]">
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
      </div>
    </section>
  );
}

export function PurchaseDetailsSkeleton() {
  return (
    <>
      <div
        className={`${shimmer} dashed-border-checkout border-t-none relative flex items-center justify-between overflow-hidden pb-8 pt-6 leading-5`}
      >
        <span className="h-6 w-24 rounded-md bg-gray-200/70"></span>
        <div className="h-6 w-24 rounded-md bg-gray-200/70"></div>
      </div>

      <div
        className={`${shimmer} relative flex h-fit items-center justify-between overflow-hidden py-6`}
      >
        <span className="h-9 w-28 rounded-lg bg-gray-200/70"></span>
        <span className="h-9 w-28 rounded-lg bg-gray-200/70"></span>
      </div>
    </>
  );
}
