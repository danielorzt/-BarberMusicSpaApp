// src/domain/repositories/IBookingRepository.ts
import { Booking, BookingStatus } from '../entities/Booking';

/**
 * Define los datos necesarios para crear una nueva reserva.
 * Excluye campos que se generan en el servidor o son parte del estado.
 */
export type CreateBookingData = Omit<Booking, 'id' | 'status' | 'finalPrice' | 'startDateTime' | 'endDateTime' | 'staffName' | 'serviceName' | 'branchName'> & {
    // En lugar de startDateTime y endDateTime, podríamos pasar la hora de inicio deseada
    // y la duración del servicio (o el servicioId) para que el backend calcule endDateTime.
    // O la app cliente calcula ambos y los envía.
    // Por simplicidad, asumamos que la app cliente envía la fecha y hora de inicio exacta.
    desiredStartDateTime: Date;
    // finalPrice podría ser calculado por el backend basado en el servicio y promociones.
};


/**
 * Puerto que define las operaciones para la entidad Booking (Agendamientos).
 */
export interface IBookingRepository {
    /**
     * Busca una reserva por su ID.
     * @param id El ID de la reserva.
     * @returns Una promesa que resuelve a la reserva encontrada o null si no existe.
     */
    findById(id: string): Promise<Booking | null>;

    /**
     * Obtiene todas las reservas de un usuario específico.
     * @param userId El ID del usuario.
     * @param status (Opcional) Filtra por estado de la reserva.
     * @returns Una promesa que resuelve a un arreglo de reservas.
     */
    findByUserId(userId: string, status?: BookingStatus): Promise<Booking[]>;

    /**
     * Obtiene las reservas para una sucursal en un rango de fechas.
     * Útil para que el personal vea la agenda o para que el cliente verifique disponibilidad general.
     * @param branchId El ID de la sucursal.
     * @param startDate Fecha de inicio del rango.
     * @param endDate Fecha de fin del rango.
     * @returns Una promesa que resuelve a un arreglo de reservas.
     */
    findBookingsByBranchAndDateRange(branchId: string, startDate: Date, endDate: Date): Promise<Booking[]>;

    /**
     * Crea una nueva reserva.
     * @param bookingData Los datos para la nueva reserva.
     * @returns Una promesa que resuelve a la reserva creada.
     */
    create(bookingData: CreateBookingData): Promise<Booking>;

    /**
     * Cancela una reserva existente.
     * Esto usualmente significa cambiar su estado a CANCELLED_BY_CLIENT.
     * @param bookingId El ID de la reserva a cancelar.
     * @param reason (Opcional) Motivo de la cancelación.
     * @returns Una promesa que resuelve a la reserva actualizada (con el nuevo estado).
     */
    cancel(bookingId: string, reason?: string): Promise<Booking>;

    // Podríamos añadir un método para obtener la disponibilidad de slots:
    // getAvailableSlots(branchId: string, serviceId: string, date: Date): Promise<Date[]>;
    // Esto requeriría lógica más compleja en el backend.
}