import { Service } from '../../../domain/entities/Service';
import { IServiceRepository } from '../../../domain/repositories/IServiceRepository';

export class GetAllServicesUseCase {
    constructor(private readonly serviceRepository: IServiceRepository) {}

    async execute(): Promise<Service[]> {
        return this.serviceRepository.findAll();
    }
}