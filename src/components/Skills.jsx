"use client";
import { motion } from "framer-motion";
import { skills } from "@@/data/SkillsData";
import HeadingBasic from "@/utility/HeadingBasic";

export default function Skills() {
  return (
    <div id="skills" className="px-5 scroll-mt-24">
      {/* Headings */}
      <HeadingBasic
        heading="Skills"
        url="#skills"
        animationDelay={4.75}
        description={
          <>
            <p>
              Versatile skills for digital excellence, spanning web development,
              programming, graphic design, and creative content.
            </p>
          </>
        }
      />

      {/* Section content */}
      <ul className="justify-center items-center text-center mt-5 flex flex-wrap md:gap-2 gap-x-1 gap-y-2">
        {/* Card */}
        {skills.map((data, index) => (
          <motion.li
            key={index}
            initial={{ y: 50, scale: 0.4, opacity: 0 }}
            animate={{ y: 0, scale: 1, opacity: 1 }}
            transition={{ delay: 5.25 + (index * 0.3) / 2 }}
            className="select-none"
          >
            <div className="bg-[#0A0C0E] border border-[#1793D1]/20 flex flex-col overflow-auto h-[8rem] md:w-[8rem] w-[6rem] rounded-2xl hover:scale-[1.1] transition-all hover:shadow-xl shadow-md hover:shadow-[#1793D1]/50 shadow-[#1793D1]/50">
              {/* Icons */}
              <div className="p-5">
                <data.icon className="m-auto md:text-5xl text-4xl" />
              </div>

              {/* Divider */}
              <div className="w-full h-[.05rem] bg-[#1793D1]" />

              {/* Name */}
              <p className="md:text-base text-sm my-auto px">{data.name}</p>
            </div>
          </motion.li>
        ))}
      </ul>
    </div>
  );
}
