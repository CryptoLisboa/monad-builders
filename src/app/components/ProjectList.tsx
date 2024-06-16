"use client";
import React, { useState } from "react";
import { Project } from "@/types/public_monad_sheet";
import { isDiscordLink } from "@/utils/links";
import {
    Button,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    Link as NextUILink,
    Radio,
    RadioGroup,
} from "@nextui-org/react";
import Link from "next/link";
import { FaTelegramPlane, FaDiscord } from "react-icons/fa";
import { FiGlobe } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";

const ProjectList = ({ data, className }: { data: Project[]; className?: string }) => {
    const [filter, setFilter] = useState("all"); // 'all', 'yes', 'no'

    const handleFilterChange = (value: string) => {
        setFilter(value.toLowerCase());
    };

    const filteredData = data.filter((item) => {
        if (filter === "all") return true;
        const isAnnounced = item["Announced by Monad"] ? "yes" : "no";
        return isAnnounced === filter;
    });

    return (
        <div className={className}>
            <div className="mb-4">
                <RadioGroup
                    label="Filter announced by Monad"
                    onValueChange={handleFilterChange}
                    defaultValue="all"
                    orientation="horizontal"
                    classNames={{
                        label: "text-lg font-semibold text-gray-100",
                    }}
                >
                    <Radio value="all" classNames={{ label: "text-gray-200" }}>
                        All
                    </Radio>
                    <Radio value="yes" classNames={{ label: "text-gray-200" }}>
                        Yes
                    </Radio>
                    <Radio value="no" classNames={{ label: "text-gray-200" }}>
                        No
                    </Radio>
                </RadioGroup>
            </div>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                {filteredData.map((item: Project, index: number) => {
                    const isDiscord = isDiscordLink(item["discord/tg"] || "");
                    return (
                        <div key={index} className="p-6 rounded-lg shadow-lg">
                            <Card className="grid bg-purple-700">
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
        </div>
    );
};

export default ProjectList;
