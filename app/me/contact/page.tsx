'use client';
import React from "react";
import '@/app/styles/globals.css';
import  content  from '@/public/content.js';
import { useFormState } from 'react-dom';
import { useState, useEffect, FormEvent, ChangeEvent } from "react";

import { HandleMessage } from "@/app/actions/handlemessage";

export default function Page() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [messagesent, setMessageSent] = useState(false);

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
        ...prevData,
        [name]: value
        }));
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Process form data
        HandleMessage(formData);

        console.log(formData);
        // Clear form data
        setFormData({
        name: '',
        email: '',
        message: ''
        });
        setMessageSent(true);
        setTimeout(() => {
            setMessageSent(false);
          }, 5000); // Reset state after 10 seconds
        };
  return (
    <main className="flex flex-wrap mt-16 py-32 justify-center  ">
        
        <form className="w-1/2" onSubmit={handleSubmit} >
            <div className="flex flex-col space-y-2 justify-center w-full">
                <div className=" mx-20  bg-green-600 rounded-lg">
                    <div className="animate-blink">
                        <div className={messagesent ? 'visible' : 'hidden'}>
                            <div className=" p-2 font-bold " >
                                Thanks for your message. Your message is delivered to Ankush!
                            </div>
                        </div>
                    </div>   
                </div>
        <div className="bg-black mx-20 px-2 flex  flex-col justify-center">
  
            <div className=" mx-1 my-1 w-full bg-white  font-light ">
                
                    <div className="p-5 flex flex-row spacing-x-4" >
                        <p className="font-mono w-1/3">Name :</p>
                        <input type="text"
                               name="name"
                               className="font-light border-2 w-2/3 px-1 border-gray-400 focus:outline-none focus:ring-2 focus:border-none ring-black"
                               onChange={handleChange}
                               value={formData.name}
                               required
                                />
                    </div>
                    <div className="p-5 flex flex-row spacing-x-4" >
                        <p className="font-mono w-1/3">Email :</p>
                        <input type="text"
                               name="email"
                               className="font-light border-2 w-2/3 px-1 border-gray-400 focus:outline-none focus:ring-2 focus:border-none ring-black"
                               onChange={handleChange} 
                               value={formData.email}
                               required />
                    </div>

                    <div className="p-5 flex flex-row spacing-x-4" >
                        <p className="font-mono w-1/3">Message :</p>
                        <textarea 
                               name="message"
                               className="font-light border-2 w-2/3 px-1 h-40 border-gray-400 focus:outline-none focus:ring-2  focus:border-none ring-black break-words "
                               placeholder="Write your message here."
                               onChange={handleChange}
                               value={formData.message}
                               required />
                    </div>
                    <div className="flex flex-row justify-center p-2">
                        <button
                            type="submit"
                            className="bg-black  mt-3 p-2 text-gray-50 text-lg font-bold rounded-sm "
                            >
                        Submit
                        </button>    

                    </div>
                            
                </div>
                </div>
            </div>
    </form>
</main>
   
  );
}
