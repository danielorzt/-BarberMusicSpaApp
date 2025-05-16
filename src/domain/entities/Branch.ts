// src/domain/entities/Branch.ts

/**
 * Objeto de Valor para la Dirección de una Sucursal.
 * Mapea las columnas 'direccion_*' de la tabla 'sucursales'.
 */
export interface Address {
    street: string; // direccion_calle
    exteriorNumber: string; // direccion_numero_exterior
    interiorNumber?: string; // direccion_numero_interior
    colony: string; // direccion_colonia
    postalCode: string; // direccion_codigo_postal
    municipality: string; // direccion_municipio_alcaldia
    city?: string; // direccion_ciudad
    state: string; // direccion_estado
    // country: string; // No explícito en la tabla, se asume México.
}

/**
 * Objeto de Valor para las Coordenadas Geográficas.
 * Mapea 'latitud' y 'longitud' de la tabla 'sucursales'.
 */
export interface Coordinates {
    latitude: number; // latitud DECIMAL(10, 7) NULL
    longitude: number; // longitud DECIMAL(10, 7) NULL
}

/**
 * Define una regla de horario regular para un día de la semana.
 * Mapea información de la tabla 'horarios_sucursal'.
 */
export interface OpeningHoursRule {
    // dia_semana TINYINT UNSIGNED NOT NULL COMMENT '0=Domingo, 1=Lunes,..., 6=Sábado'
    dayOfWeek: 0 | 1 | 2 | 3 | 4 | 5 | 6;
    opensAt?: string; // hora_apertura TIME NULL (formato "HH:mm")
    closesAt?: string; // hora_cierre TIME NULL (formato "HH:mm")
    isRegularlyClosed: boolean; // esta_cerrado_regularmente BOOLEAN NOT NULL DEFAULT FALSE
}

/**
 * Define una excepción al horario regular para una fecha específica.
 * Mapea información de la tabla 'excepciones_horario_sucursal'.
 */
export interface ScheduleException {
    date: string; // fecha DATE NOT NULL (formato "YYYY-MM-DD")
    isClosed: boolean; // esta_cerrado BOOLEAN NOT NULL DEFAULT TRUE
    opensAt?: string; // hora_apertura TIME NULL (formato "HH:mm")
    closesAt?: string; // hora_cierre TIME NULL (formato "HH:mm")
    description?: string; // descripcion VARCHAR(255) NULL
}

/**
 * Representa una sucursal de BarberMusic&Spa.
 * Corresponde a la tabla 'sucursales' de la base de datos.
 */
export interface Branch {
    id: string; // id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT
    name: string; // nombre VARCHAR(255) NOT NULL
    imageUrl?: string; // imagen_path VARCHAR(255) NULL
    address: Address;
    contactPhoneNumber?: string; // telefono_contacto VARCHAR(25) NULL
    contactEmail?: string; // email_contacto VARCHAR(255) NULL
    mapsLink?: string; // link_maps VARCHAR(512) NULL
    coordinates?: Coordinates;
    regularHours?: OpeningHoursRule[]; // Derivado de 'horarios_sucursal'
    scheduleExceptions?: ScheduleException[]; // Derivado de 'excepciones_horario_sucursal'
    // isActive: boolean; // activo BOOLEAN NOT NULL DEFAULT TRUE (el backend debería filtrar inactivas usualmente)
    // createdAt?: Date;
    // updatedAt?: Date;
}
