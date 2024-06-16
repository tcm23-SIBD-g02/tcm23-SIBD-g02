import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Peca } from '../models';
import { PecaRepository } from '../repositories';
export declare class PecaController {
    pecaRepository: PecaRepository;
    constructor(pecaRepository: PecaRepository);
    create(peca: Omit<Peca, 'id'>): Promise<Peca>;
    count(where?: Where<Peca>): Promise<Count>;
    find(filter?: Filter<Peca>): Promise<Peca[]>;
    updateAll(peca: Peca, where?: Where<Peca>): Promise<Count>;
    findById(id: number, filter?: FilterExcludingWhere<Peca>): Promise<Peca>;
    updateById(id: number, peca: Peca): Promise<void>;
    replaceById(id: number, peca: Peca): Promise<void>;
    deleteById(id: number): Promise<void>;
}
