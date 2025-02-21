"use client";
import { useEffect, useRef } from "react";

export default function OutsideClickHandler({
  children,
  onOutsideClick,
  className = "",
}) {
  const ref = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        onOutsideClick();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onOutsideClick]);

  return (
    <div className={className} ref={ref}>
      {children}
    </div>
  );
}
