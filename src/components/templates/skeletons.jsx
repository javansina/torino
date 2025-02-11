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
        <span className="font-VazirRegular text-[32px]">همه تور ها</span>
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

export function TourDetailsSkeleton() {
  return (
    <div className="pt-[90px] xs:bg-myGray-110">
      <main className="container pb-10">
        <div className="rounded-[10px] bg-background xs:border xs:p-4">
          <div className="flex flex-col">
            <div
              className={`${shimmer} relative flex flex-col overflow-hidden xs:flex-row-reverse xs:justify-between md:flex-row md:justify-start`}
            >
              <div
                className={`${shimmer} relative aspect-66/100 w-full overflow-hidden rounded-xl bg-gray-200 xsC:max-w-[330px] smB:max-w-[360px] md:max-w-none lg:max-w-[397px]`}
              ></div>
              <div className="p-2 xs:w-[220px] md:flex md:w-full md:flex-col md:justify-between md:pr-6">
                <div className="flex items-center justify-between xs:flex-col xs:items-start xs:gap-y-2 md:flex-row md:items-center mdC:gap-y-4 lg:flex-col lg:items-start">
                  <span className="h-7 w-28 rounded-lg bg-gray-200"></span>
                  <span className="mt-2 h-6 w-16 rounded-2xl bg-gray-200 md:w-24"></span>
                </div>
                <div className="my-5 flex max-w-[320px] flex-wrap justify-start gap-3 xs:flex-col xs:items-start xs:gap-y-2 md:max-w-none lg:max-w-full lg:flex-row lg:justify-start lg:gap-x-5">
                  <div className="flex items-center gap-x-2">
                    <div className="mt-0.5 h-[14px] w-[14px] rounded-full bg-gray-200 xsC:h-5 xsC:w-5"></div>
                    <span className="h-5 w-24 rounded-[5px] bg-gray-200 md:w-24"></span>
                  </div>
                  <div className="flex items-center gap-x-2">
                    <div className="mt-0.5 h-[14px] w-[14px] rounded-full bg-gray-200 xsC:h-5 xsC:w-5"></div>
                    <span className="h-5 w-24 rounded-[5px] bg-gray-200 md:w-24"></span>
                  </div>
                  <div className="flex items-center gap-x-2">
                    <div className="mt-0.5 h-[14px] w-[14px] rounded-full bg-gray-200 xsC:h-5 xsC:w-5"></div>
                    <span className="h-5 w-24 rounded-[5px] bg-gray-200 md:w-24"></span>
                  </div>
                </div>
                <div className="my-8 hidden w-full items-center justify-between md:my-0 md:flex md:flex-row-reverse">
                  <div className="h-[40px] w-[110px] rounded-[10px] bg-gray-200 lg:w-[150px]"></div>

                  <div className="h-[35px] w-[130px] rounded-md bg-gray-200"></div>
                </div>
              </div>
            </div>

            <div className="mt-4">
              <div
                className={`${shimmer} hide-scrollbar scrollbar-webkitu relative flex divide-x divide-x-reverse overflow-y-hidden pt-4 md:w-full lg:justify-between`}
              >
                <div className="flex w-full flex-col items-center gap-y-2 px-4 lgB:px-8">
                  <div className="flex w-[100px] items-center justify-center gap-x-2">
                    <span className="h-6 w-full rounded-md bg-gray-200"></span>
                  </div>
                  <span className="h-6 w-[140px] rounded-[5px] bg-gray-200"></span>
                </div>

                <div className="flex w-full flex-col items-center gap-y-2 px-4 lgB:px-8">
                  <div className="flex w-[100px] items-center justify-center gap-x-2">
                    <span className="h-6 w-full rounded-md bg-gray-200"></span>
                  </div>
                  <span className="h-6 w-[140px] rounded-[5px] bg-gray-200"></span>
                </div>

                <div className="flex w-full flex-col items-center gap-y-2 px-4 lgB:px-8">
                  <div className="flex w-[100px] items-center justify-center gap-x-2">
                    <span className="h-6 w-full rounded-md bg-gray-200"></span>
                  </div>
                  <span className="h-6 w-[140px] rounded-[5px] bg-gray-200"></span>
                </div>

                <div className="flex w-full flex-col items-center gap-y-2 px-4 lgB:px-8">
                  <div className="flex w-[100px] items-center justify-center gap-x-2">
                    <span className="h-6 w-full rounded-md bg-gray-200"></span>
                  </div>
                  <span className="h-6 w-[140px] rounded-[5px] bg-gray-200"></span>
                </div>

                <div className="flex w-full flex-col items-center gap-y-2 px-4 lgB:px-8">
                  <div className="flex w-[100px] items-center justify-center gap-x-2">
                    <span className="h-6 w-full rounded-md bg-gray-200"></span>
                  </div>
                  <span className="h-6 w-[140px] rounded-[5px] bg-gray-200"></span>
                </div>
              </div>
              <div
                className={`${shimmer} relative mt-4 flex items-center justify-between overflow-hidden border-t pt-5 md:hidden`}
              >
                <div className="h-[40px] w-[120px] rounded-[10px] bg-gray-200"></div>

                <div className="h-[30px] w-[100px] rounded-md bg-gray-200"></div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export function ProfileSkeleton() {
  return (
    <div className="my-[75px] md:my-[95px]">
      <section className="container">
        <div className="flex flex-col gap-x-5 md:grid md:grid-cols-12">
          <div className="mb-6 flex justify-evenly gap-x-2 border-b md:col-span-3 md:h-[170px] md:flex-col md:justify-between md:rounded-xl md:border">
            <div className="flex w-1/3 items-center justify-center gap-x-2 rounded-t-[10px] p-3 md:h-1/3 md:w-full md:justify-start md:border-none">
              <div className="relative mt-0.5 h-4 w-4 md:h-5 md:w-5"></div>
              <span className="font-VazirThin text-xs md:font-VazirRegular md:text-sm">
                پروفایل
              </span>
            </div>
            <div className="flex w-1/3 items-center justify-center gap-x-2 p-3 md:h-1/3 md:w-full md:justify-start md:border-b md:border-t md:py-4">
              <div className="relative mt-0.5 h-4 w-4 md:h-5 md:w-5"></div>
              <span className="font-VazirThin text-xs md:font-VazirRegular md:text-sm">
                تورهای من
              </span>
            </div>
            <div className="flex w-1/3 items-center justify-center gap-x-2 p-3 md:h-1/3 md:w-full md:justify-start md:rounded-b-[10px] md:border-none">
              <div className="relative mt-0.5 h-4 w-4 md:h-5 md:w-5"></div>
              <span className="font-VazirThin text-xs md:font-VazirRegular md:text-sm">
                تراکنش ها
              </span>
            </div>
          </div>
          <div className="col-span-9 h-full">moz</div>
        </div>
      </section>
    </div>
  );
}
