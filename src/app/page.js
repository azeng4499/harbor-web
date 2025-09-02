"use client";

import { HatGlasses, ListPlus, Ship } from "lucide-react";
import Nav from "@/shared-components/nav/nav";
import HeroCardSection from "./components/hero-card-section/hero-card-section";
import Story from "./components/story/story";
import { hindMadurai } from "@/shared-components/fonts/hind-madurai";
import { montserrat } from "@/shared-components/fonts/montserrat";
import { poppins } from "@/shared-components/fonts/poppins";
import Image from "next/image";
import { GiSailboat } from "react-icons/gi";

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
        {/* <div
          className={`text-zinc-600 px-32 py-5 text-center ${hindMadurai.className} text-lg`}
        >
          Still <i>doom swiping</i> in 2025? That thumb workout isn't getting
          you any closer to love. Harbor reimagines how we use dating apps by{" "}
          <span className="font-bold">replacing swiping with ranking</span>,
          creating a more natural way to find real matches. It's time we turn
          dating apps into dating experiences.
        </div> */}
        <div
          className={`flex gap-8 justify-center items-center py-5 text-black text-base ${hindMadurai.className}`}
        >
          <button className="flex gap-2 items-center border px-4 py-2 rounded-md">
            <HatGlasses />
            Not convinced?
          </button>
          <button className="flex gap-2 items-center border px-4 py-2 rounded-md">
            <ListPlus />
            Join the Waitlist
          </button>
        </div>
        <HeroCardSection />
        <Story />
        <div
          className={`w-full mt-24 italic ${poppins.className} text-zinc-700 flex flex-col justify-center items-center px-20`}
        >
          {/* <div className="">How we roll...</div> */}
          <div
            className={`${montserrat.className} text-zinc-900 mb-5 text-[2rem] w-full text-start`}
          >
            How Harbor Works
          </div>
          <div className={` ${hindMadurai.className} w-full text-[1.2rem]`}>
            When you rank your list, Harbor doesn’t just look for overlap — it
            looks at how high you placed each other. If you’re both near the top
            of one another’s lists, you’re far more likely to connect. That way,
            matches aren’t random; they’re built on genuine mutual interest.
          </div>
          <div className="flex w-full flex-row mt-8">
            <div className="w-1/2 h-[500px] flex flex-col gap-2 relative pr-1">
              <div className="w-full h-1/2 bg-zinc-100 rounded-lg relative overflow-hidden">
                <div className="w-full h-full absolute top-0 left-0 flex justify-between items-start p-4 flex-col">
                  <div className="w-8 h-8 flex justify-center items-center bg-black text-white rounded-full">
                    1
                  </div>
                  <div
                    className="w-full text-wrap px-2 py-1 rounded-lg shadow-xl z-40"
                    style={{ backgroundColor: "rgba(255, 255, 255, 0.8)" }}
                  >
                    Every morning at 10AM, you’ll get a fresh list of 10 people.
                  </div>
                </div>
                <Image
                  src="/images/undraw/FIGMA_NEW_MESSAGE.svg"
                  fill
                  alt="a"
                  className="w-full object-fit translate-y-8"
                />
              </div>
              <div className="w-full h-1/2 bg-zinc-100 rounded-lg relative overflow-hidden">
                <div className="w-full h-full absolute top-0 left-0 flex justify-between items-start p-4 flex-col">
                  <div className="w-8 h-8 flex justify-center items-center bg-black text-white rounded-full">
                    3
                  </div>
                  <div
                    className="w-full text-wrap px-2 py-1 rounded-lg shadow-xl z-40"
                    style={{ backgroundColor: "rgba(255, 255, 255, 0.8)" }}
                  >
                    Harbor connects you to someone when your rankings align.{" "}
                  </div>
                </div>
                <Image
                  src="/images/undraw/FIGMA_LOVE.svg"
                  fill
                  alt="b"
                  className="w-full object-fit translate-y-14 scale-125"
                />
              </div>
            </div>

            <div className="w-1/2 h-[500px] relative pl-1">
              <div className="w-full h-full bg-zinc-300 rounded-lg">
                <div className="w-full h-full absolute top-0 left-0 flex justify-start items-start p-4">
                  <div className="w-8 h-8 flex justify-center items-center bg-black text-white rounded-full">
                    2
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
