// src/domain/entities/Service.ts

/**
 * Representa un servicio ofrecido por BarberMusic&Spa.
 * Corresponde a la tabla 'servicios' de la base de datos.
 */
export interface Service {
    id: string; // id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT
    name: string; // nombre VARCHAR(255) NOT NULL
    description?: string; // descripcion TEXT NULL
    imageUrl?: string; // imagen_path VARCHAR(255) NULL
    basePrice: number; // precio_base DECIMAL(10, 2) NOT NULL
    currency?: string; // No existe en la tabla, se asume MXN o se define globalmente.
    durationMinutes: number; // duracion_minutos INT UNSIGNED NOT NULL
    categoryId?: string; // categoria_id BIGINT UNSIGNED NULL
    categoryName?: string; // Para mostrar, el backend podría unirlo o se obtiene de Category.
    requiredSpecialtyId?: string; // especialidad_requerida_id BIGINT UNSIGNED NULL
    // isActive: boolean; // activo BOOLEAN NOT NULL DEFAULT TRUE
    // createdAt?: Date;
    // updatedAt?: Date;
}