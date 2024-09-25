'use client';
import React from "react";
import '@/app/styles/globals.css';
import  content  from '@/public/content.js';
import RegularUpdateComponent from "@/components/animation";
import axios from "axios";
import qs from 'qs';
import ThoughtSkeleton from "@/components/thoughtskeleton";
import Thoughts from "@/components/thoughts";
import { Suspense } from "react";
import RedditTrending from "@/components/reddittrending";
import { FaReddit } from 'react-icons/fa';
export default function Page() {

    const readreddit = async () => {
        try {
            const response = await fetch('/api/reddit', {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
              },
            });
      
            const data = await response.json();
      
            if (response.ok) {
              console.log('Access Token:', data.access_token);
            } else {
              console.log(response);
              console.error('Error:', data.error);
            }
          } catch (error) {
            console.error('Fetch error:', error);
          }
    
    };

  return (
    <main className="flex flex-wrap w-full max-w-full mt-16 py-32 items-center justify-center overflow-hidden mx-auto box-border">
    <div className="overflow-y-hidden overflow-x-hidden h-full box-border">
        <div className=" mx-12 flex justify-center">
            <div className="flex flex-col space-y-3">
                <div className=" mx-1 my-1 bg-white max-w-xl w-2/3 break-words box-border font-light ">
                    <div className="p-2">
                        <div className="flex flex-row space-x-2">
                            <div>
                                {content.Trending}  
                            </div>
                            <div className="p-5">
                                <a href="https:www.reddit.com">
                                    <FaReddit size={30}/>
                                </a>
                            </div>
                        </div>
                        <RegularUpdateComponent/>
                    </div>
                    <div>
                        {/* <button className="bg-black p-2  text-gray-50 text-sm  rounded-sm hover:scale-110" onClick={() => readreddit()}>
                            Get Reddit Information
                        </button> */}
                    </div>
                </div>
                <div>
                    <Suspense fallback={<ThoughtSkeleton/>}>
                        <RedditTrending /> {/* Pass refresh state as a prop */}
                    </Suspense>
                </div>
            </div>
        </div>
    </div>
</main>
  );
}
