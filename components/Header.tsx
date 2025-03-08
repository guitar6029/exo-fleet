import Link from "next/link"

export default function Header() {
    return (
        <div className="flex flex-row items-center gap-4 p-3 bg-gradient-to-br from-blue-200 to-blue-300 text-black">
            <Link href={"/"}><h1 className="neon-vortex text-2xl font-bold">ExoFleet</h1></Link>
            <Link href={"/flights/arrivals"}><h1 className="text-xl font-bold font-mono uppercase">Arrivals</h1></Link>
            <Link href={"/flights/departures"}><h1 className="text-xl font-bold font-mono uppercase">Departures</h1></Link>
        </div>
    )
}