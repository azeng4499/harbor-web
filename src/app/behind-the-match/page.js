import Nav from "@/shared-components/nav/nav";
import Footer from "../components/footer/footer";
import { montserrat } from "@/shared-components/fonts/montserrat";
import { hindMadurai } from "@/shared-components/fonts/hind-madurai";
import { poppins } from "@/shared-components/fonts/poppins";
import Image from "next/image";
import CallToActionButton from "@/shared-components/call-to-action-button/call-to-action-button";

const Page = () => {
  return (
    <div className="w-screen bg-white flex flex-col justify-center items-center">
      <div className="w-full max-w-[1000px] flex justify-start items-center flex-col h-full">
        <Nav />
        <main className="w-full px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <article className="max-w-4xl mx-auto">
            <header className="mb-8 sm:mb-12">
              <h1
                className={`text-3xl sm:text-4xl lg:text-5xl font-bold text-zinc-900 mb-4 leading-tight ${montserrat.className}`}
              >
                Behind the Match: Our Vision
              </h1>
              <div
                className={` ${hindMadurai.className} flex flex-col sm:flex-row sm:items-center sm:justify-between text-base text-zinc-500 mb-6`}
              >
                <span className="mb-2 sm:mb-0">Sept. 13, 2025</span>
                <span>5 min read</span>
              </div>
              <div className="w-full h-px bg-gradient-to-r from-blue-500 to-purple-500"></div>
            </header>

            <div className="mb-8 sm:mb-12">
              <div className="w-full h-64 sm:h-80 lg:h-96 rounded-lg overflow-hidden relative">
                <Image
                  src="/images/undraw/FIGMA_BEHIND_THE_MATCH.png"
                  alt="Behind the Match - Harbor's Vision"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="prose prose-lg max-w-none">
              <p
                className={`text-lg sm:text-xl text-zinc-500 leading-relaxed mb-6 ${poppins.className}`}
              >
                Harbor is a new online dating experience, built for people who
                are tired of endless swiping and ghosted matches. We believe in
                a simple idea: <i>quality beats quantity</i>, and that starts
                with saying goodbye to swipes and likes.
              </p>

              <h2
                className={`text-2xl sm:text-3xl font-bold text-zinc-900 mt-8 mb-4 ${montserrat.className}`}
              >
                Why Ranking?
              </h2>
              <p
                className={`text-zinc-500 leading-relaxed mb-3 ${hindMadurai.className} text-lg`}
              >
                Traditional dating apps promised to make meeting people easier,
                yet somehow, they seem to spark fewer real relationships than
                the days before apps even existed. It&apos;s time we deliver on
                the original promise by restoring intentionality to dating apps.
              </p>
              <p
                className={`text-zinc-500 leading-relaxed mb-6 ${hindMadurai.className} text-lg`}
              >
                That’s why the heart of Harbor is ranking. Unlike swiping,
                ranking removes quick &quot;yes/no&quot; decisions and
                encourages you to slow down, compare, and reflect on who truly
                stands out to you.
              </p>

              <h2
                className={`text-2xl sm:text-3xl font-bold text-zinc-900 mt-8 mb-4 ${montserrat.className}`}
              >
                The Technology
              </h2>

              <p
                className={`text-zinc-500 leading-relaxed mb-3 ${hindMadurai.className} text-lg`}
              >
                Each day, you’ll be shown 10 people and asked to rank them based
                on who stands out to you the most. Remember, they’ll rank you
                too.
              </p>
              <p
                className={`text-zinc-500 leading-relaxed mb-3 ${hindMadurai.className} text-lg`}
              >
                To turn those rankings into matches, Harbor uses the{" "}
                <i>Gale–Shapley</i> algorithm, a proven method that’s been used
                for decades to solve other real-world matching problems. Put
                simply, it’s a method of pairing people so that when matches
                happen, they’re mutual and stable rather than one-sided.
              </p>
              <p
                className={`text-zinc-500 leading-relaxed mb-3 ${hindMadurai.className} text-lg`}
              >
                The people you see each day aren’t random. Harbor uses AI models
                to analyze compatibility signals (like shared interests, values,
                and communication patterns) and selects the 10 people you’re
                most likely to connect with.
              </p>
              {/* <p
                className={`text-zinc-500 leading-relaxed mb-3 ${hindMadurai.className} text-lg`}
              >
                Together, AI curation and <i>Gale–Shapley</i> matching create a
                dating rhythm that feels fair, intentional, and built for real
                connection.
              </p> */}

              <blockquote
                className="border-l-4 border-harbor-blue pl-6 py-4 my-8 rounded-r-lg"
                style={{ backgroundColor: "rgba(113, 90, 255, 0.1)" }}
              >
                <p
                  className={`text-lg italic text-zinc-900 ${poppins.className}`}
                >
                  &quot;Technology should enhance human connection, not replace
                  it. Harbor is designed to be the bridge that brings people
                  together in meaningful ways.&quot;
                </p>
                <cite
                  className={`text-base text-zinc-500 mt-2 block ${hindMadurai.className}`}
                >
                  — Aaron Zeng, Founder & CEO
                </cite>
              </blockquote>

              <h2
                className={`text-2xl sm:text-3xl font-bold text-zinc-900 mt-8 mb-4 ${montserrat.className}`}
              >
                The Road Ahead
              </h2>
              <p
                className={`text-zinc-500 leading-relaxed mb-6 ${hindMadurai.className} text-lg`}
              >
                Harbor is still pre-launch, but we’re building fast. As we
                continue to develop and refine the experience, we’re listening
                closely to people like you who want something better than the
                status quo. If you’re ready for a dating app that puts quality
                first, we’d love for you to join our waitlist. Together, we can
                shape a platform that helps real relationships flourish.
              </p>

              <CallToActionButton />
            </div>
          </article>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Page;
