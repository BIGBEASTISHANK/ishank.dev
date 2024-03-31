import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Dotfile from "@/components/Dotfile";
import ColorPalette from "@/components/ColorPalette";

export default function Home() {
  return (
    <>
      <Hero />

      {/* Divider */}
      <div className="w-full h-[.125rem] my-12 bg-[#444D7E]" />

      <About />

      {/* Divider */}
      <div className="w-full h-[.125rem] my-12 bg-[#444D7E]" />

      <Dotfile />

      {/* Divider */}
      <div className="w-full h-[.125rem] my-12 bg-[#444D7E]" />

      <ColorPalette />

      {/* Divider */}
      <div className="w-full h-[.125rem] my-12 bg-[#444D7E]" />

      <Skills />
    </>
  );
}
