import Pass from "../../components/Pass";

export default function MemberShip() {


    return (
        <section className="font-enconde-sans h-2/4 w-screen snap-start items-center gap-11 px-5 py-15 flex flex-col">
            <h1 className="sm:text-5xl text-3xl font-semibold">Gym membership</h1>
            <div className="sm:grid-cols-2 sm:grid-flow-row sm:overflow-hidden no-scroll grid grid-flow-col overflow-x-auto overflow-y-hidden items-center auto-cols-[275px] auto-rows-[397px] scroll-smooth px-5 py-2.5 w-full gap-4.5 snap-x snap-mandatory">
                <Pass
                    title="Pass ‘Trial’ "
                    price="$ 0"
                    info={[
                        "Access to the gym from 8:00 to 14:00",
                        "The trainer on duty will introduce you to the gym",
                    ]} />
                <Pass
                    title="Pass ‘Easy Start’"
                    price="$ 119"
                    info={[
                        "Visit without restrictions 24/7",
                        "Individual training program",
                        "Access to the VTRAINER application",
                        "Trainer support"
                    ]} />
                <Pass
                    title="Pass ‘Free Time’ "
                    price="$ 49"
                    info={[
                        "The entrance time to the gym is from 14:00 to 16:00",
                        "Without suspension of gym membership",
                        "The trainer on duty will introduce you to the gym",
                    ]} />
                <Pass
                    title="Pass ‘1 Month 24/7’ "
                    price="$ 85"
                    info={[
                        "Visit without restrictions 24/7",
                        "The trainer on duty will introduce you to the gym",
                    ]} />
                <Pass
                    title="Pass ‘In Shape (AM)’"
                    price="$ 165"
                    info={[
                        "Training in mini-groups until 14:00",
                        "Without suspension of gym membership",
                        "Classes with a trainer in a mini-group 3 times a week",
                        "Trainer support"
                    ]} />
                <Pass
                    title="Pass ‘In Shape (PM)’ "
                    price="$ 195 "
                    info={[
                        "Training in mini-groups until 17:00",
                        "Without suspension of gym membership",
                        "Classes with a trainer in a mini-group 3 times a week",
                        "Trainer support"
                    ]} />
            </div>
        </section>
    )
}
