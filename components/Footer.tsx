import React from "react";
import content from "@/public/content";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

export default function Footer() {
  return (
    <div className="fixed bottom-2 left-0 w-full bg-gray-950 text-white p-1 mx-4 ">
    <div className="flex mx-10 items-center justify-center flex-row space-x-60 ">
      <div>
        <p>
        &copy; {content.FooterText}
        </p>
      </div>
      <div className="flex flex-row space-x-5">
        <div>
          <a href="https://github.com/ankushSsingh">
            <FaGithub size={20}/>
          </a>
        </div>     
        <div>
          <a href="https://instagram.com/ankush.singh98">
            <FaInstagram size={20}/>
          </a>
        </div> 
      </div> 
    </div>
    </div>
  );

};
