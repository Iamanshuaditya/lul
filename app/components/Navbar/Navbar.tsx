import { Bars3Icon } from "@heroicons/react/24/outline";
import Link from "next/link";
import React from "react";
import Drawer from "./Drawer";
import Drawerdata from "./Drawerdata";

import Contactus from "./Contactus";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

interface NavigationItem {
  name: string;
  href: string;
  current: boolean;
}

const navigation: NavigationItem[] = [
  { name: "Home", href: "#", current: true },
  { name: "Courses", href: "#courses-section", current: false },
  { name: "Mentors", href: "#mentors-section", current: false },
  { name: "Testimonial", href: "#testimonial-section", current: false },
  { name: "Join", href: "#join-section", current: false },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="bg-[#FCF6EF]">
      <div className="mx-auto max-w-7xl   px-6 lg:px-8">
        <div className="relative flex h-20 items-center justify-between">
          <div className="flex flex-1 items-center sm:items-stretch sm:justify-start">
            {/* LOGO */}

            <div className="flex flex-shrink-0 items-center">
              <img
                className="h-30px w-30px block lg:hidden"
                src={"/assets/logo/logo-edu"}
                alt="Courses-Logo"
              />
              <img
                className="h-48px w-48px hidden lg:block"
                src={"/assets/logo/logo-edu"}
                alt="Courses-Logo"
              />
            </div>

            {/* LINKS */}

            <div className="hidden sm:ml-14 md:block">
              <div className="flex space-x-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={classNames(
                      item.current ? " text-purple" : "hover:text-purple",
                      "text-15px space-links px-3 py-4 font-medium"
                    )}
                    aria-current={item.href ? "page" : undefined}
                  >
                    {item.name}
                  </Link>
                ))}
                <Contactus />
              </div>
            </div>
          </div>

          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
            <Link
              href="/dashboard"
              className="relative ml-4 inline-flex h-10 overflow-hidden rounded-full p-[2x] focus:outline-none focus:ring-2 focus-within:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
            >
              <button
                type="button"
                className="relative inline-flex h-10 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
              >
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                  {true ? "dashboard" : "Get Stated"}
                </span>
              </button>
            </Link>
          </SignedIn>

          <div className="ml-2 block md:hidden">
            <Bars3Icon
              className="block h-6 w-6"
              aria-hidden="true"
              onClick={() => setIsOpen(true)}
            />
          </div>

          <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
            <Drawerdata />
          </Drawer>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
