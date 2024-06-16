import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Armazem extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  ArmId?: number;

  @property({
    type: 'string',
    required: true,
  })
  rua: string;

  @property({
    type: 'number',
    required: true,
  })
  numeroPorta: number;

  @property({
    type: 'string',
    required: true,
  })
  codPostal: string;

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
