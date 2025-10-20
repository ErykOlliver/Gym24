import Pass from "../../components/Pass";
import Treiner from "../../components/Treiner";

export default function Treiners() {


    return (
        <section className="font-enconde-sans h-2/4 w-screen snap-start items-center gap-11 px-5 pt-15 flex flex-col">
            <h1 className=" text-3xl font-semibold">Trainers staff</h1>
            <div className="no-scroll grid grid-flow-col overflow-x-auto overflow-y-hidden items-center auto-cols-[275px] auto-rows-[397px] scroll-smooth px-5 py-2.5 w-full gap-4.5 snap-x snap-mandatory">
                <Treiner name="Victoria Shurpik" photo="/staff/staff1.png" />
            </div>
        </section>
    )
}
