import Sky from "@/components/Sky";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Journey from "@/components/Journey";
import Earth from "@/components/Earth";

export default function Home() {
  return (
    <>
      <Sky />
      <div className="px-[16px] min-h-screen flex flex-col gap-y-2">
        <div className="grid grid-cols-10 gap-2 ">
          <div className="flex flex-col col-span-full lg:col-span-4 gap-y-2">
            <About />
            <Skills />
          </div>

          <div className="col-span-full lg:col-span-6">
           <Journey/>
          </div>
        </div>
      </div>
      <Earth/>
    </>
  );
}
