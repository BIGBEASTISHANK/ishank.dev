"use client";
import { motion } from "framer-motion";
import HeadingBasic from "@/utility/HeadingBasic";
import { paletteColors } from "@@/data/PaletteColors";

export default function ColorPalette() {
  return (
    <div id="colorPalette" className="px-5 flex flex-col scroll-mt-24">
      {/* Heading */}
      <HeadingBasic
        heading="Color Palette"
        url="/#colorPalette"
        animationDelay={3.8}
      />

      {/* Table */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 4.1 }}
        className="overflow-x-auto"
      >
        <table className="border border-[#444D7E] w-full">
          {paletteColors.map((data, index) => (
            <motion.tr
              initial={{ y: -50, scale: 0.4, opacity: 0 }}
              animate={{ y: 0, scale: 1, opacity: 1 }}
              transition={{ delay: 4.4 + (index * 0.3) / 2 }}
              key={index}
            >
              {/* Color name */}
              <th className="md:text-xl w-[40%] px-2 border border-[#444D7E]">
                {data.name}
              </th>

              {/* Colors */}
              <th className="px-2 border border-[#444D7E]">
                <div
                  className="h-11 px-5 my-2 outline outline-white"
                  style={{ background: data.hex }}
                />
              </th>
            </motion.tr>
          ))}
        </table>
      </motion.div>
    </div>
  );
}
