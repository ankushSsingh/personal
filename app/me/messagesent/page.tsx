'use client';
import React from "react";
import '@/app/styles/globals.css';
import  content  from '@/public/content.js';
import { useFormState } from 'react-dom';

import { HandleMessage } from "@/app/actions/handlemessage";

export default function Page() {
    const initialState = { message: null, errors: {} };
  const [state, dispatch] = useFormState(HandleMessage, initialState);
  return (
    <main className="flex flex-wrap w-full max-w-full mt-16 py-4 px-10 overflow-hidden mx-auto box-border">
        <form action={dispatch}>
    <div className="overflow-y-hidden overflow-x-hidden h-full box-border">
        <div className="bg-black mx-12">    
            <div className="bg-white py-5 font-semibold">
                Thanks for your message. Your message is delivered to Ankush!
            </div>
            <div className=" flex flex-col spacing-y-5 mx-1  bg-white max-w-xl break-words box-border font-light ">
                
                    <div className="p-5 flex flex-row spacing-x-4" >
                        <p className="font-mono">Name :</p>
                        <input type="text"
                               name="name"
                               className="font-light border-2 w-60 px-1 border-gray-400 focus:outline-none focus:ring-2 mx-11 focus:border-none ring-black"/>
                    </div>
                    <div className="p-5 flex flex-row spacing-x-4" >
                        <p className="font-mono">Email :</p>
                        <input type="text"
                               name="email"
                               className="font-light border-2 w-60 px-1 border-gray-400 focus:outline-none focus:ring-2 mx-9 focus:border-none ring-black"/>
                    </div>

                    <div className="p-5 flex flex-row spacing-x-4" >
                        <p className="font-mono">Message :</p>
                        <input type="text"
                               name="message"
                               className="font-light border-2 w-60 h-20 pt-2 px-1 py-2 border-gray-400 focus:outline-none focus:ring-2 mx-4 focus:border-none ring-black "/>
                    </div>

                    <button
                        type="submit"
                        className="bg-black  w-1/2 mx-4 mt-8 py-2 text-gray-50 text-xs font-bold"
                        >
                    Send Message
                    </button>            
                </div>
            </div>
        </div>
    </form>
</main>
   
  );
}
