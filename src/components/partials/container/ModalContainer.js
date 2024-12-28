import React from "react";

function ModalContainer({ children, isOpen, setIsOpen }) {
  if (!isOpen) return;

  return (
    <div className="fixed right-0 top-0 z-10 h-svh w-svw bg-black/20 backdrop-blur-sm">
      <div className="flex h-full w-full items-center justify-center">
        <div className="min-h-10 min-w-10">{children}</div>
      </div>
    </div>
  );
}

export default ModalContainer;
