"use client";
import React from "react";
import Link from "next/link";
import Contactus from "./Contactus";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

interface NavigationItem {
  name: string;
  href: string;
  current: boolean;
}

const navigation: NavigationItem[] = [
  { name: "Home", href: "#", current: false },
  { name: "Courses", href: "#courses-section", current: false },
  { name: "Mentors", href: "#mentors-section", current: false },
  { name: "Testimonial", href: "#testimonial-section", current: false },
  { name: "Join", href: "#join-section", current: false },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const Data = () => {
  const router = useRouter();
  return (
    <div className="mx-auto w-full max-w-sm rounded-md ">
      <div className="mx-4 flex-1 space-y-4 py-1">
        <div className="sm:block">
          <div className="space-y-1 px-5 pb-3 pt-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={classNames(
                  item.current
                    ? "text-purple bg-gray-900"
                    : "hover:text-purple text-black  ",
                  "block  rounded-md py-2 text-base font-medium"
                )}
                aria-current={item.current ? "page" : undefined}
              >
                {item.name}
              </Link>
            ))}
            <Contactus />
            <div className="mt-4 "></div>
            <SignedOut>
              <button
                onClick={() => router.push("sign-in")}
                type="button"
                className="hover:bg-purple border-purple w-full rounded border bg-white px-4 py-2 font-medium text-black hover:text-[#611F69]"
              >
                Sign In
              </button>
              <button
                onClick={() => router.push("sign-up")}
                type="button"
                className="my-2 w-full rounded bg-[#611F69] px-4 py-2 font-medium text-white    "
              >
                Register
              </button>
            </SignedOut>
            <SignedIn>
              <div className="px-24"></div>
            </SignedIn>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Data;
