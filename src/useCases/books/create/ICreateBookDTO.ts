export interface ICreateBookDTO {
    title: string;
    author?: string;
    content: string;
    published_at: Date;
}