import { Category, CategoryType } from '../../../domain/entities/Category';
import { ICategoryRepository } from '../../../domain/repositories/ICategoryRepository';

export class GetCategoriesByTypeUseCase {
    constructor(private readonly categoryRepository: ICategoryRepository) {}

    async execute(type: CategoryType): Promise<Category[]> {
        if (!type) {
            throw new Error('El tipo de categoría es requerido.');
        }
        return this.categoryRepository.findByType(type);
    }
}
