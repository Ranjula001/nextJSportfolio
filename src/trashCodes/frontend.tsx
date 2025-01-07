"use client";

import { Button } from "@nextui-org/react";
import { useRef } from "react";
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

  const handleToast = () => {
    toast(
      "This art is a section of the famous Sigiriya frescoes in Sri Lanka, depicting celestial apsaras and dating back over 1500 years."
    );
  };

  const handleViewProjects = () => {
    // Scroll to the Projects section
    if (navProjectRef.current) {
      navProjectRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleViewContacts = () => {
    // Scroll to the Projects section
    if (navContacttRef.current) {
      navContacttRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-[#121212] text-white min-h-screen font-sans">
      <div>
        {/* Background Image */}
        <Image
          src="/Sigiriya.jpg"
          alt="Background"
          layout="fill"
          objectFit="cover"
          className="opacity-30"
        />
      </div>
      <div>
        {/* Hero Section */}
        <section className="h-screen relative flex">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center z-10"
          >
            <div className="grid grid-cols-2 gap-4 justify-center space-x-40">
              <button
                className="absolute right-0 top-4 transform -translate-y-1/2 z-0 mr-20 mt-4 uppercase"
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

              <div className="text-start mx-20 my-40">
                <span className="text-[#f3dbc7] text-4xl leading-none">
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
                {/* <span className="text-[#f3dbc7] font-handWritten text-5xl leading-none">
                {" "}
                &{" "}
              </span> */}
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
                <span className="text-3xl font-semibold text-[#f3dbc7]">
                  {new Date().toLocaleDateString("en-US", {
                    month: "short",
                  })}
                </span>
              </div>
            </div>

            <div className="absolute left-1/2 top-1/2 transform -translate-y-1/2 z-0  mt-48 cursor-none hover:text-[#E8E7CB] transition-colors duration-500 ">
              <div className="text-2xl text-[#f5eee6] font-semibold uppercase mr-20">
                <p className="text-end">I am a developer and UI/UX</p>
                <p className="text-justify">
                  enthusiast based in Sri Lanka. I specialize in creating
                  intuitive and user-friendly digital experiences. With hands-on
                  experience in front-end development, I love combining
                  functionality with clean, modern design. I’m passionate about
                  music, fitness, and art.
                </p>
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
          }}
        />

        {/* Introduction section*/}
        <section className="h-screen flex flex-col justify-center items-center mx-auto">
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
              </div>
            </div>

            <div className="mt-6 flex gap-4 justify-end mr-20">
              <Button
                className="hover:bg-[#E8E7CB]"
                onClick={handleViewProjects}
              >
                View Projects
              </Button>
              <Button
                className="hover:bg-[#E8E7CB]"
                onClick={handleViewContacts}
              >
                Contact Me
              </Button>
            </div>

            <div className="absolute right-0 top-[1350px] transform -translate-y-1/2 z-0 mr-20">
              <Image src={dDev} width={90} alt="Dev_Designer" />
            </div>

            <div className="absolute left-1/2 top-[1330px] transform -translate-y-1/2 z-0 ml-28">
              <Image src={downLeft} width={130} alt="arrow" />
            </div>

            <div className="absolute left-1/2 top-[1380px] transform -translate-y-1/2 z-0 ml-80 mt-48 cursor-none">
              <Me />
            </div>
          </motion.div>
        </section>

        {/* About Section */}
        <section className="py-20 border-t border-b border-gray-800">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="max-w-4xl mx-auto text-center"
          >
            {/* <h2 className="text-8xl font-drukXXCondTrial font-bold mb-6 uppercase">hello i am ranjula </h2> */}
            <p className="text-lg text-gray-400">
              I bring my passion for technology and creativity to craft digital
              solutions that leave a lasting impact. With expertise in web
              development, user experience, and intuitive design, I work with
              individuals, startups, and companies to transform ideas into
              functional and beautiful applications. Driven by curiosity, I
              continuously learn and grow to create meaningful digital products
              that connect people and ideas.
            </p>
          </motion.div>
        </section>

        {/* Projects Section */}
        <section
          className="py-20 justify-between items-center justify-items-center border-t border-b border-gray-800"
          ref={navProjectRef}
        >
          <h2 className="text-4xl font-bold text-center mb-10">My Projects</h2>
          <div className="justify-center">
            <ProjectsCards />
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 " ref={navContacttRef}>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-center mb-6">Contact Me</h2>
            <ContactForm />
          </motion.div>
        </section>

        {/* Footer */}
        <footer className="py-10 bg-black">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-center"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d246.7243583498858!2d80.38057637486953!3d8.343497499461815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2slk!4v1735542744307!5m2!1sen!2slk"
              width="100%"
              height="200"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="My Location"
              className="rounded-md mb-4"
            ></iframe>
            <p className="text-gray-400">
              © {new Date().getFullYear()} Ranjula Ilukpitiya. All rights
              reserved.
            </p>
          </motion.div>
        </footer>

        {/* Audio Player */}
        <div className="fixed bottom-0 mb-96 mt-80 left-4 z-50">
          <FloatingAudioPlayer />
        </div>
      </div>
    </div>
  );
}
