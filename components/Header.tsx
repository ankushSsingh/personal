import React from "react";
import content from "@/public/content";

export default function Header() {
  return (
    <div className="fixed top-0 left-0 w-full bg-gray-950 text-white p-2 hover-rotate-2 z-10">
    <p>
      {content.HeaderText}
    </p>
    </div>
  );

};
