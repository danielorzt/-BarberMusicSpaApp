// src/domain/repositories/IMusicPreferenceRepository.ts
import { MusicPreference } from '../entities/MusicPreference';

/**
 * Puerto que define las operaciones de consulta para la entidad MusicPreference.
 */
export interface IMusicPreferenceRepository {
    /**
     * Busca una preferencia musical por su ID.
     * @param id El ID de la preferencia musical.
     * @returns Una promesa que resuelve a la preferencia encontrada o null si no existe.
     */
    findById(id: string): Promise<MusicPreference | null>;

    /**
     * Obtiene todas las preferencias musicales activas.
     * @returns Una promesa que resuelve a un arreglo de todas las preferencias musicales.
     */
    findAll(): Promise<MusicPreference[]>;
}