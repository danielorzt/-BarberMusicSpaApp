import { Booking, BookingStatus } from '../../../domain/entities/Booking';
import { IBookingRepository } from '../../../domain/repositories/IBookingRepository';

export class GetUserBookingsUseCase {
    constructor(private readonly bookingRepository: IBookingRepository) {}

    async execute(userId: string, status?: BookingStatus): Promise<Booking[]> {
        if (!userId) {
            throw new Error('El ID del usuario es requerido.');
        }
        return this.bookingRepository.findByUserId(userId, status);
    }
}