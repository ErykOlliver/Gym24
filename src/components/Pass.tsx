import { CheckCircle } from "lucide-react"

type props = {
    title: string
    price: string
    info: string[]
}


export default function Pass(props: props) {
    return (
        <article className="group hover:bg-solarFlare hover:border-2 border-solarFlare transition-all w-full snap-center rounded-xl h-full flex flex-col items-center justify-center bg-charcoalVoid font-enconde-sans">
            <header className="w-full transition-all group-hover:text-black group-hover:border-none flex flex-col items-center py-2 gap-1.5 justify-center border-b-2 font-semibold border-black">
                <h2 className="text-lg">{props.title}</h2>
                <p className="text-2xl">{props.price}</p>
            </header>
            <div className="flex flex-col transition-colors w-full group-hover:bg-charcoalVoid items-center rounded-b-xl h-full justify-between gap-10 p-5">
                <ul className="gap-3 flex flex-col">
                    {props.info.map(advantage => (
                        <li className="flex gap-1.5 items-center ">
                            <div className="flex items-center justify-center">
                                <CheckCircle className="size-6 group-hover:text-solarFlare transition-colors" />
                            </div>
                            <p className="text-sm text-start">{advantage}</p>
                        </li>
                    ))}
                </ul>

                <a href="" className="text-sm bg-solarFlare text-black font-enconde-sans flex items-center justify-center rounded-full font-bold w-24 h-8">Buy</a>
            </div>
        </article>

    )
}
