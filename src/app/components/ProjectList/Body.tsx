import { Project } from "@/types/public_monad_sheet";
import { CardBody } from "@nextui-org/react";
import { FaCheck, FaTimes } from "react-icons/fa";

export default function ProjectListBody({ item }: { item: Project }) {
  return (
    <CardBody className="grid">
      <p className="mb-2 text-lg lg:text-xl text-white">
        Protocol:{" "}
        <span className="font-semibold text-[#87FFDB] text-base lg:text-lg">
          {item.protocol}
        </span>
      </p>
      <p className="mb-2 text-lg lg:text-xl text-white">
        Category:{" "}
        <span className="font-semibold text-[#87FFDB] text-base lg:text-lg">
          {item.category}
        </span>
      </p>
      <p className="mb-2 text-lg lg:text-xl text-white">
        Native:{" "}
        <span className="font-semibold text-[#87FFDB] text-base lg:text-lg">
          {item.native ? "Yes" : "No"}
        </span>
      </p>
      <p className="mb-2 text-lg lg:text-xl text-white flex items-center gap-2">
        Announced by Monad:
        <span
          className={
            item["Announced by Monad"]
              ? "text-[#87FFDB] font-semibold text-base lg:text-lg"
              : "text-[#E14037] font-semibold text-base lg:text-lg"
          }
        >
          {item["Announced by Monad"] ? <FaCheck /> : <FaTimes />}
        </span>
      </p>
    </CardBody>
  );
}
