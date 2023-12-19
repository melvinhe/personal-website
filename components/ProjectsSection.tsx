import React from "react";
import Image from "next/image";
import Link from "next/link";
import SlideUp from "./SlideUp";
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs";

const projects = [
  {
    name: "Flight Simulator Pro",
    description:
      "Three.js and React airplane model flight simulator with infinite mountainous terrain & crash effects!",
    image: "/flight_sim.png",
    github: "https://github.com/melvinhe/flight-simulator-pro",
    link: "https://www.youtube.com/watch?v=2E8I4dWs59s",
  },
  {
    name: "Onion Routing ACN",
    description:
      "Research paper and accompanying Go-based implementation of onion-layered ACN system with end-to-end AES encryption and Diffie-Hellman key exchange, deployable on Docker machines.",
    image: "/or-acn.png",
    github: "https://github.com/melvinhe/onion-routing-acn/tree/main",
    link: "https://onion-routing-acn.s3.amazonaws.com/melvinhe.pdf",
  },
  {
    name: "IP-TCP",
    description:
      "RFC-compliant Internet Protocol and Transmission Control Protocol with circular buffers, retransmission queues, and connection teardown. Built from scratch in GoLang, Lua, and Python.",
    image: "/ip-tcp.png",
    github: "https://github.com/melvinhe/ip-tcp",
    link: "https://github.com/melvinhe/ip-tcp/blob/main/README.md",
  },
  {
    name: "Jara Unit",
    description:
      "IoT-enabled, crank & solar-powered educational device built for children globally in low-income regions like Nepal. Won Develop For Good 2023 Summit's Most Creative & Most Impactful award.",
    image: "/jara.gif",
    github: "https://www.developforgood.org/",
    link: "https://www.joinjara.com/",
  },
  {
    name: "Realtime Raytracer",
    description:
      "Realtime OpenGL graphics pipeline and raytracing engine in C++, built with OOP design to handle complex scene parsing, phong illumination, reflection, point lights, spot lights, attenuation, texture mapping, FBOs, and camera interactability.",
    image: "/reflections_complex.png",
    github: "https://github.com/melvinhe/C-projects/tree/main/realtime",
    link: "https://github.com/melvinhe/C-projects/tree/main/raytracing",
  },
  {
    name: "CogniCents",
    description:
      "Equity research and financial data analyzer using AWS Sagemaker, BloombergGPT, Verbwire API, and DistillBERT LLMs to give ticker visualization and sentiment analysis on user-inputted 10-Q reports, stock market trends, and real-time news articles.",
    image: "/cognicents.png",
    github: "https://github.com/melvinhe/Cogni-Cents",
    link: "https://devpost.com/software/cognicents",
  },
  {
    name: "Caching I/O",
    description:
      "Implemented a single slot cache in C to reduce the number of system calls (i.e., buffered read, write, flush) to optimize database system performance to within 5x of stdio's runtime performance.",
    image: "/cachio.png",
    github: "https://github.com/melvinhe/C-projects/tree/main/cachio",
    link: "",
  },
  /*{
    name: "StickySign",
    description:
      "HackHarvard Accessability award-winning IoT gaming environment built using OpenCV, 3D projectors, Python scripts, and Sticky Notes to host an AR arena that gamifies learning American Sign Language (ASL).",
    image: "/jara.gif",
    github: "https://github.com/melvinhe/Cogni-Cents",
    link: "https://devpost.com/software/cognicents",
  },*/
];

const ProjectsSection = () => {
  return (
    <section id="projects">
      <h1 className="my-10 text-center font-bold text-4xl">
        Featured Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className="md:w-1/2">
                    {/* Conditionally render Link based on project.link */}
                    {project.link ? (
                      <Link href={project.link}>
                        <Image
                          src={project.image}
                          alt=""
                          width={1000}
                          height={1000}
                          className="rounded-xl shadow-xl hover:opacity-70"
                        />
                      </Link>
                    ) : (
                      <Image
                        src={project.image}
                        alt=""
                        width={1000}
                        height={1000}
                        className="rounded-xl shadow-xl hover:opacity-70"
                      />
                    )}
                  </div>
                  <div className="mt-8 md:w-1/2">
                    <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {project.description}
                    </p>
                    <div className="flex flex-row align-bottom space-x-4">
                      {/* Conditionally render Link based on project.github */}
                      {project.github && (
                        <Link href={project.github} target="_blank">
                          <BsGithub
                            size={30}
                            className="hover:-translate-y-1 transition-transform cursor-pointer"
                          />
                        </Link>
                      )}
                      {/* Conditionally render Link based on project.link */}
                      {project.link && (
                        <Link href={project.link} target="_blank">
                          <BsArrowUpRightSquare
                            size={30}
                            className="hover:-translate-y-1 transition-transform cursor-pointer"
                          />
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProjectsSection;
