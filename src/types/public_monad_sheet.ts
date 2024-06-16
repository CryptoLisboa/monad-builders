export interface Project {
    category?: string;
    name: string;
    native: boolean;
    x: string;
    website?: string;
    discordTg?: string;
    ["Announced by Monad"]: boolean;
}

export interface DataResponse {
    data: Project[];
    status: number;
}
