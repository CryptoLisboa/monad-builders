import { Project } from "@/types/public_monad_sheet";
import { isDiscordLink } from "@/utils/links";
import { CardFooter, Link as NextUILink } from "@nextui-org/react";
import Link from "next/link";
import { FaDiscord, FaTelegramPlane } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiGlobe } from "react-icons/fi";

export default function ProjectListFooter({ item }: { item: Project }) {
    const isDiscord = isDiscordLink(item["discord/tg"] || "");
    return (
        <CardFooter className="mt-4 flex space-x-4">
            {item.x && (
                <NextUILink color="primary" href={item.x} target="_blank" as={Link} className="text-blue-600 underline">
                    <FaXTwitter style={{ color: "#000000" }} />
                </NextUILink>
            )}
            {item.website && (
                <NextUILink
                    color="primary"
                    href={item.website}
                    target="_blank"
                    as={Link}
                    className="text-blue-600 underline"
                >
                    <FiGlobe style={{ color: "#0096D6" }} />
                </NextUILink>
            )}
            {item["discord/tg"] && (
                <NextUILink
                    color="primary"
                    href={item["discord/tg"]}
                    target="_blank"
                    as={Link}
                    className="text-blue-600 underline"
                >
                    {isDiscord ? (
                        <FaDiscord style={{ color: "#5865F2" }} />
                    ) : (
                        <FaTelegramPlane style={{ color: "#0088CC" }} />
                    )}
                </NextUILink>
            )}
        </CardFooter>
    );
}
