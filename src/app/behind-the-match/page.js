import Nav from "@/shared-components/nav/nav";
import Footer from "../components/footer/footer";
import { montserrat } from "@/shared-components/fonts/montserrat";
import { hindMadurai } from "@/shared-components/fonts/hind-madurai";
import { poppins } from "@/shared-components/fonts/poppins";
import { ArrowRight } from "lucide-react";

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
              <div className="w-full h-64 sm:h-80 lg:h-96 rounded-lg overflow-hidden">
                <img
                  src="/images/undraw/FIGMA_BEHIND_THE_MATCH.png"
                  alt="Behind the Match - Harbor's Vision"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="prose prose-lg max-w-none">
              <p
                className={`text-lg sm:text-xl text-zinc-500 leading-relaxed mb-6 ${poppins.className}`}
              >
                Harbor is a new kind of dating experience, built for people who
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
                the days before apps even existed. It's time we deliver on the
                original promise by restoring intentionality to dating apps.
              </p>
              <p
                className={`text-zinc-500 leading-relaxed mb-6 ${hindMadurai.className} text-lg`}
              >
                That’s why the heart of Harbor is ranking. Unlike swiping,
                ranking removes empty yes/no decisions and encourages you to
                slow down, compare, and reflect on who truly stands out. This
                process naturally restores intentionality; every match carries
                more weight because it begins with real consideration.
              </p>

              <h2
                className={`text-2xl sm:text-3xl font-bold text-zinc-900 mt-8 mb-4 ${montserrat.className}`}
              >
                The Technology
              </h2>

              <p
                className={`text-zinc-500 leading-relaxed mb-3 ${hindMadurai.className} text-lg`}
              >
                Each day, you’re placed into a small group (or cohort) of 10
                people. From there, you rank everyone in your cohort based on
                who stands out to you the most compared to the others.
              </p>
              <p
                className={`text-zinc-500 leading-relaxed mb-3 ${hindMadurai.className} text-lg`}
              >
                To turn those rankings into matches, Harbor uses the{" "}
                <i>Gale–Shapley</i> algorithm, a proven method that’s been used
                for decades to solve real-world matching problems (like pairing
                medical students with hospitals). What makes it powerful is that
                it always produces stable matches: if two people rank each other
                highly, they’ll be paired, and no one gets stuck in a one-sided
                match.
              </p>
              <p
                className={`text-zinc-500 leading-relaxed mb-3 ${hindMadurai.className} text-lg`}
              >
                To create cohorts, Harbor employs AI to balance groups based on
                compatibility signals like shared interests, values, and
                communication styles. This ensures that the people you rank are
                genuinely worth considering.
              </p>
              <p
                className={`text-zinc-500 leading-relaxed mb-3 ${hindMadurai.className} text-lg`}
              >
                Together, the AI-driven cohorts and <i>Gale–Shapley</i> matching
                ensure Harbor feels fair, balanced, and intentional.
              </p>

              <blockquote
                className="border-l-4 border-harbor-blue pl-6 py-4 my-8 rounded-r-lg"
                style={{ backgroundColor: "rgba(113, 90, 255, 0.1)" }}
              >
                <p
                  className={`text-lg italic text-zinc-900 ${poppins.className}`}
                >
                  "Technology should enhance human connection, not replace it.
                  Harbor is designed to be the bridge that brings people
                  together in meaningful ways."
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
                continue developing our matching system and refining the
                experience, we’re also listening closely to people like you who
                want something better than the status quo. If you’re ready for a
                dating app that puts quality first, we’d love for you to join
                our waitlist. Together, we can shape a platform that helps real
                relationships flourish.
              </p>

              <div className="mt-12 p-6 bg-gray-50 rounded-lg">
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
          </article>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Page;
