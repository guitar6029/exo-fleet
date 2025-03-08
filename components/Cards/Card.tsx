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
  const cardInfo =
    direction === "left" ? (
      <div className="grid grid-cols-2 rounded-full p-4 ">
        <div className="col-span-1">
          <Image
            src={imageSrc}
            alt={title ? title : "Card Image"}
            width={500}
            height={500}
            className="w-full"
          />
        </div>

        <div className="col-span-1 flex flex-col items-center justify-center gap-2  bg-neutral-200 p-2 bg-gradient-to-br from-slate-100 to-slate-700 ">
          <h1 className="neon-vortex text-2xl font-bold text-center">{title}</h1>
          <p className="font-mono text-center">{description}</p>
          {linkSrc && <Link href={linkSrc}></Link>}
        </div>
      </div>
    ) : (
      <div className="grid grid-cols-2 rounded-full p-4">
        <div className="col-span-1 flex flex-col items-center justify-center gap-2  bg-neutral-200 p-2 bg-gradient-to-br from-slate-100 to-slate-700 ">
          <h1 className="neon-vortex text-2xl font-bold text-center">{title}</h1>
          <p className="font-mono text-center">{description}</p>
          {linkSrc && <Link href={linkSrc}></Link>}
        </div>

        <div className="col-span-1">
          <Image
            src={imageSrc}
            alt={title ? title : "Card Image"}
            width={500}
            height={500}
            className="w-full"
          />
        </div>
      </div>
    );

  return cardInfo;
}
