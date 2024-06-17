import { Entity } from '@loopback/repository';
export declare class Cliente extends Entity {
    nCliente?: number;
    nome: string;
    morada: string;
    contacto: number;
    nif: number;
    [prop: string]: any;
    constructor(data?: Partial<Cliente>);
}
export interface ClienteRelations {
}
export type ClienteWithRelations = Cliente & ClienteRelations;
