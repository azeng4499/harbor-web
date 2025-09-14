"use client";

import Footer from "../components/footer/footer";
import Nav from "@/shared-components/nav/nav";
import { montserrat } from "@/shared-components/fonts/montserrat";
import { hindMadurai } from "@/shared-components/fonts/hind-madurai";
import { poppins } from "@/shared-components/fonts/poppins";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import CallToActionButton from "@/shared-components/call-to-action-button/call-to-action-button";

const Page = () => {
  const [openItems, setOpenItems] = useState(new Set());

  const toggleItem = (index) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index);
    } else {
      newOpenItems.add(index);
    }
    setOpenItems(newOpenItems);
  };

  const faqs = [
    {
      question: "How does Harbor's ranking system work?",
      answer:
        "Each day, you'll see 10 carefully selected people and rank them based on who stands out to you most. They'll rank you too. Our Gale-Shapley algorithm then creates stable, mutual matches from these rankings, ensuring no one gets stuck in one-sided connections.",
    },
    {
      question: "Why ranking instead of swiping?",
      answer:
        "Swiping encourages quick yes/no decisions that often lead to superficial connections. Ranking forces you to slow down, compare, and reflect on who truly stands out. This process naturally restores intentionality to dating apps.",
    },
    {
      question: "How do you select the 10 people I see each day?",
      answer:
        "Harbor uses AI models to analyze compatibility signals like shared interests, values, and communication patterns. We select the 10 people you're most likely to connect with, ensuring everyone you rank is genuinely worth considering.",
    },
    {
      question: "What is the Gale-Shapley algorithm?",
      answer:
        "It's a proven matching algorithm used for decades to solve real-world pairing problems. It ensures that when matches happen, they're mutual and stable rather than one-sided. If two people rank each other highly, they'll be paired together.",
    },
    {
      question: "When will Harbor be available?",
      answer:
        "Harbor is currently in pre-launch development. We're building fast and listening closely to our community. Join our waitlist to be the first to know when Harbor becomes available in your area.",
    },
    {
      question: "Is Harbor free to use?",
      answer:
        "We're still finalizing our pricing model, but we're committed to making Harbor accessible. We'll share more details about pricing as we get closer to launch. Join our waitlist to stay updated.",
    },
    {
      question: "How is Harbor different from other dating apps?",
      answer:
        "Unlike traditional apps that prioritize quantity over quality, Harbor focuses on intentional connections through ranking and AI-curated cohorts. We eliminate endless swiping and ghosted matches by creating a more thoughtful, stable matching process.",
    },
    {
      question: "What if I don't like anyone in my daily group?",
      answer:
        "If you don't feel a strong connection with anyone in your group, you can skip ranking for that day. Our AI will learn from your preferences and adjust future selections. The goal is quality over quantity, so it's better to wait for the right people.",
    },
  ];

  return (
    <div className="w-screen bg-white flex flex-col justify-center items-center">
      <div className="w-full max-w-[1000px] flex justify-start items-center flex-col h-full">
        <Nav />

        {/* FAQ Content */}
        <main className="w-full px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <header className="text-center md:text-left mb-12 sm:mb-16 flex flex-col">
              <h1
                className={`text-3xl sm:text-4xl lg:text-5xl font-bold text-zinc-900 mb-6 ${montserrat.className} mt-2`}
              >
                Frequently Asked Questions
              </h1>
              <p
                className={`text-base md:text-lg px-8 md:px-0 sm:text-xl text-zinc-500 ${poppins.className} max-w-2xl`}
              >
                Everything you need to know about Harbor&apos;s unique approach
                to online dating
              </p>
            </header>

            {/* FAQ Items */}
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="border border-zinc-200 rounded-lg overflow-hidden hover:border-zinc-300 transition-colors duration-200"
                >
                  <button
                    onClick={() => toggleItem(index)}
                    className="w-full px-6 py-4 sm:py-6 text-left flex items-center justify-between hover:bg-zinc-50 transition-colors duration-200"
                  >
                    <h3
                      className={`text-lg sm:text-xl font-semibold text-zinc-900 pr-4 ${montserrat.className}`}
                    >
                      {faq.question}
                    </h3>
                    {openItems.has(index) ? (
                      <ChevronUp className="w-5 h-5 text-zinc-500 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-zinc-500 flex-shrink-0" />
                    )}
                  </button>

                  {openItems.has(index) && (
                    <div className="px-6 pb-4 sm:pb-6">
                      <p
                        className={`text-zinc-600 leading-relaxed ${hindMadurai.className} text-base sm:text-lg`}
                      >
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <CallToActionButton />
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default Page;
