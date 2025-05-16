import { User, UserRole } from '../../../domain/entities/User';
import { IUserRepository } from '../../../domain/repositories/IUserRepository';

export type RegisterUserDTO = Omit<User, 'id' | 'roles' | 'status' | 'preferredBranchId' | 'musicNavigationPreferenceId' | 'profileImageUrl'> & {
    password_TODO_REMOVE: string; // Similar al login, el password se envía a la API, no se maneja aquí.
};

export interface RegisterUserOutput {
    user: User;
    token: string; // El backend podría devolver un token directamente al registrar.
}

export class RegisterUserUseCase {
    constructor(private readonly userRepository: IUserRepository) {}

    async execute(userData: RegisterUserDTO): Promise<RegisterUserOutput> {
        // La lógica real de registro (validación, hasheo de contraseña, creación de usuario en BD)
        // la realiza el backend a través de una llamada API.
        // Este caso de uso llamaría a un `authRepository.register(userData)`

        console.warn(
            'RegisterUserUseCase: La lógica de registro está simplificada y NO ES SEGURA PARA PRODUCCIÓN.'
        );

        const existingUser = await this.userRepository.findByEmail(userData.email);
        if (existingUser) {
            throw new Error('El correo electrónico ya está registrado.');
        }

        // El backend asignaría el ID, roles por defecto, status, etc.
        // El password se enviaría de forma segura al backend para ser hasheado.
        const newUserPartial: Omit<User, 'id' | 'status'> = {
            ...userData,
            roles: [UserRole.CLIENT], // Rol por defecto
            // El backend se encarga de 'id', 'status', hashear password, etc.
        };

        // Simulación de llamada al repo que interactúa con la API de registro
        const registeredUser = await this.userRepository.save(newUserPartial as User); // Cast as User es una simplificación aquí

        return {
            user: registeredUser,
            token: 'dummy-jwt-token-after-registration' // El backend podría devolver esto
        };
    }
}