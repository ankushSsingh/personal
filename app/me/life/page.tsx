import React from "react";
import '@/app/styles/globals.css';
import  content  from '@/public/content.js';


export default function Page() {
  return (
    <main className="w-full max-w-full mt-16 py-4 px-10 overflow-hidden mx-auto box-border">
    <div className="flex flex-col w-3/4 mx-48 mt-10">
        <div className="flex flex-row space-x-10">
            <div className="flex flex-col min-h-28 h-2/6 justify-center items-center  w-4/12">
                <img alt='' src="/heavens.jpg"/>
                <div className="mt-2 h-10 font-serif font-semibold"> Heavens </div>
            </div>
            <div className="flex flex-col min-h-28 h-2/6 justify-center items-center w-4/12">
                <img alt='' src="/green.jpg"/>
                <div className="mt-2 h-10 font-serif font-semibold"> Green </div>
            </div>
        </div>
        <div className="flex flex-row space-x-10">
            <div className="flex flex-col min-h-28  h-2/6 justify-center items-center m-5 w-4/12">
                <img alt='' src="/snow_horse.jpg"/>
                <div className="mt-2 h-10 font-serif font-semibold"> Horse </div>
            </div>
            <div className="flex flex-col min-h-28  h-2/6 justify-center items-center m-5 w-4/12">
                <img alt='' src="/snail.jpg"/>
                <div className="mt-2 h-10 font-serif font-semibold"> Snail </div>
            </div>
        </div>

        <div className="flex flex-row space-x-10">
            <div className="flex flex-col min-h-28  h-2/6 justify-center items-center m-5 w-4/12">
                <img alt='' src="/lake.jpg"/>
                <div className="mt-2 h-10 font-serif font-semibold"> Lake </div>
            </div>
            <div className="flex flex-col min-h-28  h-2/6 justify-center items-center m-5 w-4/12">
                <img alt='' src="/universe.jpg"/>
                <div className="mt-2 h-10 font-serif font-semibold"> Universe </div>
            </div>
        </div>
    </div>

</main>
   
  );
}
