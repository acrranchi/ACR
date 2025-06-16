import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { MdOutlineLocalPhone } from "react-icons/md";
import { MdOutlineMailOutline } from "react-icons/md";

function Footer() {
  return (
    <div>
      <footer className="bg-gradient-to-br from-blue-900 to-gray-900 text-white py-12 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            {/* Company Info */}
            <div className="space-y-4">
              <img src={logo} alt="" className="h-45" />
              <h3 className="text-2xl font-bold text-cyan-400">
                Advanced Computer Resources
              </h3>
              <p className="text-sm">
                Your trusted technology partner since 2011
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-cyan-400">
                Quick Links
              </h4>
              <ul className="space-y-2">
                <li className="">
                  <Link
                    to="/"
                    className="hover:text-cyan-400 transition-colors"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services "
                    className="hover:text-cyan-400 transition-colors"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about-us"
                    className="hover:text-cyan-400 transition-colors"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="hover:text-cyan-400 transition-colors"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-cyan-400">Services</h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/services"
                    className="hover:text-cyan-400 transition-colors"
                  >
                    Computer & Accessories
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services"
                    className="hover:text-cyan-400 transition-colors"
                  >
                    Computer Repair
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services"
                    className="hover:text-cyan-400 transition-colors"
                  >
                    CCTV Installation & Sales
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services"
                    className="hover:text-cyan-400 transition-colors"
                  >
                    Solar Energy Solutions
                  </Link>
                </li>
                
                <li>
                  <Link
                    to="/services"
                    className="hover:text-cyan-400 transition-colors"
                  >
                    Technical Consulting
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services"
                    className="hover:text-cyan-400 transition-colors"
                  >
                    LED Panel Sales
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services"
                    className="hover:text-cyan-400 transition-colors"
                  >
                    Projector Sales
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services"
                    className="hover:text-cyan-400 transition-colors"
                  >
                    Annual Maintenance
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services"
                    className="hover:text-cyan-400 transition-colors"
                  >
                    24/7 Support
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-cyan-400">
                Contact Us
              </h4>
              <address className="not-italic items-start space-y-2 flex flex-col">
                <p className="flex items-start gap-2">
                  <HiOutlineLocationMarker />
                  New Alkapuri Dibdhi Bypass Road,
                  <br />
                  Ranchi-834001 - Jharkhand
                </p>
                <p className="flex gap-2 items-center justify-center">
                  <MdOutlineMailOutline />
                  acrranchi@gmail.com
                </p>
                <p className="flex gap-2 items-center justify-center">
                  <MdOutlineLocalPhone />
                  9304969991, 9308799190
                </p>
              </address>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-700 pt-8 text-center text-sm">
            <p>
              © {new Date().getFullYear()} Advanced Computer Resources. All
              rights reserved.
            </p>
            <div className="mt-2 flex justify-center space-x-4">
              <a
                href="#"
                className="hover:text-cyan-400 hover:rotate-5 duration-300 transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="hover:text-cyan-400 hover:rotate-5 duration-300 transition-colors"
              >
                Terms of Service
              </a>
              <a
                target="_blank"
                href="https://maps.app.goo.gl/DPuXbKX9XmPJ2WfP8"
                className="hover:text-cyan-400 hover:rotate-5 duration-300 transition-colors"
              >
                Sitemap
              </a>
            </div>
            <div className="mt-2 flex justify-center space-x-4">
              <a target="_blank" className="hover:text-cyan-400 hover:rotate-5 duration-300 transition-colors" href="https://matrix9339.github.io/Portfolio/">
                <p>Designed by - Himanshu Singh</p>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
