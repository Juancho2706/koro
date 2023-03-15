import React from "react";

export default function Header() {
  return (
    <div className="p-3 bg-slate-900 grid grid-cols-[1fr_5fr_1fr]">
      <img src="../public/icon.png" />
      <div className="text-center">Koro</div>
      <div>Username</div>
    </div>
  );
}
