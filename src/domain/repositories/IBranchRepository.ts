
import { Branch } from '../entities/Branch';

/**
 * Puerto que define las operaciones de consulta para la entidad Branch.
 * Las sucursales suelen ser datos maestros gestionados por administradores.
 */
export interface IBranchRepository {
    /**
     * Busca una sucursal por su ID.
     * @param id El ID de la sucursal.
     * @returns Una promesa que resuelve a la sucursal encontrada o null si no existe.
     */
    findById(id: string): Promise<Branch | null>;

    /**
     * Obtiene todas las sucursales activas.
     * (El filtrado por 'activo' debería hacerlo el backend).
     * @returns Una promesa que resuelve a un arreglo de todas las sucursales.
     */
    findAll(): Promise<Branch[]>;

    /**
     * Obtiene las sucursales que ofrecen un servicio específico.
     * @param serviceId El ID del servicio.
     * @returns Una promesa que resuelve a un arreglo de sucursales.
     */
    findBranchesByServiceId(serviceId: string): Promise<Branch[]>;

    // Podrías añadir métodos para buscar sucursales por ciudad, etc., si es un requerimiento.
    // findByCity(city: string): Promise<Branch[]>;
}