// src/domain/entities/Category.ts

/**
 * Tipo de categoría, basado en 'tipo_categoria' de la tabla 'categorias'.
 */
export enum CategoryType {
    PRODUCT = 'PRODUCTO',
    SERVICE = 'SERVICIO',
}

/**
 * Representa una categoría para servicios o productos.
 * Corresponde a la tabla 'categorias' de la base de datos.
 */
export interface Category {
    id: string; // id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT
    name: string; // nombre VARCHAR(100) NOT NULL
    description?: string; // descripcion TEXT NULL
    type: CategoryType; // tipo_categoria VARCHAR(50) NOT NULL
    iconKey?: string; // icono_clave VARCHAR(50) NULL
    // isActive: boolean; // activo BOOLEAN NOT NULL DEFAULT TRUE
    // createdAt?: Date;
    // updatedAt?: Date;
}