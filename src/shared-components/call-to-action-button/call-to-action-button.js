import { ArrowRight } from "lucide-react";
import { montserrat } from "@/shared-components/fonts/montserrat";
import { hindMadurai } from "../fonts/hind-madurai";
import Link from "next/link";

const CallToActionButton = () => {
  return (
    <div className="mt-12 p-6 bg-gray-50 rounded-lg">
      <h3
        className={`text-xl font-semibold text-zinc-900 mb-3 ${montserrat.className}`}
      >
        Ready to Find Your Match?
      </h3>
      <p className={`text-zinc-500 mb-4 ${hindMadurai.className}`}>
        Join the waitlist to be the first to know when Harbor becomes available
        in your area.
      </p>
      <Link
        target="_blank"
        rel="noopener noreferrer"
        href="https://form.typeform.com/to/uf2cjqGX"
        className={`w-fit bg-harbor-blue hover:bg-harbor-blue-secondary flex justify-center items-center gap-2 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 ${hindMadurai.className}`}
      >
        Get Started Today <ArrowRight />
      </Link>
    </div>
  );
};

export default CallToActionButton;
