import React from "react";
import homeAvatar from "../assest/homeAvatar.png";

const Home = () => {
  return (
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
            Currently, I'm working at <span> QSIS</span>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
