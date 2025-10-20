import { Facebook, Instagram, Mail, Phone, Twitter, Youtube } from "lucide-react";

export default function Footer() {
    return (
        <section className="h-2/4 w-screen snap-start items-center font-enconde-sans gap-11 px-5 py-15 flex flex-col">
            <h1 className="font-enconde-sans text-3xl font-semibold">Address</h1>
            <p className="text-center text-sm flex flex-col gap-5">
                Republic of Belarus <br />
                Minsk city <br />
                Dzerzhinsky Avenue 15
            </p>
            <h1 className="font-enconde-sans text-3xl font-semibold">Contact</h1>
            <p className="text-center text-sm flex flex-col gap-5">
                <span className="flex items-center justify-center gap-1.5"><Phone /> +375(44)-777-24-12</span>
                <span className="flex items-center justify-center gap-1.5"><Mail /> gym24@gmail.com</span>
            </p>
            <div className="flex gap-2">
                <button className="p-2 hover:text-solarFlare hover:cursor-pointer border rounded-full"> <Instagram className="stroke-1" /> </button>
                <button className="p-2 hover:text-solarFlare hover:cursor-pointer border rounded-full"> <Facebook className="stroke-1" /> </button>
                <button className="p-2 hover:text-solarFlare hover:cursor-pointer border rounded-full"> <Twitter className="stroke-1" /> </button>
                <button className="p-2 hover:text-solarFlare hover:cursor-pointer border rounded-full"> <Youtube className="stroke-1" /> </button>
            </div>
        </section>
    )
}
