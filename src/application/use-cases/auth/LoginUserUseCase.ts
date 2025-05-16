import { User } from '../../../domain/entities/User';
import { IUserRepository } from '../../../domain/repositories/IUserRepository';
// Asumiremos que el login exitoso también devuelve un token que la infraestructura manejará.
// Por ahora, el caso de uso se enfoca en obtener el usuario.

/**
 * DTO (Data Transfer Object) para los datos de entrada del login.
 */
export interface LoginUserDTO {
    email: string;
    password_TODO_REMOVE_FROM_HERE: string; // ¡Importante! El password NUNCA debería viajar así en una app real
                                            // ni ser manejado por este caso de uso directamente.
                                            // Esto es una simplificación extrema. En una app real,
                                            // el cliente envía credenciales a un endpoint de API seguro,
                                            // y la API maneja la validación. El caso de uso del cliente
                                            // llamaría a un método tipo `authRepository.login(credentials)`
                                            // que devuelve User y Token si es exitoso.
}

/**
 * DTO para la salida del login, podría incluir el token.
 */
export interface LoginUserOutput {
    user: User;
    token: string; // El token de autenticación.
}

export class LoginUserUseCase {
    // El caso de uso depende de la abstracción del repositorio de usuarios.
    constructor(private readonly userRepository: IUserRepository /* , private authService: IAuthService */) {}

    /**
     * Ejecuta el caso de uso de login.
     * @param loginData Los datos de email y contraseña.
     * @returns Una promesa que resuelve a la información del usuario y el token.
     */
    async execute(loginData: LoginUserDTO): Promise<LoginUserOutput> {
        // ¡¡¡ADVERTENCIA DE SEGURIDAD IMPORTANTE!!!
        // En una aplicación REAL, la contraseña NUNCA se manejaría así.
        // El cliente enviaría las credenciales (email, password) a un endpoint de API seguro (HTTPS).
        // El backend (Spring Boot) validaría las credenciales contra la base de datos (hasheada).
        // Si es exitoso, el backend generaría un token (JWT) y lo devolvería junto con los datos del usuario.

        // Este caso de uso en el cliente debería llamar a un método del `authRepository` o un `authService`
        // que encapsule la llamada a la API de login. Ejemplo:
        // const { user, token } = await this.authService.login(loginData.email, loginData.password);
        // return { user, token };

        // Simplificación para este ejemplo (asumiendo que el repo puede "loguear"):
        // Esto es conceptual y NO cómo se implementaría realmente con una API.
        console.warn(
            'LoginUserUseCase: La lógica de login está simplificada y NO ES SEGURA PARA PRODUCCIÓN.'
        );
        const user = await this.userRepository.findByEmail(loginData.email);

        if (!user) {
            throw new Error('Usuario no encontrado o credenciales incorrectas.'); // Error genérico
        }

        // Aquí iría la lógica de comparación de contraseña (que debe hacer el backend)
        // Si la contraseña es correcta (comparada por el backend):
        return {
            user,
            token: 'dummy-jwt-token-generated-by-backend', // El backend generaría este token
        };
    }
}