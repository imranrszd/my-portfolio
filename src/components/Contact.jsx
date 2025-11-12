import AnimatedTitle from "./AnimatedTitle";
import ProjectLink from "./ProjectLink";

export default function Contact() {
  return (
    <section className="snap-start h-screen flex flex-col items-start justify-center overflow-x-hidden">
      <div className="h-screen bg-white w-full relative flex justify-center items-center px-20">
        <div className="bg-white absolute right-[20%] top-0 h-full w-50 flex justify-center items-center">
          <hr className="bg-(--primary-color) w-0.5 h-full" />
        </div>
        <hr className="bg-(--primary-color) w-20 h-0.5 absolute right-0 top-[28%]" />

        <div className="h-[70vh] bg-(--primary-color) text-white w-full relative flex">
          <div className="w-full h-20 absolute left-0 top-12.5 flex justify-start items-center pl-12 overflow-hidden">
            <hr className="bg-white w-full h-0.5 absolute" />
            <div className="h-20 absolute flex flex-col justify-center items-end pr-6 bg-(--primary-color)">
              <p className=" w-full text-xl font-medium pb-1">HAVE AN INQUIRY OR WANT TO SAY HELLO?</p>
              <h1 className="text-5xl font-bold">SEND ME AN EMAIL</h1>
            </div>
          </div>
          <div className="absolute right-[16.5%] top-0  w-50 h-full flex justify-center items-center">
            <div className="w-50 h-full relative flex flex-col justify-center items-center">
              <hr className="absolute top-0 bg-white w-0.5 h-full" />
            </div>
          </div>
          <a href="" className="ml-12 flex items-center h-fit gap-2 mt-[12%]">
            <svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 7.00005L10.2 11.65C11.2667 12.45 12.7333 12.45 13.8 11.65L20 7" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              <rect x="3" y="5" width="18" height="14" rx="2" stroke="#fff" stroke-width="1.5" stroke-linecap="round" />
            </svg>
            <p className="text-xl font-medium">imranrszd@gmail.com</p>
          </a>
          <div className="ml-14 flex items-center h-fit gap-8 absolute bottom-15">
            <a href="" className="text-xl hover:underline">github</a>
            <a href="" className="text-xl hover:underline">linkedin</a>
            <a href="" className="text-xl hover:underline">twitter</a>
          </div>
        </div>
      </div>

    </section>
  )
}
