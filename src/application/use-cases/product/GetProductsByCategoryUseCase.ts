import { Product } from '../../../domain/entities/Product';
import { IProductRepository } from '../../../domain/repositories/IProductRepository';

export class GetProductsByCategoryUseCase {
    constructor(private readonly productRepository: IProductRepository) {}

    async execute(categoryId: string): Promise<Product[]> {
        if (!categoryId) {
            throw new Error('El ID de la categoría es requerido.');
        }
        return this.productRepository.findByCategoryId(categoryId);
    }
}