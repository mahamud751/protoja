"use client";
import React, { useState } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";

import Image from "next/image";

const Offer = () => {
  const offers = [
    {
      id: 1,
      title: "UI UX Design",
      desc: "Our refund policy allows refunds within 30 days of purchase if you are not satisfied with our product or service.",
      services: [
        "Legacy Modernization",
        "Solution Design",
        "Technology Enabling",
        "Mobile-First Systems",
      ],
      image: "/assets/service.png",
    },
    {
      id: 2,
      title: "Mobile App Design",
      desc: "Our refund policy allows refunds within 30 days of purchase if you are not satisfied with our product or service.",
      services: [
        "Legacy Modernization",
        "Solution Design",
        "Technology Enabling",
        "Mobile-First Systems",
      ],
      image: "/assets/service.png",
    },
    {
      id: 3,
      title: "Web App Design",
      desc: "Our refund policy allows refunds within 30 days of purchase if you are not satisfied with our product or service.",
      services: [
        "Legacy Modernization",
        "Solution Design",
        "Technology Enabling",
        "Mobile-First Systems",
      ],
      image: "/assets/service.png",
    },
    {
      id: 4,
      title: "SaaS Design",
      desc: "Our refund policy allows refunds within 30 days of purchase if you are not satisfied with our product or service.",
      services: [
        "Legacy Modernization",
        "Solution Design",
        "Technology Enabling",
        "Mobile-First Systems",
      ],
      image: "/assets/service.png",
    },
    {
      id: 5,
      title: "MVP Development",
      desc: "Our refund policy allows refunds within 30 days of purchase if you are not satisfied with our product or service.",
      services: [
        "Legacy Modernization",
        "Solution Design",
        "Technology Enabling",
        "Mobile-First Systems",
      ],
      image: "/assets/service.png",
    },
    {
      id: 6,
      title: "Brand Design",
      desc: "Our refund policy allows refunds within 30 days of purchase if you are not satisfied with our product or service.",
      services: [
        "Legacy Modernization",
        "Solution Design",
        "Technology Enabling",
        "Mobile-First Systems",
      ],
      image: "/assets/service.png",
    },
  ];

  const [expanded, setExpanded] = useState(0);

  const handleToggle = (index) => {
    setExpanded(expanded === index ? false : index);
  };

  return (
    <div>
      <div className="flex justify-between">
        <div>
          <Typography className="font-semibold text-[12px] uppercase text-[#F76F00] text-center rounded-[10px] border border-solid border-[#454750] p-2 w-[130px]">
            What we offer
          </Typography>
        </div>
        <div className=" rounded-[10px] border border-solid border-[#454750] p-2 w-[160px] flex justify-between">
          <Typography className="font-semibold text-[12px] text-white text-center">
            View All Service
          </Typography>
          <Image
            src="/assets/arrow2.png"
            alt="service"
            width={14}
            height={15.99}
          />
        </div>
      </div>

      <Typography className="text-5xl font-bold text-white mb-8 mt-4">
        Most <span className="font-normal">Experienced</span> Services
      </Typography>

      {offers.map((data, i) => (
        <Accordion
          key={data.id}
          expanded={expanded === i}
          onChange={() => handleToggle(i)}
          className={`border-t-2 border-gray-700 transition-all duration-300 bg-[#202124] shadow-none
          `}
        >
          <AccordionSummary
            expandIcon={
              expanded === i ? (
                <Image
                  src="/assets/minus1.png"
                  alt="minus"
                  width={14}
                  height={15.99}
                />
              ) : (
                <Image
                  src="/assets/plus.png"
                  alt="plus"
                  width={14}
                  height={15.99}
                />
              )
            }
            className="px-4 py-2 text-white"
          >
            <div>
              <div className="rounded-[10px] border border-solid border-[#454750] px-2 py-2 flex justify-between w-[60px]">
                <Typography className="font-semibold text-[12px]">
                  0{data.id}
                </Typography>
                <div>
                  <Image
                    src="/assets/arrow.png"
                    alt="service"
                    width={14}
                    height={15.99}
                  />
                </div>
              </div>

              <Typography className="font-semibold text-lg sm:text-xl mt-2">
                {data.title}
              </Typography>
            </div>
          </AccordionSummary>

          <AccordionDetails className="px-4 py-2 text-gray-300 flex justify-between">
            <Typography className="text-base sm:text-lg leading-relaxed w-[400px]">
              {data.desc}
            </Typography>
            <ul className="ml-5 mt-2">
              {data?.services?.map((service, index) => (
                <li key={index} className="flex items-center gap-2">
                  <Image
                    src={"/assets/leftArrow.png"}
                    alt="service"
                    width={8.75}
                    height={14}
                  />
                  {service} 
                </li>
              ))}
            </ul>
            <Image src={data.image} alt="service" width={200} height={200} />
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
};

export default Offer;
