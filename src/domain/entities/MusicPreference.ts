// src/domain/entities/MusicPreference.ts

/**
 * Representa una opción de preferencia musical para la navegación.
 * Corresponde a la tabla 'musica_preferencias_navegacion'.
 */
export interface MusicPreference {
    id: string; // id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT
    optionName: string; // nombre_opcion VARCHAR(100) NOT NULL
    description?: string; // descripcion TEXT NULL
    exampleStreamUrl?: string; // stream_url_ejemplo VARCHAR(512) NULL
    // isActive: boolean; // activo BOOLEAN NOT NULL DEFAULT TRUE
    // createdAt?: Date;
    // updatedAt?: Date;
}