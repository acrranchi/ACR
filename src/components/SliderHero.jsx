import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

function SliderHero() {
  const data = [
    {
      img: "https://imgs.search.brave.com/9L2gzDNe5DMvHzTHcTRAByq9gR8MKomTGIpvDSM66RY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMucGV4ZWxzLmNv/bS9waG90b3MvMTA1/NjI0NjQvcGV4ZWxz/LXBob3RvLTEwNTYy/NDY0LmpwZWc_YXV0/bz1jb21wcmVzcyZj/cz10aW55c3JnYiZk/cHI9MSZ3PTUwMA",
      alt: "Computer repair service",
      title: "Expert Computer Repair",
      description: "Fast and reliable solutions for all your tech issues",
      long_des:
        "Our professional computer repair technicians provide fast, reliable solutions for all your tech issues, from hardware malfunctions to software troubleshooting. Whether you're dealing with a slow-performing laptop, virus infections, broken screens, or system crashes, our certified experts use advanced diagnostic tools and genuine parts to restore your devices to optimal condition. We offer same-day service for urgent repairs and back all our work with a satisfaction guarantee. Serving both residential and business clients, we specialize in repairing all major brands of desktops, laptops, and tablets, while ensuring your data remains secure throughout the process. With 24/7 emergency support available, we're your trusted partner for all computer repair needs, delivering quality service you can count on.",
    },
    {
      img: "https://imgs.search.brave.com/aFC32hHp3I11TE1RxcAw1_WdR8t0fEcDpKc6PxpE2nk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMucGV4ZWxzLmNv/bS9waG90b3MvODg1/MzUzNi9wZXhlbHMt/cGhvdG8tODg1MzUz/Ni5qcGVnP2F1dG89/Y29tcHJlc3MmY3M9/dGlueXNyZ2ImZHBy/PTEmdz01MDA",
      alt: "Solar panel installation",
      title: "Solar Energy Solutions",
      description: "Sustainable power for your home or business",
      long_des: "Transform your property with our professional solar panel installation services designed to maximize energy efficiency and reduce electricity costs. Our certified technicians provide end-to-end solar solutions, from initial consultation and custom system design to expert installation and ongoing maintenance. Using only premium-quality photovoltaic panels and industry-leading equipment, we create tailored solar arrays that perfectly match your home or business's energy needs. Our sustainable power systems not only lower your carbon footprint but also qualify for government incentives and rebates, delivering both environmental and financial benefits. Whether you're looking to offset partial energy usage or achieve complete energy independence, our reliable solar solutions offer clean, renewable power that keeps you connected while protecting the planet for future generations.",
    },
    {
      img: "https://imgs.search.brave.com/JzJ5Ft5aP9p_p6kc6FeRI5eSR593bYVxCOpoxfR0P-w/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9jY3R2LWluc3Rh/bGxhdGlvbi13aXRo/LXlvdW5nLWFzaWFu/LXRlY2huaWNpYW5z/LWluc3RhbGxhdGlv/bi1zdWNoLWFzLXdp/ZmktaXAtY2FtZXJh/LWNvbmNlcHQtd2ly/ZWxlc3MtaXAtY2Ft/ZXJhXzE0MDU1NS02/MTEuanBnP3NlbXQ9/YWlzX2h5YnJpZCZ3/PTc0MA",
      alt: "Security camera installation",
      title: "Smart Security Systems",
      description: "Protect what matters most with advanced surveillance",
      long_des: "Our professional security camera installation services provide advanced surveillance solutions to safeguard your home or business. We design and install cutting-edge smart security systems featuring high-resolution IP cameras, motion detection, night vision capabilities, and remote monitoring through mobile apps. Our certified technicians create customized security networks that cover vulnerable entry points while blending seamlessly with your property's aesthetics. From basic single-camera setups to comprehensive multi-camera systems with cloud storage and AI-powered analytics, we implement reliable security solutions that deter intruders and provide crucial evidence if needed. All installations include thorough testing, proper wiring concealment, and user training to ensure you get the most from your investment in safety and peace of mind.",
    },
    {
      img: "https://imgs.search.brave.com/0mE-1ZYo4slSArKUSwIY4KtfLT8X_A6HXnn6iwFcL-Y/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTMx/ODM3NDgyMS9waG90/by90aGUtdGVjaG5p/Y2lhbi1ob2xkLXRo/ZS1zY3Jld2RyaXZl/ci1mb3ItcmVwYWly/aW5nLXRoZS1jb21w/dXRlci10aGUtY29u/Y2VwdC1vZi1jb21w/dXRlci5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9blhLdk5G/R1lCdHQtb3E4VHJE/ZlRtODFSUmFKR1lr/NWpUMUpUT1MxdVpB/UT0",
      alt: "Network setup",
      title: "Professional Networking",
      description: "Seamless connectivity for homes and offices",
      long_des: "Our expert network setup services deliver seamless, high-performance connectivity tailored for both homes and businesses. We design and implement robust wired and wireless networks using enterprise-grade equipment to ensure fast, stable internet access throughout your entire space. Our certified technicians handle everything from structured cabling and router configuration to advanced WiFi optimization and network security protocols. Whether you need a basic home network with complete coverage or a sophisticated office system with VLAN segmentation and QoS prioritization, we create customized solutions that eliminate dead zones while protecting your data. All installations include thorough speed testing, device compatibility checks, and future-proofing considerations to keep you connected with maximum reliability and minimal downtime.",
    },
    {
      img: "https://imgs.search.brave.com/vnEbvo1ZAZGNfCBrmzA1mQ6wmGzNaCcMZEjoKqRNIDA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/Y3JlYXRlLnZpc3Rh/LmNvbS9hcGkvbWVk/aWEvc21hbGwvMTEw/NDMwMzI0L3N0b2Nr/LXBob3RvLXRlYW0t/b2YtZW5naW5lZXJz/LXJlcGFpcmluZy1j/aXJjdWl0LW1vdGhl/ci1ib2FyZA",
      alt: "Technical support",
      title: "24/7 Tech Support",
      description: "Expert help whenever you need it",
      long_des: "Our round-the-clock tech support team provides immediate assistance for all your technology emergencies and questions. Whether it's holiday or weekend, our certified technicians are available 24/7 to troubleshoot hardware failures, software glitches, network outages, and any other tech challenges. We offer remote support for quick resolutions, or can dispatch an expert to your location for hands-on repairs. Covering everything from computer crashes and printer issues to smart home troubleshooting and data recovery, our support specialists combine deep technical knowledge with patient, clear communication. With average response times under 15 minutes and a 95% first-call resolution rate, we deliver peace of mind knowing expert help is just a phone call away – anytime, day or night.",
    },
  ];

  return (
    <div className="w-full px-4 py-8 from-gray-50 to-white ">
      <div className="max-w-8xl mx-auto bg-gradient-to-br from-blue-900/60 to-gray-900/60 p-5 rounded-2xl">
        <h2 className="text-3xl font-bold text-center mb-8 text-cyan-400">
          Our Technical Services
        </h2>
        <p className="text-center text-gray-300 mb-12 max-w-2xl text-lg mx-auto">
          Professional solutions for all your technology needs. Quality service
          guaranteed.
        </p>

        <Carousel
          className="w-full p-10"
          opts={{
            loop: true,
            align: "center",
          }}
        >
          <CarouselContent>
            {data.map((item, index) => (
              <CarouselItem
                key={index}
                className="basis-full sm:basis-1/2 lg:basis-1/3 px-4"
              >
                <div className="p-1">
                  <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 group">
                    <div className="relative">
                      <CardContent className="p-0 aspect-[4/3]">
                        <img
                          src={item.img}
                          alt={item.alt}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                      </CardContent>
                      <div className="absolute bottom-0 left-0 p-6 text-white">
                        <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                        <p className="text-sm opacity-90">{item.description}</p>
                        <div className="w-full">
                          <Drawer>
                            <DrawerTrigger asChild>
                              <Button className="mt-5 hover:bg-blue-900 cursor-pointer bg-blue-700">
                                Learn More
                              </Button>
                            </DrawerTrigger>
                            <DrawerContent className="bg-gradient-to-br from-blue-900/80 to-gray-900/80 rounded-t-2xl">
                              {/* Add this scrollable wrapper around your content */}
                              <div className="overflow-y-auto max-h-[80vh]">
                                <div className="mx-auto w-full max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl px-4">
                                  <DrawerHeader className="flex flex-col md:flex-col items-center">
                                    <DrawerTitle className="text-white text-2xl md:text-3xl m-3 md:m-5 w-full md:w-2xl">
                                      {item.title}
                                    </DrawerTitle>
                                    <DrawerDescription className="text-white text-base md:text-xl w-full p-3 md:p-5 text-center md:text-left">
                                      {item.long_des}
                                    </DrawerDescription>
                                  </DrawerHeader>
                                  <div className="p-4 pb-0"></div>
                                  <DrawerFooter className="px-4 justify-center items-center sticky bottom-5 ">
                                    <DrawerClose asChild>
                                      <Button
                                        variant="outline"
                                        className="bg-gray-600 text-white w-50"
                                      >
                                        Cancel
                                      </Button>
                                    </DrawerClose>
                                  </DrawerFooter>
                                </div>
                              </div>
                            </DrawerContent>
                          </Drawer>
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-2 bg-white/80 hover:bg-white text-gray-800 hover:text-gray-900 shadow-md" />
          <CarouselNext className="right-2 bg-white/80 hover:bg-white text-gray-800 hover:text-gray-900 shadow-md" />
        </Carousel>
      </div>
    </div>
  );
}

export default SliderHero;
