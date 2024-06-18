"use client";
import React, { useEffect, useRef, useState } from "react";
import { Project } from "@/types/public_monad_sheet";
import {
  Accordion,
  AccordionItem,
  Card,
  CardHeader,
  Input,
  Selection,
} from "@nextui-org/react";
import ProjectListFooter from "./Footer";
import ProjectListBody from "./Body";
import { AnnouncedByMonad } from "@/types";
import FilterAnnouncedByMonad from "./FilterAnnouncedByMonad";
import FilterByCategory from "./FilterByCategory";
import FilterByProtocol from "./FilterByProtocol";
import { isMobile } from "react-device-detect";

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

  const [searchString, setSearchString] = useState("");
  if (searchString) {
    filteredData = filteredData.filter((item) =>
      item.name.toLowerCase().includes(searchString.toLowerCase())
    );
  }

  const [selectedKeys, setSelectedKeys] = React.useState<Selection>(
    new Set(["1"])
  );
  const handleSelectionChange = (keys: Selection) => {
    setSelectedKeys(keys);
  };
  useEffect(() => {
    if (isMobile) {
      setSelectedKeys(new Set([]));
    }
  }, []);

  const [contentWidth, setContentWidth] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const offsetWidth = contentRef?.current?.offsetWidth;
    const shouldSetWidth = offsetWidth && offsetWidth > contentWidth;
    if (shouldSetWidth) {
      setContentWidth(offsetWidth);
    }
  }, [contentRef, contentWidth]);

  // let's suspend the rendering until we validate that isMobile !== isDesktop
  return (
    <div className={className}>
      <Accordion
        selectedKeys={selectedKeys}
        onSelectionChange={handleSelectionChange}
      >
        <AccordionItem
          key="1"
          aria-label="Accordion 1"
          title="Search Filters"
          className="inline-block"
          classNames={{ title: "text-white text-left lg:text-center" }}
          style={{ minWidth: `${contentWidth}px` }}
        >
          <div
            ref={contentRef}
            className="flex flex-col lg:flex-row gap-4 lg:gap-6"
          >
            <Input
              type="text"
              label="Search project"
              size="sm"
              variant="bordered"
              className="w-44 lg:w-64"
              classNames={{
                label: "text-white",
                base: "text-monad-green",
              }}
              onValueChange={setSearchString}
              value={searchString}
            />
            <FilterAnnouncedByMonad
              className=""
              onFilterChange={updateMonadFilter}
              defaultValue={"all" as AnnouncedByMonad}
            />
            <FilterByCategory
              className=""
              categoriesArg={categoriesArg}
              categoryFilter={categoryFilter}
              setCategoryFilter={setCategoryFilter}
            />
            <FilterByProtocol
              className=""
              protocolsArg={protocolsArg}
              protocolFilter={protocolFilter}
              setProtocolFilter={setProtocolFilter}
            />
          </div>
        </AccordionItem>
      </Accordion>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {filteredData.map((item: Project, index: number) => (
          <div key={index} className="rounded-lg shadow-lg">
            <Card className="grid bg-white bg-opacity-30">
              <CardHeader className="mb-4">
                <h3 className="text-xl text-white font-bold">{item.name}</h3>
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
