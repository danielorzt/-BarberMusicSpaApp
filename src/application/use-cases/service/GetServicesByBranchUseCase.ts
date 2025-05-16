import { Service } from '../../../domain/entities/Service';
import { IServiceRepository } from '../../../domain/repositories/IServiceRepository';

export class GetServicesByBranchUseCase {
    constructor(private readonly serviceRepository: IServiceRepository) {}

    async execute(branchId: string): Promise<Service[]> {
        if (!branchId) {
            throw new Error('El ID de la sucursal es requerido.');
        }
        return this.serviceRepository.findAllByBranchId(branchId);
    }
}