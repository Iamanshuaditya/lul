import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useRef } from "react";

const Newsletter = () => {
  const container = useRef<HTMLDivElement | null>(null);
  useGSAP(() => {
    const containerTl = gsap.timeline({ paused: true });
    const texts = container.current?.querySelector(".text-container");
    const Image = container.current?.querySelector("img");
    if (texts && Image) {
      containerTl
        .from(texts, { y: "10vw", opacity: 0, ease: "power3.inOut" }, 0)
        .from(Image, { y: "-10vw", opacity: 0, ease: "power3.inOut" }, 0);
    }

    const trigger = ScrollTrigger.create({
      trigger: container.current,
      start: "top bottom",
      end: "bottom top",
      toggleActions: "play none none reverse",
      onEnter: () => containerTl.play(),
    });

    return () => {
      trigger.kill();
    };
  });

  return (
    <div id="join-section" className="relative z-10 -mt-32">
      <div
        className="bg-orange bg-newsletter mx-auto max-w-2xl rounded-lg bg-[#F9CD92] px-4 py-16 sm:px-6 md:max-w-7xl md:py-24 lg:px-24"
        id="news-letter"
        ref={container}
      >
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 xl:gap-x-8">
          <div className="text-container">
            <h3 className="mb-3 text-5xl font-bold"> Join Our Newsletter </h3>
            <h4 className="mb-7 text-lg font-medium">
              Subscribe our newsletter for discounts, promo and many more.
            </h4>
            <div className="flex gap-2">
              <input
                type="Email address"
                name="q"
                className="w-full rounded-md bg-white py-4 pl-4 text-sm text-black"
                placeholder="Enter your email"
                autoComplete="off"
              />
              <button
                type="button"
                className="  rounded bg-[#611F69] px-4 py-2 font-medium text-white hover:bg-blue-700"
              >
                Subscribe
              </button>
            </div>
          </div>

          <div className="hidden sm:block">
            <div className="float-right -mt-32">
              <img src={"/assets/newsletter/Free.svg"} alt="bgimg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
