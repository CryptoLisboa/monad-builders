"use client";
import React, { useState } from "react";
import { Project } from "@/types/public_monad_sheet";
import { Card, CardHeader } from "@nextui-org/react";
import ProjectListFooter from "./Footer";
import ProjectListBody from "./Body";
import { AnnouncedByMonad } from "@/types";
import FilterAnnouncedByMonad from "./FilterAnnouncedByMonad";
import FilterByCategory from "./FilterByCategory";
import FilterByProtocol from "./FilterByProtocol";

const ProjectList = ({
  data,
  className,
  categories: categoriesArg,
  protocols: protocolsArg,
}: {
  data: Project[];
  className?: string;
  categories: Project["category"][];
  protocols: Project["protocol"][];
}) => {
  let filteredData = data;

  const [announcedByMonadFilter, setAnnouncedByMonadFilter] =
    useState<AnnouncedByMonad>("all"); // 'all', 'yes', 'no'
  const updateMonadFilter = (value: string) => {
    setAnnouncedByMonadFilter(value as AnnouncedByMonad);
  };
  if (announcedByMonadFilter !== "all") {
    filteredData = filteredData.filter((item) => {
      const isAnnounced = item["Announced by Monad"] ? "yes" : "no";
      return isAnnounced === announcedByMonadFilter;
    });
  }

  const [categoryFilter, setCategoryFilter] = useState<Project["category"][]>([
    "all",
  ]);
  const shouldFilterByCategory =
    categoryFilter.length > 0 && !categoryFilter.includes("all");
  if (shouldFilterByCategory) {
    filteredData = filteredData.filter((item) =>
      categoryFilter.includes(item.category)
    );
  }

  const [protocolFilter, setProtocolFilter] = useState<Project["protocol"][]>([
    "all",
  ]);
  const shouldFilterByProtocol =
    protocolFilter.length > 0 && !protocolFilter.includes("all");
  if (shouldFilterByProtocol) {
    filteredData = filteredData.filter((item) =>
      protocolFilter.includes(item.protocol)
    );
  }

  return (
    <div className={className}>
      <FilterAnnouncedByMonad
        className="mb-4"
        onFilterChange={updateMonadFilter}
        defaultValue={"all" as AnnouncedByMonad}
      />
      <FilterByCategory
        className="mb-4"
        categoriesArg={categoriesArg}
        categoryFilter={categoryFilter}
        setCategoryFilter={setCategoryFilter}
      />
      <FilterByProtocol
        className="mb-4"
        protocolsArg={protocolsArg}
        protocolFilter={protocolFilter}
        setProtocolFilter={setProtocolFilter}
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
