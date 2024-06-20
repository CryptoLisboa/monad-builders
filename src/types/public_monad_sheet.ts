export interface Project {
    category: string;
    protocol: string;
    name: string;
    native: boolean;
    pfp?: string;
    x: string;
    website?: string;
    ["discord/tg"]?: string;
    ["Announced by Monad"]: boolean;
}

export interface DataResponse {
    data: Project[];
    status: number;
}
