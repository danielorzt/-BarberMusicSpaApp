import { Product } from '../../../domain/entities/Product';
import { IProductRepository } from '../../../domain/repositories/IProductRepository';

export class SearchProductsUseCase {
    constructor(private readonly productRepository: IProductRepository) {}

    async execute(searchTerm: string): Promise<Product[]> {
        if (!searchTerm || searchTerm.trim() === '') {
            // Podríamos devolver todos los productos o un array vacío si el término es inválido.
            // Por ahora, lanzamos un error o devolvemos vacío.
            // throw new Error('El término de búsqueda es requerido.');
            return [];
        }
        return this.productRepository.search(searchTerm);
    }
}