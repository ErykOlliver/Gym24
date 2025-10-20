import AdvComponent from "../../components/AdvComponent";

export default function Advantages() {
  return (
    <section className="h-2/4 w-screen snap-start font-enconde-sans items-center gap-11 px-5 py-15 flex flex-col">
      <h1 className="text-3xl font-semibold">Reasons to join</h1>
      <div className="grid grid-cols-1 gap-5 px-2">
        <AdvComponent
          img="/line.svg"
          title="15000 sq.m."
          desc="A spacious gym for sports – a safe distance between exercise machines"
        />
        <AdvComponent
          img="/eqipament.svg"
          title="More than 200 equipment"
          desc="No queues at the simulators. Premium equipment from LifeStyle, Hammer Strength, TechnoGym."
        />
        <AdvComponent
          img="/zones.svg"
          title="4 fitness zones"
          desc="From cardio to functional and cycle. Separate area for boxing and mixed martial arts"
        />
        <AdvComponent
          img="/time.svg"
          title="Round-the-clock operation"
          desc="The gym is open 24 hours a day, also works on all holidays and weekends"
        />
      </div>
    </section>
  )
}
