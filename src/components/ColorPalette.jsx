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
      <div className="overflow-x-auto flex flex-col">
        {paletteColors.map((data, index) => (
          <motion.div
            initial={{ y: -50, scale: 0.4, opacity: 0 }}
            animate={{ y: 0, scale: 1, opacity: 1 }}
            transition={{ delay: 4.4 + (index * 0.3) / 2 }}
            key={index}
            className="flex border-2 border-[#444D7E] rounded-xl my-1 p-2"
          >
            {/* Name */}
            <p className="my-auto pr-3 md:w-[45%] w-[80%] md:font-bold md:text-xl">
              {data.name}
            </p>

            {/* Color */}
            <div
              className="w-full h-11 my-auto outline outline-white rounded-md"
              style={{ background: data.hex }}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
