import { Entity } from '@loopback/repository';
export declare class Armazem extends Entity {
    amrID?: number;
    rua: string;
    numeroPorta: number;
    codPostal: string;
    [prop: string]: any;
    constructor(data?: Partial<Armazem>);
}
export interface ArmazemRelations {
}
export type ArmazemWithRelations = Armazem & ArmazemRelations;
