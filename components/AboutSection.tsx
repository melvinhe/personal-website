import React from "react"
import { TiArrowForward } from "react-icons/ti"
import Link from "next/link"

const skills = [
  { skill: "GoLang" },
  { skill: "C/C++" },
  { skill: "TypeScript" },
  { skill: "Python" },
  { skill: "Java" },
  { skill: "HTML/CSS" },
  { skill: "Angular"},
  { skill: "React" },
  { skill: "Three.js" },
  { skill: "Express.js" },
  { skill: "Node.js" },
  { skill: "MongoDB" },
  { skill: "SQL" },
  { skill: "AWS" },
  { skill: "Azure" },
  { skill: "Firebase" },
  { skill: "Postman" },
  { skill: "Terraform" },
  { skill: "Jenkins" },
  { skill: "Docker" },
  { skill: "Kubernetes" },

]

/**
 * @param head - head of description
 * @param description - main description
 */
const aboutInfo = [
  {
    head: "Brown CSA",
    description: "I'm a current Family Head for Brown's Chinese-American Students Association where we hold events and panels to introduce Chinese culture to members of the Brown community!",
    link: "https://browncsa.github.io/csa/"
    
  },
  {
    head: "Sports",
    description: "Whether it's watching or playing, you can catch me cheering on the Celtics and Boston teams, or playing a quick pick-up game of football, tennis, or basketball!",
    link: ""
  },
  {
    head: "Hobbies",
    description: "Some of my other hobbies include scenic biking & hiking, playing Super Smash Bros & board games with friends, and learning a new recipe/dish to cook (and eat)!",
    link: "",
  },
]

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-24 md:pb-38">
        <h1 className="text-center font-bold text-4xl">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-sky-400 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 ">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Get to know me!
            </h1>
            <p>
              Hi, I'm Melvin He, from Massachusetts! I enjoy solving challenging problems, and I do it with the use of code!

              I'm a junior at Brown University, where I'm studying Computer Science.
              In particular, I love working with AI and Systems,
              and I do a bunch of Full-Stack development too.
            </p>
            <br />
            <p>
              Besides coding, some of my other passions are the following:
            </p>
            <ul className="mt-1.5 flex flex-col gap-3">
              {aboutInfo.map((fact, indx) => {
                return (
                  <div key={indx}>
                  <li
                    className={"text-base flex gap-2"}
                  >
                    <span className="mt-1">
                      <TiArrowForward />
                    </span>
                    <div className="w-full">
                    {fact.link !== "" ? (
                      <>
                      <Link href={fact.link} target="_blank">
                        <span className="text-sky-400 font-bold hover:underline 
                        cursor-pointer "> {fact.head} </span>
                      </Link>
                      </>
                    ) : 
                    <span className="text-sky-400 font-bold
                      ">{fact.head}</span>}
                    {": " + fact.description}
                  </div>
                  </li>
                </div>
                )
              })}
            </ul>


          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold mb-4">Skills</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold hover:bg-sky-400 hover:text-white cursor-pointer"
                  >
                    {item.skill}
                  </p>
                )
              })}
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection