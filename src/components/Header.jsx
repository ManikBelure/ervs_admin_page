import React from "react";
import ugandaFlag from "../assets/uganda-flag.png"; // adjust path if needed

export default function Header() {
  return (
    <header className="text-black shadow-md py-4">
      <div className="container mx-auto flex items-center gap-3">
        {/* Flag Image */}
        <img
          src={ugandaFlag}
          alt="Uganda Flag"
          className="w-11 h-11 rounded-sm object-cover"
        />

        {/* Title on two lines */}
        <h1 className="text-bg font-bold tracking-wide leading-tight">
          Elections <br />
          <span className="text-primary">Result Portal</span>
        </h1>
      </div>
    </header>
  );
}
