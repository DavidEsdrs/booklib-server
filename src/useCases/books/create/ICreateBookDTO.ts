export interface ICreateBookDTO {
    title: string;
    author?: string;
    excerpt: string;
    content: string;
    published_at: Date;
    published_by: string;
}