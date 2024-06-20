import React, { Dispatch, SetStateAction } from "react";
import { Selection, Select, SelectItem } from "@nextui-org/react";

type FilterByCategoryProps = {
  categoriesArg: (string | undefined)[];
  categoryFilter: string[];
  setCategoryFilter: Dispatch<SetStateAction<string[]>>;
  className?: string;
};

const FilterByCategory: React.FC<FilterByCategoryProps> = ({
  categoriesArg,
  categoryFilter,
  setCategoryFilter,
  className,
}) => {
  const categories = ["all", ...categoriesArg];
  const updateCategoryFilter = (keys: Selection) => {
    if (Array.from(keys).includes("all") || Array.from(keys).length === 0) {
      setCategoryFilter(["all"]);
    } else {
      setCategoryFilter(Array.from(keys).map((key) => key.toString()));
    }
  };
  return (
    <div className={className}>
      <Select
        label="Category"
        onSelectionChange={updateCategoryFilter}
        selectedKeys={categoryFilter}
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
        {categories.map((category) => (
          <SelectItem
            classNames={{
              base: "text-monad-green",
            }}
            key={category!}
          >
            {category}
          </SelectItem>
        ))}
      </Select>
    </div>
  );
};

export default FilterByCategory;
