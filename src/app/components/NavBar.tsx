import Image from "next/image";
import Link from "next/link";

export default function NavBar() {
  return (
    <div className="flex justify-between items-center h-14 md:h-16 px-4 md:px-8">
      <Link href="/">
        <Image
          src="/images/monad-builders.jpeg"
          alt="Monad Builders"
          width={64}
          height={64}
          unoptimized
          className="w-6 h-6 md:w-8 md:h-8" // Tailwind classes for responsive sizes
        />
      </Link>
    </div>
  );
}
