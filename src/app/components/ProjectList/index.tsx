"use client";
import React, { useState } from "react";
import { Project } from "@/types/public_monad_sheet";
import { Card, CardHeader, Radio, RadioGroup } from "@nextui-org/react";
import ProjectListFooter from "./Footer";
import ProjectListBody from "./Body";
import { AnnouncedByMonad } from "@/types";
import FilterAnnouncedByMonad from "./FilterAnnouncedByMonad";

const ProjectList = ({
  data,
  className,
}: {
  data: Project[];
  className?: string;
}) => {
  const [filter, setFilter] = useState<AnnouncedByMonad>("all"); // 'all', 'yes', 'no'

  const handleFilterChange = (value: string) => {
    setFilter(value as AnnouncedByMonad);
  };

  const filteredData = data.filter((item) => {
    if (filter === "all") return true;
    const isAnnounced = item["Announced by Monad"] ? "yes" : "no";
    return isAnnounced === filter;
  });

  return (
    <div className={className}>
      <FilterAnnouncedByMonad
        className="mb-4"
        onFilterChange={handleFilterChange}
        defaultValue={"all" as AnnouncedByMonad}
      />
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {filteredData.map((item: Project, index: number) => (
          <div key={index} className="p-6 rounded-lg shadow-lg">
            <Card className="grid bg-purple-700">
              <CardHeader className="mb-4">
                <h3 className="text-xl text-gray-300 font-bold">{item.name}</h3>
              </CardHeader>
              <ProjectListBody item={item} />
              <ProjectListFooter item={item} />
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectList;
