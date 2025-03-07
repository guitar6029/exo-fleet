import Image from "next/image";
import SpaceHero from "@/assets/images/space-station.jpg";

export default function Hero() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative">
      <Image
        src={SpaceHero}
        alt="Space Hero"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        quality={100}
        className="absolute inset-0 -z-10"
      />
      <div className="flex flex-col items-center gap-4 p-4 hover:bg-gradient-to-l transition duration-300 ease-in bg-gradient-to-r from-slate-100 to-slate-700 rounded-lg border-4 border-neutral-900 shadow-lg shadow-neutral-900">
        <h1 className="neon-vortex text-xl sm:text-5xl lg:text-7xl font-bold">ExoFleet</h1>
        <h1 className="text-2xl font-bold font-mono">
          Command Your Fleet Across the Stars
        </h1>
      </div>
    </div>
  );
}
