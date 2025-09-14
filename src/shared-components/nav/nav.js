"use client";

import React, { useState, useEffect } from "react";
import "./nav.css";
import { ListPlus, Menu, X } from "lucide-react";
import { hindMadurai } from "../fonts/hind-madurai";
import { poppins } from "../fonts/poppins";
import { GiSailboat } from "react-icons/gi";
import Link from "next/link";

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleMobileMenu = () => {
    if (showMobileMenu) {
      setIsTransitioning(true);
      setTimeout(() => {
        setShowMobileMenu(false);
        setIsTransitioning(false);
      }, 300);
    } else {
      // Opening menu
      setShowMobileMenu(true);
    }
  };

  return (
    <div className="w-full z-50 top-0 left-0 right-0 absolute sticky pt-5 flex justify-center items-center">
      <div
        className={`rounded-full h-[60px] flex justify-between items-center px-4 ${
          scrolled ? "scrolled shadow-xl" : "not-scrolled"
        }`}
      >
        <div className="flex-1 flex items-center transition-all duration-300 overflow-hidden">
          <div
            className={`flex w-full items-center justify-between transition-all duration-300 ${
              showMobileMenu
                ? "opacity-0 transform -translate-x-4"
                : "opacity-100 transform translate-x-0"
            }`}
          >
            <Link href="/" className={`flex justify-center items-center gap-4`}>
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
            </Link>
            <div className="flex-1 h-full flex justify-center items-center py-4 text-zinc-600">
              <div
                className={`w-full h-full hidden md:flex justify-center items-center gap-6 ${
                  scrolled ? "scrolled-middle-div" : "not-scrolled-middle-div"
                } ${hindMadurai.className}`}
              >
                <Link href="/behind-the-match" className="hover:text-zinc-400">
                  Behind the Match
                </Link>
                <Link href="/faq" className="hover:text-zinc-400">
                  FAQ
                </Link>
                <Link
                  href="https://form.typeform.com/to/kJC4s0Zx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-zinc-400"
                >
                  Contact
                </Link>
              </div>
            </div>
            <div className="flex justify-center items-center gap-4">
              <Link
                className={`flex justify-center items-center gap-2 text-base border-1 border-zinc-200 md:border-0 py-1 pl-4 pr-3 rounded-full ${
                  hindMadurai.className
                } ${scrolled ? "scrolled-button" : "not-scrolled-button"}`}
                target="_blank"
                rel="noopener noreferrer"
                href="https://form.typeform.com/to/uf2cjqGX"
              >
                Join Waitlist <ListPlus className="w-5 h-5" />
              </Link>
            </div>
          </div>

          <div
            className={`absolute left-4 right-4 flex justify-start gap-2 items-center transition-all duration-300 pl-2 ${
              showMobileMenu
                ? "opacity-100 transform translate-x-0 pointer-events-auto"
                : "opacity-0 transform translate-x-4 pointer-events-none"
            }`}
          >
            <Link
              href="/behind-the-match"
              className={`text-zinc-700 hover:text-zinc-900 hover:bg-zinc-100 rounded-lg py-2 px-4 text-sm font-medium transition-all duration-200 ${hindMadurai.className}`}
              onClick={() => toggleMobileMenu()}
            >
              Behind the Match
            </Link>
            <Link
              href="/faq"
              className="text-zinc-700 hover:text-zinc-900 hover:bg-zinc-100 rounded-lg py-2 px-4 text-sm font-medium transition-all duration-200"
              onClick={() => toggleMobileMenu()}
            >
              FAQ
            </Link>
            <Link
              href="https://form.typeform.com/to/kJC4s0Zx"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-700 hover:text-zinc-900 hover:bg-zinc-100 rounded-lg py-2 px-4 text-sm font-medium transition-all duration-200"
              onClick={() => toggleMobileMenu()}
            >
              Contact
            </Link>
          </div>
        </div>
        <button
          className="p-1 border-1 rounded-full w-8 h-8 flex md:hidden justify-center items-center border-zinc-200 ml-2 transition-all duration-300 hover:bg-zinc-50"
          onClick={toggleMobileMenu}
        >
          <div className="relative w-6 h-6 flex items-center justify-center">
            <Menu
              className={`absolute w-6 h-6 text-zinc-900 transition-all duration-300 ${
                showMobileMenu ? "opacity-0 rotate-90" : "opacity-100 rotate-0"
              }`}
            />
            <X
              className={`absolute w-6 h-6 text-zinc-900 transition-all duration-300 ${
                showMobileMenu ? "opacity-100 rotate-0" : "opacity-0 -rotate-90"
              }`}
            />
          </div>
        </button>
      </div>
    </div>
  );
};

export default Nav;
