import { Booking } from '../../../domain/entities/Booking';
import { IBookingRepository, CreateBookingData } from '../../../domain/repositories/IBookingRepository';
// Podríamos necesitar otros repositorios, ej: IServiceRepository para validar el servicio, IUserRepository para el usuario.

export class CreateBookingUseCase {
    constructor(
        private readonly bookingRepository: IBookingRepository
        // private readonly serviceRepository: IServiceRepository, // Para validar servicio, obtener duración, etc.
        // private readonly userRepository: IUserRepository, // Para validar usuario
    ) {}

    async execute(bookingData: CreateBookingData): Promise<Booking> {
        // Aquí podrían ir validaciones adicionales de la aplicación antes de llamar al repositorio:
        // - ¿Existe el usuario? (this.userRepository.findById(bookingData.userId))
        // - ¿Existe el servicio? (this.serviceRepository.findById(bookingData.serviceId))
        // - ¿Está disponible el slot? (esto podría ser una llamada separada o parte de la lógica del backend al crear)

        // Por ahora, se asume que los IDs son válidos y la disponibilidad la maneja el backend al intentar crear.
        if (!bookingData.userId || !bookingData.serviceId || !bookingData.branchId || !bookingData.desiredStartDateTime) {
            throw new Error('Faltan datos requeridos para crear la reserva.');
        }

        return this.bookingRepository.create(bookingData);
    }
}