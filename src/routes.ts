import { Router } from "express";
import buildCreateBook from "./useCases/books/create/buildCreateBook";
import { buildGetBooks } from "./useCases/books/getMany/buildGetBooks";

const router = Router();

router.post("/books", (req, res) => buildCreateBook().handle(req, res));
router.get("/books", (req, res) => buildGetBooks().handle(req, res));

export { router };