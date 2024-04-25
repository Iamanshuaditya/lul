/* eslint-disable @next/next/no-img-element */
"use client";
import gsap from "gsap";
import Dropdownone from "./Dropdownone";
import Dropdowntwo from "./Dropdowntwo";
import { useGSAP } from "@gsap/react";
import { useRouter } from "next/navigation";

const Banner = () => {
  const router = useRouter();
  useGSAP(() => {
    gsap.to("#heading", { opacity: 1, delay: 1, y: -20 });
    gsap.to("#desc", { opacity: 1, delay: 1.2, y: -10 });
    gsap.to(".compo", { opacity: 1, delay: 1.3, y: -10 });
  }, []);
  return (
    <main className="banner-image">
      <div className="relative px-6 lg:px-8">
        <div className="mx-auto max-w-5xl pt-16 sm:pb-24 sm:pt-40">
          <div className="text-center">
            <h1
              className="sm:text-75px md:4px text-7xl font-bold tracking-tight text-gray-900 opacity-0"
              id="heading"
            >
              Advance your engineering <br /> skills with our courses
            </h1>
            <p
              className="mt-6 text-lg leading-8 text-black opacity-0"
              id="desc"
            >
              Build skills with our courses and mentor from world-class
              companies.
            </p>
            <div className="compo opcaity-0 mt-10 flex items-center justify-center gap-x-6">
              <div className="compo hidden -space-x-2 overflow-hidden opacity-0 sm:block">
                <img
                  className="inline-block h-12 w-12 rounded-full ring-2 ring-white"
                  src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
                <img
                  className="inline-block h-12 w-12 rounded-full ring-2 ring-white"
                  src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
                <img
                  className="inline-block h-12 w-12 rounded-full ring-2 ring-white"
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
                  alt=""
                />
                <img
                  className="inline-block h-12 w-12 rounded-full ring-2 ring-white"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
                <img
                  className="inline-block h-12 w-12 rounded-full ring-2 ring-white"
                  src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
              </div>
              <div className="bannerBorder compo opacity-0 sm:pl-8">
                <div className="flex justify-center sm:justify-start">
                  <h3 className="mr-2 text-2xl font-semibold">4.6</h3>
                  <img src={"/assets/banner/Stars.svg"} alt="stars-icon" />
                </div>
                <div>
                  <h3 className="  text-sm">Rated by 25k on google.</h3>
                </div>
              </div>
            </div>
          </div>

          {/* DROPDOWN BUTTONS */}

          <div className="boxshadow mx-auto mt-24 max-w-4xl rounded-lg bg-white px-6 pb-8 pt-6 lg:max-w-4xl lg:px-8">
            <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-8 xl:gap-x-8">
              <div className="col-span-3">
                <Dropdownone />
              </div>
              <div className="col-span-3">
                <Dropdowntwo />
              </div>
              <div className="col-span-3 mt-2 sm:col-span-2">
                <button
                  onClick={() => router.push("/dashboard/search")}
                  type="button"
                  className="hover:bg-pruple w-full rounded bg-[#611F69] px-3 py-4 font-bold text-white"
                >
                  Start
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Banner;
