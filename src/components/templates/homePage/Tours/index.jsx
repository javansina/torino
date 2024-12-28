"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import Cards from "./Cards";

export default function Tours({ data }) {
  const [moreCard, setMoreCard] = useState(false);
  const [userDivceW, setUserDivceW] = useState(null);

  useEffect(() => {
    setUserDivceW(window.innerWidth);
  }, []);

  return (
    <section className="container font-VazirMedium">
      {data.length > 0 ? (
        <>
          <div className="mb-3">
            <span className="prevent-select font-VazirRegular text-[32px]">
              همه تور ها
            </span>
          </div>
          <div className="min-h-fit">
            <div className="grid grid-cols-12 gap-x-[25px] gap-y-[30px]">
              {moreCard || userDivceW > 767
                ? data.map((item) => (
                    <Cards key={item.id} item={item} moreCard={moreCard} />
                  ))
                : data
                    .slice(0, 4)
                    .map((item) => (
                      <Cards key={item.id} item={item} moreCard={moreCard} />
                    ))}
            </div>
            {userDivceW < 767 && (
              <div
                onClick={() => setMoreCard((b) => !b)}
                className="mx-auto mt-2 flex w-fit cursor-pointer items-center gap-x-2 p-2 child:hover:text-black/90"
              >
                <span className="font-VazirRegular text-[13px] text-black/50">
                  {moreCard ? "مشاهده کمتر" : `مشاهده بیشتر`}
                </span>
                <div className={`relative h-3 w-3 ${moreCard && "rotate-180"}`}>
                  <Image
                    fill={true}
                    src={"/images/arrow-down.svg"}
                    alt="arrow"
                  />
                </div>
              </div>
            )}
          </div>
        </>
      ) : (
        <div className="mb-3">
          <span className="prevent-select font-VazirRegular text-[32px]">
            متاسفم ! فعلا چنین توری نداریم 😑
          </span>
        </div>
      )}
    </section>
  );
}
