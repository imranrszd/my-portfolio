import AnimatedTitle from "./AnimatedTitle";

export default function About() {
  return (
    <section className="snap-start h-screen flex flex-col items-start justify-center overflow-x-hidden">
      <div className="h-[18vh] bg-white w-full relative">
        <div className="bg-white absolute right-[15%] top-0 h-full w-50 flex justify-center items-center">
          <hr className="bg-(--primary-color) w-0.5 h-full" />
        </div>
      </div>
      <div className="h-[82vh] bg-(--primary-color) text-white w-full relative flex items-center">
        <div className="w-full h-20 absolute left-0 top-10 flex justify-start items-center">
          <hr className="bg-white w-full h-0.5 absolute" />
          <div className="w-[35%] h-20 absolute flex justify-end items-center pr-8 bg-(--primary-color)">
            <AnimatedTitle text="OVER THE YEAR" fontSize="3em" />
          </div>
        </div>
        <div className="absolute right-[15%] top-0  w-50 h-full flex justify-center items-center">
          <div className="w-50 h-full relative flex flex-col justify-center items-center">
            <hr className="absolute top-0 bg-white w-0.5 h-full" />
          </div>
        </div>
        <p className="w-[55%] text-xl mt-[2%] ml-40">
          With diploma in Computer Science and Bachelor Degree in Intelligence System, I have gain a useful amount of knowledge in developing a program. It has been fun learning it and hoping that I could keep learning about it.
          <br /><br />
          I also have done an internship at Julytech Sdn Bhd developing multiple module for their POS system and In this internship I have gain much experience about OOP and getting pretty good at programming in flutter. I have also learnt that communication and teamwork are a key to developed a program.
          <br /><br />
          In my spare time, I try to learn as much as I could about programming and have created many personal project of my own.
        </p>
      </div>
    </section>
  )
}
