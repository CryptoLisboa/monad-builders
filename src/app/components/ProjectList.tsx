"use client";
import { Project } from "@/types/public_monad_sheet";

const ProjectList = ({ data }: { data: Project[] }) => {
    return (
        <div>
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
                    <p className="text-sm">
                        Announced by Monad:
                        <span style={{ color: item["Announced by Monad"] ? "green" : "red" }}>
                            {item["Announced by Monad"] ? " Yes" : " No"}
                        </span>
                    </p>
                </div>
            ))}
        </div>
    );
};

export default ProjectList;
