import React, { Dispatch, SetStateAction } from "react";
import { Selection, Select, SelectItem } from "@nextui-org/react";

type FilterByCategoryProps = {
  categoriesArg: (string | undefined)[];
  categoryFilter: (string | undefined)[];
  setCategoryFilter: Dispatch<SetStateAction<(string | undefined)[]>>;
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
    if (Array.from(keys).includes("all")) {
      setCategoryFilter([]);
    } else {
      setCategoryFilter(Array.from(keys).map((key) => key.toString()));
    }
  };
  return (
    <div className={className}>
      <Select
        label="Category"
        onSelectionChange={updateCategoryFilter}
        value={
          categoryFilter as string | number | readonly string[] | undefined
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
        {categories.map((category) => (
          <SelectItem key={category!}>{category}</SelectItem>
        ))}
      </Select>
    </div>
  );
};

export default FilterByCategory;
