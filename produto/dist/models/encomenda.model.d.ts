import { Entity } from '@loopback/repository';
export declare class Encomenda extends Entity {
    numEnc?: number;
    moradaEnc: string;
    valor: number;
    [prop: string]: any;
    constructor(data?: Partial<Encomenda>);
}
export interface EncomendaRelations {
}
export type EncomendaWithRelations = Encomenda & EncomendaRelations;
