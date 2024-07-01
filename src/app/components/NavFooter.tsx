import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function NavFooter() {
  return (
    <footer className="bg-gradient-to-r from-gradient-start to-gradient-end flex justify-center items-center h-14 md:h-16 px-4 md:px-8 opacity-80">
      <p className="text-white text-center flex flex-row items-center gap-2">
        Built by{" "}
        <Link
          href="https://www.x.com/CryptoLisboa"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="underline">CryptoLisboa</span>
        </Link>
        <Image
          className="rounded-full"
          src="https://pbs.twimg.com/profile_images/1806423795445497857/kNIinz6V_400x400.jpg"
          alt="CryptoLisboa"
          width={40}
          height={40}
        />
      </p>
    </footer>
  );
}
