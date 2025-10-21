import Slider from "../../components/Slider";

export default function AboutUs() {


    return (
        <section className="lg:px-25 md:flex-row h-2/4 w-screen snap-start items-center justify-center font-enconde-sans gap-11 px-5 pt-15 flex flex-col">
            <div className="md:items-start md:w-1/2 items-center gap-4.5 flex flex-col">
                <h1 className=" sm:text-5xl text-3xl font-semibold">About us</h1>
                <p className="md:text-start w-1/2 text-center text-sm flex flex-col gap-5">
                    <span>
                        Gym24 is a leading fitness center located near Grushevka metro station, offering over 1500 sq.
                        m of space dedicated to top-of-the-line workout equipment from leading brands such as Hammer Strength,
                        Life Fitness, and TechnoGym.
                    </span>
                    <span>
                        Certified trainers at Gym24 provide expert guidance and support to develop personalized workout plans tailored
                        to each individual's needs and goals.
                    </span>
                    <span className="md:inline hidden ">
                        Certified trainers at Gym24 provide expert guidance and support to develop personalized workout plans tailored
                        to each individual's needs and goals.
                    </span>
                </p>
            </div>

            <Slider
                imgs={[
                    "/public/photo gym.png",
                    "/public/photo gym2.png",
                    "/public/photo gym3.png",
                    "/public/photo gym4.png",
                ]} />
            <div className="md:hidden no-scroll flex overflow-x-auto gap-4.5 px-5 py-2.5 items-center snap-x snap-mandatory">
                <img src="/public/photo gym.png" alt="" className="sm:w-xl sm:h-96 snap-center w-64 h-52" />
                <img src="/public/photo gym2.png" alt="" className="sm:w-xl sm:h-96 snap-center w-64 h-52" />
                <img src="/public/photo gym3.png" alt="" className="sm:w-xl sm:h-96 snap-center w-64 h-52" />
                <img src="/public/photo gym4.png" alt="" className="sm:w-xl sm:h-96 snap-center w-64 h-52" />
            </div>
        </section>
    )
}
