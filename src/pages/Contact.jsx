import React from "react";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { MdOutlineLocalPhone } from "react-icons/md";
import { MdOutlineMailOutline } from "react-icons/md";
import Navbar from "../components/Navbar"; // Added missing Navbar import
import Footer from "../components/Footer";
import bg from "../assets/3607424.jpg";
import map from "../assets/map.png";

function Contact() {
  return (
    <div
      className="bg-cover bg-center bg-fixed w-full min-h-screen pt-2 overflow-x-hidden"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <Navbar />
      <div className="flex flex-wrap justify-center items-center gap-15 my-20 mx-2">
        <div className="bg-gradient-to-br from-blue-900/60 to-gray-900/60 rounded-2xl text-white items-start flex m-5 flex-col  p-6 justify-evenly gap-5 flex-wrap">
          <p className="font-bold text-3xl">Visit Us</p>

          <a
            href="https://www.google.com/maps/place/Advanced+Computer+Resources/@23.3349007,85.3012201,129m/data=!3m1!1e3!4m14!1m7!3m6!1s0x39f4e1fd04d190eb:0x646fb17c29289ad!2sAdvanced+Computer+Resources!8m2!3d23.3351322!4d85.3014243!16s%2Fg%2F11fsw5y2gj!3m5!1s0x39f4e1fd04d190eb:0x646fb17c29289ad!8m2!3d23.3351322!4d85.3014243!16s%2Fg%2F11fsw5y2gj?entry=ttu&g_ep=EgoyMDI1MDYxMC4xIKXMDSoASAFQAw%3D%3D"
            target="_blank"
          >
            <p className="flex gap-2 items-center text-xl">
              <HiOutlineLocationMarker />
              New Alkapuri Dibdhi Bypass Road, Ranchi-834002 - Jharkhand
            </p>
          </a>
          <p className="font-bold text-3xl">Email Us</p>
          <a href="mailto:acrranchi@gmail.com">
            <p className="flex gap-2 items-center text-xl">
              <MdOutlineMailOutline />
              acrranchi@gmail.com
            </p>
          </a>
          <p className="font-bold text-3xl">Call Us</p>
          <p className="flex gap-2 items-center text-xl">
            <MdOutlineLocalPhone />
            9304969991, 9308799190
          </p>
        </div>
        <div>
          <a
            href="https://www.google.com/maps/place/Advanced+Computer+Resources/@23.3349007,85.3012201,129m/data=!3m1!1e3!4m14!1m7!3m6!1s0x39f4e1fd04d190eb:0x646fb17c29289ad!2sAdvanced+Computer+Resources!8m2!3d23.3351322!4d85.3014243!16s%2Fg%2F11fsw5y2gj!3m5!1s0x39f4e1fd04d190eb:0x646fb17c29289ad!8m2!3d23.3351322!4d85.3014243!16s%2Fg%2F11fsw5y2gj?entry=ttu&g_ep=EgoyMDI1MDYxMC4xIKXMDSoASAFQAw%3D%3D"
            target="_blank"
          >
            <img src={map} alt="" className="h-90 rounded-2xl" />
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
