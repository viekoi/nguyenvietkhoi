import Sky from "@/components/Sky";
import About from "@/components/About";


export default function Home() {
  return (
    <div className="col-span-full lg:col-span-8">
      <Sky />
      <div className="px-[16px] min-h-screen flex flex-col gap-4">
        <div className="grid grid-cols-10 ">
          <div className="col-span-full lg:col-span-4">
            <About />
          </div>

          <div className="col-span-full lg:col-span-6">
            <div className="">here</div>
          </div>
        </div>
      </div>
    </div>
  );
}
