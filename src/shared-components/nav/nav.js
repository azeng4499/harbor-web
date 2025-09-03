"use client";

import React, { useState, useEffect } from "react";
import "./nav.css";
import { ListPlus } from "lucide-react";
import { hindMadurai } from "../fonts/hind-madurai";
import { poppins } from "../fonts/poppins";
import { GiSailboat } from "react-icons/gi";

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="w-full z-50 top-0 left-0 right-0 absolute sticky pt-5 flex justify-center items-center">
      <div
        className={`rounded-full h-[60px] flex justify-between items-center px-4 ${
          scrolled ? "scrolled shadow-xl" : "not-scrolled"
        }`}
      >
        <div className={`flex justify-center items-center gap-4`}>
          <div className="w-8 h-8 bg-harbor-blue rounded-md flex justify-center items-center text-white ml-2">
            <GiSailboat className="w-6 h-6" />
          </div>
          <span
            className={`${poppins.className} text-lg overflow-hidden logo ${
              scrolled ? "scrolled-logo" : "not-scrolled-logo"
            }`}
          >
            Harbor
          </span>
        </div>
        <div className="flex-1 h-full flex justify-center items-center py-4 text-zinc-600">
          <div
            className={`w-full h-full hidden min-[900px]:flex justify-center items-center gap-6 ${
              scrolled ? "scrolled-middle-div" : "not-scrolled-middle-div"
            } ${hindMadurai.className}`}
          >
            <a href="/">Behind the match</a>
            <a href="/">FAQ</a>
            <a href="/">Blog</a>
          </div>
        </div>
        <div className="flex justify-center items-center gap-4">
          <button
            className={`flex justify-center items-center gap-2 text-base py-1 pl-4 pr-3 rounded-full ${
              hindMadurai.className
            } ${scrolled ? "scrolled-button" : "not-scrolled-button"}`}
          >
            Join Waitlist <ListPlus className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Nav;
