import Marker from "@/shared-components/react-scroll-marker/marker";
import { montserrat } from "@/shared-components/fonts/montserrat";
import { useState } from "react";
import { poppins } from "@/shared-components/fonts/poppins";
import Image from "next/image";

const Story = () => {
  const [scolledTo, setScrolledTo] = useState(0);

  return (
    <div className="w-full h-fit flex items-center flex-col mt-10">
      <div className="w-full">
        <div
          className={`w-full h-full flex flex-col gap-4 px-4 sm:px-20 md:px-40 pt-10 text-[1.3rem] ${poppins.className}`}
        >
          <div
            className={`${montserrat.className} text-zinc-800 mb-0 text-[2rem]`}
          >
            A new way to match
          </div>

          <Marker
            triggerOn={70}
            onScrollPastDown={() => setScrolledTo(1)}
            onScrollPastUp={() => setScrolledTo(0)}
          >
            <div className="text-zinc-600">
              Harbor gives you a daily list of people to rank. Matches are made
              based on mutual interest; The higher you and someone rank each
              other, the more likely you’ll match!
            </div>
          </Marker>
          <div className="w-full h-[500px] mt-5 text-[1rem]">
            <Marker
              triggerOn={70}
              onScrollPastDown={() => setScrolledTo(2)}
              onScrollPastUp={() => setScrolledTo(1)}
            >
              <div className={`w-full h-1/2 flex flex-row pb-1`}>
                <div className="w-1/2 h-full bg-zinc-100 mr-1 rounded-lg relative overflow-hidden flex justify-center items-center">
                  <div className="w-full h-full absolute top-0 left-0 flex justify-between items-start p-4 flex-col">
                    <div className="w-8 h-8 flex justify-center items-center bg-black text-white rounded-full">
                      1
                    </div>
                    <div className="w-full hidden min-[900px]:flex justify-center items-center">
                      <div
                        className="w-fit text-wrap px-2 py-1 rounded-lg shadow-xl z-40"
                        style={{ backgroundColor: "rgba(255, 255, 255, 0.8)" }}
                      >
                        Get a new list every morning.
                      </div>
                    </div>
                    <div className="w-full min-[900px]:hidden flex justify-center items-center">
                      <div
                        className="w-fit text-wrap px-2 py-1 rounded-lg shadow-xl z-40"
                        style={{ backgroundColor: "rgba(255, 255, 255, 0.8)" }}
                      >
                        Get a new list
                      </div>
                    </div>
                  </div>
                  <Image
                    src="/images/undraw/FIGMA_NEW_LIST.svg"
                    width={100}
                    height={100}
                    alt="woman getting a notification"
                    className="h-full translate-y-8 min-w-[330px]"
                  />
                </div>
                <div className="w-1/2 h-full bg-zinc-100 ml-1 rounded-lg relative overflow-hidden flex justify-center items-center">
                  <div className="w-full h-full absolute top-0 left-0 flex justify-between items-start p-4 flex-col">
                    <div className="w-8 h-8 flex justify-center items-center bg-black text-white rounded-full">
                      2
                    </div>
                    <div className="w-full flex justify-center items-center">
                      <div
                        className="w-fit text-wrap px-2 py-1 rounded-lg shadow-xl z-40 flex text-center"
                        style={{ backgroundColor: "rgba(255, 255, 255, 0.8)" }}
                      >
                        Rank your list
                      </div>
                    </div>
                  </div>
                  <Image
                    src="/images/undraw/FIGMA_RANK_LIST.svg"
                    width={100}
                    height={100}
                    alt="woman ranking"
                    className="h-full translate-x-6 md:translate-x-0 translate-y-10 min-w-[330px]"
                  />
                </div>
              </div>
            </Marker>
            <Marker
              triggerOn={70}
              onScrollPastDown={() => setScrolledTo(1)}
              onScrollPastUp={() => setScrolledTo(0)}
            >
              <div className="w-full h-1/2 pt-1">
                <div className="w-full h-full bg-zinc-100 rounded-lg overflow-hidden flex flex-row relative">
                  <div className="w-full h-full absolute top-0 left-0 flex justify-between items-start p-4 flex-col z-40">
                    <div className="w-8 h-8 flex justify-center items-center bg-black text-white rounded-full">
                      3
                    </div>
                    <div className="w-full flex justify-center items-center">
                      <div
                        className={`w-fit text-wrap px-2 py-1 rounded-lg shadow-xl z-40 ${montserrat.className} text-black`}
                        style={{ backgroundColor: "rgba(255, 255, 255, 0.9)" }}
                      >
                        Explore your connection
                      </div>
                    </div>
                  </div>
                  <div className="w-1/2 h-full overflow-hidden hidden min-[900px]:flex justify-center items-center">
                    <Image
                      src="/images/undraw/FIGMA_LOVE.svg"
                      alt="a couple with a balloon"
                      width={100}
                      height={100}
                      className="h-full scale-350 translate-y-8 translate-x-10"
                    />
                  </div>
                  <div className="w-full min-[900px]:w-1/2 h-full overflow-hidden flex justify-center items-center">
                    <Image
                      src="/images/undraw/FIGMA_FLOWERS.svg"
                      alt="a couple with flowers"
                      width={100}
                      height={100}
                      className="h-full scale-200 translate-y-14 translate-x-0 md:-translate-x-4"
                    />
                  </div>
                </div>
              </div>
            </Marker>
          </div>
          <div className="w-full text-[1rem] pt-10 text-zinc-500 text-center md:text-start">
            Have more questions? Visit our{" "}
            <span className="text-nowrap">
              <a className="underline" href="/behind-the-match">
                Behind the match
              </a>{" "}
              page.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Story;
