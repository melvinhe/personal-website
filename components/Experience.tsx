"use client" // this is a client component

import ExperienceBD from "./ExperienceBD"
import { useState, useEffect } from "react";

/**
 * @param position - name of position of experience
 * @param name - name of the company
 * @param duration - how long I was at the company
 * @param description - nested array where each index is a bullet point
 */
const backgroundInfo = [
    {
        position: "Software Engineer Intern",
        name: "Fidelity Investments",
        duration: "June 2023 - August 2023",
        description: [
            "I worked on an agile development team to migrate Fidelity Institutional's JSP-based website to Angular with Sitecore as a CMS, contributing signficantly to ETF bricklet design, API development, Jenkins & Terraform CI/CD pipelines, cloud architecture, and unit/integration testing.",
            "Through rotational roles, I also helped with SwiftUI blockchain app development in Fidelity Labs (Fidelity's startup incubator) as well as quantitative equity trading and UI/UX platform design with Fidelity Capital Markets (Fidelity's innovative trading arm)."
        ],
        link: "https://institutional.fidelity.com/",
    },
    {
        position: "Software Engineer Intern",
        name: "ThermoFisher Scientific",
        duration: "July 2021 - Aug 2022",
        description: [
            "I worked on a devops team on a software data visualization solution for a Raman Spectrometer chemical instrument device, contributing with launching AWS cloud resources, configuring Github Actions CI/CD pipelines, and designing a unit/manual testing framework using Model XML/SPC chemical simulations.",
            "I designed and built a frontend responsive scheduling interface from scratch for the AerosolSense Sampler (an in-air COVID/pathogen detector) using BootstrapUI framework and used a BeagleBone, C++, and electrical circuits to integrate the machine's hardware components with its scheduling microservice.",
        ],
        link: "https://www.thermofisher.com/"

    }, 
    {
        position: "UX Product Design Solutions Lead",
        name: "Jara",
        duration: "April 2023 - Aug 2023",
        description: [
            "Led a team of 6 UX designers and worked directly with the IoT nonprofit organization’s CEO Soraya Fouladi to deliver crank-powered e-learning machines to globally serve impoverished children in regions like Nepal.",
            "I worked on designing and engineering a new user interface for the nonprofit startup's portable global electronic learning device. I contributed on cultural sensitivity, demographic analysis, color-blind awareness, feature scoping, Figma wireframing, data architecture, agile project management, and React development.",
            "Presented at Develop For Good’s 2023 summit, winning both most impactful & most creative awards. Work has directly impacted around 1,000 children since launch.",
        ], 
        link: "https://www.joinjara.com/"
    }, {
        position: "Head Teaching Assistant (HTA)",
        name: "Brown CS",
        duration: "Jan 2023 - Present",
        description: [
            "Teaching has always been one of my passions ",

        ],
        link: "https://alumni-friends.brown.edu/news/2023-06-21/computer-science/"
    }, 
    {
        position: "Developer Team",
        name: "Hack@Brown",
        duration: "June 2023 - Present",
        description: [
            "Helped develop interactive graphics, create Docker tutorials, and deploy site",
        ], 
        link: "https://2024.hackatbrown.org/"
    },
    {
        position: "",
        name: "Full Stack @ Brown",
        duration: "Feb 2022 - Present",
        description: [
            "I love building projects.",
        ],
        link: ""
    }

]


const Experience = () => {

    const [currExp, setCurrExp] = useState(backgroundInfo[0]);

    /**
     * onClick function that handles setting the new current experience
     * @param name - name of the company to update description 
     */
    const handleClick = (name: string) => {
        for (let index = 0; index < backgroundInfo.length; index++) {
            if (name === backgroundInfo[index].name) {
                setCurrExp(backgroundInfo[index])
            }
            
        }
    }

    return (
        <section id="experience" className="max-w-containerxs mx-auto py-25 lgl:py-24 px-4">

            <h1 className="text-center font-bold text-4xl">
                Experiences
            <hr className="w-6 h-1 mx-auto my-4 bg-sky-400 border-0 rounded"></hr>
            </h1>
                    <div className="w-full mt-10 flex flex-col md:flex-row gap-16">
                    <ul className="md:w-36 flex flex-col">
                    {backgroundInfo.map((exp, indx) => {
                        return (
                            <div key={indx}>

                                <li 
                                onClick={() => handleClick(exp.name)}
                                className="border-l-2 border-l-sky-400 bg-transparent hover:bg-[#112240] hover:text-white py-3 text-sm
                                cursor-pointer duration-200 px-8 font-medium text-base flex gap-2 whitespace-normal">
                                    
                                    {exp.name}
                                </li>
                            </div>

                        )
                    })}
                    </ul>
                     <ExperienceBD currExp={currExp}/>
                    </div>

            
                    
        </section>
    )
}

export default Experience