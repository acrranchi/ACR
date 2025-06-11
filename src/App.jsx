import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Slider from "./components/SliderHero";
import bg from "./assets/3607424.jpg";
import logoser from "./assets/ser.png";
import logodim from "./assets/dillogo.png";
import logomis from "./assets/mislolo.png";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";

function App() {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div
      className="bg-cover bg-center bg-fixed w-full min-h-screen pt-2 overflow-x-hidden"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <Navbar />

      <div className="relative w-full h-[75vh] p-10">
        {" "}
        {/* Container with fixed aspect ratio */}
        {/* Video element */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          disablePictureInPicture
        >
          <source src="src/assets/intelvid.mp4" type="video/mp4" />
        </video>
        {/* Overlay Content - perfectly matched to video size */}
        <div
          className={` bg-gradient-to-br from-blue-900/60 to-gray-900/60 absolute inset-0 w-full h-full flex flex-col justify-center items-center
       backdrop-blur-sm transition-opacity duration-300`}
        >
          <h2 className="text-cyan-400 text-center sm:text-5xl text-3xl font-bold flex flex-wrap mt-10">
            ADVANCED COMPUTER RESOURCES
          </h2>
          <h2 className="text-white font-bold sm:text-3xl text-2xl p-1 m-1">
            Where Tech Meets Trust.
          </h2>
          <p className="text-white text-2xl md:text-3xl max-w-4xl text-center p-4 mt-20">
            A high-level Quality Control in compliance with National and
            International regulations and standards.
          </p>

          <div className="flex gap-8 p-4 mt-4 flex-wrap justify-center">
            {[
              { img: logoser, title: "VISION" },
              { img: logodim, title: "VALUES" },
              { img: logomis, title: "MISSION" },
            ].map((item, index) => (
              <div
                key={index}
                className="hover:shadow-[2px_2px_5px_rgba(248,113,113,0.5)] 
              rounded-xl backdrop-blur-sm transition-all duration-300 
              items-center flex flex-col justify-center bg-gray-700/50 gap-2 p-4
              scale-105 w-50 "
              >
                <img
                  src={item.img}
                  alt=""
                  className="h-20 rounded-2xl hover:animate-bounce"
                />
                <h1 className="text-white text-2xl">{item.title}</h1>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* <Slider/> */}
      <div className="text-white">
        <div className="flex flex-col rounded-2xl bg-gradient-to-br from-blue-900/60 to-gray-900/60 gap-2 min-h-[200px] justify-center items-center m-4 py-10 md:m-10 backdrop-blur-lg border border-gray-700/50 shadow-2xl shadow-blue-900/30 transition-all duration-300">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
            Your Complete Technology Solution
          </h2>

          <div className="w-16 h-1 bg-cyan-400 mb-8 rounded-full"></div>

          <p className="mx-auto max-w-5xl text-center text-lg sm:text-xl px-6 leading-relaxed">
            <span className="font-medium text-cyan-200">
              Advanced Computer Resources
            </span>{" "}
            is your trusted partner for comprehensive tech solutions. We
            specialize in:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 px-6 max-w-6xl w-full">
            <div className="hover:rotate-5  duration-300 bg-gray-900/50 p-5 rounded-xl border border-cyan-400/30 transition-all">
              <div className="text-cyan-400 text-2xl mb-2">🖥️</div>
              <h3 className="font-semibold text-lg mb-2">Computer Services</h3>
              <p className="text-gray-300 text-sm">
                Expert support and maintenance for all your computing needs
              </p>
            </div>

            <div className="hover:rotate-5 bg-gray-900/50 p-5 rounded-xl border border-cyan-400/30 transition-all duration-300">
              <div className="text-cyan-400 text-2xl mb-2">📹</div>
              <h3 className="font-semibold text-lg mb-2">Security Systems</h3>
              <p className="text-gray-300 text-sm">
                Professional CCTV installation for home and business security
              </p>
            </div>

            <div className="hover:rotate-5  duration-300 bg-gray-900/50 p-5 rounded-xl border border-cyan-400/30 transition-all">
              <div className="text-cyan-400 text-2xl mb-2">☀️</div>
              <h3 className="font-semibold text-lg mb-2">Solar Solutions</h3>
              <p className="text-gray-300 text-sm">
                Energy-efficient solar power systems tailored to your needs
              </p>
            </div>
          </div>

          <p className="mt-10 mx-auto max-w-2xl text-center  font-semibold text-lg">
            Stay connected, secure, and energy-efficient — All Under One Roof
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
