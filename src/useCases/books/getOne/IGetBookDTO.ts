export interface IGetBookDTO {
    id?: string;
    title?: string;
    author?: string;
    published_before?: Date;
    published_after?: Date;
    created_at?: Date;
}