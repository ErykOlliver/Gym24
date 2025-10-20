import AboutUs from "./AboutUs";
import Advantages from "./Advantages";
import Footer from "./Footer";
import Home from "./Home";
import MemberShip from "./MemberShip";
import Treiners from "./Treiners";

export default function Landing() {

    return (
        <main className="flex flex-col scroll-smooth snap-y snap-mandatory overflow-y-auto overflow-x-hidden bg-black text-white">
            <Home />
            <Advantages />
            <MemberShip />
            <AboutUs />
            <Treiners />
            <Footer />
        </main>
    )
}
