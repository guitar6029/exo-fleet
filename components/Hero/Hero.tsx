import Image from 'next/image';
import SpaceHero from '@/assets/images/space-station.jpg';

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
            <div className="flex flex-col gap-4 p-4">
                <h1 className="neon-vortex text-7xl font-bold">ExoFleet</h1>
            </div>
        </div>
    );
}
