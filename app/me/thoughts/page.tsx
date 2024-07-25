'use client';
import React from "react";
import '@/app/styles/globals.css';
import  content  from '@/public/content.js';
import { useFormState } from 'react-dom';
import { useState, useEffect, FormEvent, ChangeEvent } from "react";
import { Suspense } from "react";
import ThoughtSkeleton from "@/components/thoughtskeleton";

import { postthought, readthoughts } from "@/app/actions/actions";
import Thoughts from "@/components/thoughts"; 
import { GetServerSideProps } from "next";


export default function Page() {
// const Page: React.FC<{ thoughts: Thought[] }> = ({ thoughts }) => {
    const [formData, setFormData] = useState({
        post : '',
    });

    const [refresh, setRefresh] = useState(0); // State to trigger re-fetching

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
            postthought(formData);

            console.log(formData);
            // Clear form data
            setFormData({
            post : ''
            });
            console.log(refresh) ;
            setRefresh((prev) => prev + 1 ); // Toggle refresh state to re-fetch thoughts
            console.log(refresh) ;
        };
    
  return (
    <main className="flex flex-wrap mt-2 py-28 justify-center  ">
        <div className="flex flex-col space-y-10 w-1/2">
        <form className="" onSubmit={handleSubmit} >
        <div className="bg-black mx-20 px-2 flex  flex-col justify-center">
  
            <div className=" mx-1 my-1 w-full bg-white  font-light ">

                    <div className="flex flex-row justify-center py-2 px-3 ">
                        <textarea 
                               name="post"
                               className="font-light border-2 w-full px-1 h-20 border-gray-400 focus:outline-none focus:ring-2  focus:border-none ring-black break-words "
                               placeholder="Write your thought here."
                               onChange={handleChange}
                               value={formData.post}
                               required />
                    
                    </div>

                    <div className="flex flex-row justify-center p-1 ">
                        <button
                            type="submit"
                            className="bg-black p-2  text-gray-50 text-lg  rounded-sm "
                            >
                        Post
                        </button>    
                    </div>        
                </div>
                </div>
    </form>
    <div className="overflow-y-hidden overflow-x-hidden h-full box-border">
        <div className="bg-gray-400 mx-20 flex justify-center">
            <div className=" my-1 bg-white w-full break-words box-border font-light ">
                <div className="p-2">{content.Thoughts}
                </div>
            </div>
        </div>
    </div>
    <Suspense fallback={<ThoughtSkeleton/>}>
    <Thoughts refresh={refresh} /> {/* Pass refresh state as a prop */}
    </Suspense>
    </div>
</main>
   
  );
}


// export default Page;