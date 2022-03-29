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
                req.file_type = type;
                cb(null, `${new Date().getTime()}-${req.body.title}.${type}`);
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