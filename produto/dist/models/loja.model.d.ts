import { Entity } from '@loopback/repository';
export declare class Loja extends Entity {
    idLoja?: number;
    moradaLoja: string;
    [prop: string]: any;
    constructor(data?: Partial<Loja>);
}
export interface LojaRelations {
}
export type LojaWithRelations = Loja & LojaRelations;
