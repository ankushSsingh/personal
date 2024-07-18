import React from "react";
import '@/app/styles/globals.css';
import  content  from '@/public/content.js';


export default function Page() {
  return (
    <main className="w-full max-w-full mt-16 py-4 px-10 overflow-hidden mx-auto box-border">
    <div className="flex flex-col w-3/4 mx-48 mt-10">

        <div className="flex flex-row space-x-10 ">
                <div className="flex flex-col min-h-28  h-2/6 justify-center items-center m-5 w-4/12 transform transition-transform duration-500 hover:scale-110 ">
                    <div className="bg-black">
                        <img alt='' src="/koeln.jpg" className="p-0.5"/>
                    </div>
                    
                    <div className="mt-2 h-10 font-serif italic"> Carnival in Köln </div>
                </div>
            <div className="flex flex-col min-h-28  h-2/6 justify-center items-center m-5 w-4/12 transform transition-transform duration-500 hover:scale-110">
                <div className="bg-black">
                <video id="myVideo" width="1000" height="500" className="p-0.5" autoPlay loop muted controls>
                    <source src="/kaiserslautern.mp4" type="video/mp4"/>
                    Your browser does not support the video tag.
                </video>
                </div>
                
                    <div className="mt-2 h-10 font-serif italic"> Japanese Garden, in Kaiserslautern </div>
            </div>
        </div>
        <div className="flex flex-row space-x-10">
            <div className="flex flex-col min-h-28  h-2/6 justify-center items-center m-5 w-4/12 transform transition-transform duration-500 hover:scale-110">
                    <div className="bg-black">
                    <video id="myVideo" width="1000" height="500" className="p-0.5" autoPlay loop muted controls>
                        <source src="/freiburg.mp4" type="video/mp4"/>
                        Your browser does not support the video tag.
                    </video>
                    </div>
                        <div className="mt-2 h-10 font-serif italic"> Mundenhof tierpark, near Freiburg </div>
                </div>
        </div>

        <div className="flex flex-row space-x-10">
            <div className=" flex flex-col min-h-28 h-2/6 justify-center items-center  w-4/12 transform transition-transform duration-500 hover:scale-110">
                <div className="bg-black">
                    <img alt='' src="/heidelberg.jpg" className="p-0.5" />
                </div> 
                <div className="mt-2 h-10 font-serif italic"> Heidelberg </div>
            </div>
            <div className=" flex flex-col min-h-28 h-2/6 justify-center items-center w-4/12 transform transition-transform duration-500 hover:scale-110">
            <div className="bg-black">
                    <img alt='' src="/freiburg.jpg" className="p-0.5" />
                </div> 
                <div className="mt-2 h-10 font-serif italic"> Freiburg </div>
            </div>
        </div>
        <div className="flex flex-row space-x-10">
            <div className="flex flex-col min-h-28  h-2/6 justify-center items-center m-5 w-4/12 transform transition-transform duration-500 hover:scale-110">
            <div className="bg-black">
                    <img alt='' src="/stuttgart.jpg" className="p-0.5" />
                </div> 
                <div className="mt-2 h-10 font-serif italic"> Stuttgart </div>
            </div>
            <div className="flex flex-col min-h-28  h-2/6 justify-center items-center m-5 w-4/12 transform transition-transform duration-500 hover:scale-110 ">
            <div className="bg-black">
                    <img alt='' src="/mannheim.jpg" className="p-0.5" />
                </div> 
                <div className="mt-2 h-10 font-serif italic"> Mannheim </div>
            </div>
        </div>

        <div className="flex flex-row space-x-10">
            
            <div className="flex flex-col min-h-28  h-2/6 justify-center items-center m-5 w-4/12 transform transition-transform duration-500 hover:scale-110">
            <div className="bg-black">
                    <img alt='' src="/bonn.jpg" className="p-0.5" />
                </div> 
                <div className="mt-2 h-10 font-serif italic"> Bonn </div>
            </div>
        </div>


    </div>

</main>
   
  );
}
