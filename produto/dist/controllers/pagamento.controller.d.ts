import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Pagamento } from '../models';
import { PagamentoRepository } from '../repositories';
export declare class PagamentoController {
    pagamentoRepository: PagamentoRepository;
    constructor(pagamentoRepository: PagamentoRepository);
    create(pagamento: Omit<Pagamento, 'nCliente'>): Promise<Pagamento>;
    count(where?: Where<Pagamento>): Promise<Count>;
    find(filter?: Filter<Pagamento>): Promise<Pagamento[]>;
    updateAll(pagamento: Pagamento, where?: Where<Pagamento>): Promise<Count>;
    findById(id: number, filter?: FilterExcludingWhere<Pagamento>): Promise<Pagamento>;
    updateById(id: number, pagamento: Pagamento): Promise<void>;
    replaceById(id: number, pagamento: Pagamento): Promise<void>;
    deleteById(id: number): Promise<void>;
}
