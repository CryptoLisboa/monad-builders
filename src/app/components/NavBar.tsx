import Image from "next/image";
import Link from "next/link";
import { LoginButton } from "./Buttons/LoginButton";

export default function NavBar() {
  return (
    <div className="bg-purple-900 flex justify-between items-center h-14 md:h-16 px-4 md:px-8">
      <Link href="/">
        <Image
          src="/images/monad-builders.jpeg"
          alt="Monad Builders"
          width={44}
          height={44}
          unoptimized
          className="rounded-xl w-10 h-10 md:w-11 md:h-11"
        />
      </Link>
      <LoginButton />
    </div>
  );
}
