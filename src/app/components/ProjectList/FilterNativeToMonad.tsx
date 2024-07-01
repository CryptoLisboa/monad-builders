import React from "react";
import { Radio, RadioGroup } from "@nextui-org/react";
import { NativeToMonad } from "@/types";

type FilterNativeToMonadProps = {
  className?: string;
  onFilterChange: (value: string) => void;
  defaultValue: NativeToMonad;
};

const FilterNativeToMonad: React.FC<FilterNativeToMonadProps> = ({
  className,
  onFilterChange,
  defaultValue,
}) => {
  return (
    <div className={className}>
      <RadioGroup
        label="Native to Monad"
        onValueChange={onFilterChange}
        defaultValue={defaultValue}
        orientation="horizontal"
        classNames={{
          label: "text-base text-white",
        }}
        size="sm"
      >
        <Radio
          value={"all" as NativeToMonad}
          classNames={{
            label: "text-white text-sm",
          }}
        >
          All
        </Radio>
        <Radio
          value={"yes" as NativeToMonad}
          classNames={{ label: "text-white text-sm" }}
        >
          Yes
        </Radio>
        <Radio
          value={"no" as NativeToMonad}
          classNames={{ label: "text-white text-sm" }}
        >
          No
        </Radio>
      </RadioGroup>
    </div>
  );
};

export default FilterNativeToMonad;
