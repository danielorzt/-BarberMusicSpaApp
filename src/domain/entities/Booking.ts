// src/domain/entities/Booking.ts

/**
 * Define los estados posibles de una reserva/agendamiento.
 * Mapeado desde 'estado' en la tabla 'agendamientos'.
 */
export enum BookingStatus {
    SCHEDULED = 'PROGRAMADA',
    CONFIRMED = 'CONFIRMADA',
    CANCELLED_BY_CLIENT = 'CANCELADA_CLIENTE',
    CANCELLED_BY_STAFF = 'CANCELADA_PERSONAL', // O CANCELADA_EMPRESA
    COMPLETED = 'COMPLETADA',
    NO_SHOW = 'NO_ASISTIO',
    // Otros estados que puedan surgir
}
/**
 * Representa una reserva o agendamiento en el sistema.
 * Corresponde a la tabla 'agendamientos' de la base de datos.
 */
export interface Booking {
    id: string; // id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT
    userId: string; // cliente_usuario_id BIGINT UNSIGNED NOT NULL
    staffId?: string; // personal_id BIGINT UNSIGNED NULL
    staffName?: string; // No en BD, pero útil si el backend lo añade para visualización.
    serviceId: string; // servicio_id BIGINT UNSIGNED NOT NULL
    serviceName?: string; // No en BD, pero útil si el backend lo añade.
    branchId: string; // sucursal_id BIGINT UNSIGNED NOT NULL
    branchName?: string; // No en BD, pero útil si el backend lo añade.
    startDateTime: Date; // fecha_hora_inicio DATETIME NOT NULL
    endDateTime: Date; // fecha_hora_fin DATETIME NOT NULL
    finalPrice: number; // precio_final DECIMAL(10, 2) NOT NULL
    status: BookingStatus; // estado VARCHAR(50) NOT NULL DEFAULT 'PROGRAMADA'
    clientNotes?: string; // notas_cliente TEXT NULL
    // internalNotes?: string; // notas_internas TEXT NULL (generalmente no para el cliente)
    // createdAt?: Date;
    // updatedAt?: Date;
}