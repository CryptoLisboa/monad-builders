import { Project } from "@/types/public_monad_sheet";
import { CardBody, Chip } from "@nextui-org/react";
import { FaCheck, FaTimes } from "react-icons/fa";

export default function ProjectListBody({ item }: { item: Project }) {
  return (
    <CardBody className="grid gap-y-2">
      <p className="text-lg lg:text-xl text-white">
        <span className="flex flex-row items-center gap-x-2">
          <Chip
            className="font-semibold text-monad-green text-base lg:text-lg"
            variant="bordered"
            size="lg"
          >
            {item.category}
          </Chip>
          <Chip
            className="font-semibold text-monad-green text-base lg:text-lg"
            variant="bordered"
            size="lg"
          >
            {item.protocol}
          </Chip>
        </span>
      </p>
      <p className="flex flex-row justify-between text-lg lg:text-xl text-white">
        <span>
          Native:{" "}
          <span className="font-semibold text-monad-green text-base lg:text-lg">
            {item.native ? "Yes" : "No"}
          </span>
        </span>
        <span
          className={
            item["Announced by Monad"]
              ? "flex flex-row items-center gap-x-2 text-monad-green font-semibold text-base lg:text-lg"
              : "flex flex-row items-center gap-x-2 text-monad-red font-semibold text-base lg:text-lg"
          }
        >
          {item["Announced by Monad"] ? <FaCheck /> : <FaTimes />}
          Announced
        </span>
      </p>
      {/* <p className="text-lg lg:text-xl text-white flex items-center gap-2">
        
      </p> */}
    </CardBody>
  );
}
