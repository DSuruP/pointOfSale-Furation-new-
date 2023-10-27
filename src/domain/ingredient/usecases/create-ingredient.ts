import { IngredientEntity, IngredientModel } from "@domain/ingredient/entities/ingredient";
import { IngredientRepository } from "@domain/ingredient/repositories/ingredient-repository";
import { Either } from "monet";
import ErrorClass from "@presentation/error-handling/api-error";
export interface CreateIngredientUsecase {
  execute: (IngredientData: IngredientModel) => Promise<Either<ErrorClass, IngredientEntity>>;
}

export class CreateIngredient implements CreateIngredientUsecase {
  private readonly ingredientRepository: IngredientRepository;

  constructor(ingredientRepository: IngredientRepository) {
    this.ingredientRepository = ingredientRepository;
  }

  async execute(ingredientData: IngredientModel): Promise<Either<ErrorClass, IngredientEntity>> {
    return await this.ingredientRepository.createIngredient(ingredientData);
  }
}
