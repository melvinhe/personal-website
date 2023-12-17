import { TiArrowForward } from "react-icons/ti";
import { useEffect, useState } from "react";
import Link from "next/link";
const ExperienceBD = ({ currExp }: any) => {

  return (
    <div>
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        {currExp.position}
        <span className={`tracking-wide ${currExp.position !== "" ? "text-sky-400 font-bold hover:underline" : "text-base text-xl hover:underline"}`}>
          <Link href={currExp.link} target="_blank">
          {currExp.position !== "" ? " @" + currExp.name : "" + currExp.name}
          </Link>
        </span>
      </h3>
      <p className="text-sm mt-1 font-medium text-gray">
        {currExp.duration}
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        {currExp.description.map((desc: string, indx: number) => (
          <div key={indx}>
            <li
              className={"text-base flex gap-2"}
            >
              <span className="mt-1">
                <TiArrowForward />
              </span>
              {desc}
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default ExperienceBD;