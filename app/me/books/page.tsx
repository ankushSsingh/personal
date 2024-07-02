import React from "react";
import '@/app/styles/globals.css';
import  content  from '@/app/public/content.js';


export default function Page() {
  return (
    <main className="flex flex-wrap w-full max-w-full mt-16 py-4 px-10 overflow-hidden mx-auto box-border">
    <div className="overflow-y-hidden overflow-x-hidden h-full box-border">
        <div className="bg-black mx-12">
            <div className=" mx-1 my-20 bg-white max-w-xl break-words box-border font-light ">
                <div className="p-2">{content.Books}
                <div className="animate-blink">|</div>
                </div>
            </div>
        </div>
    </div>
</main>
   
  );
}
