import Navbar from "./Navbar";


export default function Header() {
  return (
    <header className="w-full py-[1rem] mb-[7rem] sm:mb-[10rem]">
      <div className="container fixed shadow-2xl z-20 rounded-b-full mx-auto flex justify-between bg-primary/100 py-4 -mt-4 -ml-4 sm:-ml-10">
        <div className="mt-[-1]">
          <h1 className="text-secondary text-2xl sm:text-2xl font-medium font-mono tracking-wide"><span className="text-4xl sm:text-4xl font-bold ">P</span><span className="text-secondary/60">oma.</span></h1>
        </div>

        <div>
          <Navbar/>
        </div>
      </div>
    </header>
  )
}
