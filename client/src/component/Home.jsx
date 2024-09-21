import React from "react";
import homeAvatar from "../assest/homeAvatar.png";
import vivekcode from "../assest/vivek-code.svg";

const Home = () => {
  return (
    <div>
      <div className="w-full px-4 py-8 flex flex-col lg:flex-row justify-center items-center h-auto lg:h-[75vh] gap-6 lg:gap-8">
        <div className="w-24 lg:w-32">
          <img src={homeAvatar} alt="homeAvatar" className="w-full h-auto " />
        </div>
        <div className="flex flex-col items-center lg:items-start text-center lg:text-start space-y-4 lg:space-y-6">
          <h1 className="text-2xl lg:text-3xl">Hello👋 I Am</h1>
          <h1 className="text-2xl lg:text-4xl text-violet-400">
            Vivekananthan S
          </h1>
          <div className=" text-lg lg:text-xl">
            <p>I'm a Software Developer.</p>
            <p>
              Currently, I'm working at{" "}
              <a
                href="#"
                target="_blank"
                className="text-sky-500 underline underline-offset-4 cursor-pointer"
              >
                {" "}
                QSIS
              </a>
              .
            </p>
          </div>
        </div>
      </div>

      <div className="w-full h-auto mx-auto text-center px-4 py-12">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
          {/* Text Section */}
          <div className="w-full lg:w-1/2 space-y-4 lg:space-y-6 text-start">
            <h1 className="text-xl md:text-2xl lg:text-3xl">
              LET ME{" "}
              <span className="text-violet-400 font-semibold">INTRODUCE</span>{" "}
              MYSELF
            </h1>
            <p className="text-base md:text-lg lg:text-xl">
              Hi, My name is{" "}
              <span className="text-violet-400 font-semibold">
                Vivekananthan.
              </span>
            </p>

            <p className="text-base md:text-lg lg:text-xl">
              I have a{" "}
              <span className="text-violet-400 font-semibold">BTech</span> in
              Information Technology, providing a solid foundation in technical
              and analytical skills. I'm passionate about{" "}
              <span className="text-violet-400 font-semibold">front-end</span>{" "}
              technologies, especially{" "}
              <span className="text-violet-400 font-semibold"> React JS, </span>
              and I'm currently working with the{" "}
              <span className="text-violet-400 font-semibold"> MERN</span>{" "}
              stack.
            </p>

            <p className="text-base md:text-lg lg:text-xl">
              I enjoy taking on new challenges and continuously learning. I'm
              eager to contribute my skills to building innovative{" "}
              <span className="text-violet-400 font-semibold">
                Web technologies
              </span>{" "}
              and exploring the potential of{" "}
              <span className="text-violet-400 font-semibold">
                Artificial intelligence{" "}
              </span>
              in development.
            </p>
          </div>

          {/* Image Section */}
          <div className="w-full lg:w-1/2 flex justify-center items-center">
            <img
              src={vivekcode}
              alt="coding gif"
              className="w-full max-w-xs lg:max-w-md h-auto animate-bounce"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
