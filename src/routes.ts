import { Request, Router } from "express";
import buildCreateBook from "./useCases/books/create/buildCreateBook";
import { buildGetBooks } from "./useCases/books/getMany/buildGetBooks";
import { buildGetBook } from "./useCases/books/getOne/buildGetBook";
import { GetBookQuery } from "./useCases/books/getOne/GetBookController";

const router = Router();

router.post("/books", (req, res) => buildCreateBook().handle(req, res));
router.get("/books", (req, res) => buildGetBooks().handle(req, res));
router.get("/books/search/:id", (req, res) => buildGetBook().handle(req, res));

export { router };