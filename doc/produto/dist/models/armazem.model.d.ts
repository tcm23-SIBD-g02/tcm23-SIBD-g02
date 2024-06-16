import { Entity } from '@loopback/repository';
import { Peca } from './peca.model';
import { Encomenda } from './encomenda.model';
export declare class Armazem extends Entity {
    moradaArm: string;
    armID?: number;
    armazena: Peca[];
    prepara: Encomenda[];
    [prop: string]: any;
    constructor(data?: Partial<Armazem>);
}
export interface ArmazemRelations {
}
export type ArmazemWithRelations = Armazem & ArmazemRelations;
