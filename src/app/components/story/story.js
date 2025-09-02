import { IoMdCloseCircle } from "react-icons/io";
import { FaHeart } from "react-icons/fa6";
import { MdSwipeLeft, MdSwipeRight } from "react-icons/md";
import Marker from "@/shared-components/react-scroll-marker/marker";
import { montserrat } from "@/shared-components/fonts/montserrat";
import { useState } from "react";
import "./story.css";
import { poppins } from "@/shared-components/fonts/poppins";
import { GiSailboat } from "react-icons/gi";

const Story = () => {
  const [scolledTo, setScrolledTo] = useState(0);

  return (
    <div className="w-full h-fit flex items-center flex-col mt-10">
      <div className="w-full">
        <div
          className={`w-full h-full flex flex-col gap-4 px-40 pt-10 text-[1.5rem] ${poppins.className}`}
        >
          <div
            className={`${montserrat.className} text-zinc-900 mb-5 text-[2rem]`}
          >
            A new way to match
          </div>

          <Marker
            triggerOn={70}
            onScrollPastDown={() => setScrolledTo(1)}
            onScrollPastUp={() => setScrolledTo(0)}
          >
            <div
              className={`${
                scolledTo >= 1 ? "story-underline" : "not-story-underline"
              }`}
            >
              Swiping makes dating feel binary. A quick{" "}
              <FaHeart className="inline text-pink-600 w-6 h-6" /> or{" "}
              <IoMdCloseCircle className="inline text-gray-900 w-7 h-7" />,
              <br />{" "}
              <MdSwipeLeft className="inline text-amber-600 -rotate-20 w-7 h-7" />{" "}
              or{" "}
              <MdSwipeRight className="inline text-amber-600 rotate-16 w-7 h-7" />
              , forces you to judge people in an instant.
            </div>
          </Marker>
          <Marker
            triggerOn={70}
            onScrollPastDown={() => setScrolledTo(2)}
            onScrollPastUp={() => setScrolledTo(1)}
          >
            <div
              className={`${
                scolledTo >= 2 ? "story-underline" : "not-story-underline"
              }`}
            >
              But real attraction doesn’t work that way. It would be impossible
              to walk into a room and decide in a split second who’s worth your
              time.
            </div>
          </Marker>
          <Marker
            triggerOn={70}
            onScrollPastDown={() => setScrolledTo(3)}
            onScrollPastUp={() => setScrolledTo(2)}
          >
            <div
              className={`${
                scolledTo >= 3 ? "story-underline" : "not-story-underline"
              }`}
            >
              So why are we using dating apps designed like that?
            </div>
          </Marker>
          <Marker
            triggerOn={70}
            onScrollPastDown={() => setScrolledTo(4)}
            onScrollPastUp={() => setScrolledTo(3)}
          >
            <div
              className={`flex items-center ${
                scolledTo >= 4 ? "story-underline" : "not-story-underline"
              }`}
            >
              That’s why we're building Harbor.
              <div className="w-8 h-8 bg-harbor-blue rounded-md flex justify-center items-center text-white ml-2">
                <GiSailboat className="w-6 h-6" />
              </div>
            </div>
          </Marker>
          <Marker
            triggerOn={70}
            onScrollPastDown={() => setScrolledTo(5)}
            onScrollPastUp={() => setScrolledTo(4)}
          >
            <div
              className={`${
                scolledTo >= 5 ? "story-underline" : "not-story-underline"
              }`}
            >
              Instead of reducing people to a swipe, Harbor gives you a daily
              curated list of people to rank. You prioritize who stands out,
              they do the same, and genuine matches rise naturally to the top.
            </div>
          </Marker>
          <Marker
            triggerOn={70}
            onScrollPastDown={() => setScrolledTo(6)}
            onScrollPastUp={() => setScrolledTo(5)}
          >
            <div
              className={`${
                scolledTo == 6 ? "story-underline" : "not-story-underline"
              }`}
            >
              Dating isn’t black and white, and neither should your dating app.
              It's time to revolutionize online dating.
            </div>
          </Marker>
        </div>
      </div>
    </div>
  );
};

export default Story;
