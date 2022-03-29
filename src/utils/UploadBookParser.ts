import multer from "multer";
import path from "path";
import fs from "fs";
import mime from "mime";
import { Request } from "express";
import { InvalidFileTypeError } from "../errors/ServerError";

const bookUpload = {
    URL: path.basename("uploads"),

    storage(): multer.StorageEngine {
        return multer.diskStorage({
            destination: (req, file, cb) => {
                if (!fs.existsSync(bookUpload.URL)) {
                    fs.mkdirSync(bookUpload.URL);
                }
                cb(null, bookUpload.URL);
            },

            filename: (req, file, cb) => {
                const type = mime.extension(file.mimetype);
                const name = `${new Date().getTime()}-${req.body.title.replaceAll(" ", "-")}.${type}`
                req.file_props = {
                    ...req.file_props,
                    file_name: name
                }
                cb(null, name);
            }
        });
    },

    memStorage(): multer.StorageEngine {
        return multer.memoryStorage()
    },

    fileFilter() {
        return (req: Request, file: Express.Multer.File, callback: multer.FileFilterCallback) => {
            const type = mime.extension(file.mimetype);
            const conditions = ["pdf", "docx"];
            req.file_props = {
                ...req.file_props,
                file_type: type
            }
    
            if (!conditions.includes(type)) {
                return callback(new InvalidFileTypeError({ message: "Unsuported file type!" }));
            }
    
            callback(null, true);
        };
    },

    getConfig(): multer.Options {
        return {
            storage: bookUpload.storage(),
            fileFilter: bookUpload.fileFilter(),
        };
    }
}

export const uploadBook = multer(bookUpload.getConfig()).single("content");