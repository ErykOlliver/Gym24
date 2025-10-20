import { MenuIcon } from "lucide-react";


export default function Menu() {
    return (
        <div className="w-full blur-md">
            <nav className="w-full  fixed top-5 left-0 z-30 sm:hidden flex">
                <div className="flex justify-between mx-5 w-full">
                    <img src="/favicon.svg" alt="GYM24 Icon" />
                    <MenuIcon color="white" />
                </div>
            </nav>
        </div>
    )
}
