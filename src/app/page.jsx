import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import ColorPalette from "@/components/ColorPalette";

export default function Home() {
  return (
    <>
      <Hero />

      {/* Divider */}
      <div className="w-full h-[.125rem] my-12 bg-[#1793D1]" />

      <About />

      {/* Divider */}
      <div className="w-full h-[.125rem] my-12 bg-[#1793D1]" />

      <Skills />
    </>
  );
}
