import { separate } from "@/core/utils/helper/detailsFormatter";
import Image from "next/image";
import Link from "next/link";

export default function Card({ item }) {
  const date = new Date(item.startDate);
  const dateBack = new Date(item.endDate) - date;
  const tourExpired = date - new Date();
  const travelTime = Math.round(dateBack / 24 / 60 / 60 / 1000);
  const fleetVehicle = {
    Bus: "اتوبوس",
    Van: "ون",
    SUV: "SUV",
    Airplane: "هواپیما",
  };

  const monthNomToFa = new Intl.DateTimeFormat("fa").format(date).split("/");

  const month = {
    "\u06F1": "فروردین",
    "\u06F2": "اردیبهشت",
    "\u06F3": "خرداد",
    "\u06F4": "تیر",
    "\u06F5": "مرداد",
    "\u06F6": "شهریور",
    "\u06F7": "مهر",
    "\u06F8": "آبان",
    "\u06F9": "آذر",
    "\u06F1\u06F0": "دی",
    "\u06F1\u06F1": "بهمن",
    "\u06F1\u06F2": "اسفند",
  };

  const result = [
    month[monthNomToFa[1]],
    travelTime,
    fleetVehicle[item.fleetVehicle],
    item.options[1],
  ];

  const price = separate(item.price);

  return (
    <div
      key={item.id}
      className="col-span-12 flex flex-col xsB:col-span-6 md:col-span-4 xl:col-span-3"
    >
      <div className="relative h-[159px] w-full">
        <Image src={item.image} fill alt={item.title} />
      </div>
      <div className="flex flex-col gap-y-[6px] rounded-b-[12px] border p-2">
        <span className="text-[22px] leading-[34px] tracking-[0.04rem]">
          {item.title}
        </span>
        <span className="line-clamp-1 text-[15px] text-myGray-410/70">
          <span>{result[0]} ماه ، </span>
          <span className="font-VazirDigit">{result[1]} روزه ، </span>
          <span>{result[2]} ، </span>
          <span>{result[3]}</span>
        </span>
        {tourExpired < 0 ? (
          <span className="line-clamp-1 text-[15px] text-myRed-100">
            منقضی شده است!
          </span>
        ) : item.availableSeats > 0 ? (
          <span className="line-clamp-1 text-[15px] text-myGray-410/70">
            ظرفیت {item.availableSeats} نفر
          </span>
        ) : (
          <span className="line-clamp-1 text-[15px] text-myRed-100">
            ظرفیت تکیمل است!
          </span>
        )}

        <div className="flex items-center justify-between border-t">
          <Link
            href={`/tour-details/${item.id}`}
            className="mt-[6px] rounded-[5px] bg-myGreen-200 px-[38px] pb-[8px] pt-[4px] text-background hover:bg-myGreen-200/90"
          >
            رزرو
          </Link>
          <span>
            <span className="pt-2 font-VazirDigitRegular text-myBlue-100">
              {price}
            </span>
            <span className="px-2 text-myGray-410/80">تومان</span>
          </span>
        </div>
      </div>
    </div>
  );
}
