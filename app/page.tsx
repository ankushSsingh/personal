'use client';
import React from "react";
import '@/app/styles/globals.css';
import  content  from '@/public/content.js';
import { useEffect, useState } from 'react';
import RegularUpdateComponent from "@/components/animation";

export default function Page() {
  return (
    <main className="flex flex-wrap w-full max-w-full mt-16 py-32 items-center justify-center overflow-hidden mx-auto box-border">
    <div className="overflow-y-hidden overflow-x-hidden h-full box-border">
        <div className="flex flex-row space-x-10 items-center">
          <div className="min-h-28  mx-20 justify-center w-1/6 transform transition-transform duration-500 hover:scale-110 ">
                    <div className="bg-black">
                        <img alt='ankush' src="/ankush.jpg" className="p-0.5"/>
                    </div>
                </div>
          <div className="bg-black flex justify-center">
              <div className=" mx-1 my-1 bg-white max-w-xl break-words box-border font-light ">
                  <div className="p-2">{content.IntroText}
                    <RegularUpdateComponent/>
                  </div>
              </div>
          </div>
        </div>
        
    </div>
</main>
   
  );
}
