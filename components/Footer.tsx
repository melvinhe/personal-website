import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faHeart } from "@fortawesome/free-solid-svg-icons";
import {
  AiOutlineGithub,
  AiOutlineMail,
  AiOutlineLinkedin,
  AiOutlineFolder,
} from "react-icons/ai"

const Footer = () => {
  return (
    <footer className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl ">
      <hr className="w-full h-0.5 mx-auto mt-8 bg-neutral-200 border-0"></hr>
      <div className="mx-auto  p-4 flex flex-col text-center text-neutral-900 md:flex-row md:justify-between">
        <div className="flex flex-row items-center justify-center space-x-1 text-neutral-500 dark:text-neutral-100">
          <FontAwesomeIcon icon={faCode} />{" "}
          <span className="mx-1">with</span>{" "}
          <FontAwesomeIcon icon={faHeart} />{" "}
          <span className="mx-1">by</span>{" "}
          <a
            rel="noopener"
            href="https://github.com/melvinhe"
            aria-label="My GitHub"
          >
            {" "}
            <span className="rounded-full bg-blue-500 px-2 py-1 text-white">
              Melvin He
            </span>
          </a>{" "}
        </div>
        <div className="flex flex-row items-center justify-center space-x-2 mb-1">
          <a href="https://github.com/melvinhe" rel="noreferrer" target="_blank">
            <AiOutlineGithub
              className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100"
              size={30}
            />
          </a>
          <a
            href="mailto:melvin_he@brown.edu"
            rel="noreferrer"
            target="_blank"
          >
            <AiOutlineMail
              className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100"
              size={30}
            />
          </a>

          <a
            href="https://www.linkedin.com/in/melvin-he/"
            rel="noreferrer"
            target="_blank"
          >
            <AiOutlineLinkedin
              className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100"
              size={30}
            />
          </a>
          <a
            href="https://melvin-he.dev/"
            rel="noreferrer"
            target="_blank"
          >
            <AiOutlineFolder
              className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100"
              size={30}
            />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer