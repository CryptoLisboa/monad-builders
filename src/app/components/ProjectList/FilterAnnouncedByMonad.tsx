import React from "react";
import { Radio, RadioGroup } from "@nextui-org/react";
import { AnnouncedByMonad } from "@/types";

type FilterAnnouncedByMonadProps = {
  className?: string;
  onFilterChange: (value: string) => void;
  defaultValue: AnnouncedByMonad;
};

const FilterAnnouncedByMonad: React.FC<FilterAnnouncedByMonadProps> = ({
  className,
  onFilterChange,
  defaultValue,
}) => {
  return (
    <div className={className}>
      <RadioGroup
        label="Announced by Monad"
        onValueChange={onFilterChange}
        defaultValue={defaultValue}
        orientation="horizontal"
        classNames={{
          label: "text-base text-gray-100",
        }}
      >
        <Radio
          value={"all" as AnnouncedByMonad}
          classNames={{ label: "text-gray-200 text-sm" }}
        >
          All
        </Radio>
        <Radio
          value={"yes" as AnnouncedByMonad}
          classNames={{ label: "text-gray-200 text-sm" }}
        >
          Yes
        </Radio>
        <Radio
          value={"no" as AnnouncedByMonad}
          classNames={{ label: "text-gray-200 text-sm" }}
        >
          No
        </Radio>
      </RadioGroup>
    </div>
  );
};

export default FilterAnnouncedByMonad;
