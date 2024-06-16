import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Armazem } from '../models';
import { ArmazemRepository } from '../repositories';
export declare class ArmazemController {
    armazemRepository: ArmazemRepository;
    constructor(armazemRepository: ArmazemRepository);
    create(armazem: Omit<Armazem, 'id'>): Promise<Armazem>;
    count(where?: Where<Armazem>): Promise<Count>;
    find(filter?: Filter<Armazem>): Promise<Armazem[]>;
    updateAll(armazem: Armazem, where?: Where<Armazem>): Promise<Count>;
    findById(id: number, filter?: FilterExcludingWhere<Armazem>): Promise<Armazem>;
    updateById(id: number, armazem: Armazem): Promise<void>;
    replaceById(id: number, armazem: Armazem): Promise<void>;
    deleteById(id: number): Promise<void>;
}
