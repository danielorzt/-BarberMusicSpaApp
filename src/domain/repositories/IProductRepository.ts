import { Product } from '../entities/Product';

/**
 * Puerto que define las operaciones de consulta para la entidad Product.
 */
export interface IProductRepository {
    /**
     * Busca un producto por su ID.
     * @param id El ID del producto.
     * @returns Una promesa que resuelve al producto encontrado o null si no existe.
     */
    findById(id: string): Promise<Product | null>;

    /**
     * Obtiene todos los productos activos.
     * @returns Una promesa que resuelve a un arreglo de todos los productos.
     */
    findAll(): Promise<Product[]>;

    /**
     * Obtiene todos los productos activos de una categoría específica.
     * @param categoryId El ID de la categoría.
     * @returns Una promesa que resuelve a un arreglo de productos.
     */
    findByCategoryId(categoryId: string): Promise<Product[]>;

    /**
     * Busca productos basados en un término de búsqueda (nombre, descripción, SKU).
     * @param searchTerm El término a buscar.
     * @returns Una promesa que resuelve a un arreglo de productos.
     */
    search(searchTerm: string): Promise<Product[]>;
}