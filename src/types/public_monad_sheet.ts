export interface Project {
    category?: string;
    name: string;
    native: boolean;
    x: string;
    website?: string;
    ["discord/tg"]?: string;
    ["Announced by Monad"]: boolean;
}

export interface DataResponse {
    data: Project[];
    status: number;
}
