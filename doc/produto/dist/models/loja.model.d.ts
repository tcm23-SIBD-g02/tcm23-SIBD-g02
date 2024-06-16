import { Entity } from '@loopback/repository';
import { Peca } from './peca.model';
export declare class Loja extends Entity {
    idLoja?: number;
    moradaLoja: string;
    vende: Peca[];
    encomendaId: number;
    [prop: string]: any;
    constructor(data?: Partial<Loja>);
}
export interface LojaRelations {
}
export type LojaWithRelations = Loja & LojaRelations;
