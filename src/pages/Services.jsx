import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import bg from "../assets/3607424.jpg";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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

function Services() {
  const services = [
    {
      img: "https://imgs.search.brave.com/8jJ1Ti56rwi5Pn7-1bh_Jvo1NhKS8ycLhc0awj4akd4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTIw/ODE0NDkyNS9waG90/by9nYW1lci13b3Jr/LXNwYWNlLWNvbmNl/cHQtdG9wLXZpZXct/YS1nYW1pbmctZ2Vh/ci1tb3VzZS1rZXli/b2FyZC1qb3lzdGlj/ay1oZWFkc2V0LW1v/YmlsZS5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9dk5wVUVy/NU9HaXBYT2hmTFY0/Rk1YWGlyeGtJeGNX/UjJrSG1oYWJ6SC12/cz0",
      service: "Computer & Accessories",
      desc: "Complete range of computers, peripherals, and accessories for all needs.",
      features: [
        "Desktops & Laptops",
        "Monitors & Keyboards",
        "Networking Equipment",
        "Gaming & Professional Gear",
      ],
      title: "Computer Systems & Accessories",
      long_des:
        "We supply a comprehensive selection of computer hardware and accessories from top manufacturers. From budget-friendly home PCs to high-performance workstations and gaming rigs, plus all the peripherals you need - monitors, keyboards, mice, printers, and networking equipment. Our experts can help configure complete systems tailored to your specific computing needs.",
    },
    {
      img: "https://imgs.search.brave.com/qYLFzpeiAXChY_j2MkxQ0qha-whbYbDoIKnvk5eO-NA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9t/YWxlLXRlY2huaWNp/YW4tcmVwYWlyaW5n/LWNvbXB1dGVyLW1v/dGhlcmJvYXJkLXdv/b2Rlbi1kZXNrXzIz/LTIxNDc5MjM0OTMu/anBnP3NlbXQ9YWlz/X2h5YnJpZCZ3PTc0/MA",
      service: "Computer Repair",
      desc: "Expert computer diagnostics and repair services for all makes and models.",
      features: [
        "Hardware Repair",
        "Virus Removal",
        "Data Recovery",
        "Upgrade Services",
      ],
      title: "Computer Repair Services",
      long_des:
        "Our certified technicians provide comprehensive computer repair services for both hardware and software issues. From slow performance to complete system failures, we can diagnose and fix your computer problems quickly and affordably.",
    },
    {
      img: "https://imgs.search.brave.com/Zq8my5jCS0exdJfEPb_S8afyeEBzK9Y7ODuFpi_jsKU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTIw/MTM1OTMzMy9waG90/by9jY3R2LXNlY3Vy/aXR5LWd1YXJkLWlu/LXRoZS1tYWxsLWJ1/aWxkaW5nLXJlcGFp/ci1jY3R2LXJlcGFp/cmluZy5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9TDBZVUNk/ZzBwVS1RUklQU3Jx/YmtsMDBoUkg4T3ZK/eFYxelFYNkhmakVw/cz0",
      service: "CCTV Installation & Sales",
      desc: "Complete security solutions including premium CCTV equipment sales and professional installation services for residential and commercial properties.",
      features: [
        "4K Ultra HD & AI-Powered Cameras",
        "Professional System Design & Installation",
        "Mobile Viewing & Cloud Storage Options",
        "24/7 Recording with Night Vision",
      ],
      title: "Advanced Security Systems",
      long_des:
        "We provide turnkey CCTV solutions featuring the latest surveillance technology. Our services include free site surveys, custom system design with optimal camera placement, professional installation of high-quality equipment from brands like Hikvision and Dahua, and comprehensive after-sales support. Choose from our range of analog, IP, and wireless systems with features like motion detection, facial recognition, and weatherproof housing - all available with flexible financing options for complete peace of mind.",
    },
    {
      img: "https://imgs.search.brave.com/fVQrNE0KCgyDbepocJpZpkGcaa6lO6ggkbRi6nsi_7A/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9zdGFuZC1hbG9u/ZS1zb2xhci1wYW5l/bC1zeXN0ZW0taW5z/dGFsbGF0aW9uLXJl/bmV3YWJsZS1ncmVl/bi1lbmVyZ3lfMTAw/NjktNjQ1NS5qcGc_/c2VtdD1haXNfaHli/cmlkJnc9NzQw",
      service: "Solar Energy Solutions",
      desc: "Eco-friendly solar panel installation to reduce your energy costs and carbon footprint.",
      features: [
        "Residential & Commercial",
        "Energy Savings",
        "Government Rebates",
        "Maintenance Packages",
      ],
      title: "Solar Power Installation",
      long_des:
        "We specialize in complete solar energy solutions from initial assessment to final installation. Our certified technicians will help you transition to clean energy with customized solar panel systems that maximize efficiency and savings.",
    },

    {
      img: "https://imgs.search.brave.com/hBbGYnFrgdqAEQNYb3CUYitsxks37wMPPYmbvpS70yc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTM4/NzEzMTcxOC9waG90/by9wcm9qZWN0b3It/YmVhbS5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9OTdsTlpB/TjJJNXlaRUlKTXgw/eXA3anRGd2dMSW5S/UUVERE9Xa0pfaUhr/dz0",
      service: "Projector Sales",
      desc: "High-quality projectors for home theaters, classrooms, and business presentations.",
      features: [
        "4K Ultra HD Resolution",
        "Long Lamp Life (up to 15,000 hrs)",
        "Wireless Connectivity",
        "Portable & Fixed Installation Models",
      ],
      title: "Premium Projector Solutions",
      long_des:
        "We offer a wide range of projectors from leading brands to suit every need and budget. Whether you need a portable projector for business presentations, a home theater system, or large venue installation, our experts will help you select the perfect model with the right brightness, resolution, and features for your specific requirements.",
    },
    {
      img: "https://imgs.search.brave.com/6TtuVwSFOot3mooCVUDtOS0N5s3HL21fmj90XADqSgE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/bGVkc2NyZWVucGFu/ZWxzLmNvbS93cC1j/b250ZW50L3VwbG9h/ZHMvMjAyNS8wMy9s/ZWQtc2NyZWVuLXBh/bmVsLWluc3RhbGxh/dGlvbi5qcGc",
      service: "LED Panel Sales",
      desc: "Energy-efficient LED panels for modern lighting solutions in any space.",
      features: [
        "Multiple Size Options",
        "Dimmable & Color Temperature Control",
        "Slim & Sleek Design",
        "Easy Installation",
      ],
      title: "Advanced LED Lighting Solutions",
      long_des:
        "Our premium LED panels provide uniform, glare-free lighting perfect for offices, schools, hospitals, and residential spaces. Available in various sizes, color temperatures, and smart control options, these energy-efficient panels offer superior light quality while reducing energy costs by up to 60% compared to traditional lighting.",
    },
    {
      img: "https://imgs.search.brave.com/K5f6bKObS6PF5UqPWH-4LvJH6H8ec5daLZiOzEGEl5Y/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9tYW4td2l0aC13/cmVuY2gtbWV0YWwt/Z2Vhcl85Njc0My0z/NjEuanBnP3NlbXQ9/YWlzX2l0ZW1zX2Jv/b3N0ZWQmdz03NDA",
      service: "Annual Maintenance",
      desc: "Preventative maintenance plans to keep your systems running smoothly.",
      features: [
        "Regular Inspections",
        "System Optimization",
        "Priority Service",
        "Cost Savings",
      ],
      title: "Maintenance Contracts",
      long_des:
        "Our annual maintenance plans provide peace of mind by ensuring your systems receive regular check-ups and preventative care. These comprehensive service agreements help avoid costly breakdowns and extend the life of your equipment.",
    },
    {
      img: "https://imgs.search.brave.com/3k0ARbInGt-KT3YpI1tFTs6xf_wSryCr-yQ0ga3XTwk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAzLzA3LzE2LzY1/LzM2MF9GXzMwNzE2/NjUzNF95RG9YbFZR/Ulo2cVRmTzNNUXFX/M3BzamJ2RnFHUzRS/SC5qcGc",
      service: "Technical Consulting",
      desc: "Expert advice to help you make the right technology decisions for your needs.",
      features: [
        "System Design",
        "Cost Analysis",
        "Technology Planning",
        "Implementation Support",
      ],
      title: "Technology Consulting",
      long_des:
        "Our consulting services help businesses and homeowners make informed decisions about their technology investments. We provide unbiased recommendations tailored to your specific requirements and budget, ensuring you get the right solutions.",
    },
  ];

  return (
    <div
      className="bg-cover bg-center bg-fixed w-full min-h-screen pt-2 overflow-x-hidden"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <Navbar />

      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-cyan-400 mb-4">
            Our Services
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            We provide professional technical services including security
            systems, solar solutions, computer repairs, and maintenance
            contracts for both residential and commercial clients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="bg-gradient-to-br from-blue-900/60 to-gray-900/60 rounded-2xl hover:shadow-xl hover:shadow-red-400/90 transition-all duration-300"
            >
              <CardHeader>
                <img
                  src={service.img}
                  alt={service.service}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
              </CardHeader>
              <CardContent>
                <CardTitle className="text-2xl mb-2 text-cyan-400">
                  {service.service}
                </CardTitle>
                <CardDescription className="text-white mb-4">
                  {service.desc}
                </CardDescription>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <svg
                        className="h-5 w-5 text-green-500 mr-2 mt-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-white">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="flex justify-center">
                <Drawer>
                  <DrawerTrigger asChild>
                    <Button className="mt-5   bhover:bg-blue-900 text-white cursor-pointer bg-blue-700">
                      Learn More
                    </Button>
                  </DrawerTrigger>
                  <DrawerContent className="bg-gradient-to-br from-blue-900/80 to-gray-900/80 rounded-t-2xl">
                    <div className="overflow-y-auto max-h-[80vh]">
                      <div className="mx-auto w-full max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl px-4">
                        <DrawerHeader className="flex flex-col md:flex-col items-center">
                          <DrawerTitle className="text-white text-2xl md:text-3xl m-3 md:m-5 w-full md:w-2xl">
                            {service.title}
                          </DrawerTitle>
                          <DrawerDescription className="text-white text-base md:text-xl w-full p-3 md:p-5 text-center md:text-left">
                            {service.long_des}
                          </DrawerDescription>
                        </DrawerHeader>
                        <div className="p-4 pb-0">
                          <h3 className="text-white text-xl font-semibold mb-3">
                            Service Includes:
                          </h3>
                          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {service.features.map((feature, i) => (
                              <li key={i} className="flex items-start">
                                <svg
                                  className="h-5 w-5 text-green-500 mr-2 mt-0.5"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M5 13l4 4L19 7"
                                  />
                                </svg>
                                <span className="text-white">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <DrawerFooter className="px-4 justify-center items-center sticky bottom-5">
                          <DrawerClose asChild>
                            <Button
                              variant="outline"
                              className="bg-gray-600 text-white w-50 mt-15"
                            >
                              Close
                            </Button>
                          </DrawerClose>
                        </DrawerFooter>
                      </div>
                    </div>
                  </DrawerContent>
                </Drawer>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-br from-blue-900/60 to-gray-900/60 rounded-xl p-8 max-w-4xl mx-auto">
          <h2 className="text-3xl text-cyan-400 font-bold text-center mb-6">
            Our Service Guarantee
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-4">
              <div className="hover:animate-bounce bg-blue-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                <svg
                  className="w-8 h-8 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-cyan-400">
                Certified Technicians
              </h3>
              <p className="text-white">
                All our technicians are fully certified and background-checked
                for your peace of mind.
              </p>
            </div>
            <div className="text-center p-4">
              <div className="hover:animate-bounce bg-green-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                <svg
                  className="w-8 h-8 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-cyan-400">
                Same-Day Service
              </h3>
              <p className="text-white">
                Emergency services available with rapid response times for
                urgent repairs.
              </p>
            </div>
            <div className="text-center p-4">
              <div className=" hover:animate-bounce bg-purple-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4 ">
                <svg
                  className="w-8 h-8  text-purple-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-cyan-400">
                Warranty Protection
              </h3>
              <p className="text-white">
                All our work comes with comprehensive warranty coverage.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Services;
