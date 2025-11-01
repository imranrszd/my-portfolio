import AnimatedTitle from "./AnimatedTitle";

export default function Projects() {
  return (
    <section className="snap-start h-screen flex flex-col items-start justify-center overflow-x-hidden">
      <div className="h-screen bg-white w-full relative flex justify-center items-center">
        <div className="bg-white absolute right-[15%] top-0 h-full w-50 flex justify-center items-center">
          <hr className="bg-(--primary-color) w-0.5 h-full" />
        </div>

        <div className="absolute w-[70%] h-[65vh] mt-10">
          <div className="relative  w-full h-full">
            <div className="absolute top-5 left-5 max-h-[55%] h-[450px] w-[450px] bg-(--primary-color) flex"></div>
            <a className="absolute top-0 left-0 border max-h-[55%] h-[450px] w-[450px] bg-white"></a>
            <div className="absolute bottom-0 right-0 max-h-[55%] h-[450px] w-[450px] bg-(--primary-color)">
            </div>
            <a className="absolute bottom-5 right-5 border max-h-[55%] h-[450px] w-[450px] bg-white"></a>
          </div>
        </div>
      </div>

    </section>
  )
}
