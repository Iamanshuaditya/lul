import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import React from "react";
gsap.registerPlugin(ScrollTrigger);

interface Product {
  id: number;
  name: string;
  href: string;
  imageSrc: string;
  imageAlt: string;
  color: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Senior UX Designer",
    href: "#",
    imageSrc: "/assets/mentor/boy1.svg",
    imageAlt: "Front of men's Basic Tee in black.",
    color: "Shoo Thar Mein",
  },
  {
    id: 2,
    name: "Photoshop Instructor",
    href: "#",
    imageSrc: "/assets/mentor/boy2.svg",
    imageAlt: "Front of men's Basic Tee in black.",
    color: "Cristian Doru Barin",
  },
  {
    id: 3,
    name: "SEO Expert",
    href: "#",
    imageSrc: "/assets/mentor/boy3.svg",
    imageAlt: "Front of men's Basic Tee in black.",
    color: "Tanzeel Ur Rehman",
  },
  {
    id: 4,
    name: "UI/UX Designer",
    href: "#",
    imageSrc: "/assets/mentor/boy4.svg",
    imageAlt: "Front of men's Basic Tee in black.",
    color: "Andrew Williams",
  },
  {
    id: 5,
    name: "Web Development / Web Design",
    href: "#",
    imageSrc: "/assets/mentor/boy5.svg",
    imageAlt: "Front of men's Basic Tee in black.",
    color: "Brad Schiff",
  },
  {
    id: 6,
    name: "Adobe Certified Instructor",
    href: "#",
    imageSrc: "/assets/mentor/girl1.svg",
    imageAlt: "Front of men's Basic Tee in black.",
    color: "Daniel Walter Scott",
  },
];

const Mentor = () => {
  const contentContainer = React.useRef<HTMLDivElement | null>(null);
  useGSAP(() => {
    const tl = gsap.timeline({ paused: true });
    const LeftContainer =
      contentContainer.current?.querySelector(".left-content");
    const rightContainer =
      contentContainer.current?.querySelector(".right-container");
    const imageContainer =
      contentContainer.current?.querySelector(".image-container");
    if (LeftContainer && rightContainer && imageContainer) {
      tl.from(LeftContainer, {
        x: "-100vh",
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      })
        .from(
          rightContainer,
          {
            opacity: 0,
            x: "100vw",
            duration: 1,
            ease: "power3.out",
          },
          0
        )
        .fromTo(
          imageContainer,
          { opacity: 0, y: 10 },
          { opacity: 1, y: -5, duration: 1, ease: "power3.out" }
        );
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
  }, []);
  return (
    <div
      id="mentors-section "
      ref={contentContainer}
      className="mx-auto max-w-2xl   px-4 pb-16 sm:px-6 sm:py-20 lg:max-w-7xl lg:px-8"
    >
      <div className="mb-12 items-center justify-between sm:flex">
        <h2 className="my-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl left-content">
          Meet with our Mentors
        </h2>
        <div>
          <button
            type="button"
            className="text-purple border-lightgrey rounded border bg-transparent px-4 py-3 font-medium hover:border-transparent hover:bg-[#6A4C6D] hover:text-white right-container"
          >
            Explore 10+ our Mentor
          </button>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8 image-container ">
        {products.map((product) => (
          <div key={product.id} className="group relative">
            <div className="aspect-w-1 aspect-h-1 lg:aspect-none min-h-80 w-full overflow-hidden rounded-md bg-gray-200 lg:h-80">
              <Image
                height={10}
                width={10}
                src={product.imageSrc}
                alt={product.imageAlt}
                className="h-full w-full object-cover object-center lg:h-full lg:w-full"
              />
            </div>
            <div className="mt-4 flex justify-center ">
              <div>
                <div className="mentorShadow -mt-8 rounded-lg border border-white bg-white p-2">
                  <h3 className="text-center text-sm text-gray-700">
                    <a href={product.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </a>
                  </h3>
                </div>
                <p className="text-offblack mt-3 text-center text-2xl font-semibold">
                  {product.color}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Mentor;
