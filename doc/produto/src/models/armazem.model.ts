import {Entity, model, property, hasMany} from '@loopback/repository';
import {Peca} from './peca.model';
import {Encomenda} from './encomenda.model';

@model({settings: {strict: false}})
export class Armazem extends Entity {
  @property({
    type: 'string',
    required: true,
  })
  moradaArm: string;

  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  armID?: number;

  @hasMany(() => Peca)
  armazena: Peca[];

  @hasMany(() => Encomenda)
  prepara: Encomenda[];
  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Armazem>) {
    super(data);
  }
}

export interface ArmazemRelations {
  // describe navigational properties here
}

export type ArmazemWithRelations = Armazem & ArmazemRelations;
