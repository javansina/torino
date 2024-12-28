import Image from "next/image";

export default function SectionLeft() {
  const emblems = [
    { id: 1, alt: "aira", src: "/images/badges/aira-682b7c43.svg" },
    { id: 2, alt: "samandehi", src: "/images/badges/samandehi-6e2b448a.svg" },
    { id: 3, alt: "ecunion", src: "/images/badges/ecunion-35c3c933.svg" },
    {
      id: 4,
      alt: "passenger-rights",
      src: "/images/badges/passenger-rights-48368f81 2.svg",
    },
    {
      id: 5,
      alt: "state-airline",
      src: "/images/badges/state-airline-f45c55b2 1.svg",
    },
  ];
  return (
    <div className="mb-7 flex flex-row-reverse gap-[41px] xsB:flex-col xsB:items-end">
      <div className="ltr flex flex-col gap-y-5">
        <div className="relative h-[35px] w-[130px] text-left lg:h-[44px] lg:w-[164px]">
          <Image fill={true} src="/images/Torino-Logo.svg" alt="torino logo" />
        </div>
        <div className="rtl flex min-w-40 gap-x-1.5 text-[14px] md:text-[15px]">
          <span className="prevent-select font-VazirRegular">
            تلفن پشتیبانی :
          </span>
          <span className="font-VazirDigit font-normal">021-8574</span>
        </div>
      </div>
      <div className="prevent-select ltr flex flex-wrap items-center justify-center gap-4 mdC:gap-[32px]">
        {emblems.map((item) => (
          <div
            key={item.id}
            className="relative h-[38px] w-[35px] md:h-[55px] md:w-[50px] lg:h-[74px] lg:w-[68px]"
          >
            <Image fill={true} alt={item.alt} src={item.src} />
          </div>
        ))}
      </div>
    </div>
  );
}
