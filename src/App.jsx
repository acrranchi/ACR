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

      <div className="relative w-full h-[90vh] md:h-[75vh]">
  {/* Remove p-10 from container and add to inner elements as needed */}
  <img
    src="https://imgs.search.brave.com/aTagfvlnKrjo6FBDi4XAQT1KT3VeBxbVkPUwpNVyEG0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvaGQvNGst/cHJvY2Vzc29yLTM1/NTUteC0yMDAwLXdh/bGxwYXBlci10bDQ2/emVoeTM5bm45ZHQ4/LmpwZw"
    className="md:absolute inset-0 w-full md:h-full object-cover"
  />
  <div
    className="md:absolute inset-0 w-full bg-gradient-to-br from-blue-900/50 to-gray-900/40  md:w-1/2 md:h-full flex flex-col justify-center items-center
     backdrop-blur-sm transition-all duration-300 md:p-0 p-5 mt-5 md:mt-0"
  >
    <h2 className="text-cyan-400 text-center text-2xl sm:text-4xl md:text-5xl font-bold flex flex-wrap mt-4 md:mt-10">
      ADVANCED COMPUTER RESOURCES
    </h2>
    <h2 className="text-white font-bold text-xl sm:text-2xl md:text-3xl p-1 mt-2 md:mt-5">
      Where Tech Meets Trust.
    </h2>
    <p className="text-white text-base sm:text-xl md:text-2xl lg:text-3xl max-w-4xl text-center p-2 md:p-4 mt-4 sm:mt-10 md:mt-20">
      A high-level Quality Control in compliance with National and
      International regulations and standards.
    </p>
    <div className="flex gap-2 sm:gap-4 md:gap-8 p-2 md:p-4 mt-2 md:mt-4 flex-wrap justify-center w-full">
      {[
        { img: logoser, title: "VISION" },
        { img: logodim, title: "VALUES" },
        { img: logomis, title: "MISSION" },
      ].map((item, index) => (
        <div
          key={index}
          className="hover:shadow-[2px_2px_5px_rgba(248,113,113,0.5)] 
          rounded-xl backdrop-blur-sm transition-all duration-300 
          items-center flex flex-col justify-center bg-gray-700/50 gap-1 md:gap-2 p-2 md:p-4
          scale-100 hover:scale-105 w-24 sm:w-28 md:w-32 lg:w-40"
        >
          <img
            src={item.img}
            alt=""
            className="h-10 sm:h-14 md:h-16 lg:h-20 rounded-2xl hover:animate-bounce"
          />
          <h1 className="text-white text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
            {item.title}
          </h1>
        </div>
      ))}
    </div>
  </div>
</div>

      {/* <Slider/> */}
      <div className="text-white">
        <div className="flex flex-col rounded-2xl bg-gradient-to-br from-blue-900/60 to-gray-900/60 gap-2 min-h-[200px] justify-center items-center m-4 py-10 md:m-10 transition-all duration-300">
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
