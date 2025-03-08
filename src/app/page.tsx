import Hero from "../../components/Hero/Hero";
import Card from "../../components/Cards/Card";
import { cards } from "../../data/Cards/DataForLanding";
import type { TCard } from "../../data/Cards/DataForLanding";
import Link from "next/link";
export default function Home() {
  return (
    <div>
      <Hero />
      <div className="flex flex-col mt-[10rem] p-10 gap-10">
        {cards.map((card: TCard, index: number) => {
          return (
            <div
              key={index}
              className="flex flex-col items-center justify-center"
            >
              <Card
                title={card.title}
                description={card.description}
                imageSrc={card.img}
                direction={index % 2 === 0 ? "left" : "right"}
              />
            </div>
          );
        })}
      </div>
      <div className="min-h-screen mt-10 flex flex-col items-center justify-center">
        <div className="flex flex-col items-center p-4 bg-gradient-to-br from-blue-200 to-blue-300 border-4 border-neutral-200 rounded-full">
          <h3 className="text-[3.5rem] text-center font-bold neon-vortex text-white">
            Start Exploring
          </h3>
          <Link href="/main" className="text-2xl font-bold font-mono">Begin Your Journey</Link>
        </div>
      </div>
    </div>
  );
}
