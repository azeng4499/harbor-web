"use client";

import Nav from "@/shared-components/nav/nav";
import HeroCardSection from "./components/hero-card-section/hero-card-section";
import Story from "./components/story/story";
import { hindMadurai } from "@/shared-components/fonts/hind-madurai";
import {
  montserrat,
  montserratItalic,
} from "@/shared-components/fonts/montserrat";
import { GiSailboat } from "react-icons/gi";
import { FaGrinHearts } from "react-icons/fa";
import { poppins } from "@/shared-components/fonts/poppins";
import { ArrowRight, HatGlasses } from "lucide-react";
import { FaHeart } from "react-icons/fa6";
import { MdSwipeRight } from "react-icons/md";
import Footer from "./components/footer/footer";

export default function Home() {
  return (
    <div className="w-screen bg-white flex flex-col justify-center items-center">
      <div className="w-full max-w-[1000px] flex justify-start items-center flex-col h-full">
        <Nav />
        <h1
          className={`text-zinc-800 ${montserrat.className} text-[4rem]/18 md:text-[4rem] tracking-tighter md:tracking-tight pt-10 md:pt-20 text-center px-4`}
        >
          Playing <span className="text-nowrap">‘hot or not’</span> is{" "}
          <span className="text-nowrap">
            <span className="underline underline-offset-8">not</span> hot.
          </span>
        </h1>
        <div
          className={`py-5 ${hindMadurai.className} px-5 pt-10 md:px-32 text-zinc-600 text-[1.2rem] md:text-[1.4rem] text-center`}
        >
          <span className="text-harbor-blue">Harbor </span>
          <div className="inline-flex w-6 h-6 rounded-lg bg-harbor-blue flex justify-center items-center">
            <GiSailboat className="text-white w-4 h-4" />
          </div>{" "}
          <span className="text-harbor-blue">is a new kind of dating app</span>{" "}
          that replaces{" "}
          <span className="text-nowrap">
            likes <FaHeart className="inline-flex w-5 h-5 mb-1" />
          </span>{" "}
          &{" "}
          <span className="text-nowrap">
            swipes <MdSwipeRight className="inline-flex w-5 h-5 mb-1" />
          </span>{" "}
          with ranking, to create more meaningful connections.
        </div>
        <div
          className={`flex gap-4 md:gap-8 justify-center items-center py-5 text-black text-base ${hindMadurai.className}`}
        >
          <a
            href="/behind-the-match"
            className="flex gap-2 items-center border px-4 py-2 rounded-md shadow-lg cursor-pointer"
          >
            Tell me more <HatGlasses />
          </a>
          <a
            href="/waitlist"
            className="flex gap-2 items-center border px-4 py-2 rounded-md shadow-lg cursor-pointer"
          >
            Join the Waitlist
            <FaGrinHearts />
          </a>
        </div>
        <HeroCardSection />
        <Story />
        <div className="w-screen mt-20 overflow-hidden ">
          <div
            className={`text-[3rem] md:text-[4rem] overflow-hidden ${poppins.className} text-zinc-300 flex justify-center items-center`}
          >
            <div className="text-nowrap">
              IT'S TIME TO IT'S TIME TO{" "}
              <span className="text-zinc-500">IT'S TIME TO</span> IT'S TIME TO
              IT'S TIME TO
            </div>
          </div>
          <div
            className={`text-[3rem] md:text-[4rem] overflow-hidden -mt-6 md:-mt-8 italic ${montserratItalic.className} text-center flex justify-center items-center`}
            style={{ color: "rgba(113, 90, 255, 0.3)" }}
          >
            <div className="text-nowrap">
              RANK! RANK!{" "}
              <span className="text-harbor-blue">RANK! RANK! RANK!</span> RANK!
              RANK!
            </div>
          </div>
        </div>
        <div className="w-full px-6 sm:px-20 md:px-40">
          <div className="mt-20 mb-12 p-6 bg-gray-50 rounded-lg">
            <h3
              className={`text-xl font-semibold text-zinc-900 mb-3 ${montserrat.className}`}
            >
              Ready to Find Your Match?
            </h3>
            <p className={`text-zinc-500 mb-4 ${hindMadurai.className}`}>
              Join the waitlist to be the first to know when Harbor becomes
              available in your area.
            </p>
            <a
              href="/waitlist"
              className={`w-fit bg-harbor-blue hover:bg-harbor-blue-secondary flex justify-center items-center gap-2 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 ${hindMadurai.className}`}
            >
              Get Started Today <ArrowRight />
            </a>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
