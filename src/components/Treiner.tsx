type props = {
    name: string
    photo: string
    instagram?: string
    youtube?: string
    twitter?: string
}

export default function Treiner(props: props) {
    return (
        <article className="w-full snap-center rounded-xl h-full flex flex-col items-center justify-center bg-charcoalVoid font-enconde-sans">
            <img src={props.photo} alt={props.name} />
            
        </article>
    )
}
