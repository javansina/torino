import Image from "next/image";

export default function LoginButton({ setIsOpen }) {
  return (
    <button onClick={() => setIsOpen(true)}>
      <div className="hidden items-center gap-x-1 rounded-[9px] border-[2px] border-myGreen-200 py-[2px] pl-[10px] pr-[6px] hover:bg-myGreen-90 md:flex lg:gap-x-1.5 lg:py-[4px] lg:pl-[15px] lg:pr-[10px]">
        <div className="relative h-5 w-5 lg:h-6 lg:w-6">
          <Image fill={true} src={"/images/profile.svg"} alt={"profile"} />
        </div>
        <span className="flex h-[20px] items-center border-l-2 border-myGreen-200 pl-2 text-sm text-myGreen-200 lg:h-[24px] lg:pl-3 lg:text-[18px]">
          <p className="pb-1 font-medium">ورود</p>
        </span>
        <span className="flex items-center pr-1.5 text-sm text-myGreen-200 lg:pr-2 lg:text-[18px]">
          <p className="pb-1 font-medium">ثبت نام</p>
        </span>
      </div>
      <div className="mt-3 rounded-lg border border-myGreen-200 p-2 md:hidden">
        <Image
          width={24}
          height={24}
          src="/images/login.svg"
          alt="torino logo"
        />
      </div>
    </button>
  );
}
