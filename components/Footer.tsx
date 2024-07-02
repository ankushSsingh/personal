import React from "react";
import content from "@/app/public/content";

export default function Footer() {
  return (
    <div className="fixed bottom-2 left-0 w-full bg-gray-950 text-white p-1 mx-4 ">
    <div className="flex mx-10 items-center justify-between flex-row ">
      <div>
        <p>
        &copy; {content.FooterText}
        </p>
      </div>
    </div>
    </div>
  );

};
