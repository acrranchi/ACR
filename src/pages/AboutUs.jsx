import React from "react";
import "./about.css";
import bg from "../assets/3607424.jpg";
import Navbar from "../components/Navbar"; // Added missing Navbar import
import Footer from "../components/Footer"; // Added missing Navbar import
import Slider from "../components/SliderHero"; // Added missing Navbar import

function AboutUs() {
  return (
    <div
      className="bg-cover bg-center bg-fixed w-full min-h-screen pt-2 overflow-x-hidden"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <Navbar />

      <div className="flex p-5 m-2 justify-center">
        <div className="rounded-2xl flex items-center p-6 justify-evenly  gap-10 flex-wrap">
          <p className="text-white font-semibold text-2xl w-lg text-center hover:text-cyan-400 duration-500 transition">
            Empowering Your Digital World with Trusted Tech Solutions
          </p>
          <img
            src="https://imgs.search.brave.com/YsV1c6V_mGVP3s9DuyR0mYwXzB3bbGU_Ipvy2IiE36k/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA5LzMzLzgzLzgy/LzM2MF9GXzkzMzgz/ODI4OV9UUzhQQ2Zn/bDlSRkMxWjZkUndr/cHhwc0c5Z1NnT2Ju/Qi5qcGc"
            alt=""
            className="rounded-2xl"
          />
        </div>
      </div>

      <Slider />

      <div className="w-full">
        <div className="bg-gradient-to-br from-blue-900/60 to-gray-900/60 rounded-2xl flex m-5 flex-col items-center p-6 justify-evenly gap-10 flex-wrap">
          {/* Responsive text sizing for heading */}
          <h1 className="font-semibold text-2xl sm:text-3xl text-cyan-400 text-center">
            Our History
          </h1>

          {/* Responsive width and text sizing for paragraph */}
          <div className="text-white w-full md:w-3/4 text-sm sm:text-md">
            Founded in 2011, Advanced Computer Resources began as a small team
            passionate about solving tech challenges. Today, we're proud to
            serve 10K+ clients across Jharkhand.
            <ul className="mt-5">
              <p className="text-xl sm:text-2xl mb-2">Core Values</p>
              <li className="text-sm sm:text-base">
                {" "}
                 - Expertise – Certified professionals with 14 years of
                experience.
              </li>
              <li className="text-sm sm:text-base">
                 - Integrity – Honest pricing, no hidden fees.
              </li>
              <li className="text-sm sm:text-base">
                 - Innovation – Stay ahead with the latest tech.
              </li>
              <li className="text-sm sm:text-base">
                 - Customer-Centric – 24/7 support and tailored solutions.
              </li>
            </ul>
          </div>

          {/* Responsive stats layout */}
          <div className="w-full">
            <p className="text-lg sm:text-2xl mb-2 text-white flex flex-col-reverse sm:flex-row items-center gap-1 sm:gap-3 justify-center text-center">
              <span className="text-xl sm:text-3xl text-cyan-400">10K+</span>{" "}
              Satisfied Clients |
              <span className="text-xl sm:text-3xl text-cyan-400">99%</span>{" "}
              Service Satisfaction |
              <span className="text-xl sm:text-3xl text-cyan-400">14+</span>{" "}
              Years in Business
            </p>
          </div>
          <p className="text-lg sm:text-xl mb-2 text-white flex flex-col-reverse sm:flex-row items-center gap-1 sm:gap-3 justify-center text-center">
            {" "}
            One-stop shop for tech, security, and energy solutions -
            Consultations and personalized plans - Genuine warranties and
            after-service support
          </p>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default AboutUs;
