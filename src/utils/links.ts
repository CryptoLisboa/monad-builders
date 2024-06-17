/**
 * Checks if a URL is a Discord link.
 * @param url The URL to check.
 * @returns true if the URL starts with "https://discord", otherwise false.
 */
export function isDiscordLink(url: string): boolean {
    return url.startsWith("https://discord");
}
