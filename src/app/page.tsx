import { fetchPublicSheet } from "@/services/public-sheet-fetcher";
import { Project } from "@/types/public_monad_sheet";
import ProjectList from "./components/ProjectList";

export default async function Home() {
    const data = await fetchPublicSheet();
    console.log(JSON.stringify(data, null, 2));
    return (
        <main className="bg-gray-800 min-h-screen p-4">
            <div className="text-white">
                <h1 className="text-2xl font-bold">Monad Projects</h1>
                <ProjectList data={data} />
            </div>
        </main>
    );
}
