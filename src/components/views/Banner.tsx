"use client";

import Image from "next/image";
import { Typewriter } from "react-simple-typewriter";
import SocialIcons from "../SocialIcons/SocialIcons";
import Link from "next/link";
import HeroScene from "../three/HeroScene"; // Import the Three.js scene
import { ScrollReveal } from "../animations/ScrollReveal";
import { motion } from "framer-motion";
import MagneticButton from "../animations/MagneticButton";
import { TextReveal } from "../animations/TextReveal";

const Banner = () => {

  return (
    <div className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden bg-gray-900">

      {/* Three.js Background */}
      <div className="absolute inset-0 z-0">
        <HeroScene />
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 w-full py-10 pointer-events-none"> {/* pointer-events-none to let clicks pass to canvas if needed, but we have interactive buttons so we need careful handling */}
        <div className="container mx-auto px-4 md:px-8 text-white flex flex-col md:flex-row items-center justify-between gap-10 pointer-events-auto">
          {/* Left Content - Text */}
          <div className="w-full flex-1 space-y-6">
            <ScrollReveal width="100%" delay={0.1}>
              <TextReveal className="text-xl md:text-2xl lg:text-3xl xl:text-4xl text-gray-300">
                It&apos;s Me
              </TextReveal>
            </ScrollReveal>

            <ScrollReveal width="100%" delay={0.2}>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-green-400 leading-tight">
                MD. HUMAYUN KABIR SOBUJ
              </h1>
            </ScrollReveal>

            <ScrollReveal width="100%" delay={0.3}>
              <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold">
                I&apos;m a{" "}
                <span className="text-blue-300">
                  <Typewriter
                    words={[
                      "Full-Stack Developer_",
                      "Node Js Developer_",
                      "MERN Stack Developer_",
                    ]}
                    loop={true}
                    cursorStyle="_"
                    cursorColor="#2196F3"
                  />
                </span>
              </h3>
            </ScrollReveal>

            <ScrollReveal width="100%" delay={0.4}>
              <p className="text-base md:text-lg font-light leading-relaxed text-gray-400 max-w-lg">
                I am a MERN Stack Web Developer skilled in Tailwind CSS,
                JavaScript, TypeScript, React.js, and Next.js. I have experience
                with Firebase, Node.js, Express.js, MongoDB, and Mongoose. I also
                use Redux, Ant Design, and ShadCN.
              </p>
            </ScrollReveal>

            <ScrollReveal width="100%" delay={0.5}>
              <div className="pt-4">
                <SocialIcons />
              </div>
            </ScrollReveal>

            <div className="pt-4">
              <MagneticButton>
                <Link href={"/contact"} className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md bg-blue-600 px-8 font-medium text-white transition-all duration-300 hover:bg-blue-700 w-full md:w-auto">
                  <span className="mr-2">Hire Me</span>
                  <span className="relative h-5 w-5 group-hover:translate-x-1 transition-transform duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                    </svg>
                  </span>
                  <div className="absolute inset-0 -z-10 bg-gradient-to-r from-green-500 to-blue-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </Link>
              </MagneticButton>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="w-full flex-1 flex justify-center items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5, type: "spring" }}
              className="relative"
            >
              {/* Glowing ring */}
              <div className="absolute inset-0 rounded-full bg-blue-500 blur-[60px] opacity-30 animate-pulse" />

              <div className="h-72 w-72 md:h-80 md:w-80 mx-auto relative overflow-hidden rounded-full border-4 border-blue-500/30 z-10 bg-gray-900">
                <Image
                  src="/profile.jpg"
                  alt="Humayun Kabir Sobuj"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Floating Orbitals elements visualization (Optional decoration) */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-[-40px] rounded-full border border-blue-500/10 pointer-events-none"
                style={{ borderStyle: "dashed" }}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
