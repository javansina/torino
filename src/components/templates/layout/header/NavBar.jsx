"use client";

import Image from "next/image";
import Link from "next/link";

import { usePathname } from "next/navigation";

export default function NavBarM({ sideNav }) {
  const pathname = usePathname();
  const links = [
    { text: "صفحه اصلی", href: "/", img: "/images/mobile-navbar/home-2.svg" },
    {
      text: "خدمات گردشگری",
      href: "notfound",
      img: "/images/mobile-navbar/airplane-square.svg",
    },
    {
      text: "درباره ما",
      href: "#",
      img: "/images/mobile-navbar/call.svg",
    },
    {
      text: "تماس با ما",
      href: "#",
      img: "/images/mobile-navbar/volume-low.svg",
    },
  ];

  return (
    <ul
      className={`${sideNav ? "flex flex-col" : "hidden"} justify-between gap-y-6 md:flex md:flex-row md:gap-x-4 md:pr-5 lg:gap-x-7 xl:gap-x-10`}
    >
      {links.map((item) => (
        <li
          key={item.img}
          className={`${
            pathname === item.href
              ? "text-myGreen-200 hover:text-myGreen-200/80"
              : "text-myGray-410 hover:text-myGray-410/70"
          }`}
        >
          <Link className="flex items-center gap-x-2" href={item.href}>
            <span className="md:hidden">
              <Image width={16} height={16} src={item.img} alt="torino logo" />
            </span>
            <p className="text-sm lg:text-[16px]">{item.text}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
}
