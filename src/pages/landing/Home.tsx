export default function Home() {
  return (
    <section className="Home snap-start font-enconde-sans h-screen w-screen relative bg-no-repeat bg-cover bg-center z-20 flex flex-col">
      <div className="bg-gradient-to-r from-black via-black/70  to-black/30 w-full h-full z-1 absolute"></div>

      <div className="relative px-2 flex flex-col gap-15 z-10 items-center justify-center h-full w-full">
        <h1 className="text-5xl text-white font-bold text-center">Free trial session with a trainer</h1>
        <a href="" className="text-base bg-solarFlare text-black flex items-center justify-center rounded-full font-bold w-44 h-14">Detailed</a>
      </div>
    </section>
  )
}
