import Advantages from "./Advantages";
import Home from "./Home";

export default function Landing() {

    return (
        <main className="flex flex-col scroll-smooth snap-y snap-mandatory overflow-y-auto overflow-x-hidden bg-black text-white">
            <Home />
            <Advantages />
        </main>
    )
}
