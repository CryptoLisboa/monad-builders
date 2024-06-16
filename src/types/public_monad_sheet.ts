export interface Project {
    category?: string;
    name: string;
    native: boolean;
    x: string;
    website?: string;
    discordTg?: string;
    announcedByMonad: boolean;
}

export interface DataResponse {
    data: Project[];
    status: number;
}
