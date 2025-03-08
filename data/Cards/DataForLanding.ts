import SpaceStationImage from "@/assets/images/space-station-2.jpg";
import SpaceStation3 from "@/assets/images/space-station-3.jpg";
import StationResources from "@/assets/images/station-resources.jpg";
import CargoSpaceship from "@/assets/images/cargo-ship.jpeg";
import { StaticImageData } from "next/image";


export type TCard = {
  title?: string;
  description: string;
  img: StaticImageData;
};

export const cards: TCard[] = [
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
  {
    title: "Fleet Management",
    description:
      "Control every aspect of your fleet, from cargo haulers to military ships. Manage your fleet’s operations, take on missions, and ensure safe travel through deep space. The galaxy’s economy depends on your decisions.",
    img: CargoSpaceship,
  },
  {
    title: "Planet Exploration and Resources",
    description:
      "Explore planets, mine rare minerals, and gather resources to expand your space station. Each planet has unique resources essential for your fleet’s growth. Trade, mine, and develop as you uncover new worlds to conquer.",
    img: StationResources,
  },
];
