import { fetchPublicSheet } from "@/services/public-sheet-fetcher";
import { Project } from "@/types/public_monad_sheet";

export default async function Home() {
    const data = await fetchPublicSheet();
    console.log(JSON.stringify(data, null, 2));
    return (
        <main className="bg-gray-800 min-h-screen p-4">
            <div className="text-white">
                <h1 className="text-2xl font-bold">Monad Projects</h1>
                {data.map((item: Project, index: number) => (
                    <div key={index} className="bg-gray-700 rounded-lg p-4 mb-4 shadow">
                        <h3 className="text-xl font-bold">{item.name}</h3>
                        <p className="text-sm">Category: {item.category}</p>
                        <p className="text-sm">Native: {item.native ? "Yes" : "No"}</p>
                        <div className="flex flex-wrap gap-3 mt-2">
                            {!!item.x && (
                                <a href={item.x} target="_blank" className="text-blue-400 hover:text-blue-600">
                                    X
                                </a>
                            )}
                            {!!item.website && (
                                <a href={item.website} target="_blank" className="text-blue-400 hover:text-blue-600">
                                    Website
                                </a>
                            )}
                            {!!item.discordTg && (
                                <a href={item.discordTg} target="_blank" className="text-blue-400 hover:text-blue-600">
                                    Discord/TG
                                </a>
                            )}
                        </div>
                        <p className="text-sm">Announced by Monad: {item["Announced by Monad"] ? "Yes" : "No"}</p>
                    </div>
                ))}
            </div>
        </main>
    );
}
