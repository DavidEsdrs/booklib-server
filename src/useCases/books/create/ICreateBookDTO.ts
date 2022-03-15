export interface ICreateBookDTO {
    title: string;
    author?: string;
    excerpt: string;
    content: Buffer;
    published_at: Date;
}