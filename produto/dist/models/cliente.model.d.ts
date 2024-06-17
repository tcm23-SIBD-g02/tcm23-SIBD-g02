import { Entity } from '@loopback/repository';
export declare class Cliente extends Entity {
    morada: string;
    nCliente?: number;
    contacto: number;
    nif: number;
    [prop: string]: any;
    constructor(data?: Partial<Cliente>);
}
export interface ClienteRelations {
}
export type ClienteWithRelations = Cliente & ClienteRelations;
