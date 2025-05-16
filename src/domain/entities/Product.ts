// src/domain/entities/Product.ts

/**
 * Representa un producto ofrecido en la tienda de BarberMusic&Spa.
 * Corresponde a la tabla 'productos' de la base de datos.
 */
export interface Product {
    id: string; // id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT
    name: string; // nombre VARCHAR(255) NOT NULL
    description?: string; // descripcion TEXT NULL
    imageUrl?: string; // imagen_path VARCHAR(255) NULL
    price: number; // precio DECIMAL(10, 2) NOT NULL
    stock: number; // stock INT UNSIGNED NOT NULL DEFAULT 0
    sku?: string; // sku VARCHAR(100) NULL
    categoryId?: string; // categoria_id BIGINT UNSIGNED NULL
    categoryName?: string; // Para mostrar, el backend podría unirlo o se obtiene de Category.
    // isActive: boolean; // activo BOOLEAN NOT NULL DEFAULT TRUE
    // createdAt?: Date;
    // updatedAt?: Date;
}