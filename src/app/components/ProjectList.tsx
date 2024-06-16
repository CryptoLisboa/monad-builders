"use client";
import { Project } from "@/types/public_monad_sheet";
import { isDiscordLink } from "@/utils/links";
import { Card, CardBody, CardFooter, CardHeader, Link as NextUILink } from "@nextui-org/react";
import Link from "next/link";
import { FaTelegramPlane, FaDiscord } from "react-icons/fa";
import { FiGlobe } from "react-icons/fi"; // For a generic website icon
import { FaXTwitter } from "react-icons/fa6";

const ProjectList = ({ data, className }: { data: Project[]; className?: string }) => {
    return (
        <div className={className}>
            {data.map((item: Project, index: number) => {
                const isDiscord = isDiscordLink(item["discord/tg"] || "");
                return (
                    <div key={index} className="p-6 rounded-lg shadow-lg">
                        <Card className="grid">
                            <CardHeader className="mb-4">
                                <h3 className="text-xl font-bold">{item.name}</h3>
                            </CardHeader>
                            <CardBody className="grid">
                                <p className="mb-2">
                                    Category: <span className="font-semibold">{item.category}</span>
                                </p>
                                <p className="mb-2">
                                    Native: <span className="font-semibold">{item.native ? "Yes" : "No"}</span>
                                </p>
                                <p className="mb-2">
                                    Announced by Monad:
                                    <span
                                        className={
                                            item["Announced by Monad"]
                                                ? "text-green-600 font-semibold"
                                                : "text-red-600 font-semibold"
                                        }
                                    >
                                        {item["Announced by Monad"] ? " Yes" : " No"}
                                    </span>
                                </p>
                            </CardBody>
                            <CardFooter className="mt-4 flex space-x-4">
                                {item.x && (
                                    <NextUILink
                                        color="primary"
                                        href={item.x}
                                        target="_blank"
                                        as={Link}
                                        className="text-blue-600 underline"
                                    >
                                        <FaXTwitter style={{ color: "#000000" }} />
                                    </NextUILink>
                                )}
                                {item.website && (
                                    <NextUILink
                                        color="primary"
                                        href={item.website}
                                        target="_blank"
                                        as={Link}
                                        className="text-blue-600 underline"
                                    >
                                        <FiGlobe style={{ color: "#0096D6" }} />
                                    </NextUILink>
                                )}
                                {item["discord/tg"] && (
                                    <NextUILink
                                        color="primary"
                                        href={item["discord/tg"]}
                                        target="_blank"
                                        as={Link}
                                        className="text-blue-600 underline"
                                    >
                                        {isDiscord ? (
                                            <FaDiscord style={{ color: "#5865F2" }} />
                                        ) : (
                                            <FaTelegramPlane style={{ color: "#0088CC" }} />
                                        )}
                                    </NextUILink>
                                )}
                            </CardFooter>
                        </Card>
                    </div>
                );
            })}
        </div>
    );
};

export default ProjectList;
