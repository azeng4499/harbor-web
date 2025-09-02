import { motion } from "framer-motion";
import { useState, useEffect, useRef, useCallback } from "react";
import "./hero-card-section.css";
import { Hind_Madurai } from "next/font/google";
import { poppins } from "@/shared-components/fonts/poppins";
import { Briefcase } from "lucide-react";
import Image from "next/image";
import { FaHeart } from "react-icons/fa";

const hindMadurai = Hind_Madurai({
  weight: "500",
  subsets: ["sans-serif"],
});

const hindMaduraiLite = Hind_Madurai({
  weight: "300",
  subsets: ["sans-serif"],
});

const heroData = {
  left: [
    {
      id: 1,
      profilePicture: "/images/profiles/PROFILE_MALE_1.jpg",
      name: "Alex R.",
      career: "Software Engineer",
    },
    {
      id: 2,
      profilePicture: "/images/profiles/PROFILE_MALE_2.jpg",
      name: "Daniel M.",
      career: "High School Teacher",
    },
    {
      id: 3,
      profilePicture: "/images/profiles/PROFILE_MALE_3.jpg",
      name: "Marcus J.",
      career: "Chef",
    },
    {
      id: 4,
      profilePicture: "/images/profiles/PROFILE_MALE_4.jpg",
      name: "Jason T.",
      career: "Photographer",
    },
  ],
  right: [
    {
      id: 5,
      profilePicture: "/images/profiles/PROFILE_FEMALE_1.jpg",
      name: "Emily K.",
      career: "Nurse Practitioner",
    },
    {
      id: 6,
      profilePicture: "/images/profiles/PROFILE_FEMALE_2.jpg",
      name: "Sophia L.",
      career: "Influencer",
    },
    {
      id: 7,
      profilePicture: "/images/profiles/PROFILE_FEMALE_3.jpg",
      name: "Hannah S.",
      career: "Journalist",
    },
    {
      id: 8,
      profilePicture: "/images/profiles/PROFILE_FEMALE_4.jpg",
      name: "Chloe B.",
      career: "Entrepreneur",
    },
  ],
};

const useMidpointTriggers = (refsAndCallbacks) => {
  const statesRef = useRef({});
  const refsAndCallbacksRef = useRef(refsAndCallbacks);

  refsAndCallbacksRef.current = refsAndCallbacks;

  const checkMidpoints = useCallback(() => {
    const newStates = {};

    refsAndCallbacksRef.current.forEach(
      ({ ref, onTrigger, onDeactivate, id }) => {
        if (!ref.current) return;

        const rect = ref.current.getBoundingClientRect();
        const screenMidpoint = window.innerHeight / 2;
        const elementMidpoint = rect.top + rect.height / 2;

        const currentlyAbove = elementMidpoint <= screenMidpoint;
        const wasAbove = statesRef.current[id] || false;

        if (currentlyAbove !== wasAbove) {
          newStates[id] = currentlyAbove;
          if (currentlyAbove) {
            onTrigger();
          } else if (onDeactivate) {
            onDeactivate();
          }
        } else {
          newStates[id] = wasAbove;
        }
      }
    );

    statesRef.current = newStates;
  }, []);

  useEffect(() => {
    const handleScroll = () => checkMidpoints();
    window.addEventListener("scroll", handleScroll, { passive: true });
    checkMidpoints();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [checkMidpoints]);

  return statesRef.current;
};

const HeroCardSection = () => {
  const [cards, setCards] = useState(heroData);
  const [trigger4Activated, setTrigger4Activated] = useState(false);
  const containerRef = useRef(null);
  const triggerRef1 = useRef(null);
  const triggerRef2 = useRef(null);
  const triggerRef3 = useRef(null);
  const triggerRef4 = useRef(null);

  const swapTwoRandom = useCallback((arr) => {
    const copy = [...arr];

    let i = Math.floor(Math.random() * copy.length);
    let j = Math.floor(Math.random() * copy.length);
    while (j === i) j = Math.floor(Math.random() * copy.length);

    const otherIndices = [0, 1, 2, 3].filter((idx) => idx !== i && idx !== j);

    [copy[i], copy[j]] = [copy[j], copy[i]];

    [copy[otherIndices[0]], copy[otherIndices[1]]] = [
      copy[otherIndices[1]],
      copy[otherIndices[0]],
    ];

    return copy;
  }, []);

  const switchCards = useCallback(() => {
    setCards((prevCards) => ({
      left: swapTwoRandom(prevCards.left),
      right: swapTwoRandom(prevCards.right),
    }));
  }, [swapTwoRandom]);

  const triggerCallback = useCallback(() => switchCards(), [switchCards]);

  useMidpointTriggers([
    {
      ref: triggerRef1,
      onTrigger: triggerCallback,
      onDeactivate: triggerCallback,
      id: "trigger1",
    },
    {
      ref: triggerRef2,
      onTrigger: triggerCallback,
      onDeactivate: triggerCallback,
      id: "trigger2",
    },
    {
      ref: triggerRef3,
      onTrigger: triggerCallback,
      onDeactivate: triggerCallback,
      id: "trigger3",
    },
    {
      ref: triggerRef4,
      onTrigger: () => setTrigger4Activated(true),
      onDeactivate: () => setTrigger4Activated(false),
      id: "trigger4",
    },
  ]);

  return (
    <div
      ref={containerRef}
      className="w-full hero-animation relative flex items-center justify-between pt-16"
    >
      <div className="absolute top-0 left-0 flex flex-col gap-16 w-full h-full justify-start items-center mt-10">
        <div ref={triggerRef1} className="w-full h-1" />
        <div ref={triggerRef2} className="w-full h-1" />
        <div ref={triggerRef3} className="w-full h-1" />
        <div ref={triggerRef4} className="w-full h-1" />
      </div>

      <div className="absolute top-0 left-0 w-full h-full flex justify-center items-end z-40 flex-col">
        <div className="h-1/2 w-full">
          <div className="mt-14 w-full h-full flex justify-between px-2">
            <Image
              src="/images/undraw/FIGMA_CARD_STARS.svg"
              width={200}
              height={200}
              alt="stars"
              className={`w-10 h-10 object-fit -ml-2 ${
                trigger4Activated ? "show-card-icons" : "not-show-card-icons"
              }`}
            />

            <Image
              src="/images/undraw/FIGMA_CROWN.svg"
              width={200}
              height={200}
              alt="stars"
              className={`w-10 h-10 object-fit -mr-2 rotate-32 ${
                trigger4Activated ? "show-card-icons" : "not-show-card-icons"
              }`}
            />
          </div>
        </div>
        <div className="h-1/2 w-full gradient"></div>
      </div>

      <div className="w-1/2 h-full flex items-center justify-start flex-col gap-4 pl-6 pr-8 py-6">
        {cards.left.map((p, index) => (
          <motion.div
            key={p.id}
            layout
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 500,
              damping: 35,
              duration: 1,
            }}
            className={`w-full h-24 rounded-2xl border flex items-center gap-4 px-4 ${
              index === 0 && trigger4Activated
                ? "glow border-harbor-blue"
                : "not-glow border-zinc-300"
            }`}
          >
            <div className="w-16 h-16 rounded-full bg-zinc-200">
              <Image
                src={p.profilePicture}
                alt={p.name}
                width={100}
                height={100}
                className="rounded-full object-cover"
              />
            </div>
            <div className="flex-1 flex flex-col gap-2">
              <div
                className={`${hindMadurai.className} pl-2 text-lg flex justify-between items-center`}
              >
                <div>{p.name}</div>
                <div
                  className={`${hindMaduraiLite.className} text-base flex justify-center items-center gap-2`}
                >
                  {p.career} <Briefcase className="w-5 h-5" />
                </div>
              </div>
              <div className="w-full h-6 pl-2 pr-0">
                <div
                  className={`w-full h-full rounded-lg ${
                    index == 0 && trigger4Activated
                      ? "glow-profile-card-div"
                      : "not-glow-profile-card-div"
                  }`}
                ></div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="h-full w-[5px] bg-zinc-200 py-6">
        <div className="h-1/4 w-full flex justify-center items-center">
          <div className="relative w-8 h-8 min-w-8 min-h-8">
            <FaHeart
              className={`absolute inset-0 w-8 h-8 text-pink-600 transition-opacity transition-transform duration-300 ease-in-out ${
                trigger4Activated
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-80 pointer-events-none"
              }`}
            />
            <div
              className={`absolute inset-0 rounded-full bg-zinc-500 text-white flex items-center justify-center transition-opacity transition-transform duration-300 ease-in-out ${
                trigger4Activated
                  ? "opacity-0 scale-120 pointer-events-none"
                  : "opacity-100 scale-100"
              }`}
            >
              1
            </div>
          </div>
        </div>
        <div className="h-1/4 w-full flex justify-center items-center">
          <div
            className={`w-8 h-8 bg-zinc-500 rounded-full min-w-8 min-h-8 flex justify-center items-center text-white ${poppins.className}`}
          >
            2
          </div>
        </div>
        <div className="h-1/4 w-full flex justify-center items-center">
          <div
            className={`w-8 h-8 bg-zinc-500 rounded-full min-w-8 min-h-8 flex justify-center items-center text-white ${poppins.className}`}
          >
            3
          </div>
        </div>
        <div className="h-1/4 w-full flex justify-center items-center">
          <div
            className={`w-8 h-8 bg-zinc-500 rounded-full min-w-8 min-h-8 flex justify-center items-center text-white ${poppins.className}`}
          >
            4
          </div>
        </div>
      </div>
      <div className="w-1/2 h-full flex items-center justify-start flex-col gap-4 pr-6 pl-8 py-6">
        {cards.right.map((p, index) => (
          <motion.div
            key={p.id}
            layout
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 500,
              damping: 35,
              duration: 1,
            }}
            className={`w-full h-24 rounded-2xl border flex items-center gap-4 px-4 ${
              index === 0 && trigger4Activated
                ? "glow border-harbor-blue"
                : "not-glow border-zinc-300"
            }`}
          >
            <div className="w-16 h-16 rounded-full bg-zinc-200">
              {" "}
              <Image
                src={p.profilePicture}
                alt={p.name}
                width={100}
                height={100}
                className="rounded-full object-cover"
              />
            </div>
            <div className="flex-1 flex flex-col gap-2">
              <div
                className={`${hindMadurai.className} pl-2 text-lg flex justify-between items-center`}
              >
                <div>{p.name}</div>
                <div
                  className={`${hindMaduraiLite.className} text-base flex justify-center items-center gap-2`}
                >
                  {p.career} <Briefcase className="w-5 h-5" />
                </div>
              </div>
              <div className="w-full h-6 pl-2 pr-0">
                <div
                  className={`w-full h-full rounded-lg ${
                    index == 0 && trigger4Activated
                      ? "glow-profile-card-div"
                      : "not-glow-profile-card-div"
                  }`}
                ></div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default HeroCardSection;
