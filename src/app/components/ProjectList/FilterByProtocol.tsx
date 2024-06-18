import React, { Dispatch, SetStateAction } from "react";
import { Selection, Select, SelectItem } from "@nextui-org/react";

type FilterByProtocolProps = {
  protocolsArg: (string | undefined)[];
  protocolFilter: (string | undefined)[];
  setProtocolFilter: Dispatch<SetStateAction<(string | undefined)[]>>;
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
    if (Array.from(keys).includes("all")) {
      setProtocolFilter([]);
    } else {
      setProtocolFilter(Array.from(keys).map((key) => key.toString()));
    }
  };

  return (
    <div className={className}>
      <Select
        label="Filter by protocol"
        onSelectionChange={updateProtocolFilter}
        value={
          protocolFilter as string | number | readonly string[] | undefined
        }
        defaultSelectedKeys={["all"]}
        variant="bordered"
        color="secondary"
        size="sm"
        className="w-44 lg:w-80"
        classNames={{
          label: "text-sm",
          listbox: "bg-gray-600",
        }}
      >
        {protocols.map((protocol) => (
          <SelectItem key={protocol!}>{protocol}</SelectItem>
        ))}
      </Select>
    </div>
  );
};

export default FilterByProtocol;