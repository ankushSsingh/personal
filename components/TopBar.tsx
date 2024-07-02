import React from "react";
import content from "@/app/public/content";
import Link from "next/link";

export default function TopBar() {
  return (
    <div className="mx-4 fixed top-0 left-0 right-full w-full bg-gray-950 text-white p-2 mt-4 ">
        <div className="flex flex-col space-y-4 md:flex-row md:space-x-28" >
            <div>
                <p>{content.HeaderText}</p>
            </div>
            <Link href="/">
            <div>
                <p> about me</p>
            </div>
            </Link>
            <Link href="/me/books/">
                <div>
                    <p> books </p>
                </div>
            </Link>
            
            <div>
                <p> games </p>
            </div>
            <div>
                <p> life </p>
            </div>

            <div>
                <p> get in touch </p>
            </div>
        </div>
    </div>
  );

};