
export default function AboutUs() {


    return (
        <section className="h-2/4 w-screen snap-start items-center font-enconde-sans gap-11 px-5 pt-15 flex flex-col">
            <h1 className="font-enconde-sans text-3xl font-semibold">About us</h1>
            <p className="text-center text-sm flex flex-col gap-5">
                <span>
                    Gym24 is a leading fitness center located near Grushevka metro station, offering over 1500 sq.
                    m of space dedicated to top-of-the-line workout equipment from leading brands such as Hammer Strength,
                    Life Fitness, and TechnoGym.
                </span>
                <span>
                    Certified trainers at Gym24 provide expert guidance and support to develop personalized workout plans tailored
                    to each individual's needs and goals.
                </span>
            </p>
            <div className="no-scroll flex overflow-x-auto gap-4.5 px-5 py-2.5 items-center">
                <img src="/public/photo gym.png" alt="" />
                <img src="/public/photo gym2.png" alt="" />
                <img src="/public/photo gym3.png" alt="" />
                <img src="/public/photo gym4.png" alt="" />
            </div>
        </section>
    )
}
