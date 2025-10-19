type props = {
    title: string,
    desc: string,
    img: string
}

export default function AdvComponent(props: props) {
    return (
        <div className="flex items-center w-full font-enconde-sans gap-3.5 h-full justify-center">
            <img src={props.img} alt={props.title} />
            <div>
                <h2 className="text-lg font-bold">{props.title}</h2>
                <span className="text-sm">{props.desc}</span>
            </div>
        </div>
    )
}
