import multer from "multer";
import { Router } from "express";
import buildCreateBook from "./useCases/books/create/buildCreateBook";
import { buildDeleteBook } from "./useCases/books/delete/buildDeleteBook";
import { buildGetBooks } from "./useCases/books/getMany/buildGetBooks";
import { buildGetBook } from "./useCases/books/getOne/buildGetBook";
import { uploadBook } from "./utils/UploadBookParser";
import { buildCreateUser } from "./useCases/users/create/buildCreateUser";
import { validateBook } from "./middlewares";
import { validateUser } from "./middlewares/validateUser";
import { buildLogin } from "./useCases/users/login/buildLogin";
import { ensureAuthenticatedUser } from "./middlewares/ensureAuthenticatedUser";
import { buildCreateReview } from "./useCases/reviews/Create/buildCreateReview";
import { buildReadUser } from "./useCases/users/read/buildReadUser";

const router = Router();

router.post("/books", ensureAuthenticatedUser, uploadBook, validateBook, (req, res) => buildCreateBook().handle(req, res));
router.get("/books", (req, res) => buildGetBooks().handle(req, res));
router.get("/books/search/:id", (req, res) => buildGetBook().handle(req, res));
router.delete("/books/:id",  (req, res) => buildDeleteBook().handle(req, res));

// Users
router.post("/users", validateUser, (req, res) => buildCreateUser().handle(req, res));
router.post("/login", (req, res) => buildLogin().handle(req, res));
router.get("/users", ensureAuthenticatedUser, (req, res) => buildReadUser().handle(req, res));

router.post("/review/:book", ensureAuthenticatedUser, (req, res) => buildCreateReview().handle(req, res));

export { router };