'use client';
import React from "react";
import '@/app/styles/globals.css';
import  content  from '@/public/content.js';
import RegularUpdateComponent from "@/components/animation";

export default function Page() {
  return (
    <main className="flex flex-wrap w-full max-w-full mt-16 py-32 items-center justify-center overflow-hidden mx-auto box-border">
    <div className="overflow-y-hidden overflow-x-hidden h-full box-border">
        <div className="bg-black mx-12 flex justify-center">
            <div className=" mx-1 my-1 bg-white max-w-xl break-words box-border font-light ">
                <div className="p-2">{content.Books}
                  <RegularUpdateComponent/>
                </div>
            </div>
        </div>
    </div>
</main>
  );
}
