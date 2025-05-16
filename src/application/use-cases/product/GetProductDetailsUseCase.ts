import { Product } from '../../../domain/entities/Product';
import { IProductRepository } from '../../../domain/repositories/IProductRepository';

export class GetProductDetailsUseCase {
    constructor(private readonly productRepository: IProductRepository) {}

    async execute(productId: string): Promise<Product | null> {
        if (!productId) {
            throw new Error('El ID del producto es requerido.');
        }
        return this.productRepository.findById(productId);
    }
}
