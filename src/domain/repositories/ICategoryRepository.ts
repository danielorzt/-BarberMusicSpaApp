import { Category, CategoryType } from '../entities/Category';

/**
 * Puerto que define las operaciones de consulta para la entidad Category.
 */
export interface ICategoryRepository {
    /**
     * Busca una categoría por su ID.
     * @param id El ID de la categoría.
     * @returns Una promesa que resuelve a la categoría encontrada o null si no existe.
     */
    findById(id: string): Promise<Category | null>;

    /**
     * Obtiene todas las categorías activas.
     * @returns Una promesa que resuelve a un arreglo de todas las categorías.
     */
    findAll(): Promise<Category[]>;

    /**
     * Obtiene todas las categorías de un tipo específico (PRODUCTO o SERVICIO).
     * @param type El tipo de categoría.
     * @returns Una promesa que resuelve a un arreglo de categorías.
     */
    findByType(type: CategoryType): Promise<Category[]>;
}