import Image, { StaticImageData } from "next/image";
import Link from "next/link";

type DirectionType = "left" | "right";

type CardProps = {
  title?: string;
  description: string;
  imageSrc: StaticImageData;
  direction?: DirectionType;
  linkSrc?: string;
};

export default function Card({
  title,
  description,
  imageSrc,
  direction = "left",
  linkSrc,
}: CardProps) {
  const cardInfo = (
    <div className="grid grid-cols-2 rounded-2xl border-2 border-neutral-200 h-[40rem]">
      <div
        className={`col-span-1 ${
          direction === "right" ? "order-last" : "order-first"
        }`}
      >
        <Image
          src={imageSrc}
          alt={title ? title : "Card Image"}
          width={500}
          height={500}
          className={`w-full h-full object-cover ${
            direction === "left"
              ? "rounded-tl-2xl rounded-bl-2xl"
              : "rounded-tr-2xl rounded-br-2xl"
          }`}
        />
      </div>
      <div
        className={`col-span-1 flex flex-col items-center justify-center gap-2 bg-neutral-200 p-2 bg-gradient-to-br from-slate-100 to-slate-700 ${
          direction === "right"
            ? "rounded-tl-2xl rounded-bl-2xl"
            : "rounded-tr-2xl rounded-br-2xl"
        } `}
      >
        <h1 className="neon-vortex text-2xl font-bold text-center">{title}</h1>
        <p className="font-mono text-center">{description}</p>
        {linkSrc && <Link href={linkSrc}></Link>}
      </div>
    </div>
  );
  return cardInfo;
}
