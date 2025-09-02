import { poppins } from "@/shared-components/fonts/poppins";
import Image from "next/image";
import { montserrat } from "@/shared-components/fonts/montserrat";
import { hindMadurai } from "@/shared-components/fonts/hind-madurai";

const HowItWorks = () => {
  return (
    <div
      className={`w-full mt-24 italic ${poppins.className} text-zinc-600 flex flex-col justify-center items-center px-20`}
    >
      <div
        className={`${montserrat.className} text-zinc-800 mb-5 text-[2rem] w-full text-start`}
      >
        How Harbor Works
      </div>
      <div className={` ${hindMadurai.className} w-full text-[1.2rem]`}>
        Behind the scenes, Harbor runs every list through our intelligent
        matching engine, which guarantees that if you and someone prioritize
        each other enough, a match will be made. In order to keep matches
        intentional and meaningful, we cap each person to one match per day.
        That also means not everyone will match every day — but when you do, you
        can trust it’s a genuine connection.
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
  );
};

export default HowItWorks;
