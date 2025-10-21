import { Instagram, Twitter, Youtube } from "lucide-react"

type props = {
    name: string
    photo: string
    instagram?: string
    youtube?: string
    twitter?: string
}

export default function Treiner(props: props) {
    return (
        <article className="w-full snap-center rounded-lg gap-2.5 p-5 h-full flex flex-col items-center justify-between bg-charcoalVoid font-enconde-sans">
            <img src={props.photo} alt={props.name} />
            <h2 className="text-lg font-semibold">{props.name}</h2>
            <div className="flex gap-2">
                <button className={`${props.instagram ? "p-2 hover:text-solarFlare hover:cursor-pointer border rounded-full" : "p-2 text-white/30 border rounded-full"}`}> <Instagram className="stroke-1" /> </button>
                <button className={`${props.twitter ? "p-2 hover:text-solarFlare hover:cursor-pointer border rounded-full" : "p-2 text-white/30 border rounded-full"}`}> <Twitter className="stroke-1" /> </button>
                <button className={`${props.youtube ? "p-2 hover:text-solarFlare hover:cursor-pointer border rounded-full" : "p-2 text-white/30 border rounded-full"}`}> <Youtube className="stroke-1" /> </button>
            </div>
        </article >
    )
}
