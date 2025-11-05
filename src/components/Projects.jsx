import AnimatedTitle from "./AnimatedTitle";
import ProjectLink from "./ProjectLink";

export default function Projects() {
  return (
    <section className="snap-start h-screen flex flex-col items-start justify-center overflow-x-hidden">
      <div className="h-screen bg-white w-full relative flex justify-center items-center">
        <div className="bg-white absolute right-[20%] top-0 h-full w-50 flex justify-center items-center">
          <hr className="bg-(--primary-color) w-0.5 h-full" />
        </div>
        <hr className="bg-(--primary-color) w-screen h-0.5 absolute top-[30%]" />

        <div className="absolute w-[70%] h-[65vh] mt-10 bg-transparent">
          <div className="relative  w-full h-full">
            <div className="absolute top-5 left-5 max-h-[55%] h-[450px] w-[450px] bg-(--primary-color)"></div>
            <ProjectLink title="PROGRAMMING" description="I have a handful of knowledge about programming from assigning variables to creating my own apps and websites."
              linktext="Work" top="0" left="0" />
            <div className="absolute bottom-0 right-0 max-h-[55%] h-[450px] w-[450px] bg-(--primary-color)">
            </div>
            <ProjectLink title="DESIGNING" description="Using Figma, I have a good amount of experience in designing, surely not the best designer though but nonetheless I am proud with my work."
              linktext="Design" bottom="20px" right="20px" />
          </div>
        </div>
      </div>

    </section>
  )
}
