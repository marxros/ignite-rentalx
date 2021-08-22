import { inject, injectable } from 'tsyringe';
import { View } from 'typeorm/schema-builder/view/View';

import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";

interface IRequest {
  name: string,
  description: string;
}

@injectable()
class CreateCategoryUseCase {
  constructor(
    @inject("CategoriesRepository")
    private categoriesRepository: ICategoriesRepository
  ) { }

  async execute({ description, name }: IRequest): Promise<void> {

    const categoryAlreadyExists = await this.categoriesRepository.findByName(name);
    console.log(categoryAlreadyExists);
    if (categoryAlreadyExists) {
      throw new Error('Category already exists!');
    }

    this.categoriesRepository.create({ name, description });
  }
}


export { CreateCategoryUseCase };
