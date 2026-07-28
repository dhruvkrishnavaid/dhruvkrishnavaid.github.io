import React from "react";

interface SerifHeadingProps {
  children: React.ReactNode;
}

export default function SerifHeading({ children }: SerifHeadingProps) {
  return (
    <h2
      className="text-5xl leading-[0.95] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl"
      style={{ fontFamily: "'Instrument Serif', serif" }}
    >
      {children}
    </h2>
  );
}
