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

export default function detailsFormatter(data) {
  console.log(data);

  const {
    origin: { id: originId },
    startDate,
    endDate,
    fleetVehicle,
    price,
  } = data?.data;

  const originCity = {
    1: "تهران",
    2: "سنندج",
    3: "مادرید",
    4: "اصفحان",
    5: "سلمانیه",
    6: "هولیر",
    7: "مازندران",
    8: "آفرود سنتر",
    9: "ایتالیا",
  };
  const tourExpired = new Date(startDate) - new Date();

  const date = new Date(startDate);
  const dateBack = new Date(endDate);
  const travelTime = Math.round((dateBack - date) / 24 / 60 / 60 / 1000);

  const result = [
    month[monthNomToFa[1]],
    travelTime,
    fleetVehicle[data?.data?.fleetVehicle],
    data?.data?.options[1],
  ];
  const pricee = separate(price);

  return {
    originCity: originCity[[originId]],
    tourExpired,
    separate,
    date,
    dateBack,
    travelTime,
    fleetVehicle: fleetVehicles[fleetVehicle],
    month,
    monthNomToFa,
    result,
    pricee,
  };
}
export const fleetVehicles = {
  Bus: { name: "اتوبوس", iconSrc: "/images/bus.svg" },
  Van: { name: "ون", iconSrc: "/images/van.svg" },
  SUV: { name: "SUV", iconSrc: "/images/icons8-suv-64.png" },
  Airplane: { name: "هواپیما", iconSrc: "/images/airplane.svg" },
  Ship: { name: "کشتی", iconSrc: "/images/ship.svg" },
};
export function monthNomToFa(date) {
  const newDate = new Intl.DateTimeFormat("fa").format(date).split("/");
  const weekDays = [
    "یکشنبه",
    "دوشنبه",
    "سه‌شنبه",
    "چهارشنبه",
    "پنج‌شنبه",
    "جمعه",
    "شنبه",
  ];
  const day = date.getDay();

  return [`${newDate[2]} ${month[newDate[1]]} ${newDate[0]}`, weekDays[day]];
}

export const formatDate = (date) => {
  const week = date.getDay();
  console.log(week);

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
};

export const separate = (number) => {
  let USDollar = new Intl.NumberFormat();
  return USDollar.format(number);
};
export const dateToIso = (date) => new Date(date).toISOString();
