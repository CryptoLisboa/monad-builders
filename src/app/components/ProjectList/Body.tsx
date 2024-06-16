import { Project } from "@/types/public_monad_sheet";
import { CardBody } from "@nextui-org/react";

export default function ProjectListBody({ item }: { item: Project }) {
    return (
        <CardBody className="grid">
            <p className="mb-2 text-slate-900">
                Category: <span className="font-semibold text-gray-300">{item.category}</span>
            </p>
            <p className="mb-2 text-slate-900">
                Native: <span className="font-semibold text-gray-300">{item.native ? "Yes" : "No"}</span>
            </p>
            <p className="mb-2 text-slate-900">
                Announced by Monad:
                <span
                    className={
                        item["Announced by Monad"] ? "text-green-600 font-semibold" : "text-red-600 font-semibold"
                    }
                >
                    {item["Announced by Monad"] ? " Yes" : " No"}
                </span>
            </p>
        </CardBody>
    );
}
