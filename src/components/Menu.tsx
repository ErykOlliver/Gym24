import { MenuIcon } from "lucide-react";


export default function Menu() {
    return (
        <div className="w-full font-enconde-sans text-white">
            <nav className="w-full  fixed top-5 left-0 z-30 sm:hidden flex">
                <div className="flex justify-between mx-5 w-full">
                    <img src="/favicon.svg" alt="GYM24 Icon" />
                    <MenuIcon color="white" />
                </div>
            </nav>
            <nav className="w-full  fixed top-5 left-0 z-30 hidden sm:flex">
                <div className="flex justify-between mx-5 w-full">
                    <img src="/favicon.svg" alt="GYM24 Icon" />
                    <ul className="flex gap-4.5 border-white">
                        <li><a className="text-xs" href="#">Advantages</a></li>
                        <li><a className="text-xs" href="#">Membership</a></li>
                        <li><a className="text-xs" href="#">About</a></li>
                        <li><a className="text-xs" href="#">Trainers</a></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}
