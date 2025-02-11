"use client";

import { useState } from "react";

export default function CountdownTimer({ setIsExpired }) {
  const [codeExpiring, setCodeExpiring] = useState([0, 20]);

  const timer = (time) => {
    let min = time[0];
    let sec = time[1];
    if (min === 0 && sec === 0) {
      setIsExpired(true);
      return;
    }
    const update = setInterval(() => {
      if (sec === 0 && min > 0) {
        min--;
        sec = 59;
      } else {
        sec--;
      }
      setCodeExpiring([min, sec]);
    }, 1000);
    setTimeout(() => {
      clearInterval(update);
    }, 1000);
  };
  timer(codeExpiring);

  return (
    <div
      className={`flex items-center font-VazirDigitRegular ${codeExpiring[1] < 15 && codeExpiring[0] === 0 && "text-red-600"}`}
    >
      <span>
        {codeExpiring[1] < 10 && codeExpiring[1] !== 0 && 0}
        {codeExpiring[1]}
      </span>
      <span className="mx-0.5">:</span>
      <span>{codeExpiring[0]}</span>
      <span className="mr-1 text-xs text-myGray-410/90">تا ارسال مجدد کد</span>
    </div>
  );
}
