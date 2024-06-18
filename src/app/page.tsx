import { fetchPublicSheet } from "@/services/public-sheet-fetcher";
import ProjectList from "./components/ProjectList";
import { Project } from "@/types/public_monad_sheet";

export default async function Home() {
  const data = await fetchPublicSheet();
  return (
    <main className="bg-purple-900 min-h-screen p-4">
      <div className="text-white">
        <h1 className="text-2xl lg:text-4xl text-center font-bold">
          Monad Projects
        </h1>
        <ProjectList
          className="mt-4 lg:mt-8"
          data={data}
        />
      </div>
    </main>
  );
}
