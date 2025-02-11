import Image from "next/image";

export default function Options({
  origin,
  monthNomToFa,
  date,
  dateBack,
  fleetVehicle,
  availableSeats,
  insurance,
}) {
  console.log(availableSeats);

  return (
    <div className="flex divide-x divide-x-reverse overflow-y-hidden py-4 md:w-full lg:justify-between">
      <div className="flex w-full flex-col items-center gap-y-2 border-l px-4 lg:border-l-0 lgB:px-8">
        <div className="mx-auto flex w-[80px] items-center gap-x-2 text-myGray-320">
          <div className="relative mt-1 h-4 w-4">
            <Image
              fill={true}
              src={"/images/tour-details/routing-2.svg"}
              alt="moz"
            />
          </div>
          <span className="">مبدا</span>
        </div>
        <span className="w-full text-center">{origin.faName}</span>
      </div>
      <div className="flex w-full flex-col items-center gap-y-2 border-l px-4 lg:border-l-0 lgB:px-8">
        <div className="flex w-[120px] items-center justify-center gap-x-2 text-myGray-320">
          <div className="relative mt-1 h-4 w-4">
            <Image
              fill={true}
              src={"/images/tour-details/calendar-2.svg"}
              alt="moz"
            />
          </div>
          <span>تاریخ رفت</span>
        </div>
        <span className="w-full text-center font-VazirDigitRegular tracking-wide">
          {monthNomToFa(date)[0]}
        </span>
      </div>

      <div className="flex w-full flex-col items-center gap-y-2 border-l px-4 lg:border-l-0 lgB:px-8">
        <div className="flex w-[120px] items-center justify-center gap-x-2 text-myGray-320">
          <div className="relative mt-1 h-4 w-4">
            <Image
              fill={true}
              src={"/images/tour-details/calendar (1).svg"}
              alt="moz"
            />
          </div>
          <span>تاریخ برگشت</span>
        </div>
        <span className="w-full text-center font-VazirDigitRegular tracking-wide">
          {monthNomToFa(dateBack)[0]}
        </span>
      </div>
      <div className="flex w-full flex-col items-center gap-y-2 border-l px-4 lg:border-l-0 lgB:px-8">
        <div className="flex w-[120px] items-center justify-center gap-x-2 text-myGray-320">
          <div className="relative mt-1 h-5 w-5">
            <Image fill={true} src={"/images/transportation.png"} alt="moz" />
          </div>
          <span>حمل و نقل</span>
        </div>
        <div className="flex w-full items-center justify-center gap-x-2">
          <div className="relative h-5 w-5">
            <Image src={fleetVehicle.iconSrc} fill={true} alt="ship icon" />
          </div>
          <span>{fleetVehicle.name}</span>
        </div>
      </div>

      <div className="flex w-full flex-col items-center gap-y-2 border-l px-4 lg:border-l-0 lgB:px-8">
        <div className="flex w-[120px] items-center justify-center gap-x-2 text-myGray-320">
          <div className="relative mt-1 h-4 w-4">
            <Image
              fill={true}
              src={"/images/tour-details/profile-2user.svg"}
              alt="moz"
            />
          </div>
          <span>ظرفیت</span>
        </div>
        {availableSeats > 0 ? (
          <span
            className={`w-full text-center font-VazirDigitRegular ${availableSeats < 0 && "text-myRed-100"}`}
          >
            حداکثر {availableSeats} نفر
          </span>
        ) : (
          <span className="w-full text-center font-VazirDigitRegular text-myRed-100">
            تکمیل
          </span>
        )}
      </div>
      <div className="flex flex-col items-center gap-y-2 px-4">
        <div className="flex w-[130px] items-center justify-center gap-x-2 text-myGray-320">
          <div className="relative mt-1 h-4 w-4">
            <Image
              fill={true}
              src={"/images/tour-details/security.svg"}
              alt="moz"
            />
          </div>
          <span>بیمه</span>
        </div>
        {insurance ? (
          <span className="w-full text-center">دارای بیمه مسافر</span>
        ) : (
          <span className="w-full text-center text-myRed-100">
            فاقد بیمه مسافر
          </span>
        )}
      </div>
    </div>
  );
}
