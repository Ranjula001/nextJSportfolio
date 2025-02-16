"use client";

import { Button } from "@nextui-org/react";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import ContactForm from "./contact/contactForm";
import DateCounter from "./datecounter/dateCounter";
import Lottie from "react-lottie-player";
import Info from "../../public/infoAnime.json";
import toast, { Toaster } from "react-hot-toast";
import FloatingAudioPlayer from "./mp3Player/player";
import ProjectsCardsV2 from "./Projects/projectsV2";

export default function Portfolio() {
  const navProjectRef = useRef<HTMLDivElement>(null);
  const navContacttRef = useRef<HTMLDivElement>(null);

  const [backgroundOpacity, setBackgroundOpacity] = useState(1);
  const [backgroundPosition, setBackgroundPosition] = useState(0);

  // Handle scroll events to adjust background opacity and position
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const contactSectionTop = navContacttRef.current?.offsetTop || 0;

      // Calculate fade out for background
      const maxFadeScroll = windowHeight * 0.75;
      const backgroundFade = 1 - Math.min(scrollPosition / maxFadeScroll, 1);

      // Calculate reappearance in contact section
      const contactSectionScroll =
        scrollPosition - contactSectionTop + windowHeight;
      const contactFade = Math.min(contactSectionScroll / windowHeight, 1);

      // Combine both effects
      const finalOpacity = Math.max(backgroundFade, contactFade * 0.4); // Adjust 0.4 for desired contact section visibility

      setBackgroundOpacity(finalOpacity);
      setBackgroundPosition(-scrollPosition * 0.2);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleToast = () => {
    toast(
      "This art is a section of the famous Sigiriya frescoes in Sri Lanka, depicting celestial apsaras and dating back over 1500 years."
    );
  };

  // const handleViewProjects = () => {
  //   if (navProjectRef.current) {
  //     navProjectRef.current.scrollIntoView({ behavior: "smooth" });
  //   }
  // };

  const handleViewContacts = () => {
    if (navContacttRef.current) {
      navContacttRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-[#121212] text-white min-h-screen font-sans">
      <Toaster
        position="top-center"
        toastOptions={{
          style: {
            background: "#333",
            color: "#fff",
          },
        }}
      />
      {/* Fixed Background Image */}
      <div
        className="fixed inset-0 z-0 transition-opacity duration-500"
        style={{
          opacity: backgroundOpacity,
          // transform: `translateY(${backgroundPosition}px)`,
        }}
      >
        <Image
          src="/Sigiriya.jpg"
          alt="Background"
          layout="fill"
          objectFit="cover"
          className="opacity-50"
        />
      </div>

      <div>
        {/* Hero Section */}
        <section className="relative z-10 h-screen flex items-center px-4 md:px-0">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="z-10 w-full"
          >
            <div className="flex flex-col md:grid md:grid-cols-2 gap-4 md:space-x-8">
              <button
                className="absolute right-4 top-4 md:right-8 md:top-4 z-50"
                onClick={handleToast}
              >
                <Lottie
                  loop
                  animationData={Info}
                  play
                  style={{ width: 30, height: 30 }}
                />
              </button>

              <div className="text-start pt-32 md:pt-96">
                <span className="text-[#f3dbc7] text-2xl md:text-4xl font-migraExtrabold">
                  creative
                </span>
                <motion.div className="text-[#f5eee6] md:text-[470px] text-[270px] font-drukXXCondTrial uppercase leading-none">
                  <span className="block">Frontend</span>
                  <span className="block">Developer</span>
                </motion.div>
              </div>

              <div className="mt-8 md:mt-0">
                <DateCounter />
                <span className="text-xl md:text-3xl font-migraExtrabold lowercase text-[#f3dbc7]">
                  {new Date().toLocaleDateString("en-US", { month: "short" })}
                </span>

                <div className="text-base md:text-2xl font-semibold uppercase mt-8 md:mt-64 px-0 md:px-14">
                  <p className="text-end">I am a developer and UI/UX</p>
                  <p className="text-justify mt-4">
                    enthusiast based in Sri Lanka. I specialize in creating
                    intuitive digital experiences. With experience in front-end
                    development, I love combining functionality with clean
                    design.
                  </p>
                </div>

                <div className="mt-6 flex justify-center md:justify-end md:mr-8">
                  <Button
                    className="bg-transparent border-[#f5eee6] border text-[#f5eee6] rounded-full uppercase font-semibold text-lg md:text-3xl p-4 md:p-5"
                    onClick={handleViewContacts}
                  >
                    Contact Me
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Introduction Section */}
        <section className="mx-auto mt-32 md:mt-72 px-4 md:px-0">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="flex flex-col md:grid md:grid-cols-2 gap-8 md:space-x-20">
              <div className="md:pl-20">
                <div className="md:pr-24">
                  <p className="font-drukXXCondTrial text-[200px] md:text-[270px] uppercase leading-tight text-[#f5eee6]">
                    Hello. I'm Ranjula
                  </p>
                  <p className="font-migraExtrabold text-lg md:text-xl text-[#f3dbc7]">
                    Ranjula Ilukpitiya
                  </p>
                </div>
                <p className="text-base md:text-2xl text-[#f5eee6] uppercase mt-6">
                  I turn ideas into digital experiences with clean design and
                  smart code. From startups to agencies, I help craft interfaces
                  and strategies. When I'm not coding, I'm making music or
                  gaming.
                </p>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Audio Player */}
        <div className="my-8 md:my-auto">
          <FloatingAudioPlayer />
        </div>

        {/* Projects Section */}
        <section className="mt-24 md:mt-48" ref={navProjectRef}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <ProjectsCardsV2 />
          </motion.div>
        </section>

        <section className="grid grid-flow-col grid-rows-3 gap-4 mx-12">
          <div className="row-span-3 text-[#f5eee6] text-start md:text-[470px] text-[300px] font-drukXXCondTrial uppercase leading-none">
            <span className="block">LET'S </span>
            <span className="block">CONNECT .</span>
          </div>
          <div className="col-span-2 row-span-2">
            <p className="uppercase text-3xl md:text-[50px] ">
              i'm always interested about
            </p>
            <div className="flex mt-14 gap-5">
              <Button
                className="bg-transparent border-[#f5eee6] border text-[#f5eee6] rounded-full uppercase font-semibold text-lg md:text-5xl p-4 md:p-8">
                UI/UX Design
              </Button>
              <Button
                className="bg-transparent border-[#f5eee6] border text-[#f5eee6] rounded-full uppercase font-semibold text-lg md:text-5xl p-4 md:p-8">
                frontend development
              </Button>
            </div>
            <div className="flex mt-5 pl-44 gap-5">
              <Button
                className="bg-transparent border-[#f5eee6] border text-[#f5eee6] rounded-full uppercase font-semibold text-lg md:text-5xl p-4 md:p-8">
                new business
              </Button>
              <Button
                className="bg-transparent border-[#f5eee6] border text-[#f5eee6] rounded-full uppercase font-semibold text-lg md:text-5xl p-4 md:p-8">
                Hangout
              </Button>
              <Button
                className="bg-transparent border-[#f5eee6] border text-[#f5eee6] rounded-full uppercase font-semibold text-lg md:text-5xl p-4 md:p-8">
                Coffee
              </Button>
            </div>
          </div>
          <div className="col-span-2"></div>
        </section>

        {/* Contact Section */}
        <section className="pb-10 px-4 md:px-0" ref={navContacttRef}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="w-full mx-auto"
          >
            <div className="relative p-8 md:p-12">
              <div className="">
                <ContactForm />
                <div className="mt-8 text-center text-sm text-white/60">
                  <p>Or reach out directly on WhatsApp:</p>
                  <p className="mt-2">+94 70 510 8896</p>
                </div>
              </div>
            </div>
          </motion.div>
        </section>
      </div>
    </div>
  );
}