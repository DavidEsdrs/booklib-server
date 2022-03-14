type File = any;

export interface ICreateBookDTO {
    title: string;
    author?: string;
    excerpt: string;
    content: File;
    published_at: Date;
}