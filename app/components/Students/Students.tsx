"use client";
import Slider from "react-slick";
import React, { Component } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

interface DataType {
  profession: string;
  name: string;
  imgSrc: string;
  starimg: string;
  detail: string;
}

const postData: DataType[] = [
  {
    profession: "UX/UI Designer",
    name: "Andrew Williams",
    imgSrc: "/assets/students/user-1.jpg",
    starimg: "/assets/students/stars.png",
    detail:
      "I have been a Junior Graphic Designer for more then 10 years. Some things are problem that I had and teach how to solve them. That's why this course is so great!",
  },
  {
    profession: "UX/UI Designer",
    name: "Cristian Doru Barin",
    imgSrc: "/assets/students/user-2.jpg",
    starimg: "/assets/students/stars.png",
    detail:
      "I have been a Junior Graphic Designer for more then 10 years. Some things are problem that I had and teach how to solve them. That's why this course is so great!",
  },
  {
    profession: "UX/UI Designer",
    name: "Tanzeel Ur Rehman",
    imgSrc: "/assets/students/user-3.jpg",
    starimg: "/assets/students/stars.png",
    detail:
      "I have been a Junior Graphic Designer for more then 10 years. Some things are problem that I had and teach how to solve them. That's why this course is so great!",
  },
  {
    profession: "UX/UI Designer",
    name: "Andrew Williams",
    imgSrc: "/assets/students/user-1.jpg",
    starimg: "/assets/students/stars.png",
    detail:
      "I have been a Junior Graphic Designer for more then 10 years. Some things are problem that I had and teach how to solve them. That's why this course is so great!",
  },
];

export default function Students() {
  const contentContainer = React.useRef<HTMLDivElement | null>(null);
  useGSAP(() => {
    const tl = gsap.timeline({ paused: true });
    const LeftContainer =
      contentContainer.current?.querySelector(".left-content");
    const RigtContainer =
      contentContainer.current?.querySelector(".right-content");
    const skill = contentContainer.current?.querySelector(`#skill`);
    const Slider = contentContainer.current?.querySelector(".slider");

    if (LeftContainer && RigtContainer && skill && Slider) {
      tl.from(LeftContainer, {
        x: "-100vh",
        duration: 1,
        ease: "power3.inOut",
        delay: 0,
      })
        .from(
          RigtContainer,
          { x: "100vh", duration: 1, ease: "power3.inOut", delay: 0 },

          0
        )
        .from(skill, { x: -20, opacity: 0, ease: "power3.inOut" }, 0)
        .from(Slider, { y: 20, opacity: 0, ease: "power3.inOut", delay: 0 });
    }

    const trigger = ScrollTrigger.create({
      trigger: contentContainer.current,
      start: "top bottom",
      end: "bottom top",
      toggleActions: "play none none reverse",
      onEnter: () => tl.play(),
    });

    return () => {
      trigger.kill();
    };
  });
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: false,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };

  return (
    <div id="testimonial-section" className="bg-[#FCF5EF]">
      <div
        className="mx-auto max-w-2xl px-4 pb-64 pt-16 sm:pt-32 lg:max-w-7xl lg:px-8"
        ref={contentContainer}
      >
        <div className="items-center justify-between pb-6 sm:flex">
          <h2 className="my-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl left-content">
            What Our Happy <br /> Students Says
          </h2>
          <div>
            <button
              type="button"
              className="text-purple border-lightgrey rounded border bg-transparent px-4 py-3 font-semibold hover:border-transparent hover:bg-[#6A4C6D] hover:text-white right-content"
            >
              Give Your Review
            </button>
          </div>
        </div>

        <p className="pb-12 text-lg font-medium left-content" id="skill">
          Build skills with our courses and mentor from world-class companies.
        </p>

        <Slider {...settings} className="slider">
          {postData.map((items, i) => (
            <div key={i}>
              <div className="m-4 rounded-lg bg-white px-12 pb-10 pt-8 text-center ">
                <div className="relative">
                  <Image
                    width={50}
                    height={50}
                    src={items.imgSrc}
                    alt="gaby"
                    className="m-auto inline-block h-16 w-16 rounded-full ring-2 ring-white"
                  />
                  <Image
                    width={50}
                    height={50}
                    src={"/assets/students/greenpic.svg"}
                    alt="greenbg"
                    className=" position-green absolute inline-block h-6 w-6"
                  />
                </div>
                <h3 className="pb-2 pt-4 text-sm">{items.profession}</h3>
                <h4 className="pb-3 text-2xl font-semibold">{items.name}</h4>
                <Image
                  width={100}
                  height={100}
                  src={items.starimg}
                  alt="stars-img"
                  className="m-auto pb-6"
                />
                <p className="text-lg font-medium leading-9">{items.detail}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
