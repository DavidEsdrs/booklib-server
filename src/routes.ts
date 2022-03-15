import multer from "multer";
import { Request, Router } from "express";
import buildCreateBook from "./useCases/books/create/buildCreateBook";
import { buildDeleteBook } from "./useCases/books/delete/buildDeleteBook";
import { buildGetBooks } from "./useCases/books/getMany/buildGetBooks";
import { buildGetBook } from "./useCases/books/getOne/buildGetBook";
import { buildReviewBook } from "./useCases/books/review/buildReviewBook";
import { uploadBook } from "./utils/UploadBookParser";
import { buildCreateUser } from "./useCases/users/create/buildCreateUser";

const router = Router();

router.post("/books", multer(uploadBook.getConfig).single("content"), (req, res) => buildCreateBook().handle(req, res));
router.get("/books", (req, res) => buildGetBooks().handle(req, res));
router.get("/books/search/:id", (req, res) => buildGetBook().handle(req, res));
router.delete("/books/:id", (req, res) => buildDeleteBook().handle(req, res));
router.put("/books/:id", (req, res) => buildReviewBook().handle(req, res));

router.post("/users", (req, res) => buildCreateUser().handle(req, res));

export { router };