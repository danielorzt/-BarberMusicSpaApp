// src/domain/repositories/IUserRepository.ts
import { User, UserStatus } from '../entities/User';

/**
 * Puerto que define las operaciones de persistencia y consulta para la entidad User.
 * Estas operaciones serán implementadas por un adaptador en la capa de infraestructura
 * que interactuará con la API de Spring Boot.
 */
export interface IUserRepository {
    /**
     * Busca un usuario por su ID.
     * @param id El ID del usuario.
     * @returns Una promesa que resuelve al usuario encontrado o null si no existe.
     */
    findById(id: string): Promise<User | null>;

    /**
     * Busca un usuario por su dirección de correo electrónico.
     * @param email El correo electrónico del usuario.
     * @returns Una promesa que resuelve al usuario encontrado o null si no existe.
     */
    findByEmail(email: string): Promise<User | null>;

    /**
     * Guarda (crea o actualiza) un usuario.
     * En el contexto de una API, esto usualmente significa enviar un POST (crear) o PUT (actualizar).
     * @param user El objeto User a guardar.
     * @returns Una promesa que resuelve al usuario guardado (usualmente la respuesta de la API).
     */
    save(user: Omit<User, 'id' | 'status'> | User): Promise<User>; // Para creación, el ID y status pueden ser asignados por el backend

    /**
     * Actualiza el perfil de un usuario existente.
     * @param userId El ID del usuario a actualizar.
     * @param userData Los datos parciales del usuario a actualizar.
     * @returns Una promesa que resuelve al usuario actualizado.
     */
    updateProfile(userId: string, userData: Partial<Omit<User, 'id' | 'email' | 'roles' | 'status'>>): Promise<User>;


    // No se incluye un método delete() explícito aquí, ya que la eliminación de usuarios
    // suele ser una operación administrativa delicada. Si es necesario para el cliente, se puede añadir.
    // Por lo general, la "eliminación" es un cambio de estado (UserStatus.INACTIVE) manejado por el backend.

    // Podríamos añadir métodos para cambiar contraseña, verificar email, etc.,
    // pero estos podrían ser casos de uso específicos que llamen a endpoints dedicados
    // en lugar de métodos genéricos del repositorio.
}