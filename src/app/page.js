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
import { FaHeartBroken, FaGrinHearts } from "react-icons/fa";
import HowItWorks from "./components/how-it-works/how-it-works";
import { poppins } from "@/shared-components/fonts/poppins";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="w-screen h-[5000px] bg-white flex flex-col justify-center items-center">
      <div className="w-full max-w-[1000px] flex justify-start items-center flex-col h-full">
        <Nav />
        <h1
          className={`text-zinc-800 ${montserrat.className} text-[4rem] tracking-tight pt-20`}
        >
          Playing ‘hot or not’ is{" "}
          <span className="underline underline-offset-8">not</span> hot.
        </h1>
        <div
          className={`py-5 ${hindMadurai.className} px-32 text-zinc-500 text-[1.4rem] text-center`}
        >
          <span className="text-harbor-blue">Harbor </span>
          <div className="inline-flex w-6 h-6 rounded-lg bg-harbor-blue flex justify-center items-center">
            <GiSailboat className="text-white w-4 h-4" />
          </div>{" "}
          <span className="text-harbor-blue">is a new kind of dating app</span>{" "}
          that replaces likes & swipes with ranking to create more geninue
          matches. Because dating deserves to feel like an experience, and
          swiping is becoming a chore.
        </div>
        <div
          className={`flex gap-8 justify-center items-center py-5 text-black text-base ${hindMadurai.className}`}
        >
          <button className="flex gap-2 items-center border px-4 py-2 rounded-md">
            Not convinced? <FaHeartBroken />
          </button>
          <button className="flex gap-2 items-center border px-4 py-2 rounded-md">
            Join the Waitlist
            <FaGrinHearts />
          </button>
        </div>
        <HeroCardSection />
        <Story />
        <HowItWorks />
        <div className="w-full mt-20 overflow-hidden ">
          <div
            className={`text-[4rem] overflow-hidden ${poppins.className} text-zinc-300 flex justify-center items-center`}
          >
            <div className="text-nowrap">
              IT'S TIME TO IT'S TIME TO{" "}
              <span className="text-zinc-500">IT'S TIME TO</span> IT'S TIME TO
              IT'S TIME TO
            </div>
          </div>
          <div
            className={`text-[4rem] overflow-hidden -mt-8 italic ${montserratItalic.className} text-center flex justify-center items-center`}
            style={{ color: "rgba(113, 90, 255, 0.3)" }}
          >
            <div className="text-nowrap">
              RANK! RANK!{" "}
              <span style={{ color: "rgba(113, 90, 255, 1)" }}>
                RANK! RANK! RANK!
              </span>{" "}
              RANK! RANK!
            </div>
          </div>
        </div>
        <div
          className={`flex justify-center items-center py-20 ${hindMadurai.className} gap-8 text-[1.1rem]`}
        >
          Ready to join the waitlist?{" "}
          <button className="py-2 px-4 bg-zinc-800 rounded-lg text-white flex justify-center items-center gap-2">
            Get Started <ArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
}
