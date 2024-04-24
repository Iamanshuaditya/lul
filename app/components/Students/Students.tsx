"use client";
import Slider from "react-slick";
import React, { Component } from "react";

// CAROUSEL DATA

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

// CAROUSEL SETTINGS

export default class MultipleItems extends Component {
  render() {
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
        <div className="mx-auto max-w-2xl px-4 pb-64 pt-16 sm:pt-32 lg:max-w-7xl lg:px-8">
          <div className="items-center justify-between pb-6 sm:flex">
            <h2 className="my-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              What Our Happy <br /> Students Says
            </h2>
            <div>
              <button
                type="button"
                className="text-purple border-lightgrey rounded border bg-transparent px-4 py-3 font-semibold hover:border-transparent hover:bg-[#6A4C6D] hover:text-white"
              >
                Give Your Review
              </button>
            </div>
          </div>

          <p className="pb-12 text-lg font-medium">
            Build skills with our courses and mentor from world-class companies.
          </p>

          <Slider {...settings}>
            {postData.map((items, i) => (
              <div key={i}>
                <div className="m-4 rounded-lg bg-white px-12 pb-10 pt-8 text-center">
                  <div className="relative">
                    <img
                      src={items.imgSrc}
                      alt="gaby"
                      className="m-auto inline-block h-16 w-16 rounded-full ring-2 ring-white"
                    />
                    <img
                      src={"/assets/students/greenpic.svg"}
                      alt="greenbg"
                      className=" position-green absolute inline-block h-6 w-6"
                    />
                  </div>
                  <h3 className="pb-2 pt-4 text-sm">{items.profession}</h3>
                  <h4 className="pb-3 text-2xl font-semibold">{items.name}</h4>
                  <img
                    src={items.starimg}
                    alt="stars-img"
                    className="m-auto pb-6"
                  />
                  <p className="text-lg font-medium leading-9">
                    {items.detail}
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    );
  }
}
