declare namespace Express {
    export interface Request {
        user_id: string;
        file_type?: string;
    }
}