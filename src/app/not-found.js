import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="not-found-page-h container flex w-full flex-col-reverse justify-between md:flex-row lg:gap-x-[2vw]">
      <div className="flex h-full flex-col items-center justify-start gap-y-5 font-semibold md:w-1/2 md:justify-center md:gap-y-14 lg:gap-y-20">
        <span className="text-2xl text-myGray-410 lg:text-4xl">
          صفحه مورد نظر یافت نشد!
        </span>
        <Link
          className="rounded-2xl bg-myGreen-100 px-[19px] py-[13px] text-xl text-myGreen-200 hover:bg-myGreen-90 lg:px-[45px] lg:py-4 lg:text-[28px] lg:leading-[43px]"
          href={"/"}
        >
          <p>بازگشت به صفحه اصلی</p>
        </Link>
      </div>
      <div className="relative h-full w-full md:w-1/2">
        <Image fill={true} src={"/images/Error TV.svg"} alt="Page not found!" />
      </div>
    </div>
  );
}
