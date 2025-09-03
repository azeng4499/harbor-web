import { FaHeart } from "react-icons/fa";
import { hindMadurai } from "@/shared-components/fonts/hind-madurai";
import { Instagram, Github } from "lucide-react";
import { FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
    <div
      className={`w-full h-fit ${hindMadurai.className} px-5 mt-10 border-t-2 border-zinc-300`}
    >
      <div className="w-full h-full flex flex-col">
        <div className="w-full flex-1 flex justify-between items-center pt-5 pb-10">
          <div className="pr-10 md:pr-0">2025 Harbor. All rights reserved.</div>
          <div className="tracking-wider hidden md:block ">
            Made with <FaHeart className="inline-flex mb-1 text-harbor-blue" />{" "}
            in Dallas, Texas
          </div>
          <div className="flex gap-6">
            <div className="w-10 h-10 bg-zinc-600 rounded-full text-white flex justify-center items-center">
              <Instagram className="w-6 h-6" />
            </div>
            <div className="w-10 h-10 bg-zinc-600 rounded-full text-white flex justify-center items-center">
              <Github className="w-6 h-6" />
            </div>
            <div className="w-10 h-10 bg-zinc-600 rounded-full text-white flex justify-center items-center">
              <FaTiktok className="w-6 h-6" />
            </div>
          </div>
        </div>
        <div className="w-full h-fit pb-10 md:hidden block text-center">
          Made with <FaHeart className="inline-flex mb-1 text-harbor-blue" /> in
          Dallas, Texas
        </div>
      </div>
    </div>
  );
};

export default Footer;
