import { EntityRepository, Repository } from "typeorm";
import { Review } from "../../../entities/Review";
import { IReviewsRepository } from "../IReviewsRepository";

@EntityRepository(Review)
export class ReviewsRepository extends Repository<Review> implements IReviewsRepository {}