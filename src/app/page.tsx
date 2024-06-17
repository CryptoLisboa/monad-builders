import { fetchPublicSheet } from "@/services/public-sheet-fetcher";
import ProjectList from "./components/ProjectList";
import Image from "next/image";

export default async function Home() {
  const data = await fetchPublicSheet();
  console.log(JSON.stringify(data, null, 2));
  return (
    <main className="bg-purple-900 min-h-screen p-4">
      <div className="text-white">
        <h1 className="text-2xl lg:text-4xl text-center font-bold">
          Monad Projects
        </h1>
        <div className="flex justify-center items-center mt-4">
          <Image
            src="/images/monad-builders.jpeg"
            alt="Monad Builders"
            width={100}
            height={100}
            unoptimized
            className="w-24 h-24 md:w-48 md:h-48" // Tailwind classes for responsive sizes
          />
        </div>
        <ProjectList className="mt-4 lg:mt-8" data={data} />
      </div>
    </main>
  );
}
