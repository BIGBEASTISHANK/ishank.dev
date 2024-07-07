import Hero from "@/components/Home/Hero";
import About from "@/components/Home/About";
import Skills from "@/components/Home/Skills";
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
