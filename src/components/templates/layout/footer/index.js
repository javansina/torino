import SectionRight from "./SectionRight";
import SectionLeft from "./SectionLeft";

export default function Footer() {
  return (
    <footer className="container">
      <div className="dashed-border pt-5">
        <div className="flex flex-col justify-between xsB:flex-row">
          <SectionRight />
          <SectionLeft />
        </div>
        <div className="mx-auto w-full border-t border-black/20">
          <p className="prevent-select mx-auto my-2 w-fit text-[12px] font-light leading-6 tracking-wide text-black md:my-3 md:text-[15px] md:font-normal">
            کلیه حقوق این وب سایت متعلق به تورینو میباشد.
          </p>
        </div>
      </div>
    </footer>
  );
}
