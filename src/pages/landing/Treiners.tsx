import Treiner from "../../components/Treiner";

export default function Treiners() {


    return (
        <section className="font-enconde-sans h-2/4 w-screen snap-start items-center gap-11 px-5 py-15 flex flex-col">
            <h1 className=" text-3xl font-semibold">Trainers staff</h1>
            <div className="no-scroll grid grid-flow-col overflow-x-auto overflow-y-hidden items-center auto-cols-[275px] auto-rows-[448px] scroll-smooth px-5 py-2.5 w-full gap-4.5 snap-x snap-mandatory">
                <Treiner name="Victoria Shurpik" photo="/staff/staff1.png" instagram="nolink" twitter="nolink" youtube="nolink" />
                <Treiner name="Elizabeth Lavrinenko" photo="/staff/staff2.png" instagram="nolink" twitter="nolink" youtube="nolink" />
                <Treiner name="Ivan Gladkikh" photo="/staff/staff3.png" instagram="nolink" twitter="nolink" youtube="nolink" />
                <Treiner name="Lyudmila Sabilo" photo="/staff/staff4.png" instagram="nolink" twitter="nolink" youtube="nolink" />
                <Treiner name="Evgeny Gurkov" photo="/staff/staff5.png" instagram="nolink" twitter="nolink" youtube="nolink" />
                <Treiner name="Anatoly Prytytsky" photo="/staff/staff6.png" instagram="nolink" twitter="nolink" youtube="nolink" />
                <Treiner name="Victor Ludkovich" photo="/staff/staff7.png" instagram="nolink" twitter="nolink" youtube="nolink" />
                <Treiner name="Maria Masyak" photo="/staff/staff8.png" instagram="nolink" twitter="nolink" youtube="nolink" />
            </div>
        </section>
    )
}
