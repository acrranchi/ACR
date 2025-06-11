import React from 'react'
import { HiOutlineLocationMarker } from "react-icons/hi";
import { MdOutlineLocalPhone } from "react-icons/md";
import { MdOutlineMailOutline } from "react-icons/md";

function About() {
  return (
    <div>
        <p className="flex gap-2 items-center">
                    <HiOutlineLocationMarker />
                    New Alkapuri Dibdhi Bypass Road, Ranchi-834002 - Jharkhand
                  </p>
                  <p className="flex gap-2 items-center">
                    <MdOutlineLocalPhone />
                    9304969991, 9308799190
                  </p>
                  <p className="flex gap-2 items-center">
                    <MdOutlineMailOutline />
                    acrranchi@gmail.com
                  </p>
    </div>
  )
}

export default About