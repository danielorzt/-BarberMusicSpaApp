import { User } from '../../../domain/entities/User';
import { IUserRepository } from '../../../domain/repositories/IUserRepository';
// Para este caso de uso, necesitaríamos una forma de saber el ID del usuario actual,
// usualmente desde un token almacenado o un servicio de sesión.

export class GetCurrentUserUseCase {
    constructor(private readonly userRepository: IUserRepository /*, private sessionService: ISessionService */) {}

    async execute(userId: string): Promise<User | null> {
        // En una app real, el `userId` podría obtenerse de un token decodificado
        // o de un servicio que gestione la sesión del usuario.
        if (!userId) {
            // Opcional: si no hay ID, no hay usuario, o podrías lanzar un error si se espera un usuario logueado.
            // throw new Error('No hay un usuario autenticado.');
            return null;
        }
        return this.userRepository.findById(userId);
    }
}