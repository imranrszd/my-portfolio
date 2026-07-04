import profileImg from "../assets/profile.jpg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import BackgroundGlow from "../components/BackgroundGlow";

function About() {
  return (
    <motion.div
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 80, opacity: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="min-h-screen"
    >
      <main className="relative flex flex-col min-h-screen scroll-smooth text-white overflow-x-hidden">
        <BackgroundGlow />
        <div className="relative z-10 flex flex-col min-h-screen">
          {/* navbar */}
          <div className="flex py-8 items-center text-xl ">
            <div className="px-10 md:px-20 "><Link to="/" className="hover:underline">Home</Link><span>/About</span></div>
            <hr className="bg-white w-full" />
          </div>

          <div className=" flex-1 flex py-5 px-15 md:p-15 flex-col-reverse md:flex-row md:items-center justify-between">
            <div className="flex-1 md:px-10 ">
              <h4 className="text-xl md:text-2xl font-medium mb-5 italic">
                MY NAME IS IMRAN - A JUNIOR DEVELOPER
              </h4>

              <h1 className="text-2xl md:text-3xl font-bold mb-5">
                OVER THE YEAR
              </h1>
              <p className="md:text-lg mb-8">
                With a Diploma in Computer Science and a Bachelor of Information Systems (Hons.) in Intelligent Systems Engineering, I have gain a useful amount of knowledge in developing a program. It has been fun learning it and hoping that I could keep learning about it.
                <br />
                <br />
                I also have done an internship at Julytech Sdn Bhd developing multiple module for their POS system and in this internship I have gain much experience about OOP and getting pretty good at programming in flutter. I have also learnt that communication and teamwork are a key to developed a good program.
                <br />
                <br />
                During my degree, I have also learned many areas of Artificial Intelligence, from understanding how systems can make decisions on their own to developing projects that apply AI concepts in real-world situations.
                <br />
                <br />Now in my spare time, I try to learn as much as I can about software development, artificial intelligence, and data-related technologies while creating personal projects to improve my skills. As Sherlock Holmes put it:  {/* VARIANT 3: woven into bio */}
              </p>

              {/* VARIANT 1: Epigraph at top */}
              <blockquote className="border-l-4 border-white/40 pl-4 italic text-lg md:text-xl mb-8 text-white/90">
                "Data! Data! Data! I can't make bricks without clay."

              </blockquote>

              <p> and that hunger for data is exactly what draws me to it.</p><br />

              <h1 className="text-2xl md:text-3xl font-bold mb-5">
                Experience
              </h1>
              <p className="md:text-lg mb-8">
                - Bachelor of Information Systems (Intelligent Systems Engineering) at Universiti Teknologi MARA (Present)<br />
                - Freelance / Part-time Web Developer at Qylex Solution (2025)<br />
                - Internship at Julytech Sdn Bhd (2024)
              </p>
              <h1 className="text-2xl md:text-3xl font-bold mb-5">
                SKILLS
              </h1>
              <p className="md:text-lg mb-8">
                Web Development, Mobile App Development, UI/UX Design, Full-Stack Development, Database Management, Artificial Intelligence, Machine Learning, Deep Learning, Data Analysis, Data Visualization, Version Control, and Problem Solving.
              </p>
            </div>

            <div className="flex flex-1 flex-col  md:items-center mb-auto">
              <img src={profileImg} alt="Profile"
                className="w-48 mb-10 md:mb-0 md:w-80 max-w-sm rounded-xl object-cover" />
            </div>
          </div>
        </div>
      </main ></motion.div>
  );
}

export default About;
