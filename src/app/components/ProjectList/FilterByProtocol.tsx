import React, { Dispatch, SetStateAction } from "react";
import { Selection, Select, SelectItem } from "@nextui-org/react";

type FilterByProtocolProps = {
  protocolsArg: (string | undefined)[];
  protocolFilter: string[];
  setProtocolFilter: Dispatch<SetStateAction<string[]>>;
  className?: string;
};

const FilterByProtocol: React.FC<FilterByProtocolProps> = ({
  protocolsArg,
  protocolFilter,
  setProtocolFilter,
  className,
}) => {
  const protocols = ["all", ...protocolsArg];
  const updateProtocolFilter = (keys: Selection) => {
    if (Array.from(keys).includes("all") || Array.from(keys).length === 0) {
      setProtocolFilter(["all"]);
    } else {
      setProtocolFilter(Array.from(keys).map((key) => key.toString()));
    }
  };

  return (
    <div className={className}>
      <Select
        label="Protocol"
        onSelectionChange={updateProtocolFilter}
        selectedKeys={protocolFilter}
        defaultSelectedKeys={["all"]}
        variant="bordered"
        color="secondary"
        size="sm"
        className="w-44 lg:w-80"
        classNames={{
          label: "text-sm text-white",
          popoverContent: "bg-gray-600",
          value: "text-monad-green",
        }}
      >
        {protocols.map((protocol) => (
          <SelectItem
            classNames={{
              base: "text-monad-green",
            }}
            key={protocol!}
          >
            {protocol}
          </SelectItem>
        ))}
      </Select>
    </div>
  );
};

export default FilterByProtocol;
