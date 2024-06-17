import { Entity } from '@loopback/repository';
export declare class Peca extends Entity {
    nInterno?: number;
    zona: string;
    nSerie: number;
    valorCompra: number;
    valorVenda: number;
    [prop: string]: any;
    constructor(data?: Partial<Peca>);
}
export interface PecaRelations {
}
export type PecaWithRelations = Peca & PecaRelations;
