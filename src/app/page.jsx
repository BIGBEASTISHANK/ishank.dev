import Hero from "@/components/(2) Home/Hero";
import About from "@/components/(2) Home/About";
import Skills from "@/components/(2) Home/Skills";
import ColorPalette from "@/components/(5) ColorPalette";

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
      <a rel="me" href="https://mastodon.gamedev.place/@bigbeastishank">Mastodon</a>
    </>
  );
}
