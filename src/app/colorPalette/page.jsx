import ColorPalettePalette from "@/components/(5) ColorPalette";

// Meta data
export const metadata = {
  title: "Color Pallete | BIGBEASTISHANK",
  description: "My custom color pallete.",
  metadataBase: new URL(`https://${process.env.VERCEL_URL}`),
  keywords: [
    "Next.js",
    "React",
    "JavaScript",
    "Web Development",
    "Game development",
    "C++",
    "Unreal Engine",
    "Unity",
  ],
  images: "/img/metadata/sponsor.png",
  locale: "en_US",

  openGraph: {
    title: "Color Pallete | BIGBEASTISHANK",
    description: "My custom color pallete.",
    metadataBase: new URL(`https://${process.env.VERCEL_URL}`),
    keywords: [
      "Next.js",
      "React",
      "JavaScript",
      "Web Development",
      "Game development",
      "C++",
      "Unreal Engine",
      "Unity",
    ],
    images: "/img/metadata/sponsor.png",
    locale: "en_US",
  },
};
/////////////////////////////

export default function ColorPalette() {
  return (
    <>
      <ColorPalettePalette />
    </>
  );
}
