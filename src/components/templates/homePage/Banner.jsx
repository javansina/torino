import Image from "next/image";

export default function Banner() {
  return (
    <div className="relative h-[119px] w-full md:h-[350px]">
      <Image
        src={"/images/Untitled_design__1_.png"}
        fill={true}
        alt="تجربه بهترین سفر ها"
      />
    </div>
  );
}
