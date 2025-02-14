"use client";
import { useState } from "react";

export default function Slider() {
  const [onTop, setOnTop] = useState([0, 1]);

  const slider1 = () => {
    if (onTop[1] === 1) {
      // onTop[1] === num
      if (onTop[0] === 2) {
        //onTop[0] - onTop[1] === num
        //2 - 1 === 1 === num
        return "slider-1 animation1";
      } else if (onTop[0] === 4 || onTop[0] === 3) {
        //onTop[0] - onTop[1] === num
        //4 - 1 === 3 === num + 2
        //3 - 1 === 2 === num + 1
        return "slider-1";
      } else if (onTop[0] === 0) {
        //onTop[0] - onTop[1] === num
        //0 - 1 === -1
        return "slider-1";
      }
    } else if (onTop[1] === 2) {
      // onTop[1] === num + 1
      if (onTop[0] === 3) {
        //onTop[0] - onTop[1] === num
        //3 - 2 === 1 === num
        return "slider-4";
      } else if (onTop[0] === 1 || onTop[0] === 4) {
        //onTop[0] - onTop[1] === num
        //1 - 2 === -1 === num - 2
        //4 - 2 === 2 === num - 1
        return "slider-4 animation4";
      }
    } else if (onTop[1] === 3) {
      //onTop[1] === num + 2
      if (onTop[0] === 2) {
        //onTop[0] - onTop[1] === num
        //2 - 3 === -1 === num - 1
        return "slider-3";
      } else if (onTop[0] === 4 || onTop[0] === 1) {
        //onTop[0] - onTop[1] === num
        //4 - 3 === 1 === num
        //1 - 3 === -2 === num - 3
        return "slider-3";
      }
    } else if (onTop[1] === 4) {
      // onTop[1] === num + 3
      if (onTop[0] === 1) {
        //onTop[0] - onTop[1] === num
        //1 - 4 === -3 === num - 4
        return "slider-2";
      } else if (onTop[0] === 3 || onTop[0] === 2) {
        //onTop[0] - onTop[1] === num
        //3 - 4 === -1 === num - 2
        //2 -4 === -2 === num - 3
        return "slider-2";
      }
    }
  };
  const slider2 = () => {
    if (onTop[1] === 1) {
      // onTop[1] === num - 1

      if (onTop[0] === 2) {
        //onTop[0] - onTop[1] === num
        //2 - 1 === 1 === num - 1
        return "slider-2";
      } else if (onTop[0] === 4 || onTop[0] === 3) {
        //onTop[0] - onTop[1] === num
        //4 - 1 === 3 === num + 1
        //3 - 1 === 2 === num - 1
        return "slider-2";
      } else if (onTop[0] === 0) {
        //onTop[0] - onTop[1] === num
        //0 - 1 === -1 === num - 3
        return "slider-2";
      }
    } else if (onTop[1] === 2) {
      if (onTop[0] === 3) {
        //onTop[0] - onTop[1] === num
        //3 - 2 === 1 === num
        return "slider-1 animation1";
      } else if (onTop[0] === 1 || onTop[0] === 4) {
        //onTop[0] - onTop[1] === num
        //1 - 2 === -1 === num - 3
        //4 - 2 === 2 === num
        return "slider-1";
      }
    } else if (onTop[1] === 3) {
      if (onTop[0] === 2) {
        //onTop[0] - onTop[1] === num
        //2 - 3 === -1 + 2 === 1
        return "slider-4 animation4";
      } else if (onTop[0] === 4 || onTop[0] === 1) {
        //onTop[0] - onTop[1] === num
        //4 - 3 === 1
        //1 - 3 === -2
        return "slider-4";
      }
    } else if (onTop[1] === 4) {
      if (onTop[0] === 1) {
        //onTop[0] - onTop[1] === num
        //1 - 4 === -3
        return "slider-3";
      } else if (onTop[0] === 3 || onTop[0] === 2) {
        //onTop[0] - onTop[1] === num
        //3 - 4 === -1
        //2 - 4 === -2
        return "slider-3";
      }
    }
  };
  const slider3 = () => {
    if (onTop[1] === 1) {
      if (onTop[0] === 2) {
        //onTop[0] - onTop[1] === num
        //2 - 1 === 1
        return "slider-3";
      } else if (onTop[0] === 4 || onTop[0] === 3) {
        //onTop[0] - onTop[1] === num
        //4 - 1 === 3
        //3 - 1 === 2
        return "slider-3";
      } else if (onTop[0] === 0) {
        //onTop[0] - onTop[1] === num
        //0 - 1 === -1
        return "slider-3";
      }
    } else if (onTop[1] === 2) {
      if (onTop[0] === 3) {
        //onTop[0] - onTop[1] === num
        //3 - 2 === 1
        return "slider-2";
      } else if (onTop[0] === 1 || onTop[0] === 4) {
        //onTop[0] - onTop[1] === num
        //1 - 2 === -1
        //4 - 2 === 2
        return "slider-2";
      }
    } else if (onTop[1] === 3) {
      if (onTop[0] === 2) {
        //onTop[0] - onTop[1] === num
        //2 - 3 === -1
        return "slider-1";
      } else if (onTop[0] === 4 || onTop[0] === 1) {
        //onTop[0] - onTop[1] === num
        //4 - 3 === 1 === num + 2
        //1 - 3 === -2 + num === 1
        return "slider-1 animation1";
      }
    } else if (onTop[1] === 4) {
      if (onTop[0] === 1) {
        //onTop[0] - onTop[1] === num
        //1 - 4 === -3
        return "slider-4";
      } else if (onTop[0] === 3 || onTop[0] === 2) {
        //onTop[0] - onTop[1] === num
        //3 - 4 === -1
        //2 - 4 === -2 + num === 1
        return "slider-4 animation4";
      }
    }
  };
  const slider4 = () => {
    if (onTop[1] === 1) {
      if (onTop[0] === 2) {
        //onTop[0] - onTop[1] === num
        //2 - 1 === 1
        return "slider-4";
      } else if (onTop[0] === 4 || onTop[0] === 3) {
        //onTop[0] - onTop[1] === num
        //4 - 1 === 3
        //3 - 1 === 2
        return "slider-4 animation4";
      } else if (onTop[0] === 0) {
        //onTop[0] - onTop[1] === num
        //0 - 1 === -1
        return "slider-4";
      }
    } else if (onTop[1] === 2) {
      if (onTop[0] === 3) {
        //onTop[0] - onTop[1] === num
        //3 - 2 === 1
        return "slider-3";
      } else if (onTop[0] === 1 || onTop[0] === 4) {
        //onTop[0] - onTop[1] === num
        //4 - 2 === 2
        //1 - 2 === -1
        return "slider-3";
      }
    } else if (onTop[1] === 3) {
      if (onTop[0] === 2) {
        //onTop[0] - onTop[1] === num
        //2 - 3 === -1
        return "slider-2";
      } else if (onTop[0] === 4 || onTop[0] === 1) {
        //onTop[0] - onTop[1] === num
        //4 - 3 === 1
        //1 - 3 === -2
        return "slider-2";
      }
    } else if (onTop[1] === 4) {
      if (onTop[0] === 1) {
        //onTop[0] - onTop[1] === num
        //1 - 4 === -3 + num === 1
        return "slider-1 animation1";
      } else if (onTop[0] === 3 || onTop[0] === 2) {
        //onTop[0] - onTop[1] === num
        //3 - 4 === -1
        //2 - 4 === -2
        return "slider-1";
      }
    }
  };

  return (
    <>
      <div className="prevent-select flex w-full flex-col xsC:gap-y-6 md:gap-y-10 lg:w-1/2">
        <div className="relative h-[305px] STxsB:ml-[5%] STxsD:ml-[11%] xsB:ml-[14%] xsB:h-[360px] xsC:h-[360px] md:ml-0 md:h-[370px] xl:h-[530px]">
          <div
            onClick={(e) => {
              if (+e.target.id === onTop[1]) return;
              setOnTop((i) => [i[1], +e.target.id]);
            }}
            className={`absolute transition-all ${slider4()}`}
          >
            <img
              className="h-full w-full rounded-[40px]"
              id="4"
              src={"/images/slider/image_SI3sJmh4_1727080822376_raw (2).png"}
              alt="adfs"
            />
          </div>
          <div
            onClick={(e) => {
              if (+e.target.id === onTop[1]) return;
              setOnTop((i) => [i[1], +e.target.id]);
            }}
            className={`absolute transition-all ${slider3()}`}
          >
            <img
              className="h-full w-full rounded-[40px]"
              id="3"
              src={"/images/slider/car-4260033_1280 (1).png"}
              alt="dsaf"
            />
          </div>
          <div
            onClick={(e) => {
              if (+e.target.id === onTop[1]) return;
              setOnTop((i) => [i[1], +e.target.id]);
            }}
            className={`absolute transition-all ${slider2()}`}
          >
            <img
              className="h-full w-full rounded-[40px]"
              id="2"
              src={"/images/slider/OIP (8) (1).png"}
              alt="af"
            />
          </div>
          <div
            onClick={(e) => {
              if (+e.target.id === onTop[1]) return;
              setOnTop((i) => [i[1], +e.target.id]);
            }}
            className={`absolute transition-all ${slider1()}`}
          >
            <img
              className="h-full w-full rounded-[40px]"
              id="1"
              src={"/images/slider/R (1) (1).png"}
              alt="asdf"
            />
          </div>
          <div className="absolute -bottom-10 right-[20%] flex h-[50px] w-fit items-center justify-center text-black STxsB:pr-3 STxsC:pr-5 STxsD:pr-7 STxsE:pr-11 xs:pr-12 xsB:pr-14 xsC:pr-[90px] sm:pr-[110px] smB:pr-[130px] smC:pr-[150px] md:-right-5 md:pr-0 mdB:pr-2 mdC:pr-[55px] lg:pr-[105px] lgB:pr-[155px] xl:pr-[120px]">
            <button
              className="w-fit rounded-lg transition-all delay-75 hover:bg-myBlue-100/20 hover:text-myBlue-100"
              onClick={() => {
                if (onTop[1] < 4) {
                  setOnTop((i) => [i[1], i[1] + 1]);
                } else if (onTop[1] === 4) {
                  setOnTop((i) => [i[1], i[1] - 3]);
                }
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="size-6 md:size-8"
              >
                <path
                  fillRule="evenodd"
                  d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
                  clipRule="evenodd"
                />
              </svg>
            </button>

            <span className="ml-1 flex w-fit gap-x-2 px-5 font-VazirDigitBold text-[30px] text-myGray-320">
              <span>4</span>
              <span>/</span>
              <span>{onTop[1]}</span>
            </span>

            <button
              className="w-fit rounded-lg transition-all delay-75 hover:bg-myBlue-100/20 hover:text-myBlue-100"
              onClick={() => {
                if (onTop[1] > 1) {
                  setOnTop((i) => [i[1], i[1] - 1]);
                } else if (onTop[1] === 1) {
                  setOnTop((i) => [i[1], i[1] + 3]);
                }
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="size-6 md:size-8"
              >
                <path
                  fillRule="evenodd"
                  d="M11.78 5.22a.75.75 0 0 1 0 1.06L8.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06l-4.25-4.25a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0Z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
