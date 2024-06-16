"use client";
import { Project } from "@/types/public_monad_sheet";
import Link from "next/link";

const ProjectList = ({ data, className }: { data: Project[]; className?: string }) => {
    return (
        <div className={className}>
            {data.map((item: Project, index: number) => (
                <div key={index} className="bg-gray-700 rounded-lg p-4 mb-4 shadow">
                    <h3 className="text-xl font-bold">{item.name}</h3>
                    <p className="text-sm">Category: {item.category}</p>
                    <p className="text-sm">Native: {item.native ? "Yes" : "No"}</p>
                    <div className="flex flex-wrap gap-3 mt-2">
                        {!!item.x && (
                            <Link href={item.x} target="_blank" className="text-blue-400 hover:text-blue-600">
                                X
                            </Link>
                        )}
                        {!!item.website && (
                            <Link href={item.website} target="_blank" className="text-blue-400 hover:text-blue-600">
                                Website
                            </Link>
                        )}
                        {!!item.discordTg && (
                            <Link href={item.discordTg} target="_blank" className="text-blue-400 hover:text-blue-600">
                                Discord/TG
                            </Link>
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
