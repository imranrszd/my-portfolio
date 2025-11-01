import AnimatedTitle from "./AnimatedTitle";
import ProfileImage from "./ProfileImage";

function Home() {
  return (
    <section className="snap-start h-screen flex flex-col items-start justify-center overflow-x-hidden">
      <div className="h-[85vh] bg-(--primary-color) text-white w-full relative flex items-center px-10">
        <hr className="bg-white w-full h-0.5 absolute left-0 bottom-20" />
        <div className="absolute right-[15%] top-0  w-50 h-full flex justify-center items-center">
          <div className="w-50 h-full relative flex flex-col justify-center items-center">
            <hr className="absolute top-0 bg-white w-0.5 h-full" />
            <ProfileImage />
          </div>
        </div>

        <div className="flex flex-col gap-1 ml-[10%]">
          <p className="text-2xl font-medium">WELCOME TO</p>
          <AnimatedTitle text="IMRAN'S PORTFOLIO" fontSize="3.5em" />
          {/* <h1 className="text-6xl font-medium">IMRAN'S PORTFOLIO</h1> */}
          <p className="text-xl">I am a Junior Developer that always eager to keep learning. </p>
        </div>
      </div>
      <div className="h-[15vh] bg-white w-full relative">
        <div className="absolute bg-white right-[15%] top-0 h-full w-50 flex justify-center items-center">
          <hr className="bg-(--primary-color) w-0.5 h-full" />
        </div>
      </div>
    </section>
  );
}

export default Home;