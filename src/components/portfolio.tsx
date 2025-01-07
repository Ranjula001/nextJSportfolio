"use client";

import { Button } from "@nextui-org/react";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import AgeCounter from "./ageCal/AgeCounter";
import dDev from "../assets/devD.svg";
import downLeft from "../assets/DownLeft.svg";
import Me from "./me/me";
import ProjectsCards from "./Projects/projectCards";
import FloatingAudioPlayer from "./mp3Player/player";
import ContactForm from "./contact/contactForm";
import DateCounter from "./datecounter/dateCounter";
import Lottie from "react-lottie-player";
import Info from "../../public/infoAnime.json";
import toast, { Toaster } from "react-hot-toast";

export default function Portfolio() {
  const navProjectRef = useRef<HTMLDivElement>(null);
  const navContacttRef = useRef<HTMLDivElement>(null);

  const [backgroundOpacity, setBackgroundOpacity] = useState(1);
  const [backgroundPosition, setBackgroundPosition] = useState(0);

  // Handle scroll events to adjust background opacity and position
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const imageFadeStart = window.innerHeight * 0.50; // Start fading after 25% of the viewport height
      const imageFadeEnd = window.innerHeight * 0.65; // Gradual fade-out ends at 55% of the viewport height
      const imageReappearStart = navProjectRef.current?.offsetTop || 0;
      const imageReappearEnd = navContacttRef.current?.offsetTop || 0;

      // Gradual fade-out logic
      if (scrollPosition < imageFadeStart) {
        setBackgroundOpacity(1); // No fade at the top
        setBackgroundPosition(0); // Keep image at the top
      } else if (scrollPosition >= imageFadeStart && scrollPosition <= imageFadeEnd) {
        setBackgroundOpacity(1 - (scrollPosition - imageFadeStart) / (imageFadeEnd - imageFadeStart)); // Gradual fade-out
        setBackgroundPosition(-scrollPosition * 0.2); // Image scrolls up slowly
      } else if (scrollPosition > imageFadeEnd && scrollPosition <= imageReappearStart) {
        setBackgroundOpacity(0); // Fully faded out
        setBackgroundPosition(-scrollPosition * 0.2); // Image scrolls faster
      } else if (scrollPosition > imageReappearStart && scrollPosition < imageReappearEnd) {
        setBackgroundOpacity(0); // Keep the image faded out
        setBackgroundPosition(0); // Reset the position
      } else {
        setBackgroundOpacity(0); // Keep the image fully faded out
        setBackgroundPosition(imageReappearEnd - scrollPosition); // Keep moving image down till end
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
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
      {/* Fixed Background Image with Scroll Effect */}
      <div
        className="fixed inset-0 z-0"
        style={{
          backgroundPositionY: `${backgroundPosition}px`,
          opacity: backgroundOpacity,
          transition: "background-position 0.2s, opacity 0.2s", // Smooth transition
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
        <section className="relative z-10 h-screen flex items-center">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="z-10"
          >
            <div className="grid grid-cols-2 gap-4 space-x-8">
              <button
                className="absolute right-0 top-4 transform -translate-y-1/2 z-0 mt-4 uppercase mr-8"
                onClick={handleToast}
              >
                <span>
                  <Lottie
                    loop
                    animationData={Info}
                    play
                    style={{ width: 30, height: 30 }} // Adjust size as needed
                  />
                </span>
              </button>

              <div className="text-start pt-96">
                <span className="text-[#f3dbc7] text-4xl font-migraExtrabold leading-none">
                  creative
                </span>
                <br />
                <motion.span
                  whileHover={{ scale: 1.1, color: "#f3dbc7" }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className="text-[#f5eee6] text-[300px] font-drukXXCondTrial cursor-pointer uppercase leading-none tracking-[0.03em]"
                >
                  Frontend
                </motion.span>
                <br />
                <motion.span
                  whileHover={{ scale: 1.1, color: "#f3dbc7" }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className="text-[#f5eee6] text-[300px] font-drukXXCondTrial cursor-pointer uppercase leading-none tracking-[0.03em]"
                >
                  Developer
                </motion.span>
              </div>

              <div>
                <DateCounter />
                <span className="text-3xl font-migraExtrabold lowercase text-[#f3dbc7]">
                  {new Date().toLocaleDateString("en-US", {
                    month: "short",
                  })}
                </span>

                <div className="text-2xl text-[#f5eee6] font-semibold uppercase mt-64 px-14">
                  <p className="text-end">I am a developer and UI/UX</p>
                  <p className="text-justify">
                    enthusiast based in Sri Lanka. I specialize in creating
                    intuitive and user-friendly digital experiences. With
                    hands-on experience in front-end development, I love
                    combining functionality with clean, modern design. I’m
                    passionate about music, fitness, and art.
                  </p>
                </div>

                

                <div className="mt-6 flex gap-4 justify-end mr-8">
              {/* <Button
                className="hover:bg-[#E8E7CB]"
                onClick={handleViewProjects}
              >
                View Projects
              </Button> */}
              <Button
                className="bg-transparent border-[#f5eee6] border text-[#f5eee6] rounded-full uppercase font-semibold text-3xl p-5"
                onClick={handleViewContacts}
              >
                Contact Me
              </Button>
            </div>

              </div>
            </div>
          </motion.div>
        </section>

        {/* Toast Notification */}
        <Toaster
          position="top-center" // You can change position here
          toastOptions={{
            duration: 5000, // 5 seconds
            style: {
              backgroundColor: "#333", // Dark background
              color: "#fff", // White text
              borderRadius: "10px", // Rounded corners
              padding: "16px", // Padding inside the toast
              fontSize: "16px", // Font size
            },
          }}/>

        {/* Introduction Section */}
        <section className="flex flex-col justify-center items-center mx-auto mt-48">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center z-10"
          >
            <div className="grid grid-cols-2 gap-y-0 text-[#E8E7CB]">
              <div className="cursor-pointer">
                <p className="text-[400px] font-drukCondTrial leading-none hover:text-[#f5eee6] transition-colors duration-500">
                  RANJULA
                </p>
                <p className="text-[400px] font-drukCondTrial leading-none ml-20 hover:text-[#f5eee6] transition-colors duration-500">
                  ILUKPITIYA
                </p>
              </div>
              <div>
                <h1 className="text-[400px] font-drukCondTrial leading-none cursor-pointer hover:text-[#f5eee6] transition-colors duration-500">
                  <AgeCounter
                    startAge={25}
                    startYear={2025}
                    startMonth={10}
                    startDay={13}
                  />
                </h1>
                <p className="font-handWritten font-bold text-xl leading-none cursor-pointer hover:text-[#f5eee6] transition-colors duration-500">
                  YEARS OLD
                </p>

                <div className="absolute right-0 top-[1350px] transform -translate-y-1/2 z-0 mr-20">
              <Image src={dDev} width={90} alt="Dev_Designer" />
            </div>

            <div className="absolute left-1/2 top-[1330px] transform -translate-y-1/2 z-0 ml-28">
              <Image src={downLeft} width={130} alt="arrow" />
            </div>

            <div className="float-end">
              <Me />
            </div>

              </div>
            </div>

            
          </motion.div>
        </section>

        {/* Projects Section */}
        <section className="relative py-20 bg-[#121212] grid grid-cols-2 justify-center items-center" ref={navProjectRef}>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className=" mx-auto text-center text-[#E8E7CB]"
          >
            <div className="mt-8">
              <ProjectsCards />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className=" mx-auto text-center text-[#E8E7CB]"
          >
            <div className="text-[700px] font-bold text-start font-drukXXCondTrial leading-none">
              <span className="text-[#f5eee6]">PROJECTS</span>
            </div>
          </motion.div>

        </section>

        {/* Contact Section */}
        <section className=" py-20" ref={navContacttRef}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="max-w-4xl mx-auto text-center text-[#E8E7CB]"
          >
            <div className="text-4xl font-bold">Contact Me</div>
            <div className="mt-8">
              <ContactForm />
            </div>
          </motion.div>
        </section>
      </div>
    </div>
  );
}
