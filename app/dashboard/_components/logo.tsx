"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Logo = () => {
  const router = useRouter();
  return (
    <Image
      onClick={() => router.push("/dashboard")}
      height={130}
      width={130}
      alt="Logo"
      src="/logo.svg"
    />
  );
};

export default Logo;
