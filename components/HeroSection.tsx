"use client" // this is a client component// Import useState and useEffect from React
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Link } from "react-scroll/modules";
import { HiArrowDown } from "react-icons/hi";

const HeroSection = () => {
  const [typedText, setTypedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const textToType = "Hi, I'm Melvin!";

    const typingInterval = setInterval(() => {
      setTypedText((prev) => {
        if (index < textToType.length) {
          return prev + textToType[index];
        }
        return prev;
      });

      setIndex((prev) => {
        if (prev < textToType.length - 1) {
          return prev + 1;
        }
        clearInterval(typingInterval);
        return prev;
      });
    }, 100);

    // Clean up the interval on component unmount
    return () => clearInterval(typingInterval);
  }, [index]); // Include index as a dependency

  return (
    <section id="home" className="animate-fadeIn animation-delay-2">
      <div className="flex flex-col text-center items-center justify-center my-10 py-16 sm:py-32 md:py-48 md:flex-row md:space-x-4 md:text-left">
        <div className="md:mt-2 md:w-1/2 animate-fadeIn animation-delay-4">
          <Image
            src="/headshot.png"
            alt=""
            width={325}
            height={325}
            className="rounded-full shadow-2xl"
          />
        </div>
        <div className="md:mt-2 md:w-3/5 animate-fadeIn animation-delay-4">
          <h1 className="text-4xl font-bold mt-6 md:mt-0 md:text-7xl">
            {typedText}
          </h1>
          <p className="text-lg mt-4 mb-6 md:text-2xl animate-fadeIn animation-delay-6">
            Thanks for stopping by. 👋
          </p>
          <Link
            to="projects"
            className="text-neutral-100 font-semibold px-6 py-3 bg-blue-600 rounded shadow hover:bg-blue-700"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            Projects
          </Link>
        </div>
      </div>
      <div className="flex flex-row items-center text-center justify-center ">
        <Link
          to="about"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <HiArrowDown size={35} className="animate-bounce" />
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;