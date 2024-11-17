"use client";
import { motion } from "framer-motion";
import { myTools } from "@@/data/MyToolsData";
import HeadingBasic from "@/utility/HeadingBasic";

export default function MyTools() {
  return (
    <div id="myTools" className="px-5 scroll-mt-24">
      {/* Headings */}
      <HeadingBasic
        heading="My Tools"
        url="#myTools"
        animationDelay={2.5}
        description={
          <>
            <p>
              My Versatile tools for digital excellence, spanning web development,
              programming, and creative content.
            </p>
          </>
        }
      />

      {/* Section content */}
      <ul className="justify-center items-center text-center mt-5 flex flex-wrap md:gap-2 gap-x-1 gap-y-2">
        {/* Card */}
        {myTools.map((data, index) => (
          <motion.li
            key={index}
            initial={{ y: 50, scale: 0.4, opacity: 0 }}
            animate={{ y: 0, scale: 1, opacity: 1 }}
            transition={{ delay: 3 + (index * 0.3) / 2 }}
            className="select-none"
          >
            <div className="group bg-[#0A0C0E] border border-[#1793D1]/50 hover:border-[#00FF00]/70 flex flex-col overflow-auto h-[8rem] md:w-[8rem] w-[6rem] rounded-2xl hover:scale-[1.1] transition-all hover:shadow-xl shadow-md hover:shadow-[#00FF00]/80 shadow-[#1793D1]/50">
              {/* Icons */}
              <div className="p-5">
                <data.icon className="m-auto md:text-5xl text-4xl" />
              </div>

              {/* Divider */}
              <div className="w-full h-[.05rem] bg-[#1793D1] group-hover:bg-[#00FF00]" />

              {/* Name */}
              <p className="md:text-base text-sm my-auto px">{data.name}</p>
            </div>
          </motion.li>
        ))}
      </ul>
    </div>
  );
}
