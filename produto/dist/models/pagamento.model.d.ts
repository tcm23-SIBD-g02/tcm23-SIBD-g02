import { Entity } from '@loopback/repository';
export declare class Pagamento extends Entity {
    nCliente?: number;
    tipoPagamento: string;
    detalhePagamento?: string;
    constructor(data?: Partial<Pagamento>);
}
export interface PagamentoRelations {
}
export type PagamentoWithRelations = Pagamento & PagamentoRelations;
