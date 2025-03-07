import Hero from "../../components/Hero/Hero";
import Card from "../../components/Cards/Card";
import SpaceStationImage from "@/assets/images/space-station-2.jpg";
import SpaceStation3 from "@/assets/images/space-station-3.jpg";
import { StaticImageData } from "next/image";

type TCard = {
  title?: string;
  description: string;
  img: StaticImageData;
};

const cards: TCard[] = [
  {
    title: "What is ExoFleet?",
    description:
      "ExoFleet is a cutting-edge space station simulation where you can command fleets of ships, build stations, and control entire space operations. Set your course, explore new planets, and manage resources to grow your fleet. The universe is waiting.",
    img: SpaceStationImage,
  },
  {
    title: "Features",
    description:
      "ExoFleet offers a rich set of features to keep you engaged. From managing your fleet of ships to mining precious resources, your journey is filled with strategic decision-making. Build stations, explore new worlds, and keep your fleet in top shape for whatever challenges lie ahead.",
    img: SpaceStation3,
  },
];

export default function Home() {
  return (
    <div>
      <Hero />
      {cards.map((card: TCard, index: number) => {
        return (
          <div key={index} className="min-h-screen flex flex-col items-center justify-center">
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
  );
}
