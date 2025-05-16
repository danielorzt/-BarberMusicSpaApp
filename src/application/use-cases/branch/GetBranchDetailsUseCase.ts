import { Branch } from '../../../domain/entities/Branch';
import { IBranchRepository } from '../../../domain/repositories/IBranchRepository';

export class GetBranchDetailsUseCase {
    constructor(private readonly branchRepository: IBranchRepository) {}

    async execute(branchId: string): Promise<Branch | null> {
        if (!branchId) {
            throw new Error('El ID de la sucursal es requerido.');
        }
        return this.branchRepository.findById(branchId);
    }
}