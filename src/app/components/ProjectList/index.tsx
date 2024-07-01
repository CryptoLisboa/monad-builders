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
import { AnnouncedByMonad, NativeToMonad } from "@/types";
import FilterAnnouncedByMonad from "./FilterAnnouncedByMonad";
import FilterByCategory from "./FilterByCategory";
import FilterByProtocol from "./FilterByProtocol";
import { isMobile } from "react-device-detect";
import Image from "next/image";
import FilterNativeToMonad from "./FilterNativeToMonad";

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
  let filteredProjects = data;

  const [announcedByMonadFilter, setAnnouncedByMonadFilter] =
    useState<AnnouncedByMonad>("all"); // 'all', 'yes', 'no'
  const updateAnnouncedByMonadFilter = (value: string) => {
    setAnnouncedByMonadFilter(value as AnnouncedByMonad);
  };
  if (announcedByMonadFilter !== "all") {
    filteredProjects = filteredProjects.filter((item) => {
      const isAnnounced = item["Announced by Monad"] ? "yes" : "no";
      return isAnnounced === announcedByMonadFilter;
    });
  }

  const [nativeToMonadFilter, setNativeToMonadFilter] =
    useState<NativeToMonad>("all"); // 'all', 'yes', 'no'
  const updateNativeToMonadFilter = (value: string) => {
    setNativeToMonadFilter(value as NativeToMonad);
  };
  if (nativeToMonadFilter !== "all") {
    filteredProjects = filteredProjects.filter((item) => {
      const hasIsNativeFilterActive =
        nativeToMonadFilter === "yes" || nativeToMonadFilter === "no";
      if (!hasIsNativeFilterActive) {
        return true;
      }
      if (nativeToMonadFilter === "yes") {
        return item?.native === true;
      }
      if (nativeToMonadFilter === "no") {
        return item?.native === false;
      }
      return false;
    });
  }

  const [categoryFilter, setCategoryFilter] = useState<string[]>(["all"]);
  const shouldFilterByCategory =
    categoryFilter.length > 0 && categoryFilter[0] !== "all";
  if (shouldFilterByCategory) {
    filteredProjects = filteredProjects.filter(
      (item) => item.category === categoryFilter[0]
    );
  }

  const [protocolFilter, setProtocolFilter] = useState<string[]>(["all"]);
  const shouldFilterByProtocol =
    protocolFilter.length > 0 && protocolFilter[0] !== "all";
  if (shouldFilterByProtocol) {
    filteredProjects = filteredProjects.filter(
      (item) => item.protocol === protocolFilter[0]
    );
  }

  const [searchString, setSearchString] = useState("");
  if (searchString) {
    filteredProjects = filteredProjects.filter((item) =>
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
              onFilterChange={updateAnnouncedByMonadFilter}
              defaultValue={"all" as AnnouncedByMonad}
            />
            <FilterNativeToMonad
              className=""
              onFilterChange={updateNativeToMonadFilter}
              defaultValue={"all" as NativeToMonad}
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
        {filteredProjects.map((projectInfo: Project, index: number) => (
          <div key={index} className="rounded-lg shadow-lg">
            <Card className="grid bg-white bg-opacity-50 px-3 lg:px-5">
              <CardHeader className="mb-4 pt-5 lg:pt-8 flex flex-row gap-4">
                <Image
                  src={projectInfo.pfp!}
                  alt="Project PFP"
                  className="rounded-full w-12 h-12 lg:w-20 lg:h-20"
                  width={80}
                  height={80}
                  unoptimized
                />
                <h3 className="text-xl text-white font-bold">
                  {projectInfo.name}
                </h3>
              </CardHeader>
              <ProjectListBody
                item={projectInfo}
                setCategoryFilter={setCategoryFilter}
                setProtocolFilter={setProtocolFilter}
              />
              <ProjectListFooter item={projectInfo} />
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectList;
