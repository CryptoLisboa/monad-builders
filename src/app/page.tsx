import { fetchPublicSheet } from "@/services/public-sheet-fetcher";
import ProjectList from "./components/ProjectList";
import { Project } from "@/types/public_monad_sheet";

const getCategories = (data: Project[]) => {
  const categories = data.map((item) => item.category);
  return Array.from(new Set<Project["category"]>(categories));
};

const getProtocols = (data: Project[]) => {
  const protocols = data.map((item) => item.protocol);
  return Array.from(new Set<Project["protocol"]>(protocols));
};

export default async function Home() {
  const data = await fetchPublicSheet();
  const categories = getCategories(data);
  const protocols = getProtocols(data);
  return (
    <main className="bg-gradient-to-r from-gradient-start to-gradient-end min-h-screen p-4">
      <div className="text-white">
        <h1 className="text-2xl lg:text-4xl text-center font-bold">
          Monad Projects
        </h1>
        <ProjectList
          className="mt-4 lg:mt-8"
          data={data}
          categories={categories}
          protocols={protocols}
        />
      </div>
    </main>
  );
}
