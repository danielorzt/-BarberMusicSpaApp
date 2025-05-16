import { Branch } from '../../../domain/entities/Branch';
import { IBranchRepository } from '../../../domain/repositories/IBranchRepository';

export class GetAllBranchesUseCase {
    constructor(private readonly branchRepository: IBranchRepository) {}

    async execute(): Promise<Branch[]> {
        return this.branchRepository.findAll();
    }
}