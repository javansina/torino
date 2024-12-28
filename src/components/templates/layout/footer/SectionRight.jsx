import Link from "next/link";

export default function SectionRight() {
  return (
    <div className="prevent-select mb-[37px] flex justify-between xsB:mb-0">
      <div className="ml-[50px] lg:ml-[100px]">
        <span className="font-VazirMedium text-[22px] font-medium tracking-wide text-myGray-410 xsB:text-[18px] lg:text-[24px]">
          تورینو
        </span>
        <div className="mt-5 flex flex-col gap-[11px] font-VazirRegular text-[16px] child:font-normal child:tracking-wider child:text-myGray-410 xsB:text-[12px] md:mt-6 md:gap-2 child:lg:text-[18px]">
          <span>
            <Link href={"#"}>درباره ما</Link>
          </span>
          <span>
            <Link href={"/contact-us"}>تماس با ما</Link>
          </span>
          <span>
            <Link href={"#why_torino"}>چرا تورینو</Link>
          </span>
          <span>
            <Link href={"#"}>بیمه مسافرتی</Link>
          </span>
        </div>
      </div>
      <div>
        <span className="flex-col font-VazirMedium text-[22px] font-medium tracking-wider text-myGray-410 xsB:text-[18px] md:flex lg:text-[24px]">
          خدمات مشتریان
        </span>
        <div className="mt-5 flex flex-col gap-[11px] font-VazirRegular text-[16px] child:font-normal child:tracking-wider child:text-myGray-410 xsB:text-[12px] md:mt-6 md:gap-2 child:lg:text-[18px]">
          <span>
            <Link href={"#"}>پشتیبانی آنلاین</Link>
          </span>
          <span>
            <Link href={"#"}>راهنمای خرید</Link>
          </span>
          <span>
            <Link href={"#"}>راهنمای استرداد</Link>
          </span>
          <span>
            <Link href={"#"}>پرسش و پاسخ</Link>
          </span>
        </div>
      </div>
    </div>
  );
}
