import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react"

type props = {
    imgs: string[]
}



export default function Slider(props: props) {
    const [imgsCount, setImgCounts] = useState(0);

    return (
        <div className="md:flex flex-col hidden w-1/2 gap-1.5 items-center h-fit ">
            <div className="md:inline hidden w-full items-center">
                <img src={props.imgs[imgsCount]} alt="" className="md:w-md md:h-70 sm:w-xl sm:h-96 snap-center w-full h-full" />
            </div>
            <div className=" w-full h-full flex justify-between items-center">
                <div className="flex w-full gap-1 h-full items-center justify-start">
                    {props.imgs.map((_, index) => (
                        <div key={index} className={`w-1/7 rounded-full h-1.5 ${index == imgsCount ? 'bg-solarFlare' : 'bg-charcoalVoid'} `}></div>
                    ))}
                </div>
                <div className="flex gap-1.5">
                    <ArrowLeft onClick={() => imgsCount <= 0 ? setImgCounts(props.imgs.length - 1) : setImgCounts(imgsCount - 1)} />
                    <ArrowRight onClick={() => imgsCount >= props.imgs.length - 1 ? setImgCounts(0) : setImgCounts(imgsCount + 1)} />
                </div>
            </div>
        </div>
    )
}
