import { Service } from '../entities/Service';
import { Category } from '../entities/Category'; // Para el tipo de categoría

/**
 * Puerto que define las operaciones de consulta para la entidad Service.
 */
export interface IServiceRepository {
    /**
     * Busca un servicio por su ID.
     * @param id El ID del servicio.
     * @returns Una promesa que resuelve al servicio encontrado o null si no existe.
     */
    findById(id: string): Promise<Service | null>;

    /**
     * Obtiene todos los servicios activos.
     * @returns Una promesa que resuelve a un arreglo de todos los servicios.
     */
    findAll(): Promise<Service[]>;

    /**
     * Obtiene todos los servicios activos de una categoría específica.
     * @param categoryId El ID de la categoría.
     * @returns Una promesa que resuelve a un arreglo de servicios.
     */
    findByCategoryId(categoryId: string): Promise<Service[]>;

    /**
     * Obtiene todos los servicios ofrecidos por una sucursal específica.
     * Esto implicaría una consulta al backend que cruce `servicios` con `servicio_sucursal`.
     * @param branchId El ID de la sucursal.
     * @returns Una promesa que resuelve a un arreglo de servicios.
     */
    findAllByBranchId(branchId: string): Promise<Service[]>;

    /**
     * Busca servicios basados en un término de búsqueda (nombre, descripción).
     * @param searchTerm El término a buscar.
     * @returns Una promesa que resuelve a un arreglo de servicios.
     */
    search(searchTerm: string): Promise<Service[]>;
}