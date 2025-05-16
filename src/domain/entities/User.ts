// src/domain/entities/User.ts

/**
 * Define los roles que un usuario puede tener en el sistema,
 * mapeado desde la columna 'rol' de la tabla 'usuarios'.
 */
export enum UserRole {
    CLIENT = 'CLIENTE',
    STAFF = 'EMPLEADO', // Asumimos que 'EMPLEADO' en BD es el rol general para personal
    // Podrías añadir otros roles si 'usuarios.rol' los contempla directamente
    // ADMIN_GENERAL, ADMIN_SUCURSAL (estos roles parecen estar más en `personal.tipo_personal`)
}

/**
 * Define los posibles estados de un usuario,
 * mapeado desde la columna 'estado' de la tabla 'usuarios'.
 */
export enum UserStatus {
    ACTIVE = 'ACTIVO',
    INACTIVE = 'INACTIVO',
    PENDING_VERIFICATION = 'PENDIENTE_VERIFICACION',
}

/**
 * Representa un usuario en el sistema.
 * Corresponde a la tabla 'usuarios' de la base de datos.
 */
export interface User {
    id: string; // Corresponde a 'id' (BIGINT UNSIGNED NOT NULL AUTO_INCREMENT)
    firstName: string; // Mapeado desde 'nombre'
    lastName: string; // Mapeado desde 'nombre' (requiere procesamiento en backend o frontend)
    email: string; // Corresponde a 'email' (VARCHAR(255) NOT NULL)
    profileImageUrl?: string; // Corresponde a 'imagen_path' (VARCHAR(255) NULL)
    phoneNumber?: string; // Corresponde a 'telefono' (VARCHAR(25) NULL)
    roles: UserRole[]; // Mapeado desde 'rol' (VARCHAR(50) NOT NULL) - Se usa un array por si un usuario pudiera tener múltiples roles en el futuro, aunque la BD muestra uno solo. Simplificar a `role: UserRole` si siempre es uno.
    status?: UserStatus; // Corresponde a 'estado' (VARCHAR(50) NOT NULL DEFAULT 'ACTIVO')
    preferredBranchId?: string; // Corresponde a 'sucursal_preferida_id' (BIGINT UNSIGNED NULL)
    musicNavigationPreferenceId?: string; // Corresponde a 'musica_preferencia_navegacion_id' (BIGINT UNSIGNED NULL)
    // La columna 'direccion' (VARCHAR(255) NULL) podría añadirse si es relevante para el perfil del cliente en la app
    // emailVerifiedAt?: Date; // Corresponde a 'email_verified_at' (TIMESTAMP NULL)
    // createdAt?: Date; // Corresponde a 'created_at' (TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP)
    // updatedAt?: Date; // Corresponde a 'updated_at' (TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP)
}