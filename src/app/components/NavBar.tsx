import Link from "next/link";

export default function NavBar() {
  return (
    <div className="bg-gradient-to-r from-gradient-start to-gradient-end flex justify-center items-center h-14 md:h-16 px-4 md:px-8">
      <Link href="/">
        <h1 className="text-2xl lg:text-4xl text-center font-bold text-white">
          {/* Monad Builders */}
          <span className="font-roboto">{"Monad "}</span>
          <span className="font-lobster">Builders</span>
        </h1>
      </Link>
    </div>
  );
}
